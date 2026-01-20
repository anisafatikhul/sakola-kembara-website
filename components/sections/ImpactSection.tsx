"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { MapPin, GraduationCap } from "lucide-react";
import { impactMetrics, mapStats, mapLocations, testimonials } from "@/lib/data";

// Dynamic import for map to avoid SSR issues with Leaflet
const GISMap = dynamic(() => import("@/components/Map/GISMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center">
      <span className="text-gray-500">Loading map...</span>
    </div>
  ),
});

const metricColors: Record<string, string> = {
  blue: "from-primary-blue to-accent-navy",
  yellow: "from-secondary-yellow to-orange-500",
  green: "from-secondary-green to-green-700",
  dark: "from-gray-700 to-gray-900",
};

export default function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white" id="impact">
      <div className="max-w-[1200px] mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-blue uppercase tracking-wider mb-4">
            <span className="w-2 h-2 bg-secondary-yellow rounded-full" />
            Dampak Kami
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-gray-900 mb-6">
            Pencapaian Sakola Kembara
          </h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Setiap angka di sini mewakili mimpi yang terwujud dan kehidupan yang
            berubah melalui pendidikan.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`bg-gradient-to-br ${metricColors[metric.color]} rounded-2xl p-8 text-white text-center relative overflow-hidden`}
            >
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
              <div className="text-4xl md:text-5xl font-extrabold leading-none mb-2 relative z-10">
                {metric.number}
              </div>
              <div className="text-sm opacity-90 relative z-10">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Peta Penyebaran Sakola Kembara
            </h3>
            <p className="text-gray-600">
              Jangkauan program kami di berbagai wilayah Pulau Jawa
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg">
            <GISMap />

            {/* Map Stats Bar */}
            <div className="flex justify-center gap-12 py-6 bg-white border-t border-gray-100">
              {mapStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-primary-blue leading-none">
                    {stat.number}
                  </div>
                  <div className="text-[13px] text-gray-600 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {mapLocations.map((location) => (
              <div
                key={location.id}
                className="bg-white border border-gray-100 rounded-xl p-4 text-center hover:border-primary-blue hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2.5">
                  <MapPin size={16} className="text-gray-500" />
                </div>
                <h5 className="text-sm font-bold text-gray-900 mb-0.5">
                  {location.name}
                </h5>
                <p className="text-xs text-gray-500">{location.region}</p>
                <div className="text-lg font-bold text-primary-blue mt-2">
                  {location.students} siswa
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 flex gap-6"
            >
              <div className="w-32 h-40 rounded-xl overflow-hidden flex-shrink-0 relative">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <blockquote className="text-[15px] text-gray-700 italic leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <strong className="text-base text-gray-900">
                    {testimonial.name}
                  </strong>
                  <p className="text-sm text-primary-blue">{testimonial.major}</p>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-white px-3 py-2 rounded-lg text-xs text-gray-600 mt-3 border border-gray-200">
                  <GraduationCap size={14} />
                  {testimonial.university}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
