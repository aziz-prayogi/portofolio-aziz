import { BsInstagram, BsGithub, BsWhatsapp } from "react-icons/bs";
import { profileData } from "../data/projectsData";

export default function FooterComponent() {
  // Fungsi untuk membuat format link WhatsApp yang otomatis ada teksnya
  const waLink = `https://wa.me/${profileData.contacts.whatsapp}?text=Halo%20Aziz,%20saya%20melihat%20portofolio%20kamu%20dan%20tertarik%20untuk%20berdiskusi.`;

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 mt-auto">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          
          {/* Logo Footer */}
          <span className="self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0 block text-center sm:inline-block">
            Aziz<span className="text-blue-600">.dev</span>
          </span>
          
          {/* Ikon Sosial Media */}
          <div className="flex space-x-6 justify-center sm:justify-end">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors">
              <BsWhatsapp className="h-6 w-6" />
            </a>
            <a href={profileData.contacts.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
              <BsInstagram className="h-6 w-6" />
            </a>
            <a href={profileData.contacts.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
              <BsGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        {/* Garis Pembatas */}
        <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
        
        {/* Copyright */}
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © {new Date().getFullYear()} {profileData.name}. Dibuat dengan React & Tailwind.
        </span>
      </div>
    </footer>
  );
}