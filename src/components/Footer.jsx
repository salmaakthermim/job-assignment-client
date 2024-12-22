import React from 'react';

const Footer = () => {
    return (
        <div>
               <footer className="bg-gray-900 text-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Company Info */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold text-white mb-4">Your Company</h2>
            <p className="text-gray-400">
              Empowering you with tools to manage your projects effectively. We aim to make teamwork seamless and productive.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/features" className="hover:text-white">Features</a></li>
              <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="/faq" className="hover:text-white">FAQs</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-white mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Follow us on social media for the latest updates and features.
            </p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
            <p className="text-gray-400">
              Email: <a href="mailto:support@yourcompany.com" className="hover:text-white">support@yourcompany.com</a>
            </p>
            <p className="text-gray-400">
              Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;