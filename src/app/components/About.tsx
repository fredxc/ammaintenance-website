import { Award, Users, Clock, Shield } from 'lucide-react';
import interiorImage from 'figma:asset/d429df17128e159b5b502b467042103c7e6d64ee.png';

const features = [
  {
    icon: Award,
    title: 'Vakmanschap',
    description: 'Jarenlange ervaring in renovatie en verbouwing'
  },
  {
    icon: Users,
    title: 'Klantgericht',
    description: 'Uw wensen staan centraal bij elk project'
  },
  {
    icon: Clock,
    title: 'Betrouwbaar',
    description: 'Tijdige oplevering volgens afspraak'
  },
  {
    icon: Shield,
    title: 'Kwaliteit',
    description: 'Hoogwaardige materialen en afwerking'
  }
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={interiorImage}
                alt="AM Maintenance project"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">15+</div>
                  <div className="text-sm text-gray-600">Jaar ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">500+</div>
                  <div className="text-sm text-gray-600">Projecten</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Over AM Maintenance
              </h2>
              <div className="w-20 h-1 bg-orange-600 mb-6"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              AM Maintenance is uw betrouwbare partner voor alle renovatie- en verbouwingswerkzaamheden 
              in Nederland. Met jarenlange ervaring en een team van vakkundige professionals zorgen wij 
              ervoor dat elk project met de grootst mogelijke zorg en precisie wordt uitgevoerd.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Wij begrijpen dat een verbouwing een grote stap is. Daarom werken wij met transparante 
              prijzen, duidelijke communicatie en vakmanschap waar u op kunt vertrouwen. Van het eerste 
              adviesgesprek tot en met de oplevering staan wij voor u klaar.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="tel:+31612345678"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                <span>Neem contact op</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
