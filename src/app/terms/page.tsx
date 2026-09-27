"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Clock,
  Scale,
  CreditCard,
  Truck,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      icon: ShieldCheck,
      title: "1. Acceptance of Terms & Services",
      content: (
        <>
          <p className="text-neutral-600 leading-relaxed font-inter text-[15px]">
            By accessing our website, placing an inquiry, approving samples, or entering into a manufacturing contract with <strong>Chippy Export</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you (&quot;Client&quot;, &quot;Buyer&quot;, &quot;Customer&quot;) agree to be legally bound by these Terms and Conditions. These terms govern all transactions, manufacturing orders, sample developments, and export logistics provided by Chippy Export.
          </p>
        </>
      ),
    },
    {
      id: "orders-sampling",
      icon: FileText,
      title: "2. Inquiries, Sampling & Order Confirmation",
      content: (
        <>
          <p className="text-neutral-600 leading-relaxed font-inter text-[15px]">
            Our manufacturing and export workflows are structured as follows:
          </p>
          <ul className="mt-3 space-y-2 font-inter text-[14.5px] text-neutral-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Sample Development:</strong> Proto samples, fit samples, and size sets are developed based on buyer tech-packs. Sample development costs and courier fees are agreed upon prior to dispatch.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Purchase Orders (PO):</strong> A bulk order is deemed confirmed only upon receipt of an authorized Purchase Order (PO) and required advance payment or confirmed Letter of Credit (L/C).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Minimum Order Quantity (MOQ):</strong> MOQs vary by style, fabric composition, and dye requirements as explicitly specified in our formal commercial quotation.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "pricing-payment",
      icon: CreditCard,
      title: "3. Pricing, Invoicing & Payment Terms",
      content: (
        <>
          <p className="text-neutral-600 leading-relaxed font-inter text-[15px]">
            Commercial terms adhere to international trade protocols (Incoterms 2020):
          </p>
          <ul className="mt-3 space-y-2 font-inter text-[14.5px] text-neutral-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Incoterms:</strong> Prices are quoted on FOB (Free On Board), CIF (Cost, Insurance & Freight), or EXW (Ex Works) terms as agreed in the proforma invoice.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Payment Modes:</strong> Accepted payment methods include Wire Transfer (T/T), Irrevocable Letter of Credit (L/C at sight), or mutually agreed trade credit structures.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Currency & Taxes:</strong> Invoices are generated in USD, EUR, GBP, or INR as stipulated. Import customs duties and taxes in the destination country are the sole responsibility of the buyer unless agreed under DDP terms.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "ip-confidentiality",
      icon: Scale,
      title: "4. Intellectual Property & Tech-Pack Confidentiality",
      content: (
        <>
          <p className="text-neutral-600 leading-relaxed font-inter text-[15px]">
            We value design integrity and intellectual property protection:
          </p>
          <ul className="mt-3 space-y-2 font-inter text-[14.5px] text-neutral-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Buyer Designs:</strong> All tech-packs, artwork, brand labels, customized embroidery, and proprietary designs provided by the buyer remain their exclusive intellectual property.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Non-Disclosure (NDA):</strong> Chippy Export strictly safeguards client specifications and will never reproduce, showcase, or distribute proprietary garments to unauthorized third parties.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "quality-inspection",
      icon: CheckCircle2,
      title: "5. Quality Assurance, AQL & Inspections",
      content: (
        <>
          <p className="text-neutral-600 leading-relaxed font-inter text-[15px]">
            Our manufacturing operations follow rigorous Acceptable Quality Limit (AQL) standards:
          </p>
          <ul className="mt-3 space-y-2 font-inter text-[14.5px] text-neutral-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>AQL Standards:</strong> All garment consignments are inspected under AQL 2.5 (Major Defects) / AQL 4.0 (Minor Defects) or customized buyer inspection parameters.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Third-Party Audits:</strong> Buyers are welcome to appoint accredited third-party inspection agencies (e.g., SGS, Bureau Veritas, Intertek) prior to container loading.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "shipping-force-majeure",
      icon: Truck,
      title: "6. Production Lead Times, Shipping & Force Majeure",
      content: (
        <>
          <p className="text-neutral-600 leading-relaxed font-inter text-[15px]">
            Lead times begin upon final sample approval and receipt of initial commercial milestones. Chippy Export is not liable for shipment delays resulting from Force Majeure events including natural disasters, maritime disruptions, port congestion, customs strikes, or international trade embargoes.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      icon: Scale,
      title: "7. Governing Law & Jurisdiction",
      content: (
        <>
          <p className="text-neutral-600 leading-relaxed font-inter text-[15px]">
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Tamil Nadu, India, or resolved through mutual arbitration.
          </p>
        </>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50/40">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-neutral-100 to-white pt-12 pb-14 md:pt-16 md:pb-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C74E14]/10 text-[#C74E14] text-[11px] font-montserrat font-semibold uppercase tracking-[3px] mb-4">
              <Scale size={14} /> Legal &amp; Compliance
            </div>
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] leading-tight">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 font-inter text-neutral-600 text-[15px] sm:text-[17px] leading-relaxed">
              Standard commercial terms, manufacturing contracts, export compliance, and client service agreements governing Chippy Export.
            </p>
            <div className="mt-5 flex items-center justify-center gap-2 text-xs font-inter text-neutral-500">
              <Clock size={14} />
              <span>Last Updated: September 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] items-start">
            {/* Sticky Sidebar Navigation */}
            <aside className="hidden lg:block sticky top-28 space-y-6">
              <div className="p-5 bg-white rounded-[4px] border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <h3 className="font-poppins text-[14px] font-semibold text-[#1E293B] uppercase tracking-wider mb-4">
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {sections.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-[13px] font-inter text-neutral-600 hover:text-[#C74E14] hover:translate-x-1 transition-all duration-200 py-1"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Support Card */}
              <div className="p-5 bg-gradient-to-br from-[#1E293B] to-neutral-800 text-white rounded-[4px]">
                <HelpCircle size={24} className="text-[#C74E14] mb-3" />
                <h4 className="font-poppins text-[15px] font-semibold">Have Questions?</h4>
                <p className="mt-1.5 font-inter text-xs text-neutral-300 leading-relaxed">
                  Need clarification on export documentation or custom contract terms?
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#C74E14] hover:text-white transition-colors"
                >
                  Contact Legal Desk <ArrowRight size={13} />
                </Link>
              </div>
            </aside>

            {/* Terms Articles */}
            <div className="space-y-8">
              {sections.map((sec, idx) => {
                const Icon = sec.icon;
                return (
                  <motion.div
                    key={sec.id}
                    id={sec.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className="p-6 sm:p-8 bg-white rounded-[4px] border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] scroll-mt-28"
                  >
                    <div className="flex items-center gap-3 pb-4 border-b border-neutral-100">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] bg-[#C74E14]/10 text-[#C74E14]">
                        <Icon size={20} />
                      </div>
                      <h2 className="font-poppins text-lg sm:text-xl font-bold text-[#1E293B]">
                        {sec.title}
                      </h2>
                    </div>

                    <div className="mt-5">{sec.content}</div>
                  </motion.div>
                );
              })}

              {/* Footer Note */}
              <div className="p-6 rounded-[4px] bg-[#C74E14]/5 border border-[#C74E14]/20 text-center sm:text-left sm:flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-poppins text-sm font-semibold text-[#1E293B]">
                    Looking for our Privacy &amp; Ethical Compliance Policy?
                  </h4>
                  <p className="mt-1 font-inter text-xs text-neutral-600">
                    Read how we handle data security, sustainability, and international labor standards.
                  </p>
                </div>
                <Link
                  href="/policy"
                  className="mt-3 sm:mt-0 shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-[3px] bg-[#C74E14] text-white text-xs font-semibold hover:bg-[#a63d0d] transition-colors"
                >
                  View Policy <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
