import { Link } from "react-router-dom";
import { Facebook, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">MyBlog</h2>
          <p className="text-sm leading-relaxed">
            MyBlog adalah platform berbagi artikel seputar teknologi, pemrograman, dan dunia digital. 
            Kami percaya bahwa berbagi ilmu adalah cara terbaik untuk berkembang bersama.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link to="/create" className="hover:text-white transition">Create Post</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-white transition">Login</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-400 transition">
              <Facebook size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-sky-400 transition">
              <Twitter size={22} />
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-gray-400 transition">
              <Github size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
}
