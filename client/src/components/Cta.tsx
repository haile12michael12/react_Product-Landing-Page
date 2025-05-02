import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useInView } from "@/hooks/use-intersection-observer";

const Cta = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ctaRef, { once: true });

  return (
    <section className="bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <motion.div 
          ref={ctaRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to transform your business?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-primary-foreground/75 leading-relaxed">
            Join thousands of businesses already using our platform to grow and succeed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="font-medium">
              Get started for free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary-foreground/10">
              Talk to sales
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/60">
            No credit card required. 14-day free trial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
