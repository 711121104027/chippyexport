// app/contact/page.tsx

import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import OfficeSection from "@/components/contact/OfficeSection";
import ContactForm from "@/components/contact/ContactForm";


export default function ContactPage() {
    return (
        <main>
            <ContactHero />

            <ContactInfoCards />

            <section
                className="
  relative
  overflow-hidden
  py-10
  "
            >
                <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <OfficeSection />
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}