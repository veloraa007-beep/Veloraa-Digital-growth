import ServicePageTemplate from "@/components/service-page-template";

export default function WhatsAppAutomationPage() {
    return (
        <ServicePageTemplate
            title="WhatsApp Automation"
            description="Auto-replies, CRM integration, and lead qualification bots engineered for speed."
            heroImage="https://images.unsplash.com/photo-1611746362936-ac317009189d?q=80&w=2070&auto=format&fit=crop"
            offerings={[
                "Auto-reply Systems: Instant response to every inquiry.",
                "Lead Qualification Bots: Filter out noise and identify serious prospects.",
                "Appointment Booking Automation: Seamless scheduling.",
                "Abandoned Cart Recovery: Re-engage lost shoppers automatically.",
                "Broadcast Campaign Setup: Reaching your audience at scale."
            ]}
            techStack={[
                "WhatsApp Business API", "Zapier", "Make.com",
                "Interakt", "Wati", "Google Sheets", "OpenAI / ChatGPT"
            ]}
            process={[
                {
                    number: "01",
                    title: "Flow Mapping",
                    description: "Designing the conversation logic to guide users naturally toward your goal.",
                },
                {
                    number: "02",
                    title: "API Integration",
                    description: "Connecting WhatsApp to your CRM and other business tools.",
                },
                {
                    number: "03",
                    title: "Bot Development",
                    description: "Building the intelligent response system with custom logic.",
                },
                {
                    number: "04",
                    title: "Testing & optimization",
                    description: "Rigorous testing to ensure 100% reliability before going live.",
                },
            ]}
            ctaTitle="Automate Your communication"
        >
            <section className="py-20 border-t border-white/5 bg-black">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-2xl font-serif text-white mb-6">Engagement Power</h2>
                    <p className="text-secondary/60 text-sm mb-8 max-w-2xl mx-auto">
                        WhatsApp boasts a 98% open rate. See why it's the most powerful marketing channel today.
                    </p>
                    <a
                        href="https://www.aisensy.com/blog/whatsapp-marketing-statistics/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent border-b border-accent/20 pb-1 hover:text-white hover:border-white transition-colors"
                    >
                        View Marketing Statistics <span className="text-lg">→</span>
                    </a>
                </div>
            </section>
        </ServicePageTemplate>
    );
}
