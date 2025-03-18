import { Navbar } from "@/components/Navbar";
import { BatteryStorageSection } from "@/components/BatteryStorageSection";
import { Footer } from "@/components/Footer";

const BatteryStorage = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <BatteryStorageSection />
      <Footer />
    </div>
  );
};

export default BatteryStorage; 