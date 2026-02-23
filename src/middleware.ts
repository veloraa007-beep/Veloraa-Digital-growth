import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─── Rate Limiting (in-memory, per-IP) ───
const rateMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 100; // requests per window
const RATE_WINDOW = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateMap.get(ip);

    if (!entry || now > entry.resetTime) {
        rateMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
        return false;
    }

    entry.count++;
    if (entry.count > RATE_LIMIT) {
        return true;
    }
    return false;
}

// Clean up stale entries every 5 minutes
if (typeof globalThis !== "undefined") {
    setInterval(() => {
        const now = Date.now();
        for (const [key, value] of rateMap.entries()) {
            if (now > value.resetTime) {
                rateMap.delete(key);
            }
        }
    }, 300_000);
}

// ─── Blocked Patterns ───
const BLOCKED_PATHS = [
    /\/\.env/i,
    /\/\.git/i,
    /\/wp-admin/i,
    /\/wp-login/i,
    /\/wp-content/i,
    /\/xmlrpc\.php/i,
    /\/phpmyadmin/i,
    /\/admin\.php/i,
    /\/config\.php/i,
    /\/\.htaccess/i,
    /\/\.htpasswd/i,
    /\/cgi-bin/i,
    /\/\.aws/i,
    /\/\.ssh/i,
    /\/backup/i,
    /\/\.DS_Store/i,
    /\/Thumbs\.db/i,
    /\/debug/i,
    /\/eval/i,
    /\/shell/i,
    /\/cmd/i,
];

const BLOCKED_UA_PATTERNS = [
    /sqlmap/i,
    /nikto/i,
    /nessus/i,
    /dirbuster/i,
    /gobuster/i,
    /wpscan/i,
    /masscan/i,
    /nmap/i,
    /zgrab/i,
    /python-requests\/2/i,
    /Go-http-client/i,
    /curl\//i,
    /wget\//i,
    /scanner/i,
    /exploit/i,
    /attack/i,
];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        request.headers.get("x-real-ip") ||
        "unknown";
    const userAgent = request.headers.get("user-agent") || "";

    // ─── 1. Block malicious path probes ───
    if (BLOCKED_PATHS.some((pattern) => pattern.test(pathname))) {
        return new NextResponse(null, { status: 404 });
    }

    // ─── 2. Block scanner/attack user agents ───
    if (BLOCKED_UA_PATTERNS.some((pattern) => pattern.test(userAgent))) {
        return new NextResponse(null, { status: 403 });
    }

    // ─── 3. Block requests with no user agent (usually bots) ───
    if (!userAgent || userAgent.length < 5) {
        return new NextResponse(null, { status: 403 });
    }

    // ─── 4. Rate limiting ───
    if (isRateLimited(ip)) {
        return new NextResponse("Too Many Requests", {
            status: 429,
            headers: {
                "Retry-After": "60",
                "Content-Type": "text/plain",
            },
        });
    }

    // ─── 5. Block SQL injection attempts in URL ───
    const decodedPath = decodeURIComponent(pathname);
    const sqlPatterns = /('|--|;|\/\*|\*\/|union\s+select|drop\s+table|insert\s+into|delete\s+from|update\s+set|exec\s*\()/i;
    if (sqlPatterns.test(decodedPath)) {
        return new NextResponse(null, { status: 400 });
    }

    // ─── 6. Block XSS attempts in URL ───
    const xssPatterns = /(<script|javascript:|on\w+\s*=|<iframe|<object|<embed|<form)/i;
    if (xssPatterns.test(decodedPath)) {
        return new NextResponse(null, { status: 400 });
    }

    // ─── 7. Proceed with added security headers ───
    const response = NextResponse.next();

    // Cache control for sensitive routes
    if (pathname.startsWith("/api/")) {
        response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
        response.headers.set("Pragma", "no-cache");
    }

    // Add security timing header
    response.headers.set("X-Response-Time", Date.now().toString());

    // Remove server identity headers
    response.headers.delete("Server");
    response.headers.delete("X-Powered-By");

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization)
         * - favicon.ico (favicon)
         * - public assets
         */
        "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)$).*)",
    ],
};
