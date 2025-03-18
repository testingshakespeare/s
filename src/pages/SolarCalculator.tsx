import { Navbar } from "@/components/Navbar";
import { SolarCalculatorSection } from "@/components/SolarCalculatorSection";
import { Footer } from "@/components/Footer";

const SolarCalculator = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <SolarCalculatorSection />
      <Footer />
    </div>
  );
};

export default SolarCalculator; 