import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">AM Maintenance</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition">
              Diensten
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition">
              Over Ons
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition">
              Contact
            </button>
          </nav>

          {/* Desktop Phone Button */}
          <a
            href="tel:+31612345678"
            className="hidden md:flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
          >
            <Phone className="w-5 h-5" />
            <span>06 1234 5678</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-gray-700 hover:text-orange-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-gray-700 hover:text-orange-600"
            >
              Diensten
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-gray-700 hover:text-orange-600"
            >
              Over Ons
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-gray-700 hover:text-orange-600"
            >
              Contact
            </button>
            <a
              href="tel:+31612345678"
              className="flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
            >
              <Phone className="w-5 h-5" />
              <span>06 1234 5678</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
