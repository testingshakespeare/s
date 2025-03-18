import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, PlusCircle, MinusCircle, Battery, DollarSign, Home, Leaf, Clock, Shield, HelpCircle, LightbulbIcon } from "lucide-react";

// FAQ data structure
const faqCategories = [
  {
    name: "Solar Basics",
    icon: <Sun className="h-5 w-5" />,
    faqs: [
      {
        question: "How do solar panels work?",
        answer: "Solar panels work by converting sunlight into electricity through the photovoltaic effect. When sunlight hits the silicon cells in solar panels, it causes electrons to move, creating an electric current. This direct current (DC) electricity is then converted to alternating current (AC) by an inverter, making it usable in your home."
      },
      {
        question: "Will solar panels work on cloudy days?",
        answer: "Yes, solar panels still generate electricity on cloudy days, though at reduced efficiency (typically 10-25% of their normal output). Modern solar panels are designed to capture different parts of the light spectrum, allowing them to produce some electricity even when direct sunlight is limited."
      },
      {
        question: "How long do solar panels last?",
        answer: "Most solar panels come with a 25-30 year warranty, but they can continue producing electricity for 30-40 years. However, their efficiency gradually decreases over time, typically at a rate of about 0.5% per year. After 25 years, most panels still operate at about 85-90% of their original capacity."
      },
      {
        question: "What maintenance do solar panels require?",
        answer: "Solar panels require minimal maintenance. Occasional cleaning to remove dust and debris (2-4 times per year) is usually sufficient. In most climates, rain naturally cleans the panels. It's also recommended to have a professional inspection every few years to check electrical connections and system performance."
      }
    ]
  },
  {
    name: "Cost & Financing",
    icon: <DollarSign className="h-5 w-5" />,
    faqs: [
      {
        question: "How much does a solar system cost?",
        answer: "The cost of a residential solar system typically ranges from $15,000 to $25,000 before incentives, depending on system size, equipment quality, and installation complexity. After applying the federal tax credit (currently 30%) and other local incentives, the net cost can be reduced by 30-50%. Our solar calculator can provide you with a personalized estimate based on your specific needs."
      },
      {
        question: "What financing options are available?",
        answer: "Several financing options are available for solar installations: 1) Cash purchase, which provides the highest long-term savings, 2) Solar loans, which allow you to own the system with little or no money down, 3) Solar leases or Power Purchase Agreements (PPAs), where a third party owns the system and you pay for the electricity it produces. Each option has different financial implications, and we can help you determine which is best for your situation."
      },
      {
        question: "What incentives and tax credits are available?",
        answer: "The federal solar Investment Tax Credit (ITC) currently allows you to deduct 30% of your solar system cost from your federal taxes. Many states and utilities offer additional incentives such as rebates, performance-based incentives, and property tax exemptions. Some areas also offer Solar Renewable Energy Credits (SRECs) that you can sell for additional income. These incentives significantly reduce the overall cost of going solar."
      },
      {
        question: "How long until I break even on my solar investment?",
        answer: "The average payback period for residential solar systems ranges from 7-12 years, depending on your electricity rates, system cost, available incentives, and sunlight conditions in your area. After this break-even point, you'll essentially be generating free electricity for the remainder of the system's life (typically an additional 15-20+ years), resulting in substantial long-term savings."
      }
    ]
  },
  {
    name: "Installation & Equipment",
    icon: <Home className="h-5 w-5" />,
    faqs: [
      {
        question: "How do I know if my roof is suitable for solar?",
        answer: "Several factors determine roof suitability: 1) Orientation - south-facing is ideal in the northern hemisphere, though east and west are also viable, 2) Shade - minimal shading throughout the day is preferred, 3) Age and condition - your roof should be in good condition with at least 10+ years of life left, 4) Available space - you'll need sufficient unobstructed area. Our solar professionals can assess your roof's suitability during a free consultation."
      },
      {
        question: "How long does installation take?",
        answer: "The physical installation of residential solar systems typically takes 1-3 days, depending on system size and complexity. However, the entire process from signing a contract to having an operational system usually takes 2-3 months due to permitting, utility approvals, and inspection requirements. Our team handles all of this paperwork and coordination to make the process as smooth as possible."
      },
      {
        question: "What happens if I need a new roof in the future?",
        answer: "If you need to replace your roof after installing solar panels, the panels will need to be temporarily removed and reinstalled. This typically costs $1,000-$2,500 depending on system size. To avoid this additional expense, we recommend replacing older roofs before installing solar. If your roof has less than 10 years of life remaining, we can often coordinate with roofing contractors to complete both projects together."
      },
      {
        question: "What types of solar panels are best?",
        answer: "The three main types of solar panels are: 1) Monocrystalline - highest efficiency and sleek black appearance, but more expensive, 2) Polycrystalline - slightly lower efficiency but more affordable, with a blueish hue, 3) Thin-film - least efficient but flexible and lightweight. For most residential installations, we recommend high-quality monocrystalline panels for their optimal balance of performance, aesthetics, and longevity. We offer multiple panel options and can help you select the best one for your specific needs and budget."
      }
    ]
  },
  {
    name: "Energy Storage",
    icon: <Battery className="h-5 w-5" />,
    faqs: [
      {
        question: "Do I need batteries with my solar system?",
        answer: "Batteries are not required for grid-tied solar systems, as you can use the grid for electricity when your panels aren't producing. However, batteries provide valuable benefits like backup power during outages, greater energy independence, and the ability to maximize self-consumption of solar energy. They're especially beneficial if you have time-of-use utility rates or limited net metering. We can help you determine if batteries make financial sense for your situation."
      },
      {
        question: "How much does solar battery storage cost?",
        answer: "Home battery systems typically cost between $8,000 and $15,000 for a standard installation, depending on capacity and features. Many batteries qualify for the same 30% federal tax credit as solar panels, and some states offer additional incentives specifically for energy storage. While adding batteries increases your upfront cost, they can provide significant value through backup power, avoided peak electricity rates, and increased solar self-consumption."
      },
      {
        question: "How long do solar batteries last?",
        answer: "Most modern lithium-ion solar batteries last 10-15 years, or 4,000-6,000 cycles (a cycle is one complete charge and discharge). Battery warranties typically guarantee at least 70% of original capacity after 10 years. The actual lifespan depends on factors like usage patterns, depth of discharge, temperature management, and the battery chemistry. With proper management, your battery system should provide reliable service for at least a decade."
      },
      {
        question: "How much backup power will batteries provide during an outage?",
        answer: "The duration of backup power depends on your battery capacity and energy usage. A standard 10-13 kWh battery system can typically power essential loads (refrigerator, lights, electronics) for 12-24 hours, or longer with reduced consumption. Multiple batteries can be installed for extended backup capabilities. During a consultation, we can analyze your critical power needs and design a battery system that provides appropriate backup duration for your household."
      }
    ]
  },
  {
    name: "Environmental Impact",
    icon: <Leaf className="h-5 w-5" />,
    faqs: [
      {
        question: "How much CO₂ emissions will my solar system prevent?",
        answer: "An average 8kW residential solar system prevents approximately 8-10 tons of CO₂ emissions annually, equivalent to planting about 150 trees each year. Over the 25+ year lifespan of your solar system, this adds up to 200-250 tons of CO₂ emissions avoided. The exact environmental impact depends on your system size and your local electricity grid's fuel mix, with greater benefits in areas heavily dependent on coal or natural gas."
      },
      {
        question: "What happens to solar panels at the end of their life?",
        answer: "Solar panels can be recycled at the end of their useful life. The aluminum frames, glass, copper wiring, and semiconductor materials can all be recovered and reused. While solar panel recycling infrastructure is still developing in many regions, major manufacturers and industry associations are establishing recycling programs to ensure sustainable end-of-life management. Some areas now require solar panel recycling by law, and these regulations are expected to become more widespread."
      },
      {
        question: "How long does it take for solar panels to offset the energy used to produce them?",
        answer: "The energy payback time for solar panels is typically 1-2 years, meaning they generate as much clean energy as was used in their production within this timeframe. After this period, all energy produced is net positive for the environment. Modern manufacturing processes have significantly reduced the energy required to produce solar panels, improving their lifecycle environmental benefits. Over their 25+ year lifespan, solar panels produce 20-30 times more clean energy than was used to make them."
      }
    ]
  },
  {
    name: "Going Solar Process",
    icon: <Clock className="h-5 w-5" />,
    faqs: [
      {
        question: "What is the process of going solar with Sunfinity?",
        answer: "Our process includes: 1) Free consultation and site assessment, 2) Custom system design and proposal with savings estimate, 3) Contract signing and financing arrangement, 4) Permitting and utility interconnection paperwork, 5) Professional installation by our certified technicians, 6) Final inspection and utility connection, 7) System activation and monitoring setup. We handle all the details, making your transition to solar energy smooth and hassle-free. From start to finish, the process typically takes 2-3 months."
      },
      {
        question: "Will I still receive an electric bill after going solar?",
        answer: "You'll still receive an electric bill, but the amount will be significantly reduced or even credited. With net metering, your utility tracks energy you draw from and send to the grid. If you produce more than you use in a month, you'll receive a credit; if you use more than you produce, you'll only pay for the net difference. Most customers still pay small fixed connection fees to remain grid-connected. Your bill savings will vary seasonally with solar production and energy usage patterns."
      },
      {
        question: "What happens if I sell my home?",
        answer: "Solar panels typically increase home value by 3-4% and can help your home sell faster. If you own your solar system, it's considered a fixture of the home and is included in the sale. If you have a solar loan, you can either pay it off from the sale proceeds or transfer the loan to the new owner. For leased systems, you can either buy out the lease before selling or transfer the lease agreement to the new homeowner (subject to their qualification). We provide documentation and support to facilitate a smooth transition during home sales."
      },
      {
        question: "How do I monitor my solar system's performance?",
        answer: "All our solar installations include a monitoring system with a user-friendly app and web portal. This allows you to track your system's energy production in real-time, view historical performance data, and verify your savings. The monitoring system also alerts us to any potential issues, enabling proactive maintenance. You can access your solar monitoring from any smartphone, tablet, or computer, giving you complete visibility into your clean energy production."
      }
    ]
  }
];

