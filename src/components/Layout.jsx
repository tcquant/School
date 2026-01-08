import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="text-3xl font-logo font-bold text-[var(--color-primary)] tracking-tighter">
          YUVATO
        </Link>

        {/* Desktop Menu */}
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 font-medium text-gray-600">
          <Link to="/" className="px-3 py-2 text-sm hover:text-[var(--color-accent)] rounded-lg hover:bg-red-50 transition-colors">Home</Link>

          <div className="w-px h-6 bg-gray-200 mx-2"></div>

          {/* Services Top Level */}
          <Link to="/smart-panels" className="px-3 py-2 text-sm hover:text-[var(--color-accent)] rounded-lg hover:bg-red-50 transition-colors">Smart Panels</Link>
          <Link to="/cbse-affiliation" className="px-3 py-2 text-sm hover:text-[var(--color-accent)] rounded-lg hover:bg-red-50 transition-colors">CBSE</Link>
          <Link to="/auditing" className="px-3 py-2 text-sm hover:text-[var(--color-accent)] rounded-lg hover:bg-red-50 transition-colors">Auditing</Link>
          <Link to="/uniforms" className="px-3 py-2 text-sm hover:text-[var(--color-accent)] rounded-lg hover:bg-red-50 transition-colors">Uniforms</Link>
          <Link to="/stationery" className="px-3 py-2 text-sm hover:text-[var(--color-accent)] rounded-lg hover:bg-red-50 transition-colors">Stationery</Link>
          <Link to="/advertising" className="px-3 py-2 text-sm hover:text-[var(--color-accent)] rounded-lg hover:bg-red-50 transition-colors">Advertising</Link>

          <Link to="/#contact" className="ml-4 btn btn-primary text-white !py-2.5 !px-6 text-sm rounded-full shadow-lg shadow-red-200">Contact Us</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container flex flex-col gap-4 py-6 font-medium">
              <Link to="/">Home</Link>
              <div className="pl-4 flex flex-col gap-3 border-l-2 border-gray-100">
                <span className="text-gray-400 text-xs uppercase tracking-wider">Services</span>
                <Link to="/smart-panels">Smart Panels</Link>
                <Link to="/cbse-affiliation">CBSE Affiliation</Link>
                <Link to="/auditing">School Auditing</Link>
                <Link to="/uniforms">School Uniforms</Link>
                <Link to="/stationery">School Stationery</Link>
                <Link to="/advertising">School Advertising</Link>
              </div>
              {/* Clients Link Removed */}
              <Link to="/#contact" className="text-[var(--color-accent)]">Contact Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[var(--color-primary)] text-white py-12 mt-auto">
    <div className="container grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-3xl font-logo font-bold mb-4 text-white tracking-tighter">YUVATO</h3>
        <p className="text-gray-400">Transforming educational institutions with premium services and smart technology.</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
        <ul className="space-y-2 text-gray-400">
          <li><Link to="/cbse-affiliation" className="hover:text-white">CBSE Affiliation</Link></li>
          <li><Link to="/auditing" className="hover:text-white">School Auditing</Link></li>
          <li><Link to="/smart-panels" className="hover:text-white">Smart Panels</Link></li>
          <li><Link to="/advertising" className="hover:text-white">Advertising</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4 text-white">Products</h4>
        <ul className="space-y-2 text-gray-400">
          <li><Link to="/uniforms" className="hover:text-white">School Uniforms</Link></li>
          <li><Link to="/stationery" className="hover:text-white">Stationery</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
        <p className="text-gray-400">New Delhi, India</p>
        <p className="text-gray-400">info@yuvato.com</p>
      </div>
    </div>
    <div className="container mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Yuvato. All rights reserved.
    </div>
  </footer>
);

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
