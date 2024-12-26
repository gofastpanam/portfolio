import { Link } from '@remix-run/react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link to="/">Benjamin Jacob</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">Accueil</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">À propos</Link>
            <Link to="/projects" className="hover:text-blue-400 transition-colors">Projets</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
