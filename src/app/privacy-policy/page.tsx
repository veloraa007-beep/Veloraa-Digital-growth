import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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

                <h1 className="text-4xl md:text-5xl font-serif text-white mb-8">Privacy Policy</h1>
                <p className="text-white/60 mb-12 text-sm uppercase tracking-wider">
                    Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>

                <div className="space-y-12 text-white/80 font-light leading-relaxed">
                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">1. Introduction</h2>
                        <p>
                            Velora (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website using our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">2. Information We Collect</h2>
                        <p className="mb-4">
                            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gold">
                            <li>
                                <strong className="text-white">Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
                            </li>
                            <li>
                                <strong className="text-white">Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">3. How We Use Your Information</h2>
                        <p className="mb-4">
                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gold">
                            <li>Create and manage your account.</li>
                            <li>Process your payments and refunds.</li>
                            <li>Email you regarding your account or order.</li>
                            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                            <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                            <li>Notify you of updates to the Site.</li>
                            <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">4. Disclosure of Your Information</h2>
                        <p>
                            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gold mt-4">
                            <li>
                                <strong className="text-white">By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                            </li>
                            <li>
                                <strong className="text-white">Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">5. Security of Your Information</h2>
                        <p>
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">6. Policy for Children</h2>
                        <p>
                            We do not knowingly solicit information from or market to children under the age of 13. If you become aware that any data has been collected from children under age 13, please contact us using the contact information provided below.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl text-white font-serif mb-4">7. Contact Us</h2>
                        <p className="mb-4">
                            If you have questions or comments about this Privacy Policy, please contact us at:
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
