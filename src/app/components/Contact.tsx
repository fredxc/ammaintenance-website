import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Vraag een vrijblijvende offerte aan
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Neem contact met ons op en ontdek wat wij voor u kunnen betekenen.
            Wij staan klaar om uw vragen te beantwoorden.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Phone */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-blue-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Telefoon</h3>
            <a
              href="tel:+31634508004"
              className="text-lg text-gray-600 hover:text-blue-950 transition block mb-2"
            >
              06 3450 8004
            </a>
            <p className="text-sm text-gray-500">Ma-Vr: 08:00 - 18:00</p>
          </div>

          {/* Email */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-blue-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <a
              href="mailto:info@asatimmerwerken.nl"
              className="text-lg text-gray-600 hover:text-blue-950 transition block mb-2 break-words"
            >
              info@asatimmerwerken.nl
            </a>
            <p className="text-sm text-gray-500">We reageren binnen 24 uur</p>
          </div>

          {/* Location */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-blue-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Werkgebied</h3>
            <p className="text-lg text-gray-600 mb-2">Nederland</p>
            <p className="text-sm text-gray-500">Actief in heel Nederland</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 md:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Klaar om te starten?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Neem vandaag nog contact met ons op voor een vrijblijvende offerte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+31634508004"
                className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-950 transition text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                <Phone className="w-6 h-6" />
                <span>Bel ons direct</span>
              </a>
              <a
                href="mailto:info@asatimmerwerken.nl"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 border-2 border-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                <Mail className="w-6 h-6" />
                <span>Stuur een email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Waarom ASA Timmerwerken?
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Vrijblijvende offerte op maat
                </h4>
                <p className="text-sm text-gray-600">
                  Geen verplichtingen, alleen transparante prijzen
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Transparante prijzen
                </h4>
                <p className="text-sm text-gray-600">
                  Geen verrassingen achteraf, duidelijke communicatie
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Ervaren vakmannen
                </h4>
                <p className="text-sm text-gray-600">
                  Professioneel werk met oog voor detail
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Scherpe prijzen
                </h4>
                <p className="text-sm text-gray-600">
                  Kwaliteit hoeft niet duur te zijn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
