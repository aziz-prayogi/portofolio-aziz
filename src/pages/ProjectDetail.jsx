import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center text-gray-100">
        <h1 className="text-2xl font-bold text-red-400">Project tidak ditemukan 😢</h1>
        <Link to="/" className="mt-4 text-blue-400 hover:text-blue-300 hover:underline transition-colors">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tombol Back */}
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-blue-400 mb-8 font-medium transition-colors">
          ← Kembali ke Beranda
        </Link>

        {/* Header Project */}
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          {project.title}
        </h1>
        
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, index) => (
            <span key={index} className="bg-gray-800 text-blue-400 border border-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Gambar Project */}
        <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-800 mb-8">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full object-cover max-h-96 hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Konten Deskripsi Lengkap */}
        <div className="text-gray-300 mb-10 space-y-4">
          <h2 className="text-2xl font-bold text-white mb-4">Tentang Project Ini</h2>
          <p className="leading-relaxed text-gray-400">{project.fullDescription}</p>
        </div>

        {/* Tombol Aksi (Demo & GitHub) */}
        <div className="flex gap-4 border-t border-gray-800 pt-8">
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors shadow-lg shadow-blue-600/20"
            >
              Live Demo
            </a>
          )}
          
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 font-semibold py-2.5 px-6 rounded-lg transition-colors"
            >
              Source Code
            </a>
          )}
        </div>

      </div>
    </div>
  );
}