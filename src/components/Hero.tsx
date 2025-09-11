import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Star, Award, Users, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/20 to-accent/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Excellence in Dental Care</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-primary via-primary/80 to-accent-foreground bg-clip-text text-transparent animate-glow">
                  Welcome to
                </span>
                Svarnias Dental
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Whether your dental needs are a complete exam and cleaning, a full-mouth reconstruction, or anything in between, we promise to provide you with exceptional care as we enhance the natural beauty of your smile.
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Inside are just some of the many procedures and services we regularly provide to our patients - with a gentle touch, and stunning results. Your health and smile is our first priority, and we'll give you something to smile about.
              </p>
              
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                If you have any questions, concerns, or would like to schedule an appointment, please contact us today. We look forward to providing you with the relationship based personal care you deserve.
              </p>
            </div>


            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">5000+</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Patients</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">4.9★</div>
                <div className="text-sm text-muted-foreground font-medium">Patient Rating</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1642844819197-5f5f21b89ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZW50YWwlMjBjbGluaWMlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTczOTE2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern dental clinic interior"
                className="rounded-3xl shadow-large w-full h-[600px] object-cover border border-border/20"
              />
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating cards with glassmorphism effect */}

            <Card className="absolute -top-8 -right-8 p-6 glass-effect shadow-large border-white/20 animate-float" style={{animationDelay: '1s'}}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-medium">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Online Booking</div>
                  <div className="text-sm text-muted-foreground">24/7 Available</div>
                </div>
              </div>
            </Card>

            <Card className="absolute top-1/2 -left-12 p-4 glass-effect shadow-large border-white/20 animate-float" style={{animationDelay: '2s'}}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Expert Team</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}