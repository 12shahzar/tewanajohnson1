import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pillar from "../components/Pillar";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import WelcomeModal from "../components/WelcomeModal";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <WelcomeModal />
      <Navbar />
      <Hero />
      <About />
      {/* <Services /> */}
      <Pillar />

      <Portfolio />
      <Footer />
    </main>
  );
}
