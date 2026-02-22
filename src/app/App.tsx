import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyCallButton } from './components/StickyCallButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* About Section */}
        <About />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Call Button */}
      <StickyCallButton />
    </div>
  );
}
