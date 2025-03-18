import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sun, Home, Leaf, DollarSign, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ServicesSection = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("services");
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

  // Function to handle navigation and scroll to top
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const services = [
    {
      icon: <Sun className="w-8 h-8 text-sunfinity-500" />,
      title: "Residential Solar",
      description: "Custom solar solutions designed for your home's unique energy needs and aesthetic preferences.",
      path: "/residential-solar"
    },
    {
      icon: <Home className="w-8 h-8 text-sunfinity-500" />,
      title: "Commercial Solar",
      description: "Power your business with clean, renewable energy while reducing operational costs and carbon emissions.",
      path: "/commercial-solar"
    },
    {
      icon: <Leaf className="w-8 h-8 text-sunfinity-500" />,
      title: "Battery Storage",
      description: "Store excess energy for use during peak hours or outages with our advanced battery solutions.",
      path: "/battery-storage"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-sunfinity-500" />,
      title: "Solar Financing",
      description: "Flexible financing options including purchase, loan, lease, and power purchase agreements.",
      path: "/solar-financing"
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sunfinity-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sunfinity-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div 
            className={cn(
              "inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200 mb-4 transition-all duration-500 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            <p className="text-sunfinity-800 text-sm font-medium">Our Solar Services</p>
          </div>
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            Comprehensive Solar Solutions
          </h2>
          <p 
            className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-500 delay-200 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            We offer end-to-end solar services tailored to your specific needs, from initial consultation to installation and ongoing maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={cn(
                "bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 h-full transform hover:-translate-y-1 transition-all duration-500 opacity-0 translate-y-8 cursor-pointer",
                loaded && "opacity-100 translate-y-0",
                loaded && `transition-delay-${index * 100}`
              )}
              style={{ transitionDelay: loaded ? `${index * 100}ms` : "0ms" }}
              onClick={() => handleNavigation(service.path)}
            >
              <div className="w-14 h-14 rounded-full bg-sunfinity-50 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="mt-auto">
                <button 
                  className="flex items-center gap-2 bg-sunfinity-100 hover:bg-sunfinity-200 text-sunfinity-800 font-medium py-2 px-4 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigation(service.path);
                  }}
                >
                  Click me! <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
