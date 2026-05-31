import { Navbar, NavbarCollapse, NavbarToggle, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

export default function NavbarComponent() {
  const location = useLocation();

  return (
    <Navbar fluid rounded className="border-b shadow-sm sticky top-0 z-50 py-3">
      {/* 1. Bagian Kiri: Langsung pakai Link agar tidak ada <a> double */}
      <Link to="/" className="flex items-center">
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
          Aziz<span className="text-blue-600">.dev</span>
        </span>
      </Link>

      {/* 2. Bagian Kanan: Tombol Kontak & Toggle Mobile */}
      <div className="flex md:order-2">
        <a href="#contact">
          <Button color="blue" className="font-semibold">
            Hubungi Saya
          </Button>
        </a>
        <NavbarToggle />
      </div>

      {/* 3. Bagian Tengah: Menu Navigasi */}
      <NavbarCollapse>
        <Link 
          to="/" 
          className={`block py-2 pr-4 pl-3 md:p-0 ${
            location.pathname === '/' ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-700'
          }`}
        >
          Beranda
        </Link>
        <Link 
          to="/projects" 
          className={`block py-2 pr-4 pl-3 md:p-0 ${
            location.pathname === '/projects' ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-700'
          }`}
        >
          Projects
        </Link>
        <Link 
          to="/certificates" 
          className={`block py-2 pr-4 pl-3 md:p-0 ${
            location.pathname === '/certificates' ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-700'
          }`}
        >
          Certificate
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}