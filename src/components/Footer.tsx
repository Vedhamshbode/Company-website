import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const pageLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Industries', path: '/industries' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  const productLinks = [
    { name: 'Industrial Robots', path: '/product/industrial-robots' },
    { name: 'Service Robots', path: '/product/service-robots' },
    { name: 'AI Solutions', path: '/product/ai-solutions' },
    { name: 'Automation Systems', path: '/product/automation-systems' },
  ];

  const resourceLinks = [
    { name: 'Blog', path: '/resources' },
    { name: 'Case Studies', path: '/resources' },
    { name: 'White Papers', path: '/resources' },
    { name: 'Technical Docs', path: '/resources' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">RoboTech Solutions</span>
            </Link>
            <p className="text-gray-300 mb-4 text-sm">
              Leading the future of robotics and automation with innovative solutions for modern industries.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@robotechsolutions.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Company</h3>
            <ul className="space-y-2">
              {pageLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Products</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 RoboTech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;