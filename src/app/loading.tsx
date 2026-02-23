export default function Loading() {
    return (
        <div className="fixed inset-0 bg-[#0F1113] flex items-center justify-center z-[9999]">
            <div className="flex font-serif text-5xl md:text-6xl tracking-[0.5rem]">
                {["V", "E", "L", "O", "R", "A"].map((letter, i) => (
                    <span
                        key={i}
                        className="inline-block animate-velora-reveal"
                        style={{
                            animationDelay: `${0.1 + i * 0.1}s`,
                            backgroundImage: "linear-gradient(90deg, #C6A85E, #E5C97A, #C6A85E)",
                            backgroundSize: "200% auto",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        {letter}
                    </span>
                ))}
            </div>

            <style>{`
                @keyframes veloraReveal {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-velora-reveal {
                    opacity: 0;
                    transform: translateY(40px);
                    animation: veloraReveal 0.8s forwards;
                }
            `}</style>
        </div>
    );
}
