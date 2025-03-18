import { Navbar } from "@/components/Navbar";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

const Blog = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="pt-20">
        <BlogSection />
      </div>
      <Footer />
    </div>
  );
};

export default Blog; 