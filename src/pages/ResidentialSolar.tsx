import { Navbar } from "@/components/Navbar";
import { ResidentialSolarSection } from "@/components/ResidentialSolarSection";
import { Footer } from "@/components/Footer";

const ResidentialSolar = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <ResidentialSolarSection />
      <Footer />
    </div>
  );
};

export default ResidentialSolar; 