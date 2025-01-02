import { Link } from '@remix-run/react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white relative z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link to="/">Benjamin Jacob</Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">À propos</Link>
            <Link to="/projects" className="hover:text-blue-400 transition-colors">Projets</Link>
            <Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:hidden flex-col space-y-4 pt-4 pb-4`}
        >
          <Link 
            to="/" 
            className="hover:text-blue-400 transition-colors px-2 py-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            to="/about" 
            className="hover:text-blue-400 transition-colors px-2 py-1"
            onClick={() => setIsMenuOpen(false)}
          >
            À propos
          </Link>
          <Link 
            to="/projects" 
            className="hover:text-blue-400 transition-colors px-2 py-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Projets
          </Link>
          <Link 
            to="/blog" 
            className="hover:text-blue-400 transition-colors px-2 py-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            className="hover:text-blue-400 transition-colors px-2 py-1"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
