import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const TestimonialsSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("testimonials");
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

  const testimonials = [
    {
      quote: "Switching to solar with Sunfinity was one of the best decisions we've made. Our electric bill has been reduced by over 90%, and the installation was seamless.",
      author: "Sarah Johnson",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5.0,
      bgColor: "#EA4335" // Red Google color
    },
    {
      quote: "As a business owner, reducing overhead costs is crucial. Sunfinity's commercial solar solution has significantly decreased our energy expenses while showcasing our commitment to sustainability.",
      author: "Michael Rodriguez",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 4.5,
      bgColor: "#4285F4" // Blue Google color
    },
    {
      quote: "The entire team at Sunfinity was professional from start to finish. They answered all our questions, delivered on their promises, and the solar panels look fantastic on our roof.",
      author: "Emily Chen",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1581091226825-a5a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5.0,
      bgColor: "#FBBC05" // Yellow Google color
    },
    {
      quote: "We've been able to power our entire manufacturing facility with Sunfinity's commercial solar installation. The ROI has exceeded our expectations and we're proud to be a green business.",
      author: "David Thompson",
      role: "Manufacturing CEO",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5.0,
      bgColor: "#34A853" // Green Google color
    },
    {
      quote: "After researching several solar companies, I chose Sunfinity for their transparent pricing and quality products. My home now generates more electricity than we use!",
      author: "Jessica Williams",
      role: "Homeowner",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 4.5,
      bgColor: "#DB4437" // Red Google color (alternate)
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Helper function to render star ratings
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="halfStarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#E5E7EB" />
            </linearGradient>
          </defs>
          <path fill="url(#halfStarGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }

    // Add empty stars to reach 5
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }

    return stars;
  };

  // Google logo SVG
  const GoogleLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="80" height="28">
      <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
      <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
      <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.21-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
      <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
      <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
    </svg>
  );

  return (
    <section id="testimonials" className="py-24 relative bg-gradient-to-b from-background to-sunfinity-50/30">
      {/* Abstract shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-sunfinity-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-subtle"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div 
            className={cn(
              "inline-block px-3 py-1 rounded-full bg-sunfinity-100 border border-sunfinity-200 mb-4 transition-all duration-500 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            <p className="text-sunfinity-800 text-sm font-medium">Customer Reviews</p>
          </div>
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 delay-100 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            What Our Clients Say
          </h2>
          <p 
            className={cn(
              "text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-500 delay-200 opacity-0 translate-y-4",
              loaded && "opacity-100 translate-y-0"
            )}
          >
            Don't just take our word for it. See our reviews from real customers who have transformed their energy consumption with Sunfinity.
          </p>
        </div>

        <div 
          className={cn(
            "max-w-4xl mx-auto transition-all duration-700 opacity-0 scale-95",
            loaded && "opacity-100 scale-100"
          )}
        >
          {/* Testimonial card container with Google review styling */}
          <div className="relative h-[450px] md:h-[350px] mb-10 bg-white shadow-lg rounded-xl overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={cn(
                  "p-8 md:p-10 transition-all duration-500 absolute inset-0 h-full w-full",
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                {/* Google header */}
                <div className="flex items-center justify-between border-b pb-4 mb-6">
                  <GoogleLogo />
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-gray-700 font-medium">{testimonial.rating.toFixed(1)}</span>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm mx-auto flex items-center justify-center" style={{ backgroundColor: testimonial.bgColor }}>
                        <span className="text-white text-xl font-medium">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        G
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      <p className="text-gray-400 text-xs mt-1">Local Guide • 15 reviews</p>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <div className="flex items-center mb-3">
                      <div className="flex mr-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      <span className="text-gray-500 text-sm">• 2 months ago</span>
                    </div>
                    <p className="text-gray-700 mb-4 text-pretty">{testimonial.quote}</p>
                    <div className="flex text-blue-600 text-sm space-x-4">
                      <button className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                        </svg>
                        Helpful
                      </button>
                      <button className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                        </svg>
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === activeIndex ? "bg-blue-500 scale-125" : "bg-gray-300"
                )}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

