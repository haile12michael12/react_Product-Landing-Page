import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { PlayCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useInView } from "@/hooks/use-intersection-observer";
import { useRef } from "react";

const avatars = [
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fallback: "TK"
  },
  {
    src: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fallback: "MJ"
  },
  {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fallback: "SW"
  },
  {
    src: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    fallback: "AH"
  }
];

const companies = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 }
];

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            ref={heroRef}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              <span className="block">Modern platform for</span>
              <span className="block text-primary">forward-thinking teams</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              Streamline your business processes, collaborate effortlessly, and drive growth with our all-in-one solution designed for the modern enterprise.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-none">
                Start your free trial
              </Button>
              <Button size="lg" variant="outline" className="flex-none">
                <PlayCircle className="mr-2 h-5 w-5 text-primary" />
                Watch demo
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                  <Avatar key={index} className="h-8 w-8 ring-2 ring-white">
                    <AvatarImage src={avatar.src} alt="User avatar" />
                    <AvatarFallback>{avatar.fallback}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="ml-4">
                <span className="text-sm font-medium text-gray-900">Join 2,000+ happy teams</span>
                <div className="flex mt-1">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:mt-0"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut"
              }}
              className="relative rounded-2xl bg-white shadow-xl overflow-hidden"
            >
              <img 
                className="w-full h-auto" 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Platform dashboard" 
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 to-white/0 pt-16 pb-6 px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Project progress</p>
                    <p className="text-xs text-gray-500 mt-1">Sprint ends in 3 days</p>
                  </div>
                  <div className="flex-shrink-0 bg-primary text-white rounded-md px-2.5 py-1 text-xs font-medium">
                    +64%
                  </div>
                </div>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "72%" }}></div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-amber-100 rounded-full"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Logos Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-base font-medium text-gray-500 mb-8">
            Trusted by industry-leading companies
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
            {companies.map(company => (
              <div key={company.id} className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <div className="h-8 text-gray-400">
                  {/* Company logos replaced with SVG placeholders */}
                  <svg className="h-8" viewBox="0 0 100 30" fill="currentColor">
                    <rect width="100" height="8" rx="4" />
                    <rect y="16" width="60" height="6" rx="3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
