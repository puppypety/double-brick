import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Factory, 
  Settings, 
  CheckCircle, 
  TrendingDown, 
  Wrench,
  Quote
} from 'lucide-react';

// --- CONFIGURATION & DATA ---
const BRAND = {
  name: "DOUBLE BRICK",
  colors: {
    primary: "#C15433", // Terracotta / Burnt Orange
    secondary: "#1E293B", // Slate 800
    accent: "#E2E8F0", // Slate 200
  }
};

const PAGES = {
  HOME: 'home',
  PROCESS: 'process',
  QUALITY: 'quality',
  LEAN: 'lean',
  MAINTENANCE: 'maintenance'
};

const TEAM_MEMBERS = [
  { id: 1, name: "Name Surname", role: "Project Manager", quote: "Efficiency is doing better what is already being done." },
  { id: 2, name: "Name Surname", role: "Lead Engineer", quote: "Quality is not an act, it is a habit." },
  { id: 3, name: "Name Surname", role: "Quality Analyst", quote: "Continuous improvement is better than delayed perfection." },
  { id: 4, name: "Name Surname", role: "Lean Specialist", quote: "The most dangerous kind of waste is the waste we do not recognize." },
  { id: 5, name: "Name Surname", role: "Maintenance Tech", quote: "If you don't schedule time for maintenance, your equipment will schedule it for you." },
];

