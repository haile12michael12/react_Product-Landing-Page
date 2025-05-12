import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-intersection-observer";
import { 
  BarChart3, 
  Users, 
  Zap, 
  Lock, 
  Clock, 
  Cloud 
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: 1,
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    bgColor: "bg-primary/10",
    title: "Advanced Analytics",
    description: "Gain deep insights into your business performance with real-time dashboards and customizable reports."
  },
  {
    id: 2,
    icon: <Users className="h-6 w-6 text-amber-600" />,
    bgColor: "bg-amber-100",
    title: "Team Collaboration",
    description: "Foster seamless teamwork with collaborative tools that keep everyone aligned and productive."
  },
  {
    id: 3,
    icon: <Zap className="h-6 w-6 text-green-600" />,
    bgColor: "bg-green-100",
    title: "Automation Tools",
    description: "Eliminate repetitive tasks and streamline workflows with powerful automation capabilities."
  },
  {
    id: 4,
    icon: <Lock className="h-6 w-6 text-purple-600" />,
    bgColor: "bg-purple-100",
    title: "Enterprise Security",
    description: "Protect your sensitive data with industry-leading security measures and compliance standards."
  },
  {
    id: 5,
    icon: <Clock className="h-6 w-6 text-red-600" />,
    bgColor: "bg-red-100",
    title: "Project Management",
    description: "Keep projects on track with intuitive planning tools, task management, and progress tracking."
  },
  {
    id: 6,
    icon: <Cloud className="h-6 w-6 text-blue-600" />,
    bgColor: "bg-blue-100",
    title: "Cloud Integration",
    description: "Seamlessly connect with your favorite tools and services through our extensive integration ecosystem."
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Everything you need to scale your business
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Our comprehensive platform offers powerful tools designed to help teams of all sizes work more efficiently and effectively.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-5", feature.bgColor)}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
