import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sun, Building2, Battery, DollarSign, Shield, LeafyGreen, Zap, PiggyBank, BarChart, TrendingUp, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BusinessAssessmentDialog } from "@/components/BusinessAssessmentDialog";

export const CommercialSolarSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [assessmentDialogOpen, setAssessmentDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("commercial-solar");
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
      icon: <DollarSign className="w-8 h-8 text-sunfinity-500" />,
      title: "Lower Operating Costs",
      description: "Significantly reduce electricity expenses, freeing up capital for core business operations."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-sunfinity-500" />,
      title: "Enhanced Brand Value",
      description: "Showcase your commitment to sustainability and appeal to eco-conscious customers and partners."
    },
    {
      icon: <Shield className="w-8 h-8 text-sunfinity-500" />,
      title: "Tax Incentives",
      description: "Take advantage of federal and state tax credits, accelerated depreciation, and other financial incentives."
    },
    {
      icon: <BarChart className="w-8 h-8 text-sunfinity-500" />,
      title: "Energy Independence",
      description: "Protect your business from utility rate increases and gain predictable energy costs for decades."
    }
  ];

  const testimonials = [
    {
      quote: "Sunfinity's commercial solar installation has cut our manufacturing facility's energy costs by 62%. The ROI exceeded our projections, and their team handled all permitting and utility coordination seamlessly.",
      author: "Jonathan Miller",
      company: "Precision Manufacturing Inc.",
      location: "Baltimore, MD",
      bgColor: "#4285F4" // Blue Google color
    },
    {
      quote: "As a hotel chain, energy costs were a significant expense. Sunfinity designed a custom solar solution that not only reduces our costs but also impresses our environmentally conscious guests.",
      author: "Lisa Chen",
      company: "Bayside Hotel Group",
      location: "Arlington, VA",
      bgColor: "#EA4335" // Red Google color
    },
    {
      quote: "Our office complex's transition to solar power with Sunfinity was incredibly smooth. Their maintenance program ensures optimal system performance, and we've been able to pass savings on to our tenants.",
      author: "Michael Thompson",
      company: "Oakridge Properties",
      location: "Alexandria, VA",
      bgColor: "#FBBC05" // Yellow Google color
    }
  ];

  const solutions = [
    {
      icon: <Building2 className="w-12 h-12 text-sunfinity-500" />,
      title: "Rooftop Solar",
      description: "Utilize unused roof space to generate clean electricity that directly powers your operations.",
      features: [
        "Custom designed for your building's specifications",
        "Minimal disruption to daily operations during installation",
        "Remote monitoring and performance tracking",
        "25+ year system lifespan with manufacturer warranties"
      ]
    },
    {
      icon: <Sun className="w-12 h-12 text-sunfinity-500" />,
      title: "Carport & Canopy Systems",
      description: "Transform parking areas into energy-generating assets while providing shade and weather protection.",
      features: [
        "Dual-purpose structures that maximize space utilization",
        "Optional EV charging station integration",
        "Enhanced parking area lighting",
        "Snow and weather protection for vehicles"
      ]
    },
    {
      icon: <Battery className="w-12 h-12 text-sunfinity-500" />,
      title: "Energy Storage",
      description: "Maximize your solar investment with battery systems that store excess energy for use during peak hours or outages.",
      features: [
        "Peak demand shaving to reduce utility demand charges",
        "Backup power during grid outages",
        "Time-of-use rate optimization",
        "Scalable capacity to meet changing needs"
      ]
    }
  ];

  const industries = [
    "Manufacturing", "Retail", "Healthcare", "Office Buildings", 
    "Warehouses", "Educational Institutions", "Hotels & Hospitality",
    "Agricultural", "Government Facilities", "Data Centers"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-sunfinity-50 to-white relative overflow-hidden">
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
                <p className="text-sunfinity-800 text-sm font-medium">Commercial Solar Solutions</p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Power Your Business With <span className="text-sunfinity-600">Sustainable Energy</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                Reduce operating costs, enhance your brand image, and meet sustainability goals with customized commercial solar solutions designed for your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-sunfinity-500 hover:bg-sunfinity-600 text-white px-8"
                  onClick={() => setAssessmentDialogOpen(true)}
                >
                  Request Business Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-sunfinity-500 text-sunfinity-500 hover:bg-sunfinity-50 px-8"
                  onClick={() => window.location.href = "/solar-calculator"}
                >
                  Calculate ROI Potential
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
                  src="/commercial-solar.jpg" 
                  alt="Commercial building with solar installation" 
                  className="w-full h-auto rounded-2xl shadow-2xl z-10 relative"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80";
                  }}
                />
                <div className="absolute -bottom-6 -right-6 py-4 px-6 bg-white rounded-lg shadow-lg z-20">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-10 w-10 text-sunfinity-500" />
                    <div>
                      <p className="text-sm text-muted-foreground">Average ROI</p>
                      <p className="text-2xl font-bold">3-5 Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="commercial-solar" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className={cn(
              "inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200 mb-4 transition-all duration-500 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              <p className="text-sunfinity-800 text-sm font-medium">Business Advantages</p>
            </div>
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              Benefits for Your Business
            </h2>
            <p className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-500 delay-200 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              Discover how commercial solar can transform your operations and boost your bottom line.
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

      {/* Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className={cn(
              "inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200 mb-4 transition-all duration-500 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              <p className="text-sunfinity-800 text-sm font-medium">Tailored Solutions</p>
            </div>
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              Commercial Solar Solutions
            </h2>
            <p className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-500 delay-200 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              We offer comprehensive solar solutions tailored to your business needs and facility specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={solution.title}
                className={cn(
                  "bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-border/50 h-full transform hover:-translate-y-1 transition-all duration-500 opacity-0 translate-y-8",
                  loaded && "opacity-100 translate-y-0"
                )}
                style={{ transitionDelay: loaded ? `${index * 150 + 300}ms` : "0ms" }}
              >
                <div className="mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-sunfinity-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className={cn(
              "inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200 mb-4 transition-all duration-500 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              <p className="text-sunfinity-800 text-sm font-medium">Versatile Applications</p>
            </div>
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              Industries We Serve
            </h2>
            <p className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-500 delay-200 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              Our commercial solar solutions are designed to meet the unique needs of various industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <div 
                key={industry}
                className={cn(
                  "bg-sunfinity-50 hover:bg-sunfinity-100 transition-all duration-300 rounded-xl p-4 text-center border border-sunfinity-100 transform hover:-translate-y-1 hover:shadow-md transition-all duration-500 opacity-0 translate-y-8",
                  loaded && "opacity-100 translate-y-0"
                )}
                style={{ transitionDelay: loaded ? `${index * 50 + 300}ms` : "0ms" }}
              >
                <p className="font-semibold text-sunfinity-800">{industry}</p>
              </div>
            ))}
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
              <p className="text-sunfinity-800 text-sm font-medium">Success Stories</p>
            </div>
            <h2 className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              Our Commercial Clients
            </h2>
            <p className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-500 delay-200 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}>
              Hear from businesses that have transformed their operations with our solar solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.author}
                className={cn(
                  "rounded-2xl overflow-hidden shadow-lg transition-all duration-300 h-full transform hover:-translate-y-1 hover:shadow-xl transition-all duration-500 opacity-0 translate-y-8",
                  loaded && "opacity-100 translate-y-0"
                )}
                style={{ transitionDelay: loaded ? `${index * 150 + 300}ms` : "0ms" }}
              >
                <div className="h-3" style={{ backgroundColor: testimonial.bgColor }}></div>
                <div className="p-8 bg-white h-full flex flex-col">
                  <div className="mb-6">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 12H9.60002C8.42682 12 7.5 12.9268 7.5 14.1V19.5C7.5 20.6732 8.42682 21.6 9.60002 21.6H12.3C12.8018 21.6 13.2 21.9982 13.2 22.5V23.7636C13.2 24.6112 12.2436 25.1461 11.524 24.6945L7.5 22.2" stroke="#FDB813" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M28.5 12H23.1C21.9268 12 21 12.9268 21 14.1V19.5C21 20.6732 21.9268 21.6 23.1 21.6H25.8C26.3018 21.6 26.7 21.9982 26.7 22.5V23.7636C26.7 24.6112 25.7436 25.1461 25.024 24.6945L21 22.2" stroke="#FDB813" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="italic text-muted-foreground mb-6 flex-grow">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sunfinity-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sunfinity-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-sunfinity-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Business with Solar?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our commercial solar experts are ready to develop a customized solar solution that meets your business goals and maximizes your ROI. Schedule a consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-sunfinity-500 hover:bg-sunfinity-600 text-white px-8 py-6 text-lg"
                onClick={() => setAssessmentDialogOpen(true)}
              >
                Request Business Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-sunfinity-500 text-sunfinity-500 hover:bg-sunfinity-50 px-8 py-6 text-lg"
                onClick={() => window.location.href = "tel:571-525-0019"}
              >
                Call 571-525-0019
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Assessment Dialog */}
      <BusinessAssessmentDialog 
        open={assessmentDialogOpen}
        setOpen={setAssessmentDialogOpen}
      />
    </div>
  );
}; 