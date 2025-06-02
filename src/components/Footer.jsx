import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
            <p className="text-gray-600">A modern full-stack template for building web applications.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/docs" className="text-gray-600 hover:text-gray-900">Documentation</Link></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">GitHub</a></li>
              <li><Link to="/support" className="text-gray-600 hover:text-gray-900">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: info@example.com</li>
              <li className="text-gray-600">Twitter: @example</li>
              <li className="text-gray-600">GitHub: @example</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Full Stack Template. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 