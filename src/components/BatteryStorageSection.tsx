import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Battery, Clock, DollarSign, Shield, Zap, Sparkles, Check, Home, Lightbulb, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { ConsultationFormDialog } from "./ConsultationFormDialog";

export const BatteryStorageSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [consultationDialogOpen, setConsultationDialogOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("battery-storage");
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

  const handleGetQuoteClick = () => {
    navigate("/#quote-form");
  };

  const handleScheduleConsultation = () => {
    setConsultationDialogOpen(true);
  };

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-sunfinity-500" />,
      title: "Backup Power Security",
      description: "Keep your lights on and essential appliances running during grid outages and emergencies."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-sunfinity-500" />,
      title: "Energy Cost Savings",
      description: "Store solar energy when production is high and use it during peak rate periods to maximize savings."
    },
    {
      icon: <Shield className="w-8 h-8 text-sunfinity-500" />,
      title: "Energy Independence",
      description: "Reduce your dependence on the grid and gain control over your own energy production and usage."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-sunfinity-500" />,
      title: "Smart Energy Management",
      description: "Intelligent systems optimize when to store, use, or sell your energy for maximum efficiency."
    }
  ];

  const batteryTypes = [
    {
      name: "Sunfinity PowerWall",
      capacity: "13.5 kWh",
      powerOutput: "7 kW continuous / 10 kW peak",
      warranty: "10-year warranty",
      features: [
        "Sleek wall-mounted design",
        "Seamless smartphone monitoring",
        "Automatic storm detection mode",
        "Enhanced home value",
        "Whole home or partial load backup",
      ],
      price: "$8,500",
      image: "/battery-powerwall.jpg"
    },
    {
      name: "Sunfinity PowerBank",
      capacity: "20 kWh (expandable to 40 kWh)",
      powerOutput: "9 kW continuous / 12 kW peak",
      warranty: "12-year warranty",
      features: [
        "Modular stacking design",
        "Higher capacity for larger homes",
        "Weather-resistant outdoor rating",
        "Priority load management",
        "Solar + battery optimization",
      ],
      price: "$12,900",
      image: "/battery-powerbank.jpg"
    },
    {
      name: "Sunfinity Commercial Storage",
      capacity: "50-250 kWh",
      powerOutput: "25-125 kW",
      warranty: "15-year performance guarantee",
      features: [
        "Scalable capacity for businesses",
        "Peak demand shaving",
        "Critical operations backup", 
        "Demand charge reduction",
        "Grid services participation",
      ],
      price: "Custom quote",
      image: "/battery-commercial.jpg"
    }
  ];

  return (
    <section id="battery-storage" className="py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <div className="inline-block p-2 bg-sunfinity-100 rounded-full mb-4">
            <Battery className="w-6 h-6 text-sunfinity-700" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Power Your Future with
            <span className="text-sunfinity-500"> Battery Storage</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            Take control of your energy with advanced battery storage solutions that provide security, 
            savings, and sustainability for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-sunfinity-500 hover:bg-sunfinity-600"
              onClick={handleGetQuoteClick}
            >
              Get a Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-sunfinity-500 text-sunfinity-700 hover:bg-sunfinity-50"
              onClick={handleScheduleConsultation}
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>

        {/* Main Benefits Section */}
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20", 
          loaded ? "animate-fade-in" : "opacity-0")}>
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border/50 bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full bg-sunfinity-50 w-16 h-16 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Battery Storage Section */}
        <div className={cn("mb-20", loaded ? "animate-fade-in" : "opacity-0")}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Battery Storage?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Battery storage isn't just about backup power—it's a smart investment in your energy future.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden bg-white border border-border/50 shadow-sm">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <img 
                  src="/battery-home.jpg" 
                  alt="Home battery storage system" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/800x450/FFF9EC/FFA41E?text=Battery+Storage";
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-sunfinity-50 p-2 mt-1">
                  <Clock className="w-5 h-5 text-sunfinity-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">24/7 Energy Access</h3>
                  <p className="text-muted-foreground">Store excess solar energy during the day and use it at night, ensuring continuous access to clean energy around the clock.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-sunfinity-50 p-2 mt-1">
                  <Shield className="w-5 h-5 text-sunfinity-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Protection Against Outages</h3>
                  <p className="text-muted-foreground">While others are in the dark during power outages, your home or business remains powered, keeping essential systems running.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-sunfinity-50 p-2 mt-1">
                  <DollarSign className="w-5 h-5 text-sunfinity-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Reduce Peak Demand Charges</h3>
                  <p className="text-muted-foreground">Avoid expensive time-of-use rates by using stored energy during peak pricing periods, significantly reducing your electricity bills.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="rounded-full bg-sunfinity-50 p-2 mt-1">
                  <Sparkles className="w-5 h-5 text-sunfinity-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Smart Home Integration</h3>
                  <p className="text-muted-foreground">Our systems integrate with smart home technology, allowing automated energy management based on your preferences and habits.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Battery Solutions Section */}
        <div className={cn("mb-20", loaded ? "animate-fade-in" : "opacity-0")}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Battery Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect energy storage solution for your needs, from compact home systems to powerful commercial installations.
            </p>
          </div>

          <Tabs defaultValue="powerwall" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="powerwall">PowerWall</TabsTrigger>
              <TabsTrigger value="powerbank">PowerBank</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
            </TabsList>
            
            {batteryTypes.map((battery, index) => (
              <TabsContent key={index} value={battery.name.toLowerCase().replace(/\s+/g, "")}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl overflow-hidden border border-border/50 shadow-sm">
                  <div className="p-8 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3">{battery.name}</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Capacity</p>
                        <p className="font-medium">{battery.capacity}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Power Output</p>
                        <p className="font-medium">{battery.powerOutput}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Warranty</p>
                        <p className="font-medium">{battery.warranty}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">Starting At</p>
                        <p className="font-medium">{battery.price}</p>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2 mb-6">
                      {battery.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-sunfinity-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <Button className="w-full bg-sunfinity-500 hover:bg-sunfinity-600">
                        Get Quote for {battery.name}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="aspect-auto bg-gray-100 flex items-center justify-center">
                    <img 
                      src={battery.image} 
                      alt={`${battery.name} battery system`} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/600x400/FFF9EC/FFA41E?text=${battery.name.replace(/\s+/g, "+")}`;
                      }}
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* FAQ Section */}
        <div className={cn("mb-20", loaded ? "animate-fade-in" : "opacity-0")}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about battery storage systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">How long do battery systems last?</h3>
                <p className="text-muted-foreground">Our battery storage systems typically last 10-15 years with minimal degradation. All our products come with comprehensive warranties and performance guarantees.</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Can I add battery storage to my existing solar system?</h3>
                <p className="text-muted-foreground">Yes! Our battery solutions are designed to integrate with most existing solar installations. Our experts will assess your current setup and recommend the optimal solution.</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">How much does a battery storage system cost?</h3>
                <p className="text-muted-foreground">Costs vary based on capacity and features, starting around $8,500. Many customers qualify for federal tax credits and local incentives that reduce costs by 30% or more.</p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">How much of my home can a battery power?</h3>
                <p className="text-muted-foreground">Depending on the system size, batteries can power essential appliances during outages or your entire home. We'll help design a solution that meets your specific backup power needs.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className={cn("rounded-2xl bg-gradient-to-r from-sunfinity-50 to-sunfinity-100 p-8 md:p-12", 
          loaded ? "animate-fade-in" : "opacity-0")}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Power Your Tomorrow?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of homeowners who've already made the smart choice for energy independence, security, and savings.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-sunfinity-500 hover:bg-sunfinity-600"
                onClick={handleGetQuoteClick}
              >
                Get Your Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-sunfinity-700 text-sunfinity-700 hover:bg-white/50"
                onClick={handleScheduleConsultation}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form Dialog */}
      <ConsultationFormDialog 
        open={consultationDialogOpen}
        setOpen={setConsultationDialogOpen}
      />
    </section>
  );
}; 