// src/data/projectsData.js

export const profileData = {
  name: "Imam Ahmad Aziz Prayogi",
  nickname: "Aziz",
  role: "Software Developer & UI/UX Designer",
  bio: "Siswa PPLG di SMK Wikrama Bogor yang antusias dalam membangun aplikasi web modern dan responsif. Berpengalaman menggunakan ekosistem React, Laravel, dan Node.js.",
  contacts: {
    whatsapp: "6281234567890", // Ganti dengan nomor aslimu (gunakan 62 di awal)
    instagram: "https://instagram.com/username_ig_kamu", // Ganti dengan link IG-mu
    github: "https://github.com/username_github_kamu"
  }
};

export const projectsData = [
  {
    id: 1,
    slug: "carbonsight",
    title: "CarbonSight",
    shortDescription: "Platform monitoring dan estimasi jejak karbon.",
    fullDescription: "CarbonSight adalah aplikasi berbasis web yang dirancang untuk membantu pengguna memantau dan menghitung jejak karbon mereka dari aktivitas sehari-hari. Proyek ini mengintegrasikan kalkulasi dinamis dan visualisasi data yang intuitif.",
    image: "/proyek_1.png", // Nanti bisa diganti dengan path gambar aslimu di folder public atau assets
    techStack: ["React.js", "Tailwind CSS", "Node.js"],
    demoLink: "-",
    githubLink: "https://github.com/aziz-prayogi/CarbonSight.git"
  },
  {
    id: 2,
    slug: "sistem-informasi-sekolah",
    title: "Sistem Informasi Sekolah",
    shortDescription: "Dashboard manajemen data siswa dan guru.",
    fullDescription: "Aplikasi full-stack yang dikembangkan sebagai bagian dari tugas PPLG. Fitur utamanya mencakup sistem CRUD untuk data akademik, autentikasi multi-role (Admin, Guru, Siswa), dan rekapitulasi nilai otomatis.",
    image: "https://placehold.co/600x400/png",
    techStack: ["Laravel", "PHP", "MySQL", "Flowbite"],
    demoLink: "",
    githubLink: "https://github.com/username/si-sekolah"
  }
];


export const techStackData = [
  { name: "React.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Flutter", category: "Mobile" },
  { name: "Git & GitHub", category: "Tools" }
];

export const certificatesData = [
  {
    id: 1,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Academy",
    date: "Januari 2026",
    image: "/cert-1.jpg"
  },
  {
    id: 2,
    title: "Medali Perak Pencak Silat",
    issuer: "Kejuaraan Daerah",
    date: "2025",
    image: "/cert-2.jpg" 
  },
  {
    id: 3,
    title: "Beasiswa Bootcamp IDCamp",
    issuer: "Indosat Ooredoo Hutchison",
    date: "2026",
    image: "/cert-3.jpg"
  }
];