import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sun, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check for hash in URL when component mounts or location changes
  useEffect(() => {
    if (isHomePage && location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          const navbar = document.querySelector('header');
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay to ensure the page has fully loaded
    }
  }, [location, isHomePage]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: isHomePage ? "#services" : "/#services" },
    { name: "How it Works", href: isHomePage ? "#process" : "/#process" },
    { name: "Testimonials", href: isHomePage ? "#testimonials" : "/#testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/support" },
  ];
  
  const scrollToQuoteForm = () => {
    if (!isHomePage) {
      // If not on home page, navigate to home page's quote form
      window.location.href = "/#quote-form";
      return;
    }
    
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
    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  const handleNavLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    
    // If we're navigating to a section on the home page but we're not on the home page
    if (!isHomePage && href.includes('/#')) {
      e.preventDefault();
      
      // First navigate to home page
      navigate('/');
      
      // Then scroll to the section after a brief delay to ensure the page has loaded
      setTimeout(() => {
        const sectionId = href.split('#')[1];
        const section = document.getElementById(sectionId);
        
        if (section) {
          const navbar = document.querySelector('header');
          const navbarHeight = navbar ? navbar.offsetHeight : 0;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const handleCalculatorClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled 
          ? "bg-white bg-opacity-80 backdrop-blur-sm shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <Sun className="h-8 w-8 text-sunfinity-500" />
          <span className="font-serif text-2xl font-semibold text-foreground">Sunfinity</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-foreground font-medium text-sm transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
              onClick={(e) => handleNavLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/solar-calculator" onClick={handleCalculatorClick}>
            <Button 
              variant="outline" 
              className="items-center gap-2"
            >
              Calculate Your Savings
            </Button>
          </Link>
          <Button 
            className="items-center gap-2 shadow-md hover:shadow-lg transition-shadow"
            onClick={scrollToQuoteForm}
          >
            Get Free Quote
          </Button>
        </div>

        <button 
          className="md:hidden text-foreground p-2 relative z-50" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 transform md:hidden pt-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col h-full">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground font-medium text-lg transition-colors"
                onClick={(e) => handleNavLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-auto pb-8 space-y-4">
            <Link to="/solar-calculator" className="block w-full" onClick={handleCalculatorClick}>
              <Button 
                variant="outline" 
                className="w-full py-6 text-base font-semibold"
              >
                Calculate Your Savings
              </Button>
            </Link>
            <Button 
              className="w-full py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={scrollToQuoteForm}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
