import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Cta from "@/components/Cta";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  // Implement smooth scrolling
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
          
          // Update URL without page reload
          window.history.pushState(null, '', target.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Cta />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
