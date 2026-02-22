import { Phone, Mail } from 'lucide-react';
import heroImage from 'figma:asset/994891f90c73eeb9b5f00343242ba3c6770cd27b.png';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Uw betrouwbare partner voor{' '}
              <span className="text-orange-600">renovatie en onderhoud</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Van complete woningrenovaties tot aan- en uitbouw, badkamer- en keukenverbouwingen. 
              Vakmanschap, duidelijke communicatie en transparante prijzen staan bij ons centraal.
            </p>
            
            {/* Trust Elements */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Vakmanschap</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Transparante prijzen</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Duidelijke communicatie</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="tel:+31612345678"
                className="flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                <Phone className="w-6 h-6" />
                <span>Bel ons direct</span>
              </a>
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg hover:bg-orange-50 transition text-lg font-semibold"
              >
                <Mail className="w-6 h-6" />
                <span>Vraag een offerte aan</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="AM Maintenance renovatieproject"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
