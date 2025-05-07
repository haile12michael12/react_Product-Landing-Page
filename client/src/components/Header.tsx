import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Box } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo for the page */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <Box className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">Nexify</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Features</Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Testimonials</Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Pricing</Link>
            <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">FAQ</Link>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Login</Link>
            <Button variant="default" size="sm">Get started</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={cn("md:hidden pb-6 pt-2 border-t border-gray-200", mobileMenuOpen ? "block" : "hidden")}>
          <nav className="flex flex-col space-y-4">
            <Link href="#features" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">Features</Link>
            <Link href="#testimonials" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">Testimonials</Link>
            <Link href="#pricing" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">Pricing</Link>
            <Link href="#faq" className="text-base font-medium text-gray-600 hover:text-primary transition-colors">FAQ</Link>
            <div className="pt-2 space-y-3">
              <Link href="#" className="block text-center text-base font-medium text-gray-600 hover:text-primary transition-colors">Login</Link>
              <Button variant="default" className="w-full">Get started</Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
