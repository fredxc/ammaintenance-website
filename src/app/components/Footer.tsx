import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">AM Maintenance</h3>
            <p className="text-gray-400 leading-relaxed">
              Uw betrouwbare partner voor renovatie, aan- en uitbouw, en badkamer- en keukenverbouwingen in Nederland.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+31634508004" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                <Phone className="w-5 h-5" />
                <span>06 3450 8004</span>
              </a>
              <a href="mailto:info@am-maintenance.nl" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                <Mail className="w-5 h-5" />
                <span>info@am-maintenance.nl</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Nederland</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Onze Diensten</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• Renovaties van woningen</li>
              <li>• Aanbouw en uitbouw</li>
              <li>• Badkamerverbouwingen</li>
              <li>• Keukenverbouwingen</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© {currentYear} AM Maintenance. Alle rechten voorbehouden.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacybeleid</a>
              <a href="#" className="hover:text-white transition">Algemene voorwaarden</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
