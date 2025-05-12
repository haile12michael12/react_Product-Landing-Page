import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address")
});

type FormValues = z.infer<typeof formSchema>;

const Newsletter = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await apiRequest("POST", "/api/newsletter", data);
      setSuccess(true);
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
      console.error("Subscription error:", error);
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Stay updated with our newsletter
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Get the latest news, product updates, and exclusive offers delivered to your inbox.
              </p>
            </div>
            
            {!success ? (
              <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="max-w-md mx-auto"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="py-3 px-4"
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && (
                      <div className="mt-1 text-red-600 text-sm">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    className="flex-none py-3 px-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>
                <div className="mt-3 text-sm text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </div>
              </form>
            ) : (
              <div className="mt-6 bg-green-50 p-4 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Thanks for subscribing! Please check your email to confirm your subscription.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
