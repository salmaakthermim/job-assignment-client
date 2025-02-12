import { FaFacebook, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">📚 Online Group Study</h2>
          <p className="mt-2 text-gray-400">
            A collaborative learning platform where friends can create, submit, 
            and grade assignments together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="mt-3 flex space-x-4">
            <a href="#" className="hover:text-white transition duration-300">
              🌐 Website
            </a>
            <a href="#" className="hover:text-white flex items-center gap-2  transition duration-300">
            <FaTwitter /> Twitter
            </a>
            <a href="#" className="hover:text-white flex items-center gap-2 transition duration-300">
            <FaFacebook /> Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Online Group Study. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
