import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sun, Home, Battery, DollarSign, Shield, LeafyGreen, Zap, PiggyBank, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ResidentialSolarSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("residential-solar");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setLoaded(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Check on initial load
    setLoaded(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefits = [
    {
      icon: <PiggyBank className="w-8 h-8 text-sunfinity-500" />,
      title: "Significant Savings",
      description: "Reduce your electricity bills by up to 70% and protect yourself from rising utility rates."
    },
    {
      icon: <Zap className="w-8 h-8 text-sunfinity-500" />,
      title: "Energy Independence",
      description: "Generate your own clean electricity and reduce dependence on the electrical grid."
    },
    {
      icon: <LeafyGreen className="w-8 h-8 text-sunfinity-500" />,
      title: "Eco-Friendly Living",
      description: "Reduce your carbon footprint and contribute to a cleaner, more sustainable future."
    },
    {
      icon: <Shield className="w-8 h-8 text-sunfinity-500" />,
      title: "Home Value Increase",
      description: "Solar installations can increase your property value by 4% on average."
    }
  ];

  const testimonials = [
    {
      quote: "Switching to solar with Sunfinity was the best decision we've made for our home. Our electricity bills are down by 65%, and the installation team was professional and efficient.",
      author: "Sarah & Michael Johnson",
      location: "Great Falls, VA",
      bgColor: "#EA4335" // Red Google color
    },
    {
      quote: "We've been with Sunfinity for 2 years now and couldn't be happier. The system has performed above our expectations, and their customer service is exceptional whenever we have questions.",
      author: "David Rodriguez",
      location: "Washington, DC",
      bgColor: "#4285F4" // Blue Google color
    },
    {
      quote: "As retirees on a fixed income, we were concerned about rising energy costs. Sunfinity designed a system that eliminated our electric bill completely. The investment is paying for itself faster than we expected.",
      author: "Robert & Linda Thompson",
      location: "Bethesda, MD",
      bgColor: "#FBBC05" // Yellow Google color
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sunfinity-50 to-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sunfinity-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-sunfinity-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={cn(
              "transition-all duration-700 opacity-0 translate-y-8",
              loaded && "opacity-100 translate-y-0"
            )}>
              <div className="inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200 mb-6">
                <p className="text-sunfinity-800 text-sm font-medium">Residential Solar Solutions</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Power Your Home With <span className="text-sunfinity-600">Sunshine</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Transform your home into an energy-efficient powerhouse with custom solar solutions designed specifically for your lifestyle and needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-sunfinity-500 hover:bg-sunfinity-600 text-white px-8"
                  onClick={() => window.location.href = "/solar-calculator"}
                >
                  Calculate Your Savings
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-sunfinity-500 text-sunfinity-500 hover:bg-sunfinity-50 px-8"
                  onClick={() => window.location.href = "/#quote-form"}
                >
                  Get Free Consultation
                </Button>
              </div>
            </div>
            
            <div className={cn(
              "transition-all duration-700 delay-300 opacity-0 translate-x-8",
              loaded && "opacity-100 translate-x-0"
            )}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-sunfinity-100 rounded-full mix-blend-multiply filter blur-lg opacity-70"></div>
                <img 
                  src="/resiSolar.jpg" 
                  alt="Beautiful home with solar panels" 
                  className="w-full h-auto rounded-2xl shadow-2xl z-10 relative"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1558449028-b53a39d100fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80";
                  }}
                />
                <div className="absolute -bottom-6 -right-6 py-4 px-6 bg-white rounded-lg shadow-lg z-20">
                  <div className="flex items-center gap-3">
                    <Sun className="h-10 w-10 text-sunfinity-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Average Savings</p>
                      <p className="text-2xl font-bold">$1,500/year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="residential-solar" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className={cn(
              "inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200 mb-4 transition-all duration-500 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              <p className="text-sunfinity-800 text-sm font-medium">Why Choose Solar</p>
            </div>
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              Benefits of Residential Solar
            </h2>
            <p className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-500 delay-200 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              Discover how switching to solar energy can transform your home and improve your quality of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className={cn(
                  "bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 h-full transform hover:-translate-y-1 transition-all duration-500 opacity-0 translate-y-8",
                  loaded && "opacity-100 translate-y-0"
                )}
                style={{ transitionDelay: loaded ? `${index * 100 + 300}ms` : "0ms" }}
              >
                <div className="w-14 h-14 rounded-full bg-sunfinity-50 flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className={cn(
              "inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200 mb-4 transition-all duration-500 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              <p className="text-sunfinity-800 text-sm font-medium">Seamless Experience</p>
            </div>
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              Our Simple Solar Process
            </h2>
            <p className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-500 delay-200 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              We make going solar easy with our 4-step process, handling everything from design to installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {[
              {
                number: "01",
                title: "Free Consultation",
                description: "We assess your energy needs, roof condition, and discuss your goals to create a custom solution."
              },
              {
                number: "02",
                title: "Custom Design",
                description: "Our engineers design a solar system optimized for your home's architecture and energy requirements."
              },
              {
                number: "03",
                title: "Professional Installation",
                description: "Our certified technicians install your system with minimal disruption to your daily routine."
              },
              {
                number: "04",
                title: "Monitoring & Support",
                description: "We activate your system, teach you how to monitor it, and provide ongoing maintenance support."
              }
            ].map((step, index) => (
              <div 
                key={step.number}
                className={cn(
                  "relative transition-all duration-500 opacity-0 translate-y-8",
                  loaded && "opacity-100 translate-y-0"
                )}
                style={{ transitionDelay: loaded ? `${index * 150 + 400}ms` : "0ms" }}
              >
                {/* Step number */}
                <div className="absolute -top-6 text-7xl font-bold text-sunfinity-100 select-none">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="relative z-10 pt-8">
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {/* Connector line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-[-2rem] w-4 border-t-2 border-dashed border-sunfinity-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Technologies Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={cn(
              "order-2 lg:order-1 transition-all duration-700 opacity-0 translate-y-8",
              loaded && "opacity-100 translate-y-0"
            )}>
              <div className="inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200 mb-6">
                <p className="text-sunfinity-800 text-sm font-medium">Advanced Technology</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Cutting-Edge Solar Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We partner with industry leaders to bring you the most efficient and durable solar technology available today.
              </p>
              
              <Tabs defaultValue="panels" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="panels">Solar Panels</TabsTrigger>
                  <TabsTrigger value="batteries">Battery Storage</TabsTrigger>
                  <TabsTrigger value="inverters">Inverters</TabsTrigger>
                </TabsList>
                
                <TabsContent value="panels" className="space-y-4">
                  <h3 className="text-xl font-semibold">High-Efficiency Solar Panels</h3>
                  <p className="text-muted-foreground mb-4">
                    Our premium panels convert more sunlight into electricity, even in partial shade or cloudy conditions.
                  </p>
                  <ul className="space-y-2">
                    {["Industry-leading efficiency ratings", "25+ year performance warranty", "Sleek, low-profile design", "Weather and impact resistant"].map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-sunfinity-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="batteries" className="space-y-4">
                  <h3 className="text-xl font-semibold">Smart Battery Storage</h3>
                  <p className="text-muted-foreground mb-4">
                    Store excess energy for use during peak hours or power outages with our advanced battery solutions.
                  </p>
                  <ul className="space-y-2">
                    {["Power essential appliances during outages", "Maximize self-consumption of solar energy", "Easy monitoring via smartphone app", "Scalable to grow with your needs"].map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-sunfinity-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="inverters" className="space-y-4">
                  <h3 className="text-xl font-semibold">Smart Inverter Technology</h3>
                  <p className="text-muted-foreground mb-4">
                    Our inverters efficiently convert DC power from solar panels to AC power for your home with minimal energy loss.
                  </p>
                  <ul className="space-y-2">
                    {["Per-panel optimization for maximum production", "Real-time performance monitoring", "Built-in safety features", "Grid integration capabilities"].map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-sunfinity-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className={cn(
              "order-1 lg:order-2 transition-all duration-700 delay-300 opacity-0 translate-x-8",
              loaded && "opacity-100 translate-x-0"
            )}>
              <div className="relative">
                <img 
                  src="/solar-technology.jpg" 
                  alt="Advanced solar panel installation" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2344&q=80";
                  }}
                />
                
                <div className="absolute -bottom-6 -left-6 py-4 px-6 bg-white rounded-lg shadow-lg z-20">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-10 w-10 text-sunfinity-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Panel Efficiency</p>
                      <p className="text-2xl font-bold">Up to 22.8%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className={cn(
              "inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200 mb-4 transition-all duration-500 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              <p className="text-sunfinity-800 text-sm font-medium">Customer Stories</p>
            </div>
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              What Our Customers Say
            </h2>
            <p className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-500 delay-200 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              Join thousands of satisfied homeowners who have transformed their energy experience with Sunfinity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.author}
                className={cn(
                  "border-0 shadow-md overflow-hidden transition-all duration-500 opacity-0 translate-y-8",
                  loaded && "opacity-100 translate-y-0"
                )}
                style={{ transitionDelay: loaded ? `${index * 150 + 400}ms` : "0ms" }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-foreground italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-shrink-0">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: testimonial.bgColor }}
                      >
                        <span className="text-white text-xl font-medium">
                          {testimonial.author.split(" ")[0][0]}
                        </span>
                      </div>
                      <div 
                        className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm z-10"
                      >
                        G
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sunfinity-500 to-sunfinity-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Harness the Power of the Sun?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of homeowners who are saving money and the environment with Sunfinity's residential solar solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-sunfinity-600 hover:bg-sunfinity-50"
                onClick={() => window.location.href = "/solar-calculator"}
              >
                Calculate Your Savings
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-sunfinity-600 hover:bg-sunfinity-50"
                onClick={() => window.location.href = "/#quote-form"}
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 