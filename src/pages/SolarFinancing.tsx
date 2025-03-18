import { Navbar } from "@/components/Navbar";
import { SolarFinancingSection } from "@/components/SolarFinancingSection";
import { Footer } from "@/components/Footer";

const SolarFinancing = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <SolarFinancingSection />
      <Footer />
    </div>
  );
};

export default SolarFinancing; 