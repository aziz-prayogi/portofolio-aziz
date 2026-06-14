import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
// 1. Tambahkan import ikon sosmed di sini
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { profileData, projectsData } from "../data/projectsData";

export default function Home() {

    // Link WhatsApp dengan teks otomatis
    const waLink = `https://wa.me/${profileData.contacts.whatsapp}?text=Halo%20Aziz,%20saya%20melihat%20portofolio%20kamu%20dan%20tertarik%20untuk%20berdiskusi.`;

    return (
        <div className="bg-gray-50 dark:bg-gray-900">

            {/* ========================================== */}
            {/* 1. HERO SECTION                            */}
            {/* ========================================== */}
            <div className="min-h-screen flex items-center pt-16 lg:pt-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">

                        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                            <h2 className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
                                Siswa PPLG | SMK Wikrama Bogor
                            </h2>
                            <h1 className="mt-1 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
                                Halo, Saya <span className="text-blue-600">{profileData.nickname}</span>
                            </h1>
                            <h3 className="mt-3 text-xl font-medium text-gray-700 dark:text-gray-300">
                                {profileData.role}
                            </h3>

                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg dark:text-gray-400">
                                {profileData.bio} Selain antusias dalam coding, saya juga aktif mengasah kemampuan MC dan Pencak Silat.
                            </p>

                            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                                <a href="#projects">
                                    <Button color="blue" size="xl" className="w-full sm:w-auto font-semibold shadow-lg hover:shadow-xl transition-shadow">
                                        Lihat Portofolio Saya
                                    </Button>
                                </a>
                            </div>
                        </div>

                        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center lg:justify-center">
                            {/* Wadah foto dimodifikasi: dihapus flex-nya, ditambah overflow-hidden */}
                            <div className="relative mx-auto w-full rounded-lg lg:max-w-md aspect-square bg-white border-4 border-white shadow-xl overflow-hidden">
                                <img
                                    src="/Foto_Pribadi.jpg"
                                    alt="Foto Profil Aziz"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ========================================== */}
            {/* 2. PROJECTS SECTION                        */}
            {/* ========================================== */}
            <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        Project Unggulan
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col justify-between"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.shortDescription}</p>
                                </div>
                                <Link to={`/project/${project.slug}`} className="block text-center bg-gray-900 text-white font-medium py-3 rounded-lg"> Pelajari Selengkapnya → </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ========================================== */}
            {/* 3. CONTACT SECTION (ROMBAK TOTAL)          */}
            {/* ========================================== */}
            <div id="contact" className="min-h-screen bg-blue-600 dark:bg-blue-700 flex items-center justify-center pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    {/* L-Column: Foto Wajah Bulat Besar */}
                    <div className="lg:col-span-5 flex justify-center mb-12 lg:mb-0">
                        <div className="relative">
                            {/* Efek Lingkaran Dekoratif di belakang */}
                            <div className="absolute inset-0 scale-110 rounded-full bg-blue-500 blur-2xl opacity-50"></div>

                            {/* Frame Foto Bulat Putih */}
                            <div className="lg:col-span-5 flex justify-center mb-12 lg:mb-0">
                                <div className="relative">
                                    {/* Efek Lingkaran Dekoratif di belakang */}
                                    <div className="absolute inset-0 scale-110 rounded-full bg-blue-500 blur-2xl opacity-50"></div>

                                    {/* Frame Foto Bulat Putih (Class flex dan p-6 SUDAH DIHAPUS) */}
                                    <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-white">
                                        <img
                                            src="/Foto_Pribadi.jpg" 
                                            alt="Foto Aziz"
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* R-Column: Teks & Tombol Berlogo */}
                    <div className="lg:col-span-7 text-center lg:text-left text-white">
                        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                            Ayo Buat Sesuatu <br /> yang <span className="text-blue-100">Luar Biasa</span> Bersama!
                        </h2>
                        <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0">
                            Saya selalu terbuka untuk kolaborasi, kesempatan kerja, atau sekadar berdiskusi mengenai teknologi modern, UI/UX, bahkan Pencak Silat dan Public Speaking. Jangan ragu untuk menghubungi saya.
                        </p>

                        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                            {/* Tombol WhatsApp Putih Mencolok */}
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-lg font-bold rounded-xl text-blue-700 bg-white hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                <BsWhatsapp className="w-7 h-7" />
                                Hubungi via WhatsApp
                            </a>

                            {/* Tombol Instagram Transparan */}
                            <a
                                href={profileData.contacts.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-lg font-bold rounded-xl text-white bg-transparent hover:bg-white/10 transition-all hover:-translate-y-1"
                            >
                                <BsInstagram className="w-7 h-7" />
                                Ikuti di Instagram
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}