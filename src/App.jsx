import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/home";
import ProjectDetail from "./pages/projectdetail";
import Projects from "./pages/projects";
import Certificates from "./pages/certificates"; ///Users/yogi/Documents/imam ahmad aziz prayogi/project/portofolio-v3/src/pages/Certificates.jsx
import FooterComponent from "./components/FooterComponent"; 

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavbarComponent />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} /> 
            
            {/* 👇 2. Tambahkan rutenya di sini */}
            <Route path="/certificates" element={<Certificates />} />
            
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>

        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;