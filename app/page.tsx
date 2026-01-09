import { Audience } from "../components/Audience";
import { Differentials } from "../components/Differentials";
import { FAQ } from "../components/FAQ";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Location } from "../components/Location";
import { Process } from "../components/Process";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slatePro-50 text-slatePro-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Audience />
        <Process />
        <Differentials />
        <Testimonials />
        <FAQ />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
