import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  Car,
  Loader2
} from "lucide-react";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing.");
      }

      // Send to Admin
      await emailjs.send(
        serviceId,
        templateId,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
        },
        publicKey
      );

      // Send Auto-Reply to Patient
      if (autoReplyTemplateId) {
        await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            service: data.service,
            message: data.message,
          },
          publicKey
        );
      }

      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message.", {
        description: "Please check your network and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
            Get In Touch
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your journey to a healthier smile? Contact us today
            to schedule your appointment or ask any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-black">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/50 hover:shadow-medium transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-medium transition-all duration-300">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">Phone</div>
                    <div className="text-lg font-bold group-hover:text-primary transition-colors">773.282.9696</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/50 hover:shadow-medium transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-medium transition-all duration-300">
                    <Mail className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">Email</div>
                    <div className="text-lg font-bold group-hover:text-primary transition-colors">admin@drsvarnias.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/50 hover:shadow-medium transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-medium transition-all duration-300">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">Address</div>
                    <div className="text-lg font-bold group-hover:text-primary transition-colors">5265 N Central Avenue<br />Chicago, IL 60630</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <Card className="bg-white/80 backdrop-blur-lg border-border/50 shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Monday</span>
                    <span className="font-bold">9:00 AM - 6:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Tuesday</span>
                    <span className="font-bold">9:00 AM - 6:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Wednesday</span>
                    <span className="font-bold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Thursday</span>
                    <span className="font-bold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Friday</span>
                    <span className="font-bold">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Saturday (Alternating)</span>
                    <span className="font-bold">8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-white/80 backdrop-blur-lg border-border/50 hover:shadow-medium hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-xl flex items-center justify-center">
                      <Car className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold">Free Parking</div>
                      <div className="text-sm text-muted-foreground">Available on-site</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-lg border-border/50 hover:shadow-medium hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold">Book Now</div>
                      <div className="text-sm text-muted-foreground">Schedule your appointment</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-lg border-border/50 shadow-large">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black">
                Send Us a Message
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="font-medium">First Name</Label>
                    <Input id="firstName" {...register("firstName", { required: true })} placeholder="John" className="h-12 border-border/50 focus:border-primary/50 transition-colors" />
                    {errors.firstName && <span className="text-sm text-red-500">First name is required</span>}
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="font-medium">Last Name</Label>
                    <Input id="lastName" {...register("lastName", { required: true })} placeholder="Doe" className="h-12 border-border/50 focus:border-primary/50 transition-colors" />
                    {errors.lastName && <span className="text-sm text-red-500">Last name is required</span>}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="font-medium">Email</Label>
                  <Input id="email" type="email" {...register("email", { required: true })} placeholder="john@example.com" className="h-12 border-border/50 focus:border-primary/50 transition-colors" />
                  {errors.email && <span className="text-sm text-red-500">Email is required</span>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="phone" className="font-medium">Phone</Label>
                  <Input id="phone" type="tel" {...register("phone", { required: true })} placeholder="(555) 123-4567" className="h-12 border-border/50 focus:border-primary/50 transition-colors" />
                  {errors.phone && <span className="text-sm text-red-500">Phone is required</span>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="service" className="font-medium">Service Interested In</Label>
                  <Input id="service" {...register("service", { required: true })} placeholder="e.g., Cleaning, Whitening, Implants" className="h-12 border-border/50 focus:border-primary/50 transition-colors" />
                  {errors.service && <span className="text-sm text-red-500">Service is required</span>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="font-medium">Message</Label>
                  <Textarea
                    id="message"
                    {...register("message", { required: true })}
                    placeholder="Tell us about your dental needs or any questions you have..."
                    rows={4}
                    className="border-border/50 focus:border-primary/50 transition-colors resize-none"
                  />
                  {errors.message && <span className="text-sm text-red-500">Message is required</span>}
                </div>

                <Button disabled={isSubmitting} type="submit" className="w-full gradient-primary border-0 shadow-medium hover:shadow-large hover:scale-105 transition-all duration-300 h-14 text-lg font-medium">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}