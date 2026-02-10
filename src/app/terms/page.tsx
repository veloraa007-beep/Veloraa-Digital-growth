import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/50 hover:text-gold transition-colors mb-12 text-sm uppercase tracking-widest"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-8">Terms & Conditions</h1>
                <p className="text-white/60 mb-12 text-sm uppercase tracking-wider">
                    Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>

                <div className="space-y-12 text-white/80 font-light leading-relaxed">
                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">1. Agreement to Terms</h2>
                        <p>
                            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&ldquo;you&rdquo;) and Velora (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), concerning your access to and use of the Velora website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the &ldquo;Site&rdquo;).
                        </p>
                        <p className="mt-4">
                            You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">2. Intellectual Property Rights</h2>
                        <p>
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &ldquo;Content&rdquo;) and the trademarks, service marks, and logos contained therein (the &ldquo;Marks&rdquo;) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of India, foreign jurisdictions, and international conventions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">3. User Representations</h2>
                        <p className="mb-4">
                            By using the Site, you represent and warrant that:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gold">
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                            <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
                            <li>You are not a minor in the jurisdiction in which you reside.</li>
                            <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">4. Prohibited Activities</h2>
                        <p>
                            You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">5. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and defined following the laws of India. Velora and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">6. Dispute Resolution</h2>
                        <h3 className="text-xl text-white font-serif mb-2 mt-4">Informal Negotiations</h3>
                        <p>
                            To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Use (each &ldquo;Dispute&rdquo; and collectively, the &ldquo;Disputes&rdquo;) brought by either you or us (individually, a &ldquo;Party&rdquo; and collectively, the &ldquo;Parties&rdquo;), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">7. Corrections</h2>
                        <p>
                            There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">8. Contact Us</h2>
                        <p className="mb-4">
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        </p>
                        <div className="bg-white/5 p-8 border border-white/10">
                            <p className="text-gold font-serif text-lg mb-2">Velora Digital</p>
                            <p>Bangalore, India</p>
                            <p>Email: <a href="mailto:veloraa007@gmail.com" className="text-white hover:text-gold transition-colors">veloraa007@gmail.com</a></p>
                            <p>Phone: +91 99019 81097</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
