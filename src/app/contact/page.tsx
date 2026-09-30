// app/contact/page.tsx

import { Suspense } from "react";
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
            <Suspense
              fallback={
                <div className="rounded-[32px] border border-[#ECECEC] bg-white p-8 md:p-10 text-center text-neutral-400">
                  Loading enquiry form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}