import { Home, Building2, Wrench, ArrowRight } from "lucide-react";
const renovationImage = "/img3.webp";
const bathroomImage = "/img4.webp";
const kitchenImage = "/img5.webp";

const services = [
  {
    id: 1,
    icon: Home,
    title: "Renovaties van woningen",
    description:
      "Geef uw woning een nieuwe uitstraling met een volledige of gedeeltelijke renovatie. Van schilderwerk tot vloeren, wij zorgen voor een naadloos proces en een prachtig eindresultaat waar u jaren plezier van heeft.",
    image: renovationImage,
    benefits: [
      "Complete begeleiding",
      "Vakkundig afgewerkt",
      "Tijdig opgeleverd",
    ],
  },
  {
    id: 2,
    icon: Building2,
    title: "Aanbouw en uitbouw",
    description:
      "Meer ruimte nodig? Wij realiseren professionele aan- en uitbouwprojecten die perfect aansluiten bij uw bestaande woning. Van ontwerp tot oplevering, alles uit één hand met aandacht voor detail en kwaliteit.",
    image: kitchenImage,
    benefits: [
      "Deskundig advies",
      "Vergunningen geregeld",
      "Zorgvuldige uitvoering",
    ],
  },
  {
    id: 3,
    icon: Wrench,
    title: "Badkamer- en keukenverbouwingen",
    description:
      "Van verouderde ruimte naar uw droomkeuken of luxe badkamer. Wij verzorgen het volledige traject: ontwerp, loodgieterwerk, tegelwerk en afwerking. Functioneel, modern en op maat gemaakt.",
    image: bathroomImage,
    benefits: [
      "Moderne ontwerpen",
      "Hoogwaardig materiaal",
      "Vakkundig geïnstalleerd",
    ],
  },
];

export function Services() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Onze Diensten
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Specialist in renovatie, aan- en uitbouw, en badkamer- en
            keukenverbouwingen in Nederland
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3 pt-2">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all group"
                >
                  <span>Vraag een offerte aan</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg hover:bg-orange-700 transition text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            <span>Ontvang een vrijblijvende offerte</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
