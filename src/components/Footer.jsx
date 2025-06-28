import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Mechanic</h2>
          <p className="text-sm">
            Reliable doorstep bike repair and maintenance services. 100% genuine spare parts. Hassle-free experience in your city.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-400 text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#pricing" className="hover:text-yellow-400">Pricing</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-yellow-400 text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-yellow-400" />
              <span>123 example address</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" />
              <a href="tel:888888888" className="hover:text-yellow-400">+91 8888888888</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:support@apnamechanic.com" className="hover:text-yellow-400">support@apnamechanic.com</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-yellow-400 text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-yellow-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-yellow-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-yellow-400 hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}