// --- MAIN APPLICATION COMPONENT ---
export default function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800">
      {/* Import Montserrat Font */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap');
        body { font-family: 'Montserrat', sans-serif; }
      `}} />

      {/* --- NAVIGATION BAR --- */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 border-b-4" style={{ borderColor: BRAND.colors.primary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigateTo(PAGES.HOME)}>
              <Factory className="h-8 w-8 mr-3" style={{ color: BRAND.colors.primary }} />
              <span className="font-extrabold text-2xl tracking-widest uppercase">{BRAND.name}</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              <NavItem active={currentPage === PAGES.HOME} onClick={() => navigateTo(PAGES.HOME)} icon={<Factory size={18}/>}>Overview</NavItem>
              <NavItem active={currentPage === PAGES.PROCESS} onClick={() => navigateTo(PAGES.PROCESS)} icon={<Settings size={18}/>}>Process Map</NavItem>
              <NavItem active={currentPage === PAGES.QUALITY} onClick={() => navigateTo(PAGES.QUALITY)} icon={<CheckCircle size={18}/>}>Quality</NavItem>
              <NavItem active={currentPage === PAGES.LEAN} onClick={() => navigateTo(PAGES.LEAN)} icon={<TrendingDown size={18}/>}>Lean Waste</NavItem>
              <NavItem active={currentPage === PAGES.MAINTENANCE} onClick={() => navigateTo(PAGES.MAINTENANCE)} icon={<Wrench size={18}/>}>Maintenance</NavItem>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-slate-800 border-t border-slate-700 pb-4">
            <div className="flex flex-col space-y-2 px-4 pt-4">
              <MobileNavItem active={currentPage === PAGES.HOME} onClick={() => navigateTo(PAGES.HOME)}>Overview</MobileNavItem>
              <MobileNavItem active={currentPage === PAGES.PROCESS} onClick={() => navigateTo(PAGES.PROCESS)}>Manufacturing Process Map</MobileNavItem>
              <MobileNavItem active={currentPage === PAGES.QUALITY} onClick={() => navigateTo(PAGES.QUALITY)}>Quality Control & Defect</MobileNavItem>
              <MobileNavItem active={currentPage === PAGES.LEAN} onClick={() => navigateTo(PAGES.LEAN)}>Lean Waste Analysis</MobileNavItem>
              <MobileNavItem active={currentPage === PAGES.MAINTENANCE} onClick={() => navigateTo(PAGES.MAINTENANCE)}>Maintenance Plan & Cost</MobileNavItem>
            </div>
          </div>
        )}
      </nav>

      {/* --- PAGE CONTENT ROUTING --- */}
      <main className="flex-grow">
        {currentPage === PAGES.HOME && <HomePage />}
        {currentPage === PAGES.PROCESS && <ContentPage title="Manufacturing Process Map" imageSrc="1.jpg" />}
        {currentPage === PAGES.QUALITY && <ContentPage title="Quality Control & Defect" imageSrc="2.jpg" />}
        {currentPage === PAGES.LEAN && <ContentPage title="Lean Waste Analysis (7 Wastes)" imageSrc="3.jpg" />}
        {currentPage === PAGES.MAINTENANCE && <ContentPage title="Maintenance Plan & Cost Estimation" imageSrc="4.jpg" />}
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center border-t-2" style={{ borderColor: BRAND.colors.primary }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <Factory className="h-8 w-8 mb-4 opacity-50" />
          <p className="font-semibold text-slate-300 uppercase tracking-wider">{BRAND.name} © 2026</p>
          <p className="text-sm mt-2">Industrial Management Portfolio • Engineering Materials ENG-203</p>
        </div>
      </footer>
    </div>
  );
}

// --- SUBCOMPONENTS ---

// Home Page
const HomePage = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=2000" 
            alt="Brick background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 opacity-90"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-32 sm:py-48 text-center">
          <div className="inline-block mb-6 p-4 rounded-full bg-slate-800/50 backdrop-blur-sm border-2 border-[#C15433]">
            <Factory className="h-16 w-16" style={{ color: BRAND.colors.primary }} />
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold uppercase tracking-widest drop-shadow-lg mb-6">
            <span className="text-white">Double</span> <span style={{ color: BRAND.colors.primary }}>Brick</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-light tracking-widest max-w-2xl mx-auto uppercase">
            Industrial Management Portfolio
          </p>
        </div>
      </div>

      {/* Visual Showcase Section */}
      <div className="py-20 bg-slate-100 border-t border-slate-200 shadow-inner">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="Project Roadmap & Deliverables" />
          
          <div className="mt-12 flex flex-col items-center space-y-12">
            {/* Main Roadmap Image */}
            <div className="w-full relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C15433] to-slate-800 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-2 rounded-xl shadow-2xl">
                <FallbackImage 
                  src="Picture1.jpg" 
                  alt="Mini-Project Roadmap" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>

            {/* Deliverables List Image */}
            <div className="w-full max-w-xl relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-slate-800 to-[#C15433] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
               <div className="relative bg-white p-2 rounded-xl shadow-2xl flex justify-center">
                  <FallbackImage 
                    src="Picture2.png" 
                    alt="Deliverables List" 
                    className="w-full h-auto rounded-lg object-contain max-h-[400px]"
                  />
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="The Engineering Team" />
          
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#C15433] transition-colors duration-300 z-10"></div>
                  <img 
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1E293B&color=fff&size=200`} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full shadow-lg object-cover relative z-0"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-[#C15433] text-white p-2 rounded-full shadow-md z-20">
                    <Factory size={16} />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-[#C15433] uppercase tracking-wide mb-4">{member.role}</p>
                
                <div className="relative w-full px-4 text-slate-500 italic text-sm">
                   <Quote className="absolute top-0 left-0 text-slate-200 h-6 w-6 -z-10 transform -translate-x-2 -translate-y-2" />
                  "{member.quote}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Detail Content Page
const ContentPage = ({ title, imageSrc }) => {
  return (
    <div className="py-12 bg-slate-50 min-h-screen animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-10 text-center">
           <h1 className="text-3xl md:text-5xl font-bold text-slate-800 inline-block relative pb-4">
             {title}
             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-[#C15433] rounded-full"></div>
           </h1>
        </div>
        
        <div className="bg-white p-2 sm:p-4 rounded-xl shadow-2xl border border-slate-200">
           {/* Detailed Full-Width Image Container */}
           <FallbackImage 
              src={imageSrc} 
              alt={title} 
              className="w-full h-auto object-contain rounded-lg shadow-sm"
           />
        </div>
        
        <div className="mt-8 text-center">
            <p className="text-slate-500 max-w-2xl mx-auto">
              Please review the detailed analysis mapped out above. Ensure your local files are placed in the same directory as this index file to load the high-resolution charts.
            </p>
        </div>

      </div>
    </div>
  );
};

// UI Helpers
const NavItem = ({ children, active, onClick, icon }) => (
  <button 
    onClick={onClick}
    className={`flex items-center px-4 py-2 mx-1 rounded-md text-sm font-medium transition-colors duration-200 ${
      active 
        ? 'bg-[#C15433] text-white shadow-md' 
        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
    }`}
  >
    <span className="mr-2 opacity-80">{icon}</span>
    {children}
  </button>
);

const MobileNavItem = ({ children, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
      active 
        ? 'bg-[#C15433] text-white' 
        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
    }`}
  >
    {children}
  </button>
);

const SectionHeader = ({ title }) => (
  <div className="text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 inline-block relative pb-4">
      {title}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-[#C15433] rounded-full"></div>
    </h2>
  </div>
);

// Fallback Image Component (Handles missing local files in preview)
const FallbackImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  
  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl p-12 text-center text-slate-500 min-h-[400px] ${className}`}>
        <Factory size={48} className="mb-4 text-slate-300" />
        <p className="font-semibold text-lg text-slate-700">Image file "{src}" not found.</p>
        <p className="text-sm mt-2 max-w-md">
          To view this chart, ensure the file <strong>{src}</strong> is saved in the exact same folder where you are hosting or viewing this page.
        </p>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
};