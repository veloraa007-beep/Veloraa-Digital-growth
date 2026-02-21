"use client";

export default function SectionWrapper({
    children,
    className = "",
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <section
            id={id}
            className={`
                w-full
                px-6
                md:px-12
                lg:px-24
                py-16
                md:py-24
                ${className}
            `}
        >
            <div className="max-w-6xl mx-auto">
                {children}
            </div>
        </section>
    );
}
