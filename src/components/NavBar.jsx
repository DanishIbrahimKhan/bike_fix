import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-white fixed top-0 w-full z-50 transition-transform duration-300 border-b border-yellow-400 shadow ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-extrabold text-yellow-500 uppercase tracking-wide">BikeFix</span>
        </div>

        {/* Search & City Selector */}
        <div className="hidden md:flex items-center space-x-3 flex-1 justify-center">
          <input
            type="text"
            placeholder="Search services..."
            className="px-4 py-2 rounded-md bg-gray-100 text-gray-900 border border-gray-300 focus:outline-yellow-400"
          />
          <select className="px-4 py-2 rounded-md bg-gray-100 text-gray-900 border border-gray-300">
            <option>City 1</option>
            <option>City 2</option>
            <option>City 3</option>
          </select>
        </div>

        {/* Call, WhatsApp & Menu */}
        <div className="flex items-center space-x-3">
          {/* WhatsApp Button - visible on all screen sizes */}
          <a
            href="https://wa.me/919172237224?text=Hi%2C%20I%27m%20interested%20in%20your%20BikeFix%20services.%20Could%20you%20please%20tell%20me%20more%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-500 text-white font-semibold px-3 py-2 rounded-md hover:bg-green-600 transition text-sm md:text-base"
          >
            <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
          </a>

          {/* Call Button - only visible on desktop */}
          <a
            href="tel:888888888"
            className="hidden md:inline-block bg-yellow-500 text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-400 transition"
          >
            Call 888888888
          </a>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? (
              <X className="w-6 h-6 text-yellow-500" />
            ) : (
              <Menu className="w-6 h-6 text-yellow-500" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <ul className="absolute top-full right-0 mt-3 w-56 bg-white text-gray-800 rounded-md shadow-md border border-gray-200">
            {["Home", "Services", "About Us", "FAQs", "Contact"].map((item) => (
              <li key={item} className="px-6 py-3 hover:bg-yellow-100 border-b border-gray-200">
                <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`}>{item}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
