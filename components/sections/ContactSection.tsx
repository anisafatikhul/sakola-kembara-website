"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Instagram, Music, Twitter, Lock } from "lucide-react";
import { contactInfo, donationTiers } from "@/lib/data";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedTier, setSelectedTier] = useState(2); // Default to Silver

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-[1200px] mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-blue uppercase tracking-wider mb-4">
              <span className="w-2 h-2 bg-secondary-yellow rounded-full" />
              Hubungi Kami
            </div>
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl text-gray-900 mb-4">
              Mari Bergerak Bersama untuk Pendidikan Indonesia
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Punya pertanyaan atau ingin berkolaborasi? Kami senang mendengar
              dari Anda.
            </p>

            {/* Contact Methods */}
            <div className="space-y-5 mb-8">
              {contactInfo.map((contact) => (
                <div key={contact.title} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {contact.title}
                    </h4>
                    <p className="text-sm text-gray-600">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary-blue hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary-blue hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary-blue hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Donation Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="donate"
          >
            <div className="bg-gradient-to-br from-primary-blue to-accent-navy rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] rounded-full" />

              <h3 className="font-[var(--font-display)] text-2xl md:text-3xl mb-3 relative z-10">
                Dukung Perjalanan Mereka
              </h3>
              <p className="text-[15px] opacity-90 mb-6 relative z-10">
                Setiap donasi Anda membantu siswa dari keluarga kurang mampu
                untuk mewujudkan impian mereka masuk perguruan tinggi.
              </p>

              {/* Donation Tiers */}
              <div className="grid grid-cols-2 gap-3 mb-6 relative z-10">
                {donationTiers.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setSelectedTier(tier.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      selectedTier === tier.id
                        ? "bg-white/25 border-secondary-yellow"
                        : "bg-white/15 border-transparent hover:bg-white/20"
                    }`}
                  >
                    <div className="text-xs font-semibold uppercase opacity-80 mb-1">
                      {tier.name}
                    </div>
                    <div className="text-lg md:text-xl font-bold">
                      {tier.amount}
                    </div>
                  </button>
                ))}
              </div>

              <button className="w-full py-4 bg-secondary-yellow text-gray-900 font-semibold text-base rounded-lg hover:bg-amber-400 transition-colors relative z-10">
                Donasi Sekarang
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-[13px] opacity-80 relative z-10">
                <Lock size={14} />
                Transaksi aman & terenkripsi
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
