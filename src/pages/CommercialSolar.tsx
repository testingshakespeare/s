import { Navbar } from "@/components/Navbar";
import { CommercialSolarSection } from "@/components/CommercialSolarSection";
import { Footer } from "@/components/Footer";

const CommercialSolar = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <CommercialSolarSection />
      <Footer />
    </div>
  );
};

export default CommercialSolar; 