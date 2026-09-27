"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Lock,
  Leaf,
  Users,
  ShieldCheck,
  CheckCircle2,
  Clock,
  HelpCircle,
  ArrowRight,
  Globe2,
} from "lucide-react";

export default function PolicyPage() {
  const policies = [
    {
      id: "privacy",
      icon: Lock,
      title: "1. Privacy & Data Protection Policy",
      content: (
        <>
          <p className="text-neutral-600 leading-relaxed font-inter text-[15px]">
            At <strong>Chippy Export</strong>, we respect the privacy of our international clients, partners, and site visitors. We are committed to safeguarding all business records, tech-packs, proprietary dimensions, and personal contact details shared with us.
          </p>
          <ul className="mt-3 space-y-2 font-inter text-[14.5px] text-neutral-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Information Collection:</strong> We collect contact details, corporate billing credentials, shipment destinations, and garment specifications strictly to execute orders and communicate production updates.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>No Third-Party Selling:</strong> We never sell, rent, or trade client data to marketing third parties. Information is only shared with accredited shipping carriers and customs authorities when legally required.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Data Security:</strong> All digital communications and transactions utilize standard SSL encryption, secure servers, and restricted internal access permissions.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "ethical-labor",
      icon: Users,
      title: "2. Social & Ethical Labor Policy",
      content: (
        <>
          <p className="text-neutral-600 leading-relaxed font-inter text-[15px]">
            Chippy Export adheres to stringent global ethical manufacturing standards, ILO (International Labour Organization) conventions, and national statutory labor laws:
          </p>
          <ul className="mt-3 space-y-2 font-inter text-[14.5px] text-neutral-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Zero Child &amp; Forced Labor:</strong> Strict age verification protocols are enforced. No forced, bonded, or underage labor is permitted under any circumstances.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Fair Living Wages:</strong> We provide competitive wages exceeding statutory minimums, with timely payouts, statutory benefits, and regulated working hours.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Workplace Health &amp; Safety:</strong> Our manufacturing facility features well-ventilated workspaces, ergonomic workstations, fire-safety systems, and clean drinking water facilities.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "environmental",
      icon: Leaf,
      title: "3. Environmental & Sustainability Policy",
      content: (
        <>
          <p className="text-neutral-600 leading-relaxed font-inter text-[15px]">
            We are dedicated to minimizing our ecological footprint through sustainable manufacturing practices:
          </p>
          <ul className="mt-3 space-y-2 font-inter text-[14.5px] text-neutral-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Eco-Friendly Fabrics:</strong> We offer certified Organic Cotton (GOTS), recycled polyester blends, and sustainable viscose sourcing upon client specification.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Safe Dyes &amp; Chemicals:</strong> All dyeing and processing partners comply with OEKO-TEX Standard 100 and REACH chemical safety regulations.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Waste Reduction:</strong> Fabric scrap recycling, precision CAD marker planning to minimize cutting waste, and biodegradable packaging solutions.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "trade-compliance",
      icon: ShieldCheck,
      title: "4. International Trade & Customs Compliance",
      content: (
        <>
          <p className="text-neutral-600 leading-relaxed font-inter text-[15px]">
            Chippy Export operates as a certified export house ensuring 100% compliance with international cross-border trade guidelines:
          </p>
          <ul className="mt-3 space-y-2 font-inter text-[14.5px] text-neutral-600">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Accurate Documentation:</strong> Strict adherence to commercial invoices, packing lists, Certificate of Origin (COO), and bill of lading accuracy.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-[#C74E14] shrink-0 mt-0.5" />
              <span><strong>Anti-Bribery &amp; Fair Competition:</strong> Zero tolerance for commercial bribery, corruption, or anti-competitive trade practices.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "cookies-analytics",
      icon: Globe2,
      title: "5. Cookies & Website Analytics",
      content: (
        <>
          <p className="text-neutral-600 leading-relaxed font-inter text-[15px]">
            Our website uses standard essential cookies and anonymized analytics to measure site traffic, optimize user experience, and ensure seamless navigation across our product catalogs. You can control or disable cookie preferences through your individual browser settings at any time.
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
              <ShieldCheck size={14} /> Trust &amp; Governance
            </div>
            <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] leading-tight">
              Privacy &amp; Corporate Policy
            </h1>
            <p className="mt-4 font-inter text-neutral-600 text-[15px] sm:text-[17px] leading-relaxed">
              Our principles on data privacy, ethical labor compliance, sustainable manufacturing, and global trade governance.
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
            {/* Sticky Sidebar */}
            <aside className="hidden lg:block sticky top-28 space-y-6">
              <div className="p-5 bg-white rounded-[4px] border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                <h3 className="font-poppins text-[14px] font-semibold text-[#1E293B] uppercase tracking-wider mb-4">
                  Policy Index
                </h3>
                <nav className="space-y-2">
                  {policies.map((item) => (
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

              {/* Compliance Box */}
              <div className="p-5 bg-gradient-to-br from-[#1E293B] to-neutral-800 text-white rounded-[4px]">
                <HelpCircle size={24} className="text-[#C74E14] mb-3" />
                <h4 className="font-poppins text-[15px] font-semibold">Audit &amp; Compliance</h4>
                <p className="mt-1.5 font-inter text-xs text-neutral-300 leading-relaxed">
                  Request audit documentation, factory certifications, or social compliance reports.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#C74E14] hover:text-white transition-colors"
                >
                  Contact Compliance Officer <ArrowRight size={13} />
                </Link>
              </div>
            </aside>

            {/* Policy Articles */}
            <div className="space-y-8">
              {policies.map((sec, idx) => {
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

              {/* Terms Link Card */}
              <div className="p-6 rounded-[4px] bg-[#C74E14]/5 border border-[#C74E14]/20 text-center sm:text-left sm:flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-poppins text-sm font-semibold text-[#1E293B]">
                    Looking for our Commercial Terms &amp; Conditions?
                  </h4>
                  <p className="mt-1 font-inter text-xs text-neutral-600">
                    Review our export agreement, sampling procedures, and payment terms.
                  </p>
                </div>
                <Link
                  href="/terms"
                  className="mt-3 sm:mt-0 shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-[3px] bg-[#C74E14] text-white text-xs font-semibold hover:bg-[#a63d0d] transition-colors"
                >
                  View Terms <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
