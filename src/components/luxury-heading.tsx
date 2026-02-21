export default function LuxuryHeading({
    children,
    as: Tag = "h2",
    className = "",
}: {
    children: React.ReactNode;
    as?: "h1" | "h2" | "h3";
    className?: string;
}) {
    return (
        <Tag
            className={`
                font-serif
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                leading-[1.15]
                tracking-tight
                text-white
                ${className}
            `}
        >
            {children}
        </Tag>
    );
}
