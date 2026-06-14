// src/data/projectsData.js

export const profileData = {
  name: "Imam Ahmad Aziz Prayogi",
  nickname: "Aziz",
  role: "Software Developer & Android Developer",
  bio: "Siswa PPLG di SMK Wikrama Bogor yang antusias dalam membangun aplikasi web modern dan responsif. Berpengalaman menggunakan ekosistem React, Laravel, Node.js, dan terlebih di Flutter.",
  contacts: {
    whatsapp: "6282211661156", 
    instagram: "https://instagram.com/azzs_pryog", 
    github: "https://github.com/aziz-prayogi"
  }
};

export const projectsData = [
  {
    id: 1,
    slug: "carbonsight",
    title: "CarbonSight",
    shortDescription: "Platform monitoring dan estimasi jejak karbon.",
    fullDescription: "CarbonSight adalah aplikasi berbasis web yang dirancang untuk membantu pengguna memantau dan menghitung jejak karbon mereka dari aktivitas sehari-hari. Proyek ini mengintegrasikan kalkulasi dinamis dan visualisasi data yang intuitif.",
    image: "/proyek_1.png",
    techStack: ["React.js", "Tailwind CSS", "Node.js"],
    demoLink: "-",
    githubLink: "https://github.com/aziz-prayogi/CarbonSight.git"
  },
  {
    id: 2,
    slug: "sistem-sewa-wisma",
    title: "Sistem Sewa Wisma",
    shortDescription: "Aplikasi sewa Wisma melalui hp atau aplikasi",
    fullDescription: "Aplikasi untuk melakukan pengurusan data sewa wisma dan juga melakukan sewa wisma (kontrakan/kos), mempermudah dari sisi pemilik(admin) dan juga sisi penyewa(user)",
    image: "/proyek_2.png",
    techStack: ["Flutter", "Gin", "MySQL", "Go Lang"],
    demoLink: "",
    githubLink: "https://github.com/aziz-prayogi/E-wisma.git"
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
    date: "November 2024",
    image: "/certificate_1.jpg"
  },
  {
    id: 2,
    title: "Dasar JavaScript",
    issuer: "Dicoding Academy",
    date: "2025",
    image: "/certificate_2.jpg" 
  },
  {
    id: 3,
    title: "Public Speaking",
    issuer: "PT. Trias Edukasi Indonesia",
    date: "2024",
    image: "/certificate_3.jpg"
  }
];