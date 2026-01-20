"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { activities } from "@/lib/data";

export default function ActivitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white" id="activities">
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
            Program Kami
          </div>
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-gray-900 mb-6">
            Kegiatan Sakola Kembara
          </h2>
          <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
            Program bimbingan belajar gratis dan pendampingan intensif untuk
            mempersiapkan siswa menghadapi UTBK dan ujian mandiri perguruan
            tinggi.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:border-transparent transition-all duration-300"
            >
              {/* Image */}
              <div className="h-[200px] relative">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <span className="absolute top-4 left-4 bg-primary-blue text-white px-3 py-1.5 rounded-md text-xs font-semibold z-10">
                  {activity.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {activity.title}
                </h3>
                <p className="text-[15px] text-gray-600 mb-4 leading-relaxed">
                  {activity.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activity.locations.map((location) => (
                    <span
                      key={location}
                      className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full"
                    >
                      <MapPin size={10} />
                      {location}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
