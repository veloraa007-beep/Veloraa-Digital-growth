"use client";

import { motion } from "framer-motion";


export default function FloatingWhatsApp() {
    return (
        <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex flex-col gap-3 md:gap-4 pointer-events-none">
            {/* Wrapper allows clicks but prevents blocking */}
            <div className="pointer-events-auto flex flex-col gap-3 md:gap-4">
                {/* Instagram Button */}
                <motion.a
                    href="https://www.instagram.com/veloraa.digital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, type: "spring" }}
                    className="bg-gradient-to-br from-[#E4405F] via-[#C13584] to-[#833AB4] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center cursor-pointer group relative w-12 h-12 md:w-auto md:h-auto"
                    style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }} // Simple shadow for performance
                >
                    {/* Removed ping animation for performance */}
                    {/* Instagram Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 md:w-7 md:h-7 relative z-10"
                    >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    {/* Tooltip */}
                    <div className="absolute right-full mr-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                        Follow us
                    </div>
                </motion.a>

                {/* WhatsApp Button */}
                <motion.a
                    href="https://api.whatsapp.com/send/?phone=919901981097&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center cursor-pointer group relative w-12 h-12 md:w-auto md:h-auto"
                    style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }} // Simple shadow for performance
                >
                    {/* Removed ping animation for performance */}
                    {/* WhatsApp Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 md:w-8 md:h-8 relative z-10"
                    >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    {/* Tooltip */}
                    <div className="absolute right-full mr-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                        Chat with us
                    </div>
                </motion.a>
            </div>
        </div>
    );
}
