import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  package: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      package: "",
      message: "",
    },
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onSubmit = async (data: ContactFormValues) => {
    // In a real app, this would send data to a backend or email service
    console.log("Contact form submitted:", data);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll be in touch within 24 hours.",
    });
    
    form.reset();
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Contact Us - TBA, LLP | Schedule Your Financial Education Consultation"
        description="Ready to begin your journey to financial understanding? Contact TBA, LLP or book a consultation directly into our calendar. Free, no-obligation consultation available."
        keywords="contact TBA LLP, financial consultation, book meeting, wealth education inquiry"
        pathname="/contact"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-contact-headline">
            Let's Begin Your Journey to Financial Understanding.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            Whether you're looking to get started with a digital program, or want a personal roadmap for your family's financial goals, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6" data-testid="text-form-heading">
                Send Us a Message
              </h2>
              <Card>
                <CardHeader>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (optional)</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(555) 123-4567" {...field} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="package"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Package or Topic</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-package">
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="foundations">Foundations Package</SelectItem>
                                <SelectItem value="momentum">Momentum Package</SelectItem>
                                <SelectItem value="growth">Growth Package</SelectItem>
                                <SelectItem value="legacy">Legacy Circle</SelectItem>
                                <SelectItem value="insurance">Insurance & Legacy Planning</SelectItem>
                                <SelectItem value="general">General Inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message (optional)</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Tell us about your financial goals..." rows={5} {...field} data-testid="input-message" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full bg-accent text-accent-foreground hover-elevate active-elevate-2"
                        disabled={form.formState.isSubmitting}
                        data-testid="button-submit"
                      >
                        {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>

              <div className="mt-8">
                <p className="text-sm text-muted-foreground text-center">
                  Prefer a conversation? Email us directly at{" "}
                  <a href="mailto:info@tballp.com" className="text-accent hover:underline font-medium" data-testid="link-email">
                    info@tballp.com
                  </a>
                </p>
              </div>
            </div>

            {/* Calendly Section */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6" data-testid="text-calendly-heading">
                Book Your Consultation
              </h2>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    Schedule a Meeting
                  </CardTitle>
                  <CardDescription>
                    Choose a time that works best for you to discuss your financial education and planning needs.
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Calendly Embed */}
              <div 
                className="calendly-inline-widget min-h-[600px] rounded-lg overflow-hidden border border-border"
                data-url="https://calendly.com/your-calendly-link"
                ref={calendlyRef}
                data-testid="calendly-widget"
                style={{
                  width: '100%',
                  height: '700px'
                }}
              >
                <div className="flex items-center justify-center h-full bg-card">
                  <div className="text-center p-8">
                    <Calendar className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Calendly Integration</h3>
                    <p className="text-muted-foreground mb-4">
                      To enable booking, please update the Calendly URL in the Contact page component.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Replace <code className="bg-muted px-2 py-1 rounded">your-calendly-link</code> with your actual Calendly scheduling link.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-4">
                <Card className="hover-elevate transition-all">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:info@tballp.com" className="text-sm text-muted-foreground hover:text-accent">
                        info@tballp.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <Card className="hover-elevate transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">No Obligation</h3>
                <p className="text-sm text-muted-foreground">
                  Free consultation to discuss your goals with no pressure or commitment required.
                </p>
              </CardContent>
            </Card>
            <Card className="hover-elevate transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Educational First</h3>
                <p className="text-sm text-muted-foreground">
                  We prioritize your understanding and education above all else.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
