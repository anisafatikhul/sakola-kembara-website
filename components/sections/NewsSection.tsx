"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { newsArticles } from "@/lib/data";

export default function NewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredArticle = newsArticles.find((a) => a.featured);
  const regularArticles = newsArticles.filter((a) => !a.featured);

  return (
    <section className="py-24 bg-gray-50" id="news">
      <div className="max-w-[1200px] mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-blue uppercase tracking-wider mb-4">
              <span className="w-2 h-2 bg-secondary-yellow rounded-full" />
              Berita & Update
            </div>
            <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-gray-900">
              Kabar Terbaru
            </h2>
          </div>
          <Link
            href="#"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 text-[15px] font-semibold text-gray-700 border-2 border-gray-200 rounded-lg hover:border-primary-blue hover:text-primary-blue transition-all"
          >
            Lihat Semua Artikel
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:row-span-2"
            >
              <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all h-full flex flex-col">
                <div className="h-[300px] relative">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary-blue uppercase">
                      {featuredArticle.category}
                    </span>
                    <span className="text-[13px] text-gray-500">
                      {featuredArticle.date}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                    {featuredArticle.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-primary-blue text-sm font-semibold hover:underline"
                  >
                    Baca Selengkapnya
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </motion.div>
          )}

          {/* Regular Articles */}
          {regularArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
            >
              <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="h-[200px] relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary-blue uppercase">
                      {article.category}
                    </span>
                    <span className="text-[13px] text-gray-500">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-primary-blue text-sm font-semibold hover:underline"
                  >
                    Baca Selengkapnya
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 text-[15px] font-semibold text-gray-700 border-2 border-gray-200 rounded-lg hover:border-primary-blue hover:text-primary-blue transition-all"
          >
            Lihat Semua Artikel
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
