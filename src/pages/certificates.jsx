import { techStackData, certificatesData } from "../data/projectsData";

export default function Certificates() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-10">
        
        
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Tech <span className="text-blue-600">Stack</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Teknologi dan *tools* yang saya gunakan untuk membangun aplikasi.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStackData.map((tech, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-xl px-6 py-4 flex items-center justify-center hover:shadow-md transition-shadow hover:-translate-y-1 duration-300"
              >
                <span className="text-lg font-bold text-gray-800 dark:text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Garis Pembatas */}
        <hr className="border-gray-200 dark:border-gray-700 my-16" />

        {/* ========================================== */}
        {/* BAGIAN 2: CERTIFICATES                     */}
        {/* ========================================== */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Lisensi & <span className="text-blue-600">Sertifikat</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Validasi keahlian dan pencapaian yang telah saya raih.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificatesData.map((cert) => (
              <div 
                key={cert.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Gambar Sertifikat */}
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-64 object-cover bg-gray-200 border-b border-gray-100" 
                />
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-blue-600 font-semibold text-sm mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Diterbitkan: {cert.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}