"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stakeholders, reports } from "@/lib/data";

const iconGradients = [
  "from-primary-blue to-accent-navy",
  "from-secondary-yellow to-orange-500",
  "from-secondary-green to-green-700",
];

export default function StakeholderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gray-900 text-white" id="stakeholders">
      <div className="max-w-[1200px] mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-secondary-yellow uppercase tracking-wider mb-4">
            <span className="w-2 h-2 bg-secondary-yellow rounded-full" />
            Hubungan Stakeholder
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-white mb-6">
            Transparansi & Akuntabilitas
          </h2>
          <p className="text-lg text-gray-400 max-w-[600px] mx-auto">
            Kami berkomitmen untuk menjaga kepercayaan semua pihak yang mendukung
            misi kami melalui transparansi penuh dalam setiap kegiatan.
          </p>
        </motion.div>

        {/* Stakeholder Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${iconGradients[index]} rounded-2xl mx-auto mb-5 flex items-center justify-center text-3xl`}
              >
                {stakeholder.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{stakeholder.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                {stakeholder.description}
              </p>
              <Link
                href={stakeholder.href}
                className="inline-flex items-center gap-1.5 text-secondary-yellow text-sm font-semibold hover:underline"
              >
                {stakeholder.link}
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Reports Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-12 border-t border-white/10"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Laporan & Dokumen
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {reports.map((report) => (
              <div
                key={report.id}
                className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary-blue/20 rounded-lg flex items-center justify-center text-xl">
                  {report.icon}
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold mb-0.5">
                    {report.title}
                  </h4>
                  <span className="text-[13px] text-gray-500">{report.size}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
