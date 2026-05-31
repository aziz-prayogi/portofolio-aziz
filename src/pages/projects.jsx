import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Halaman */}
        <div className="text-center mb-16 pt-10">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Portofolio <span className="text-blue-600">Project</span>
          </h1>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Kumpulan karya, eksplorasi teknologi, dan tugas yang pernah saya bangun.
          </p>
        </div>

        {/* Grid System (Dibuat jadi 3 kolom untuk layar besar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              {/* Gambar Project */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-52 object-cover bg-gray-200" 
              />
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                    {project.shortDescription}
                  </p>
                  
                  {/* Badge Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tombol ke Detail */}
                <Link 
                  to={`/project/${project.slug}`} 
                  className="block text-center bg-gray-900 hover:bg-blue-600 text-white font-medium py-2.5 rounded-lg transition-colors"
                > 
                  Pelajari Selengkapnya → 
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}