import { Navbar } from "@/components/Navbar";
import { SolarFAQsSection } from "@/components/SolarFAQsSection";
import { Footer } from "@/components/Footer";

const SolarFAQs = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="pt-20">
        <SolarFAQsSection />
      </div>
      <Footer />
    </div>
  );
};

export default SolarFAQs; 