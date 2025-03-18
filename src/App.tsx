import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SolarCalculator from "./pages/SolarCalculator";
import SolarFAQs from "./pages/SolarFAQs";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import ResidentialSolar from "./pages/ResidentialSolar";
import CommercialSolar from "./pages/CommercialSolar";
import BatteryStorage from "./pages/BatteryStorage";
import SolarFinancing from "./pages/SolarFinancing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solar-calculator" element={<SolarCalculator />} />
          <Route path="/solar-faqs" element={<SolarFAQs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support" element={<Support />} />
          <Route path="/residential-solar" element={<ResidentialSolar />} />
          <Route path="/commercial-solar" element={<CommercialSolar />} />
          <Route path="/battery-storage" element={<BatteryStorage />} />
          <Route path="/solar-financing" element={<SolarFinancing />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
