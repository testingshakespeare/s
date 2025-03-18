import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Star, StarHalf } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToQuoteForm = () => {
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
      // Get the navbar height to use as offset
      const navbar = document.querySelector('header');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      
      // Get the element's position relative to the viewport
      const elementPosition = quoteForm.getBoundingClientRect().top;
      // Get the current scroll position
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20; // Extra 20px for breathing space
      
      // Scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      // Fallback if for some reason the element isn't found
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const navbar = document.querySelector('header');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const scrollToProcessSection = () => {
    const processSection = document.getElementById('process');
    if (processSection) {
      // Get the navbar height to use as offset
      const navbar = document.querySelector('header');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      
      // Get the element's position relative to the viewport
      const elementPosition = processSection.getBoundingClientRect().top;
      // Get the current scroll position
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20; // Extra 20px for breathing space
      
      // Scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/80 backdrop-blur-xs"></div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-sunfinity-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-spin-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-sunfinity-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-spin-slow animation-delay-500"></div>
      
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div 
            className={cn(
              "w-full lg:w-1/2 space-y-6 transition-all duration-700 opacity-0 translate-y-8",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            <div className="flex flex-wrap gap-3">
              <div className="inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200">
                <p className="text-sunfinity-800 text-sm font-medium">Powering a sustainable future</p>
              </div>
              
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
                <div className="flex items-center">
                  <img 
                    src="/google-logo.png" 
                    alt="Google" 
                    className="w-5 h-5 mr-1.5 object-contain"
                  />
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <StarHalf className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-700 text-xs font-semibold ml-1">4.8</span>
                  </div>
                  <span className="mx-1 text-gray-400 text-xs">|</span>
                  <span className="text-gray-700 text-xs font-medium">2000+ reviews</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-pretty">
              Harness the Power of Sunshine with <span className="text-sunfinity-500">Sunfinity</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
              Transform your energy consumption with our premium solar solutions. Save money, reduce your carbon footprint, and take control of your energy future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={scrollToQuoteForm}
              >
                Get Free Personalized Estimate
              </Button>
              <Link to="/solar-calculator" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  className="rounded-full px-8 py-6 text-base font-semibold w-full"
                >
                  Calculate Your Savings
                </Button>
              </Link>
            </div>
            <div className="pt-8 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">30% Tax Credit</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Free Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">25-Year Warranty</span>
              </div>
            </div>
          </div>
          <div 
            className={cn(
              "w-full lg:w-1/2 transition-all duration-700 delay-300 opacity-0 translate-y-8",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sunfinity-200 to-sunfinity-400 rounded-2xl blur opacity-30"></div>
              <div className="glass-panel rounded-2xl overflow-hidden shadow-glass-lg">
                <img 
                  src="/inSquare.jpg" 
                  alt="Solar panels on modern home" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sunfinity-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse-subtle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