export const SolarFAQsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(faqCategories[0].name);
  const [openFaqs, setOpenFaqs] = useState<{[key: string]: boolean}>({});

  const toggleFaq = (categoryName: string, index: number) => {
    const key = `${categoryName}-${index}`;
    setOpenFaqs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const activeCategoryData = faqCategories.find(cat => cat.name === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-sunfinity-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Frequently Asked Questions About Solar
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about solar energy, installation, costs, and benefits.
            We're here to help you make an informed decision about powering your home with clean energy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Category Sidebar */}
          <div className="order-2 lg:order-1 lg:col-span-1">
            <Card className="sticky top-24 bg-white border border-border/40 shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="py-4 px-4 bg-sunfinity-50 border-b border-border/40">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-sunfinity-500" />
                    FAQ Categories
                  </h3>
                </div>
                <div className="divide-y divide-border/40">
                  {faqCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={cn(
                        "w-full text-left py-3 px-4 transition-colors flex items-center gap-3",
                        activeCategory === category.name
                          ? "bg-sunfinity-50 text-sunfinity-700 font-medium"
                          : "hover:bg-muted"
                      )}
                    >
                      <span className={cn(
                        "flex-shrink-0",
                        activeCategory === category.name ? "text-sunfinity-500" : "text-muted-foreground"
                      )}>
                        {category.icon}
                      </span>
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Content */}
          <div className="order-1 lg:order-2 lg:col-span-3">
            <Card className="bg-white border border-border/40 shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="py-5 px-6 bg-sunfinity-50 border-b border-border/40 flex items-center gap-3">
                  <span className="text-sunfinity-500">
                    {activeCategoryData?.icon || <Sun className="h-5 w-5" />}
                  </span>
                  <h2 className="font-semibold text-xl">{activeCategory}</h2>
                </div>
                
                <div className="divide-y divide-border/40">
                  {activeCategoryData?.faqs.map((faq, index) => {
                    const key = `${activeCategory}-${index}`;
                    const isOpen = openFaqs[key] || false;
                    
                    return (
                      <div key={index} className="border-border/40">
                        <button
                          onClick={() => toggleFaq(activeCategory, index)}
                          className="w-full text-left py-5 px-6 flex items-start justify-between gap-4 hover:bg-muted/30 transition-colors"
                        >
                          <span className="font-medium text-lg">{faq.question}</span>
                          <span className="flex-shrink-0 mt-1 text-sunfinity-500">
                            {isOpen ? (
                              <MinusCircle className="h-5 w-5" />
                            ) : (
                              <PlusCircle className="h-5 w-5" />
                            )}
                          </span>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* CTA Section */}
            <div className="mt-8 bg-gradient-to-r from-sunfinity-500 to-sunfinity-600 rounded-lg shadow-lg overflow-hidden">
              <div className="p-8 text-white">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">Still have questions?</h3>
                    <p className="opacity-90">Our solar experts are ready to help you with personalized answers to your specific situation.</p>
                  </div>
                  <div className="flex-shrink-0 flex gap-4">
                    <Button 
                      variant="secondary" 
                      className="bg-white text-sunfinity-600 hover:bg-sunfinity-50 px-6"
                      onClick={() => window.location.href = "/solar-calculator"}
                    >
                      Calculate Savings
                    </Button>
                    <Button 
                      variant="default" 
                      className="bg-white/20 border border-white text-white hover:bg-white hover:text-sunfinity-600 px-6"
                      onClick={() => window.location.href = "/#quote-form"}
                    >
                      Get Free Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 