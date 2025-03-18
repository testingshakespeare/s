
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const ProcessSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("process");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setLoaded(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "We'll discuss your energy needs, analyze your current usage, and determine if solar is right for you."
    },
    {
      number: "02",
      title: "Custom Design",
      description: "Our engineers will design a solar system specifically tailored to your property and energy requirements."
    },
    {
      number: "03",
      title: "Professional Installation",
      description: "Our certified technicians will install your system with minimal disruption to your daily routine."
    },
    {
      number: "04",
      title: "Start Saving",
      description: "Begin generating clean energy and watch your utility bills decrease month after month."
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-sunfinity-50 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div 
            className={cn(
              "inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200 mb-4 transition-all duration-500 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            <p className="text-sunfinity-800 text-sm font-medium">Quick & Quality</p>
          </div>
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            How It Works
          </h2>
          <p 
            className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-500 delay-200 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            Switching to solar has never been easier. Our streamlined process ensures a smooth transition to clean, renewable energy.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-sunfinity-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={cn(
                  "glass-panel rounded-2xl p-8 transition-all duration-500 opacity-0 translate-y-8",
                  loaded && "opacity-100 translate-y-0"
                )}
                style={{ transitionDelay: loaded ? `${index * 150}ms` : "0ms" }}
              >
                <div className="w-12 h-12 rounded-full bg-sunfinity-500 text-white flex items-center justify-center text-lg font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
