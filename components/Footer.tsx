"use client";

import Link from "next/link";
import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary-yellow via-secondary-green to-primary-blue" />
              <span className="text-white font-bold text-lg">
                Sakola Kembara
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Berkomitmen untuk memberikan kesempatan pendidikan yang setara
              kepada seluruh anak Indonesia, terutama di daerah terpencil dan
              kurang mampu.
            </p>
          </div>

          {/* Program Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-5">
              Program
            </h4>
            <ul className="space-y-3">
              {footerLinks.program.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tentang Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-5">
              Tentang
            </h4>
            <ul className="space-y-3">
              {footerLinks.tentang.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Terlibat Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-5">
              Terlibat
            </h4>
            <ul className="space-y-3">
              {footerLinks.terlibat.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10">
          <p className="text-sm text-gray-500">
            © 2024 Sakola Kembara, Inc. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              TikTok
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
