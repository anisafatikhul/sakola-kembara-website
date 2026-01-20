// Static data for Sakola Kembara website

export const navLinks = [
  { href: "#about", label: "Tentang Kami" },
  { href: "#activities", label: "Program" },
  { href: "#impact", label: "Dampak" },
  { href: "#news", label: "Berita" },
  { href: "#contact", label: "Kontak" },
];

export const heroStats = [
  { number: "500+", label: "Siswa Terbantu" },
  { number: "59%", label: "Tingkat Kelulusan PTN" },
  { number: "5", label: "Wilayah Jangkauan" },
];

export const problemStats = [
  {
    number: "3/10",
    text: "Hanya 3 dari 10 anak Indonesia yang memiliki akses ke pendidikan tinggi",
  },
  {
    number: "50%+",
    text: "Lebih dari setengah mahasiswa berasal dari keluarga 20% terkaya",
  },
  {
    number: "2x",
    text: "Anak kota punya kesempatan 2x lebih besar untuk kuliah",
  },
];

export const activities = [
  {
    id: 1,
    title: "Bimbingan Belajar Kembara",
    description:
      "Program bimbel gratis untuk siswa kelas 12 dan gap-year. Mempersiapkan siswa menghadapi UTBK dengan pendekatan terstruktur dan personal.",
    tag: "Program Unggulan",
    locations: ["Cililin", "Bandung", "Lembang"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Roadshow ke Sekolah",
    description:
      "Kunjungan langsung ke sekolah-sekolah di daerah terpencil untuk memberikan motivasi dan informasi tentang jalur masuk perguruan tinggi.",
    tag: "Outreach",
    locations: ["Arjawinangun", "Bojong"],
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Asrama Akhir Tahun",
    description:
      "Program asrama intensif menjelang UTBK. Siswa mendapat pelatihan akademis fokus dan bimbingan mental untuk menghadapi ujian.",
    tag: "Intensif",
    locations: ["Bandung", "Purwakarta"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
  },
];

export const teamMembers = [
  {
    name: "Ahmad Fadillah",
    role: "Ketua Umum",
    university: "Institut Teknologi Bandung",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Siti Nurhaliza",
    role: "Koordinator Program",
    university: "Universitas Padjadjaran",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Rizky Pratama",
    role: "Head of Marketing",
    university: "Universitas Gadjah Mada",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dewi Anggraini",
    role: "Koordinator Relawan",
    university: "Universitas Indonesia",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Budi Santoso",
    role: "Pengajar Matematika",
    university: "Institut Teknologi Bandung",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Anisa Putri",
    role: "Pengajar Bahasa Inggris",
    university: "Universitas Padjadjaran",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Farel Hidayat",
    role: "Pengajar Sains",
    university: "Institut Teknologi Bandung",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Maya Sari",
    role: "Pengajar Penalaran",
    university: "Universitas Gadjah Mada",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
  },
];

export const impactMetrics = [
  { number: "500+", label: "Total Siswa Terbantu", color: "blue" },
  { number: "59%", label: "Diterima di PTN", color: "yellow" },
  { number: "4", label: "Siswa di Top 3 Universitas", color: "green" },
  { number: "49", label: "Siswa Program 2023", color: "dark" },
];

export const mapLocations = [
  {
    id: 1,
    name: "Cililin",
    region: "Bandung Barat",
    lat: -6.9167,
    lng: 107.4667,
    students: 85,
    type: "bimbel",
  },
  {
    id: 2,
    name: "Kota Bandung",
    region: "Jawa Barat",
    lat: -6.9175,
    lng: 107.6191,
    students: 120,
    type: "asrama",
  },
  {
    id: 3,
    name: "Lembang",
    region: "Bandung Barat",
    lat: -6.8125,
    lng: 107.6175,
    students: 65,
    type: "roadshow",
  },
  {
    id: 4,
    name: "Arjawinangun",
    region: "Cirebon",
    lat: -6.6436,
    lng: 108.4122,
    students: 95,
    type: "bimbel",
  },
  {
    id: 5,
    name: "Bojong",
    region: "Purwakarta",
    lat: -6.5844,
    lng: 107.4367,
    students: 75,
    type: "asrama",
  },
];

export const mapStats = [
  { number: "5", label: "Wilayah Aktif" },
  { number: "3", label: "Kabupaten/Kota" },
  { number: "2", label: "Provinsi" },
  { number: "15+", label: "Sekolah Terjangkau" },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Berkat Sakola Kembara, sebagai pemuda dari daerah pedesaan dengan akses terbatas ke pendidikan, saya akhirnya mewujudkan impian saya untuk belajar di salah satu universitas terbaik di Indonesia.",
    name: "Daffa Najwan",
    major: "Manajemen, UGM",
    university: "Universitas Gadjah Mada",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=240&h=320&fit=crop&crop=face",
  },
  {
    id: 2,
    quote:
      "Di Sakola Kembara, saya belajar untuk menghargai dan mencintai diri sendiri. Para mentor tidak hanya mengajarkan pendidikan formal tetapi juga menanamkan nilai-nilai pertumbuhan pribadi.",
    name: "Natia Nur Faza",
    major: "Ekonomi Islam, UNPAD",
    university: "Universitas Padjadjaran",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=240&h=320&fit=crop&crop=face",
  },
];

export const stakeholders = [
  {
    id: 1,
    icon: "👨‍👩‍👧‍👦",
    title: "Untuk Donatur",
    description:
      "Laporan penggunaan dana yang transparan dan terperinci. Setiap rupiah Anda berkontribusi langsung untuk pendidikan anak Indonesia.",
    link: "Lihat Laporan Donasi",
    href: "#",
  },
  {
    id: 2,
    icon: "🎓",
    title: "Untuk Siswa & Orang Tua",
    description:
      "Informasi lengkap tentang program, jadwal kegiatan, dan progress pembelajaran anak. Komunikasi terbuka setiap saat.",
    link: "Portal Orang Tua",
    href: "#",
  },
  {
    id: 3,
    icon: "🤝",
    title: "Untuk Partner",
    description:
      "Peluang kolaborasi dan kemitraan strategis untuk memperluas dampak pendidikan di Indonesia. Mari bergerak bersama.",
    link: "Jadi Partner Kami",
    href: "#",
  },
];

export const reports = [
  { id: 1, icon: "📊", title: "Laporan Tahunan 2023", size: "PDF • 2.4 MB" },
  { id: 2, icon: "💰", title: "Laporan Keuangan 2023", size: "PDF • 1.8 MB" },
  { id: 3, icon: "📈", title: "Impact Report 2023", size: "PDF • 3.1 MB" },
];

export const partners = [
  { id: 1, name: "Institut Teknologi Bandung (ITB)", logo: "https://upload.wikimedia.org/wikipedia/id/thumb/4/44/Logo_ITB_1920.svg/200px-Logo_ITB_1920.svg.png" },
  { id: 2, name: "Salam Setara", logo: null },
  { id: 3, name: "Talents Mapping", logo: null },
  { id: 4, name: "Universitas Padjadjaran", logo: null },
  { id: 5, name: "Universitas Gadjah Mada", logo: null },
];

export const newsArticles = [
  {
    id: 1,
    category: "Pencapaian",
    date: "15 Januari 2024",
    title: "4 Alumni Sakola Kembara Diterima di 3 Universitas Terbaik Indonesia",
    excerpt:
      "Cerita inspiratif perjalanan empat siswa dari daerah terpencil yang berhasil menembus seleksi masuk universitas top Indonesia melalui program bimbingan intensif Sakola Kembara.",
    featured: true,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    category: "Kegiatan",
    date: "10 Januari 2024",
    title: "Roadshow Sakola Kembara di Cirebon: Menjangkau 200 Siswa",
    excerpt:
      "Tim kami mengunjungi 5 sekolah di Arjawinangun untuk memberikan motivasi dan informasi UTBK.",
    featured: false,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    category: "Partnership",
    date: "5 Januari 2024",
    title: "Kolaborasi Baru dengan Talents Mapping untuk Pengembangan Potensi Siswa",
    excerpt:
      "Kemitraan strategis untuk membantu siswa menemukan bakat dan jurusan yang tepat.",
    featured: false,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
];

// Hero section images
export const heroImages = {
  main: "/images/hero-team.png",
  badge1: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=280&fit=crop",
  badge2: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=280&fit=crop",
};

export const donationTiers = [
  { id: 1, name: "Bronze", amount: "Rp 50.000" },
  { id: 2, name: "Silver", amount: "Rp 100.000" },
  { id: 3, name: "Gold", amount: "Rp 200.000" },
  { id: 4, name: "Custom", amount: "Nominal Lain" },
];

export const contactInfo = [
  { icon: "📧", title: "Email", value: "hello@sakolakembara.org" },
  { icon: "📱", title: "WhatsApp", value: "+62 812 3456 7890" },
  { icon: "📍", title: "Lokasi", value: "Bandung, Jawa Barat, Indonesia" },
];

export const footerLinks = {
  program: [
    { label: "Bimbel Kembara", href: "#" },
    { label: "Roadshow Sekolah", href: "#" },
    { label: "Asrama Intensif", href: "#" },
    { label: "Keluarga Asuh", href: "#" },
  ],
  tentang: [
    { label: "Misi Kami", href: "#" },
    { label: "Tim", href: "#team" },
    { label: "Partner", href: "#partners" },
    { label: "Laporan", href: "#stakeholders" },
  ],
  terlibat: [
    { label: "Donasi", href: "#donate" },
    { label: "Jadi Relawan", href: "#" },
    { label: "Jadi Partner", href: "#" },
    { label: "Kontak", href: "#contact" },
  ],
};
