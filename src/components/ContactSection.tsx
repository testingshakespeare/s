import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export const ContactSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thank you for your message! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <PhoneIcon className="w-5 h-5 text-sunfinity-500" />,
      label: "Phone",
      value: "(571) 525-0019",
      link: "tel:+15715250019"
    },
    {
      icon: <MailIcon className="w-5 h-5 text-sunfinity-500" />,
      label: "Email",
      value: "contact@sunfinity-solar.com",
      link: "mailto:contact@sunfinity-solar.com"
    },
    {
      icon: <MapPinIcon className="w-5 h-5 text-sunfinity-500" />,
      label: "Locations We Service",
      value: "",
      link: "https://maps.google.com",
      isServiceArea: true,
      locations: [
        "Washington, DC",
        "Great Falls, VA",
        "Mclean, VA",
        "Fairfax, VA",
        "Bethesda, MD",
        "Silver Spring, MD"
      ]
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-white to-sunfinity-50">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div 
            className={cn(
              "inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200 mb-4 transition-all duration-500 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            <p className="text-sunfinity-800 text-sm font-medium">Get In Touch</p>
          </div>
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            Ready to Start Your Solar Journey?
          </h2>
          <p 
            className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-500 delay-200 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            Contact us today for a free consultation and personalized quote. Our solar experts are here to answer all your questions.
          </p>
        </div>

        <div 
          className={cn(
            "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 transition-all duration-700 opacity-0 translate-y-8",
            loaded && "opacity-100 translate-y-0"
          )}
        >
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Reach out to us with any questions about solar energy solutions, financing options, or to schedule your free consultation.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-sunfinity-100 flex items-center justify-center flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.isServiceArea ? (
                        <div>
                          <p className="font-medium mb-1">DMV Area</p>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                            {info.locations.map((location, idx) => (
                              <span key={idx} className="text-muted-foreground hover:text-sunfinity-600 transition-colors">
                                {location}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <a 
                          href={info.link} 
                          className="font-medium hover:text-sunfinity-600 transition-colors"
                          target={info.label === "Locations We Service" ? "_blank" : undefined}
                          rel={info.label === "Locations We Service" ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 bg-sunfinity-100 rounded-2xl p-6">
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday-Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="glass-panel rounded-2xl p-8 h-full" id="quote-form">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Quote</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    How can we help you?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your energy needs or any questions you have about solar solutions."
                    rows={4}
                    required
                    className="w-full rounded-lg resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-6 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Get Your Free Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
