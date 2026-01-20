import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sakola Kembara - Pendidikan Untuk Semua",
  description:
    "Membuka pintu pendidikan tinggi untuk setiap anak Indonesia. Program bimbingan belajar gratis dan pendampingan intensif untuk siswa dari daerah terpencil dan keluarga kurang mampu.",
  keywords: [
    "Sakola Kembara",
    "pendidikan",
    "beasiswa",
    "bimbel gratis",
    "UTBK",
    "PTN",
    "Indonesia",
    "nonprofit",
  ],
  authors: [{ name: "Sakola Kembara" }],
  openGraph: {
    title: "Sakola Kembara - Pendidikan Untuk Semua",
    description:
      "Membuka pintu pendidikan tinggi untuk setiap anak Indonesia melalui program bimbingan belajar gratis.",
    url: "https://sakolakembara.org",
    siteName: "Sakola Kembara",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakola Kembara - Pendidikan Untuk Semua",
    description:
      "Membuka pintu pendidikan tinggi untuk setiap anak Indonesia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${dmSerifDisplay.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
