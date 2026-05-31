import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

export default function ProjectDetail() {
  // 1. Mengambil 'slug' dari URL (misal: 'carbonsight')
  const { slug } = useParams();

  // 2. Mencari data project yang slug-nya cocok dengan URL
  const project = projectsData.find((p) => p.slug === slug);

  // 3. Jika URL ngawur (project tidak ditemukan), tampilkan pesan error
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Project tidak ditemukan 😢</h1>
        <Link to="/" className="mt-4 text-blue-600 hover:underline">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  // 4. Jika ketemu, tampilkan datanya
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tombol Back */}
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 font-medium">
          ← Kembali ke Beranda
        </Link>

        {/* Header Project */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Gambar Project */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full rounded-xl shadow-lg mb-8 object-cover max-h-96"
        />

        {/* Konten Deskripsi Lengkap */}
        <div className="prose prose-lg text-gray-600 mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Project Ini</h2>
          <p>{project.fullDescription}</p>
        </div>

        {/* Tombol Aksi (Demo & GitHub) */}
        <div className="flex gap-4 border-t border-gray-100 pt-8">
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors"
            >
              Live Demo
            </a>
          )}
          
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors"
            >
              Source Code
            </a>
          )}
        </div>

      </div>
    </div>
  );
}