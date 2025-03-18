import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { DollarSign, Sparkles, PiggyBank, Zap, ShieldCheck, BarChart3, Clock, CalendarClock, Home, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FinancingQuoteDialog } from "./FinancingQuoteDialog";
import { FinancingConsultationDialog } from "./FinancingConsultationDialog";

export const SolarFinancingSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [consultationDialogOpen, setConsultationDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("solar-financing");
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

  // Handle button clicks
  const handleGetQuoteClick = () => {
    setQuoteDialogOpen(true);
  };

  const handleGetConsultationClick = () => {
    setConsultationDialogOpen(true);
  };

  // Helper function to get quotes for 3 options
  const getFinancingOptionQuote = (index: number) => {
    return (
      <Button 
        className="w-full bg-sunfinity-500 hover:bg-sunfinity-600 text-white"
        onClick={handleGetQuoteClick}
      >
        Get a Custom Quote
      </Button>
    );
  };

  const financingOptions = [
    {
      title: "Solar Loan",
      icon: <DollarSign className="w-10 h-10 text-sunfinity-500" />,
      description: "Fixed monthly payments with competitive interest rates. Own your system and enjoy all tax incentives and rebates.",
      benefits: [
        "Low fixed monthly payments",
        "$0 down payment options available",
        "Full ownership of your solar system",
        "Claim 30% federal tax credit",
        "Loan terms from 5-25 years"
      ]
    },
    {
      title: "Solar Lease",
      icon: <Zap className="w-10 h-10 text-sunfinity-500" />,
      description: "Pay a fixed monthly lease payment to use solar panels installed on your property with minimal upfront costs.",
      benefits: [
        "No upfront costs",
        "Predictable monthly payments",
        "Maintenance included",
        "Performance guarantees",
        "Option to purchase at end of lease"
      ]
    },
    {
      title: "Power Purchase Agreement (PPA)",
      icon: <ShieldCheck className="w-10 h-10 text-sunfinity-500" />,
      description: "Pay only for the power your solar system produces, often at rates lower than your utility company.",
      benefits: [
        "Zero upfront investment",
        "Pay only for power produced",
        "Lower than utility electric rates",
        "System monitoring & maintenance included",
        "Predictable energy costs for 20+ years"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Sunfinity's financing options made going solar so accessible for our family. We're saving about $180 per month with zero money down!",
      author: "Michael & Sarah Johnson",
      location: "Phoenix, AZ",
      savings: "$2,160 annual savings"
    },
    {
      quote: "I was hesitant about the upfront cost of solar, but their loan program made it a no-brainer. My monthly payment is less than my old electric bill.",
      author: "Jennifer Martinez",
      location: "Austin, TX",
      savings: "$1,800 annual savings"
    },
    {
      quote: "The PPA option was perfect for our business. We reduced our carbon footprint and our energy costs without any capital investment.",
      author: "Robert Wilson, Small Business Owner",
      location: "Denver, CO",
      savings: "$5,400 annual savings"
    }
  ];

  return (
    <div className="w-full">
      {/* Dialog components */}
      <FinancingQuoteDialog 
        open={quoteDialogOpen} 
        setOpen={setQuoteDialogOpen} 
      />
      <FinancingConsultationDialog 
        open={consultationDialogOpen} 
        setOpen={setConsultationDialogOpen} 
      />

      {/* Hero Section */}
      <section id="solar-financing" className="relative bg-gradient-to-br from-sunfinity-50 to-white pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.2] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className={cn(
              "max-w-2xl transition-all duration-700 delay-100 opacity-0 translate-y-8",
              loaded && "opacity-100 translate-y-0"
            )}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                Make Solar Affordable with <span className="text-sunfinity-500">Flexible Financing</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Go solar with little to no upfront costs. Our financing solutions make clean energy accessible and affordable while maximizing your long-term savings.
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
                  onClick={handleGetConsultationClick}
                >
                  Get Free Consultation
                </Button>
              </div>
            </div>
            
            <div className={cn(
              "flex-1 transition-all duration-700 delay-300 opacity-0 translate-x-8",
              loaded && "opacity-100 translate-x-0"
            )}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-28 h-28 bg-sunfinity-100 rounded-full filter blur-xl opacity-70"></div>
                <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-sunfinity-200 rounded-full filter blur-xl opacity-70"></div>
                <Card className="bg-white/90 backdrop-blur-sm border-border/50 shadow-lg overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-sunfinity-500 to-sunfinity-600 text-white pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <PiggyBank className="w-7 h-7" />
                      <CardTitle className="text-2xl">Financing Calculator</CardTitle>
                    </div>
                    <CardDescription className="text-white/80">See how affordable solar can be with the right financing</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4 bg-sunfinity-50 rounded-lg p-5 border border-sunfinity-100">
                      <div className="flex justify-between items-center">
                        <div className="font-medium">Average Monthly Utility Bill</div>
                        <div className="font-bold text-xl">$200</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="font-medium">Typical Financing Payment</div>
                        <div className="font-bold text-xl text-sunfinity-600">$150</div>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-sunfinity-200">
                        <div className="font-medium">Monthly Savings</div>
                        <div className="font-bold text-xl text-green-600">$50</div>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-sm text-muted-foreground">*Example based on typical 6kW system with solar loan</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center border-t border-border/50 bg-muted/30">
                    <Button 
                      variant="link" 
                      className="text-sunfinity-600"
                      onClick={() => window.location.href = "/solar-calculator"}
                    >
                      Calculate Your Exact Savings <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Financing Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the financing option that works best for your budget and goals. Sunfinity offers multiple paths to make solar affordable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => (
              <Card key={index} className="border-border/40 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-4">{option.icon}</div>
                  <CardTitle className="text-2xl">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{option.description}</p>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-sunfinity-500 hover:bg-sunfinity-600 text-white"
                    onClick={handleGetQuoteClick}
                  >
                    Get a Custom Quote
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Finance Your Solar Installation?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Solar financing makes renewable energy accessible while maximizing your financial benefits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-border/30">
              <CardContent className="pt-6">
                <div className="mb-4 bg-sunfinity-50 p-3 rounded-lg w-fit">
                  <DollarSign className="w-6 h-6 text-sunfinity-500" />
                </div>
                <h3 className="text-xl font-medium mb-2">No Upfront Costs</h3>
                <p className="text-muted-foreground">
                  Start saving immediately with zero-down financing options that require no initial investment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border/30">
              <CardContent className="pt-6">
                <div className="mb-4 bg-sunfinity-50 p-3 rounded-lg w-fit">
                  <Sparkles className="w-6 h-6 text-sunfinity-500" />
                </div>
                <h3 className="text-xl font-medium mb-2">Immediate Savings</h3>
                <p className="text-muted-foreground">
                  Your monthly payment is often less than your current utility bill, creating positive cash flow from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border/30">
              <CardContent className="pt-6">
                <div className="mb-4 bg-sunfinity-50 p-3 rounded-lg w-fit">
                  <BarChart3 className="w-6 h-6 text-sunfinity-500" />
                </div>
                <h3 className="text-xl font-medium mb-2">Increased Home Value</h3>
                <p className="text-muted-foreground">
                  Solar installations typically increase property values by 3-4%, offering long-term financial benefits.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-border/30">
              <CardContent className="pt-6">
                <div className="mb-4 bg-sunfinity-50 p-3 rounded-lg w-fit">
                  <Clock className="w-6 h-6 text-sunfinity-500" />
                </div>
                <h3 className="text-xl font-medium mb-2">Fixed Energy Costs</h3>
                <p className="text-muted-foreground">
                  Lock in predictable energy costs and protect yourself from rising utility rates for decades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from homeowners who are enjoying the benefits of solar financing with Sunfinity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/40 bg-gray-50">
                <CardContent className="pt-6">
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="italic mb-6 text-foreground">"{testimonial.quote}"</p>
                  <div className="border-t border-border/30 pt-4">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-sm font-medium text-green-600 mt-1">{testimonial.savings}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about solar financing options with Sunfinity.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="loan" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="loan">Solar Loans</TabsTrigger>
                <TabsTrigger value="lease">Solar Leases</TabsTrigger>
                <TabsTrigger value="ppa">PPAs</TabsTrigger>
              </TabsList>
              <TabsContent value="loan" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>How do solar loans work?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Solar loans work similarly to home improvement loans. You borrow money from a lender to purchase your solar system, and then make fixed monthly payments over a set term (typically 5-25 years). You own the system immediately and can claim all available tax incentives and rebates, which can significantly reduce the overall cost.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>What loan terms are available?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Sunfinity offers flexible loan terms ranging from 5 to 25 years. Shorter terms mean higher monthly payments but less interest paid over time, while longer terms offer lower monthly payments but more interest over the life of the loan. Our solar experts can help you choose the term that best fits your financial goals.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Are there any $0 down loan options?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Yes! Many of our financing partners offer $0 down options, allowing you to go solar with no upfront cost. Your monthly loan payment is often less than your current electric bill, creating immediate positive cash flow while you build equity in your solar system.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="lease" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>What is a solar lease?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>A solar lease allows you to "rent" a solar system that's installed on your property. You make fixed monthly payments to use the system and benefit from the electricity it produces, typically for 20-25 years. The leasing company owns the system and handles all maintenance and repairs.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>What happens at the end of the lease term?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>At the end of your lease term, you typically have several options: purchase the system at its fair market value, renew the lease for an additional term, or have the system removed at no cost to you. Most customers choose to purchase the system since it still has many years of productive life remaining.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Who maintains the system during a lease?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>The leasing company is responsible for all monitoring, maintenance, repairs, and insurance during the lease term. This "worry-free" approach is one of the main benefits of leasing versus ownership.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="ppa" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>How does a Power Purchase Agreement work?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>With a PPA, a solar provider installs and owns the solar system on your property. Rather than paying a fixed monthly amount, you only pay for the electricity the system produces, usually at a rate lower than your utility. PPAs typically last 20-25 years with options to purchase the system during or at the end of the term.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>How are PPA rates determined?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>PPA rates are typically set at 10-30% below your current utility rates, providing immediate savings. The agreement often includes a small annual escalator (1-3%) to account for inflation, but this is generally much lower than historical utility rate increases, which have averaged 3-5% annually.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Are PPAs available for commercial properties?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Yes, PPAs are especially popular for commercial properties because they allow businesses to go solar with zero capital investment while reducing operating costs. Commercial PPAs can be structured to meet specific business needs and financial objectives.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sunfinity-500 to-sunfinity-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Our financing experts will create a customized solution that maximizes your savings and fits your budget perfectly.
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
                onClick={handleGetConsultationClick}
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