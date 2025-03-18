import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import { 
  LifeBuoy, 
  Mail, 
  Phone, 
  MessageSquare, 
  FileText, 
  HelpCircle, 
  BookOpen, 
  Clock, 
  Video, 
  Award, 
  Shield, 
  Search,
  X
} from "lucide-react";
import { useState } from "react";

// Define types for our data structures
type SupportCategory = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  content: JSX.Element;
};

type SupportGuide = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  content: JSX.Element;
};

type SupportFaq = {
  question: string;
  answer: string;
};

const Support = () => {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const [openGuideId, setOpenGuideId] = useState<string | null>(null);
  const [isWarrantyDialogOpen, setIsWarrantyDialogOpen] = useState(false);
  
  // Get the currently opened category
  const openCategory = supportCategories.find(cat => cat.id === openCategoryId);
  
  // Get the currently opened guide
  const openGuide = supportGuides.find(guide => guide.id === openGuideId);
  
  // Function to open category dialog
  const handleLearnMore = (categoryId: string) => {
    setOpenCategoryId(categoryId);
  };
  
  // Function to close category dialog
  const handleCloseCategory = () => {
    setOpenCategoryId(null);
  };
  
  // Function to open guide dialog
  const handleReadGuide = (guideId: string) => {
    setOpenGuideId(guideId);
  };
  
  // Function to close guide dialog
  const handleCloseGuide = () => {
    setOpenGuideId(null);
  };

  const handleOpenWarrantyDialog = () => {
    setIsWarrantyDialogOpen(true);
  };

  const handleCloseWarrantyDialog = () => {
    setIsWarrantyDialogOpen(false);
  };

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="pt-20">
        
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-white to-sunfinity-50/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                We're Here to Support You
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our dedicated support team is ready to assist you with any questions or concerns about your solar energy system.
                We're committed to ensuring you have the best experience with your Sunfinity installation.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input 
                  type="text" 
                  placeholder="Search for support topics..." 
                  className="pl-11 py-6 h-14 text-base w-full"
                />
                <Button className="absolute right-1.5 top-1.5">
                  Search
                </Button>
              </div>
            </div>

            {/* Support Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {supportCategories.map((category) => (
                <Card key={category.id} className="border border-border/40 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 p-2.5 rounded-lg bg-sunfinity-50 text-sunfinity-500">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                        <p className="text-muted-foreground">{category.description}</p>
                        <Button 
                          variant="link" 
                          className="p-0 h-auto mt-2 font-medium"
                          onClick={() => handleLearnMore(category.id)}
                        >
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Support Guides Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Support Guides</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our comprehensive guides to get the most out of your solar system and resolve common questions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportGuides.map((guide) => (
                <Card key={guide.id} className="border border-border/40 hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-3 bg-sunfinity-500"></div>
                  <CardContent className="p-6">
                    <div className="mb-3 text-sunfinity-500">
                      {guide.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{guide.description}</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto font-medium"
                      onClick={() => handleReadGuide(guide.id)}
                    >
                      Read guide
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section id="get-in-touch" className="py-20 bg-sunfinity-50/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Need personalized assistance? Reach out to our support team through your preferred method.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border border-border/40 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sunfinity-100 flex items-center justify-center text-sunfinity-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-3">Mon-Fri, 8am-6pm</p>
                  <p className="font-medium text-lg">571-525-0019</p>
                </CardContent>
              </Card>

              <Card className="border border-border/40 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sunfinity-100 flex items-center justify-center text-sunfinity-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email Support</h3>
                  <p className="text-muted-foreground mb-3">24/7 response within 24hrs</p>
                  <p className="font-medium">support@sunfinity-solar.com</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Guarantees */}
        <section id="support-guarantee" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Our Support Guarantee</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Sunfinity, we stand behind our products and services with industry-leading guarantees that provide you peace of mind throughout your solar journey.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-4">Our Industry-Leading Warranty Protection</h2>
                  <p className="text-muted-foreground mb-6">
                    At Sunfinity, we stand behind the quality and reliability of our solar systems. Our comprehensive warranty package 
                    provides you with peace of mind knowing that your investment is protected for decades to come.
                  </p>
                  
                  <ul className="space-y-4">
                    {guarantees.map((guarantee, index) => (
                      <li key={index} className="flex gap-3">
                        <div className="mt-1 text-sunfinity-500">
                          <Shield className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{guarantee.title}</h4>
                          <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="mt-6" onClick={handleOpenWarrantyDialog}>Learn About Our Warranties</Button>
                </div>
                
                <div className="bg-gradient-to-br from-sunfinity-500 to-sunfinity-600 rounded-xl p-8 text-white">
                  <div className="mb-4 inline-block p-3 bg-white/20 rounded-lg">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Award-Winning Customer Service</h3>
                  <p className="mb-6 text-white/90">
                    Our support team has been recognized for excellence in customer satisfaction and technical expertise in the solar industry.
                  </p>
                  
                  <div className="bg-white/10 rounded-lg p-5 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <div className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                          <line x1="12" y1="9" x2="12" y2="13"></line>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg font-medium mb-1">Have an urgent issue?</p>
                        <p className="mb-3 text-white/90">Our emergency support is available 24/7 for system-critical issues.</p>
                        <p className="font-bold text-xl">emergency@sunfinity-solar.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-sunfinity-50/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Frequently Asked Support Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find quick answers to common support questions about your solar system.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="border border-border/40 overflow-hidden mb-8">
                <CardContent className="p-0 divide-y divide-border/40">
                  {supportFaqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                        <span className="font-medium text-lg">{faq.question}</span>
                        <div className="transition-transform duration-300 group-open:rotate-180">
                          <HelpCircle className="h-5 w-5 text-sunfinity-500" />
                        </div>
                      </summary>
                      <div className="px-6 pb-6 pt-2 text-muted-foreground">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </CardContent>
              </Card>

              <div className="text-center">
                <Button onClick={() => window.location.href = '/solar-faqs'} variant="outline" className="mr-4">
                  View All FAQs
                </Button>
                <Button onClick={() => {
                  const getInTouchSection = document.getElementById('get-in-touch');
                  if (getInTouchSection) {
                    getInTouchSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
      
      {/* Category Dialog */}
      <Dialog open={openCategoryId !== null} onOpenChange={handleCloseCategory}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">
              {openCategory?.title}
            </DialogTitle>
            <DialogDescription className="mt-2">
              {openCategory?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 space-y-4">
            <div className="prose prose-stone max-w-none mt-6">
              {openCategory?.content}
            </div>
            
            <div className="bg-muted/40 p-6 rounded-lg mt-10">
              <h4 className="font-semibold mb-3 text-lg">Need assistance with your solar system?</h4>
              <div className="flex flex-wrap gap-3 mt-4">
                <Button 
                  size="sm"
                  onClick={() => {
                    handleCloseCategory();
                    window.location.href = "/solar-calculator";
                  }}
                >
                  Calculate Your Savings
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    handleCloseCategory();
                    window.location.href = "/#quote-form";
                  }}
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
          
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
      
      {/* Guide Dialog */}
      <Dialog open={openGuideId !== null} onOpenChange={handleCloseGuide}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">
              {openGuide?.title}
            </DialogTitle>
            <DialogDescription className="mt-2">
              {openGuide?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6 space-y-4">
            <div className="prose prose-stone max-w-none mt-6">
              {openGuide?.content}
            </div>
            
            <div className="bg-muted/40 p-6 rounded-lg mt-10">
              <h4 className="font-semibold mb-3 text-lg">Need assistance with your solar system?</h4>
              <div className="flex flex-wrap gap-3 mt-4">
                <Button 
                  size="sm"
                  onClick={() => {
                    handleCloseGuide();
                    window.location.href = "/solar-calculator";
                  }}
                >
                  Calculate Your Savings
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    handleCloseGuide();
                    window.location.href = "/#quote-form";
                  }}
                >
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
          
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>

      {/* Warranty Dialog */}
      <Dialog open={isWarrantyDialogOpen} onOpenChange={handleCloseWarrantyDialog}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">Sunfinity Solar Warranty Information</DialogTitle>
            <DialogDescription>
              Comprehensive protection for your solar investment
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Our Industry-Leading Warranty Protection</h3>
              <p className="mb-4">
                At Sunfinity, we stand behind the quality and reliability of our solar systems. Our comprehensive warranty package 
                provides you with peace of mind knowing that your investment is protected for decades to come.
              </p>
              <p>
                We've designed our warranties to be simple to understand and straightforward to use if you ever need them. 
                Below you'll find detailed information on all the protections included with your Sunfinity solar system.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="border rounded-lg p-6">
                <h4 className="text-lg font-bold text-sunfinity-600 mb-3">25-Year Performance Guarantee</h4>
                <p className="mb-4">
                  We guarantee your system will produce at least 90% of the estimated energy for 25 years.
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Covers system production over its lifetime</li>
                  <li>Annual performance check and reporting</li>
                  <li>Compensation options if production falls below guarantee</li>
                  <li>Transferable to new homeowners if you sell</li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-6">
                <h4 className="text-lg font-bold text-sunfinity-600 mb-3">10-Year Workmanship Warranty</h4>
                <p className="mb-4">
                  Complete coverage for any installation-related issues for a full decade.
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Covers all aspects of solar installation</li>
                  <li>Protects against water leaks and roof damage</li>
                  <li>Includes all mounting hardware and connections</li>
                  <li>No-cost repairs for any installation defects</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Equipment Warranties</h3>
              <p className="mb-4">
                All major components of your solar system come with their own manufacturer warranties:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-sunfinity-50">
                      <th className="border p-3 text-left">Component</th>
                      <th className="border p-3 text-left">Warranty Duration</th>
                      <th className="border p-3 text-left">Coverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3 font-medium">Solar Panels</td>
                      <td className="border p-3">25 Years</td>
                      <td className="border p-3">Product defects and performance guarantee (min. 90% production)</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Inverters</td>
                      <td className="border p-3">10-25 Years (varies by manufacturer)</td>
                      <td className="border p-3">Full replacement of defective units</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Mounting Hardware</td>
                      <td className="border p-3">25 Years</td>
                      <td className="border p-3">Structural integrity and weather resistance</td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Electrical Components</td>
                      <td className="border p-3">10 Years</td>
                      <td className="border p-3">All wiring, connections and electrical components</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Warranty Claims Process</h3>
              <ol className="space-y-3 list-decimal pl-5">
                <li>
                  <span className="font-medium">Contact our warranty department</span>: Reach us at warranty@sunfinity-solar.com or 571-525-0019
                </li>
                <li>
                  <span className="font-medium">Provide system information</span>: Your name, address and installation date
                </li>
                <li>
                  <span className="font-medium">Describe the issue</span>: Include photos or video if possible
                </li>
                <li>
                  <span className="font-medium">Initial assessment</span>: Our team will evaluate if it's a warranty-covered issue
                </li>
                <li>
                  <span className="font-medium">Service scheduling</span>: We'll arrange for a technician visit if needed
                </li>
                <li>
                  <span className="font-medium">Resolution</span>: Repair or replacement as determined by the warranty terms
                </li>
              </ol>
            </div>
            
            <div className="bg-sunfinity-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-3">Warranty Documentation</h3>
              <p className="mb-4">
                All warranty documentation is provided in your customer portal. If you need additional copies, please contact our warranty team.
              </p>
              <p className="font-medium">
                For any warranty questions or to request service, please contact warranty@sunfinity-solar.com or call 571-525-0019.
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/solar-calculator'}
            >
              Calculate Potential Savings
            </Button>
            <Button
              onClick={() => window.location.href = '/#quote-form'}
            >
              Get a Free Quote
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

// Support Categories Data
const supportCategories: SupportCategory[] = [
  {
    id: "system-maintenance",
    title: "Maintenance & Care",
    description: "Tips and guides for maintaining your solar panels for optimal performance.",
    icon: <Shield className="h-5 w-5" />,
    content: (
      <div>
        <p className="mb-4">
          Proper maintenance of your solar panels ensures they continue to operate at peak efficiency for decades.
          Here are some essential maintenance tips for your Sunfinity solar system:
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Cleaning Your Panels</h3>
        <p className="mb-4">
          In most regions, rain naturally keeps panels relatively clean. However, if you live in an area with high pollen, 
          dust, or bird activity, occasional cleaning can help maintain efficiency:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Clean panels in the early morning or evening when they're cool</li>
          <li>Use only water and a soft brush or cloth similar to what you'd use on a car</li>
          <li>Avoid abrasive cleaning materials or harsh chemicals that could damage the panels</li>
          <li>For difficult-to-reach roof installations, consider hiring professional cleaning services</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Seasonal Considerations</h3>
        <p className="mb-4">
          Different seasons may require specific attention to your solar system:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Spring:</strong> Clear pollen and bird droppings that accumulate during breeding season</li>
          <li><strong>Summer:</strong> Ensure proper ventilation around panels as excessive heat can reduce efficiency</li>
          <li><strong>Fall:</strong> Remove fallen leaves and debris that may accumulate on or around the panels</li>
          <li><strong>Winter:</strong> Clear heavy snow accumulation using a soft snow rake designed for solar panels</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Visual Inspections</h3>
        <p className="mb-4">
          Perform regular visual inspections to check for:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Physical damage to panels (cracks, discoloration)</li>
          <li>Loose mounting hardware or racking systems</li>
          <li>Exposed or damaged wiring</li>
          <li>Signs of pest infestation (birds nesting under panels)</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Professional Maintenance</h3>
        <p className="mb-4">
          While solar systems are generally low maintenance, we recommend a professional inspection every 2-3 years to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Verify electrical connections are secure and corrosion-free</li>
          <li>Check inverter operation and efficiency</li>
          <li>Ensure mounting systems remain securely fastened</li>
          <li>Inspect for any developing issues that might not be visible to untrained eyes</li>
        </ul>
        
        <div className="bg-sunfinity-50 p-4 rounded-lg mt-6">
          <p className="font-medium">
            If you notice any significant drop in energy production or physical damage to your system, 
            please contact our support team immediately at support@sunfinity-solar.com or call 571-525-0019.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "billing-payment",
    title: "Billing & Payment",
    description: "Information about your billing, payments, and financing options.",
    icon: <FileText className="h-5 w-5" />,
    content: (
      <div>
        <p className="mb-4">
          Understanding your solar billing and payment options is essential for managing your investment effectively.
          Here's everything you need to know about Sunfinity's billing and payment processes:
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Solar Financing Options</h3>
        <p className="mb-4">
          Sunfinity offers several financing options to make solar accessible:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Solar Loans:</strong> Fixed monthly payments that often cost less than your pre-solar utility bill</li>
          <li><strong>Cash Purchase:</strong> Maximum long-term savings with no financing costs</li>
          <li><strong>Solar Lease/PPA:</strong> No or low upfront cost with predictable monthly payments</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Understanding Your Solar Billing</h3>
        <p className="mb-4">
          After your solar installation, you'll typically receive:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Utility Bill:</strong> A reduced bill from your utility company for any grid electricity used</li>
          <li><strong>Solar Payment:</strong> If financed, a separate bill for your solar loan, lease, or PPA payment</li>
          <li><strong>Net Metering Credits:</strong> Compensation on your utility bill for excess energy your system produces</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Payment Methods</h3>
        <p className="mb-4">
          We offer several convenient payment methods for your solar financing:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Online payment portal (accessible through your account)</li>
          <li>Automatic bank account withdrawals</li>
          <li>Credit/debit card payments</li>
          <li>Check payments by mail</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Financial Benefits & Incentives</h3>
        <p className="mb-4">
          Solar investment comes with several financial advantages:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Federal Tax Credit:</strong> Currently 30% of the total system cost (consult your tax advisor)</li>
          <li><strong>State/Local Incentives:</strong> Varying by location, may include rebates, property tax exemptions, etc.</li>
          <li><strong>Net Metering:</strong> Credit for excess energy your system produces</li>
          <li><strong>Increased Home Value:</strong> Solar installations typically increase property values</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Billing Questions & Support</h3>
        <p className="mb-4">
          Our billing support team is ready to assist with:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Understanding your solar billing structure</li>
          <li>Payment arrangement options</li>
          <li>Questions about financing terms</li>
          <li>Help with incentive and tax credit documentation</li>
        </ul>
        
        <div className="bg-sunfinity-50 p-4 rounded-lg mt-6">
          <p className="font-medium">
            For billing questions or concerns, please contact our dedicated billing support at 
            billing@sunfinity-solar.com or call our customer service line at 571-525-0019.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Common issues and how to resolve them or get professional help.",
    icon: <LifeBuoy className="h-5 w-5" />,
    content: (
      <div>
        <p className="mb-4">
          While solar systems are generally very reliable, occasionally you may encounter issues that require troubleshooting.
          This guide covers common problems and their solutions.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">System Not Producing Power</h3>
        <p className="mb-4">
          If your system isn't generating electricity as expected:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Check for power outage:</strong> Solar systems automatically shut down during grid outages for safety</li>
          <li><strong>Inspect circuit breakers:</strong> Check if any breakers in your electrical panel related to solar have tripped</li>
          <li><strong>Verify inverter status:</strong> Look for indicator lights on your inverter (green typically means normal operation)</li>
          <li><strong>Check for shading:</strong> Temporary shading from tree growth, new construction, or debris can reduce output</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Inverter Error Codes</h3>
        <p className="mb-4">
          Modern inverters display error codes when issues occur:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Note any error numbers or messages displayed on your inverter screen</li>
          <li>Try powering the inverter off and on by turning off AC and DC disconnect switches for 1 minute</li>
          <li>Report persistent error codes to our technical support team</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Lower Than Expected Production</h3>
        <p className="mb-4">
          If your system is producing less energy than anticipated:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Seasonal variations:</strong> Production naturally varies by season with changes in sunlight hours</li>
          <li><strong>Weather impact:</strong> Cloudy periods will reduce generation temporarily</li>
          <li><strong>Panel cleanliness:</strong> Accumulated dirt or debris can reduce efficiency</li>
          <li><strong>Panel damage:</strong> Check for physical damage like cracks or discoloration</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">When to Contact Professional Support</h3>
        <p className="mb-4">
          Reach out to our technical team immediately if you experience:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Complete system shutdown with no obvious cause</li>
          <li>Persistent error messages on your inverter</li>
          <li>Unusual noises from equipment</li>
          <li>Physical damage to system components</li>
          <li>Significant and unexplained drop in energy production</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Safety Precautions</h3>
        <p className="mb-4">
          Always prioritize safety when troubleshooting:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Never open electrical boxes or disconnect covers unless qualified</li>
          <li>Do not attempt repairs on the roof without proper safety equipment</li>
          <li>Avoid touching damaged panels, especially after storms</li>
          <li>Never hose down electrical components of your solar system</li>
        </ul>
        
        <div className="bg-sunfinity-50 p-4 rounded-lg mt-6">
          <p className="font-medium">
            For urgent troubleshooting assistance, please contact our technical support team at 
            support@sunfinity-solar.com or for emergency issues, email emergency@sunfinity-solar.com.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "system-upgrades",
    title: "System Upgrades",
    description: "Explore options to expand or upgrade your existing solar installation.",
    icon: <Award className="h-5 w-5" />,
    content: (
      <div>
        <p className="mb-4">
          As your energy needs evolve or technology advances, you may want to consider upgrading your existing solar installation.
          Here are the various options Sunfinity offers to enhance your solar system.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Adding More Solar Panels</h3>
        <p className="mb-4">
          Expand your system's production capacity:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>When to consider:</strong> Increased energy usage (new EV, home addition, etc.)</li>
          <li><strong>Compatibility:</strong> Our team will assess integration with your existing system</li>
          <li><strong>Space requirements:</strong> Evaluation of additional roof space or ground mount options</li>
          <li><strong>Inverter capacity:</strong> Possible inverter upgrade to handle additional capacity</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Battery Storage Integration</h3>
        <p className="mb-4">
          Add energy storage to your existing solar system:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Power outage protection:</strong> Keep essential systems running during grid outages</li>
          <li><strong>Energy optimization:</strong> Store excess daytime production for evening use</li>
          <li><strong>Time-of-use management:</strong> Avoid high electricity rates during peak periods</li>
          <li><strong>Available incentives:</strong> Many regions offer special incentives for battery storage</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Inverter Upgrades</h3>
        <p className="mb-4">
          Enhance your system's heart with newer technology:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Higher efficiency:</strong> New inverters can offer improved conversion efficiency</li>
          <li><strong>Advanced features:</strong> Better functionality, smart home integration, grid services</li>
          <li><strong>Microinverter retrofits:</strong> Upgrading from string to microinverters for per-panel optimization</li>
          <li><strong>Aging replacement:</strong> Proactive replacement of older inverters approaching end of warranty</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Smart Home Integration</h3>
        <p className="mb-4">
          Connect your solar system with modern home automation:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Energy management systems:</strong> Optimize usage based on production and time-of-use rates</li>
          <li><strong>Smart appliance coordination:</strong> Run high-consumption devices during peak production</li>
          <li><strong>EV charger integration:</strong> Coordinate vehicle charging with solar production</li>
          <li><strong>Voice assistant compatibility:</strong> Control through popular voice platforms</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Upgrade Process</h3>
        <p className="mb-4">
          What to expect when upgrading your system:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>System assessment:</strong> Evaluation of your current system and upgrade needs</li>
          <li><strong>Custom proposal:</strong> Detailed options and pricing for your specific situation</li>
          <li><strong>Permitting:</strong> Handling all required permits and utility interconnection updates</li>
          <li><strong>Professional installation:</strong> Expert integration with your existing system</li>
        </ul>
        
        <div className="bg-sunfinity-50 p-4 rounded-lg mt-6">
          <p className="font-medium">
            To explore upgrade options for your existing solar system, please contact our solar consultants at 
            sales@sunfinity-solar.com or call 571-525-0019 for a free consultation.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "warranty-claims",
    title: "Warranty Claims",
    description: "How to submit warranty claims and what your warranty covers.",
    icon: <Shield className="h-5 w-5" />,
    content: (
      <div>
        <p className="mb-4">
          Sunfinity stands behind the quality and performance of our solar systems with comprehensive warranty coverage.
          Here's what you need to know about your warranty protection and the claim process.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Your Warranty Coverage</h3>
        <p className="mb-4">
          Your Sunfinity solar system includes multiple warranty protections:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Equipment Warranties:</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Solar panels: 25-year manufacturer's product and performance warranty</li>
              <li>Inverters: 10-25 year warranty (varies by manufacturer)</li>
              <li>Mounting hardware: 25-year warranty</li>
            </ul>
          </li>
          <li><strong>Workmanship Warranty:</strong> 10-year coverage on all installation work and roof penetrations</li>
          <li><strong>Performance Guarantee:</strong> We guarantee your system will produce at the specified levels for 25 years</li>
          <li><strong>Roof Warranty:</strong> Protection against any roof damage caused by the solar installation</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Common Warranty Claims</h3>
        <p className="mb-4">
          Typical issues covered under warranty include:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Equipment failure (inverter malfunction, panel defects)</li>
          <li>Performance below guaranteed levels</li>
          <li>Weather damage covered by manufacturer warranty</li>
          <li>Installation-related issues</li>
          <li>Roof leaks at mounting points</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">How to Submit a Warranty Claim</h3>
        <p className="mb-4">
          If you believe you have a warranty-covered issue:
        </p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>Contact our warranty department at warranty@sunfinity-solar.com or 571-525-0019</li>
          <li>Provide your system details (name, address, installation date)</li>
          <li>Describe the issue in detail (include photos if possible)</li>
          <li>Our team will assess your claim and respond within 2 business days</li>
          <li>If approved, we'll schedule a service visit to address the issue</li>
        </ol>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">What to Expect During a Warranty Service</h3>
        <p className="mb-4">
          Our warranty service process includes:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Diagnostic assessment to confirm the warranty issue</li>
          <li>Clear explanation of the problem and coverage determination</li>
          <li>Scheduling of repair or replacement service</li>
          <li>Professional technicians performing all warranty work</li>
          <li>Post-service testing to confirm the issue is resolved</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Warranty Documentation</h3>
        <p className="mb-4">
          Important documents related to your warranty:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Original warranty certificates provided at system commissioning</li>
          <li>Manufacturer warranty information for specific components</li>
          <li>Performance guarantee documentation</li>
          <li>Maintenance records (keep these to maintain warranty validity)</li>
        </ul>
        
        <div className="bg-sunfinity-50 p-4 rounded-lg mt-6">
          <p className="font-medium">
            If you need copies of your warranty documentation or have questions about coverage, 
            please contact our warranty department at warranty@sunfinity-solar.com.
          </p>
        </div>
      </div>
    )
  }
];

// Support Guides Data
const supportGuides: SupportGuide[] = [
  {
    id: "seasonal-maintenance",
    title: "Seasonal Maintenance Guide",
    description: "How to care for your system throughout the year for maximum efficiency.",
    icon: <Clock className="h-5 w-5" />,
    content: (
      <div>
        <p className="mb-4">
          Regular seasonal maintenance helps keep your solar system performing at its best year-round. 
          This guide outlines essential care tasks for each season.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Spring Maintenance</h3>
        <p className="mb-4">
          As temperatures rise and plants begin to bloom, focus on:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Pollen removal:</strong> Spring pollen can coat panels and reduce efficiency</li>
          <li><strong>Bird nest prevention:</strong> Check for and safely remove any nesting material under panels</li>
          <li><strong>Visual inspection:</strong> Look for any winter damage to panels or mounting hardware</li>
          <li><strong>Tree trimming:</strong> Trim branches that may have grown and now cast shadows on panels</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Summer Maintenance</h3>
        <p className="mb-4">
          During peak production season:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Panel cooling:</strong> Ensure proper airflow around panels to prevent overheating</li>
          <li><strong>Performance check:</strong> Summer is peak production time, so any significant drops should be investigated</li>
          <li><strong>Dust removal:</strong> In dry areas, panels may require gentle rinsing to remove dust buildup</li>
          <li><strong>Mounting hardware check:</strong> Heat expansion can sometimes loosen hardware - visually inspect fasteners</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Fall Maintenance</h3>
        <p className="mb-4">
          As leaves begin to fall:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Leaf removal:</strong> Regularly clear fallen leaves from panels and around the array</li>
          <li><strong>Gutter cleaning:</strong> For roof installations, ensure gutters are clear to prevent water backup</li>
          <li><strong>Pre-winter inspection:</strong> Check all system components before winter weather arrives</li>
          <li><strong>Trim vegetation:</strong> Cut back any plants that have grown during summer and might shade panels</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Winter Maintenance</h3>
        <p className="mb-4">
          During the cold months:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Snow removal:</strong> Gently clear heavy snow accumulation using a soft snow rake designed for solar panels</li>
          <li><strong>Ice management:</strong> Never chip ice off panels; allow it to melt naturally</li>
          <li><strong>Post-storm checks:</strong> Visually inspect system after severe winter storms</li>
          <li><strong>Access paths:</strong> Keep access paths to ground-mounted systems clear of snow</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Year-Round Best Practices</h3>
        <p className="mb-4">
          Regardless of season:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Never use abrasive materials, pressure washers, or harsh chemicals on panels</li>
          <li>Clean panels in the early morning or evening when they're cool</li>
          <li>Stay safety-conscious, especially on rooftop systems</li>
          <li>Consider professional cleaning services for difficult-to-reach installations</li>
        </ul>
        
        <div className="bg-sunfinity-50 p-4 rounded-lg mt-6">
          <p className="font-medium">
            If you notice any damage to your system during seasonal maintenance, please contact our support team at 
            support@sunfinity-solar.com for professional assistance.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "troubleshooting-guide",
    title: "Troubleshooting Common Issues",
    description: "Step-by-step solutions for the most frequent solar system questions.",
    icon: <LifeBuoy className="h-5 w-5" />,
    content: (
      <div>
        <p className="mb-4">
          This troubleshooting guide provides step-by-step solutions for common issues homeowners experience with their solar systems.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Issue: System Not Producing Power</h3>
        <p className="mb-4">
          Steps to resolve:
        </p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>Check if there's a power outage in your neighborhood</li>
          <li>Examine your main electrical panel for tripped breakers</li>
          <li>Look at your solar AC disconnect switch to ensure it's in the "on" position</li>
          <li>Check your inverter for any warning lights or error codes</li>
          <li>If all checks show no issues yet system remains non-operational, contact support</li>
        </ol>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Issue: Inverter Showing Error Code</h3>
        <p className="mb-4">
          Steps to resolve:
        </p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>Record the exact error code number and any flashing pattern</li>
          <li>Power cycle the inverter:
            <ul className="list-disc pl-6 mt-2 mb-2">
              <li>Turn off the AC disconnect</li>
              <li>Turn off the DC disconnect</li>
              <li>Wait one minute</li>
              <li>Turn on the DC disconnect</li>
              <li>Turn on the AC disconnect</li>
            </ul>
          </li>
          <li>If the error persists after reset, contact technical support with the error code</li>
        </ol>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Issue: Lower Than Expected Production</h3>
        <p className="mb-4">
          Steps to resolve:
        </p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>Check for new shading sources (tree growth, new construction)</li>
          <li>Inspect panels for dirt, debris, bird droppings, or pollen build-up</li>
          <li>Verify if current weather conditions (cloudy days, seasonal changes) explain the decrease</li>
          <li>Look for physical damage to panels such as cracks or discoloration</li>
          <li>If no obvious causes are found, contact support for professional assessment</li>
        </ol>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Issue: Solar System Shuts Down During Power Outage</h3>
        <p className="mb-4">
          Understanding and resolving:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>This is normal safety behavior for grid-tied systems without battery backup</li>
          <li>Grid-tied systems must shut down during outages to prevent back-feeding electricity to the grid</li>
          <li>Only systems with battery backup can provide power during grid outages</li>
          <li>If you have battery backup but aren't getting power during an outage, check:
            <ul className="list-disc pl-6 mt-2">
              <li>Battery system disconnect switches</li>
              <li>Critical load panel breakers</li>
              <li>Battery charge status indicators</li>
            </ul>
          </li>
        </ul>
        
        <div className="bg-sunfinity-50 p-4 rounded-lg mt-6">
          <p className="font-medium">
            For issues that persist after following these troubleshooting steps, please contact our technical support team at 
            support@sunfinity-solar.com or for urgent matters at emergency@sunfinity-solar.com.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "solar-investment",
    title: "Understanding Your Solar Investment",
    description: "Making the most of your solar investment with financial tips and advice.",
    icon: <FileText className="h-5 w-5" />,
    content: (
      <div>
        <p className="mb-4">
          Your solar system is more than an environmental choice - it's a significant financial investment.
          This guide helps you understand and maximize the financial benefits of your solar system.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Understanding Your Utility Bill After Solar</h3>
        <p className="mb-4">
          Your new utility bills may look different:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Net metering credits:</strong> Understanding how excess energy production is credited</li>
          <li><strong>Connection fees:</strong> Fixed charges that remain regardless of energy usage</li>
          <li><strong>Time-of-use considerations:</strong> How different rates at different times affect your bill</li>
          <li><strong>Annual true-up:</strong> How yearly reconciliation works with net metering</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Maximizing Financial Benefits</h3>
        <p className="mb-4">
          Strategies to optimize your return on investment:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Shift energy usage:</strong> Run high-consumption appliances during peak solar production</li>
          <li><strong>Energy efficiency:</strong> Combine solar with efficiency improvements for greater savings</li>
          <li><strong>System maintenance:</strong> Regular care ensures optimal production and longevity</li>
          <li><strong>Monitoring savings:</strong> Compare pre-solar and post-solar utility costs</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Tax Benefits and Incentives</h3>
        <p className="mb-4">
          Don't miss out on available financial incentives:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Federal tax credit:</strong> Currently 30% of system cost through 2032</li>
          <li><strong>State incentives:</strong> Many states offer additional rebates or tax benefits</li>
          <li><strong>Property tax exemptions:</strong> Many localities exempt solar improvements from property tax assessments</li>
          <li><strong>SRECs:</strong> In some markets, you can sell Solar Renewable Energy Certificates</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Home Value Increase</h3>
        <p className="mb-4">
          Solar systems typically increase home values:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Resale premium:</strong> Studies show owned solar systems add 3-4% to home value</li>
          <li><strong>Marketing advantage:</strong> Energy-producing homes typically sell faster</li>
          <li><strong>Documentation:</strong> Keep system specifications, warranties and performance data</li>
          <li><strong>Transferable benefits:</strong> Many incentives and savings transfer to new owners</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Long-Term Financial Planning</h3>
        <p className="mb-4">
          Looking ahead with your solar investment:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Payback period:</strong> Understanding when your system will have paid for itself</li>
          <li><strong>Warranty coverage:</strong> Planning for the different warranty periods of system components</li>
          <li><strong>Future expansion:</strong> Considerations for adding panels or battery storage later</li>
          <li><strong>Financing optimization:</strong> Strategies for early loan payoff if applicable</li>
        </ul>
        
        <div className="bg-sunfinity-50 p-4 rounded-lg mt-6">
          <p className="font-medium">
            For personalized financial advice regarding your solar investment, contact our finance team at 
            billing@sunfinity-solar.com or call 571-525-0019 for consultation.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "video-tutorials",
    title: "Video Tutorials",
    description: "Watch step-by-step guides for common solar system interactions.",
    icon: <Video className="h-5 w-5" />,
    content: (
      <div>
        <p className="mb-4">
          Our video tutorials provide visual step-by-step instructions for common solar system tasks and questions.
          Select a topic below to view the corresponding tutorial.
        </p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">System Operation Basics</h3>
        <div className="bg-muted/30 p-4 rounded-lg mb-4">
          <div className="flex items-start gap-4">
            <div className="rounded-md bg-sunfinity-100 p-3 text-sunfinity-700">
              <Video className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Understanding Your Solar System Components</h4>
              <p className="text-sm text-muted-foreground mb-2">
                An overview of panels, inverters, disconnects, and how they work together in your solar system.
              </p>
              <Button 
                size="sm"
                onClick={() => window.open('https://www.youtube.com/watch?v=example1', '_blank')}
              >
                View Tutorial
              </Button>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Maintenance Tutorials</h3>
        <div className="space-y-4">
          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="rounded-md bg-sunfinity-100 p-3 text-sunfinity-700">
                <Video className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Safe Panel Cleaning Methods</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Proper techniques and tools for safely cleaning your solar panels without damage.
                </p>
                <Button 
                  size="sm"
                  onClick={() => window.open('https://www.youtube.com/watch?v=example2', '_blank')}
                >
                  View Tutorial
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="rounded-md bg-sunfinity-100 p-3 text-sunfinity-700">
                <Video className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Seasonal Maintenance Checklist</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Visual guide to seasonal checks and maintenance for optimal system performance.
                </p>
                <Button 
                  size="sm"
                  onClick={() => window.open('https://www.youtube.com/watch?v=example3', '_blank')}
                >
                  View Tutorial
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Troubleshooting Videos</h3>
        <div className="space-y-4">
          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="rounded-md bg-sunfinity-100 p-3 text-sunfinity-700">
                <Video className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Resetting Your Inverter</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Step-by-step guide to safely power cycle your inverter when troubleshooting issues.
                </p>
                <Button 
                  size="sm"
                  onClick={() => window.open('https://www.youtube.com/watch?v=example4', '_blank')}
                >
                  View Tutorial
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="rounded-md bg-sunfinity-100 p-3 text-sunfinity-700">
                <Video className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Understanding Inverter Error Codes</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Common error codes explained and what actions to take for each.
                </p>
                <Button 
                  size="sm"
                  onClick={() => window.open('https://www.youtube.com/watch?v=example5', '_blank')}
                >
                  View Tutorial
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Financial Understanding</h3>
        <div className="bg-muted/30 p-4 rounded-lg mb-4">
          <div className="flex items-start gap-4">
            <div className="rounded-md bg-sunfinity-100 p-3 text-sunfinity-700">
              <Video className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Reading Your Solar-Adjusted Utility Bill</h4>
              <p className="text-sm text-muted-foreground mb-2">
                How to interpret your new utility bills with net metering and solar production.
              </p>
              <Button 
                size="sm"
                onClick={() => window.open('https://www.youtube.com/watch?v=example6', '_blank')}
              >
                View Tutorial
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-sunfinity-50 p-4 rounded-lg mt-6">
          <p className="font-medium">
            Can't find what you're looking for? Request a specific tutorial by emailing
            support@sunfinity-solar.com with your topic suggestion.
          </p>
        </div>
      </div>
    )
  }
];

// Support Guarantees
const guarantees = [
  {
    title: "25-Year Performance Guarantee",
    description: "We guarantee your system will produce at least 90% of the estimated energy for 25 years."
  },
  {
    title: "10-Year Workmanship Warranty",
    description: "Complete coverage for any installation-related issues for a full decade."
  },
  {
    title: "Equipment Warranties",
    description: "Manufacturer warranties on panels, inverters and all system components."
  },
  {
    title: "Free System Monitoring",
    description: "Continuous remote monitoring to catch and address any issues promptly."
  }
];

// Support FAQs
const supportFaqs: SupportFaq[] = [
  {
    question: "What should I do if my system stops producing power?",
    answer: "First, check if there's a power outage in your area. Next, check if there are any alerts or notifications from your utility company. Verify that all switches in your electrical panel related to solar are in the 'on' position. If these steps don't resolve the issue, contact our technical support team at support@sunfinity-solar.com for assistance."
  },
  {
    question: "How often should I clean my solar panels?",
    answer: "In most areas, rain naturally cleans solar panels adequately. However, if you live in a particularly dusty area or notice a significant decrease in production, cleaning 2-4 times per year is recommended. Use only water and a soft brush or cloth to avoid scratching the panels. Never use abrasive materials or harsh chemicals."
  },
  {
    question: "What happens to my solar system during a power outage?",
    answer: "Standard grid-tied solar systems will shut down during a power outage as a safety measure to prevent back-feeding electricity to the grid. If you have a battery storage system installed, your essential loads can continue to receive power depending on your battery capacity and consumption. Contact us to learn more about adding battery backup to your system."
  },
  {
    question: "How do I submit a warranty claim?",
    answer: "To submit a warranty claim, contact our support team by phone or email at support@sunfinity-solar.com with your system details and a description of the issue. Our team will assess whether the issue is covered under warranty and guide you through the next steps. We aim to resolve all warranty claims promptly to minimize any disruption to your solar production."
  },
  {
    question: "How do I know if my solar panels are working properly?",
    answer: "You can check if your solar system is working properly by: 1) Looking at your electric bill to see if it's lower than before installation, 2) Checking your inverter for any error lights or codes, 3) Observing your electrical meter during daylight to see if it's running slower or backward, 4) Visual inspection of panels for any visible damage. If you suspect issues, contact our support team at support@sunfinity-solar.com."
  }
];

export default Support; 