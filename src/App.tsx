import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import HowItWorks from './components/sections/HowItWorks';
import Doctors from './components/sections/Doctors';
import Features from './components/sections/Features';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Doctors />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;