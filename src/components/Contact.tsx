import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Car
} from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Contact Us</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In 
            <span className="block bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Touch
            </span>
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
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">Contact Information</h3>
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
                    <span className="text-primary font-bold">9:00 AM - 6:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Tuesday</span>
                    <span className="text-primary font-bold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Wednesday</span>
                    <span className="text-primary font-bold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Thursday</span>
                    <span className="text-primary font-bold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Friday</span>
                    <span className="text-primary font-bold">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="font-medium">Saturday (Alternating)</span>
                    <span className="text-primary font-bold">8:00 AM - 2:00 PM</span>
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
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                Send Us a Message
              </CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="firstName" className="font-medium">First Name</Label>
                    <Input id="firstName" placeholder="John" className="h-12 border-border/50 focus:border-primary/50 transition-colors" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="lastName" className="font-medium">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="h-12 border-border/50 focus:border-primary/50 transition-colors" />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="font-medium">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-12 border-border/50 focus:border-primary/50 transition-colors" />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="phone" className="font-medium">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" className="h-12 border-border/50 focus:border-primary/50 transition-colors" />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="service" className="font-medium">Service Interested In</Label>
                  <Input id="service" placeholder="e.g., Cleaning, Whitening, Implants" className="h-12 border-border/50 focus:border-primary/50 transition-colors" />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your dental needs or any questions you have..."
                    rows={4}
                    className="border-border/50 focus:border-primary/50 transition-colors resize-none"
                  />
                </div>

                <Button className="w-full gradient-primary border-0 shadow-medium hover:shadow-large hover:scale-105 transition-all duration-300 h-14 text-lg font-medium">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}