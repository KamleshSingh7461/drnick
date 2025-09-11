import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Jennifer Smith",
    role: "Marketing Executive",
    content: "Dr. Johnson and her team transformed my smile completely. The process was comfortable and the results exceeded my expectations. I couldn't be happier!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1684607631635-44399dee5ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBkZW50YWx8ZW58MXx8fHwxNzU3NDAyMzU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Robert Johnson",
    role: "Teacher",
    content: "I've been a patient here for 5 years. The staff is professional, friendly, and always makes me feel comfortable. Highly recommend SmileCare Dental!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1684607631635-44399dee5ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBkZW50YWx8ZW58MXx8fHwxNzU3NDAyMzU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Maria Garcia",
    role: "Business Owner",
    content: "My kids love coming here! Dr. Rodriguez is amazing with children and makes every visit fun. The whole family feels comfortable here.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1684607631635-44399dee5ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjBkZW50YWx8ZW58MXx8fHwxNzU3NDAyMzU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Patient Reviews</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our 
            <span className="block bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Patients Say
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied patients 
            have to say about their experience at SmileCare Dental.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full group hover:shadow-large transition-all duration-500 bg-white/80 backdrop-blur-lg border-border/50 hover:border-primary/30 hover:scale-105 relative overflow-hidden">
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="space-y-6">
                  {/* Rating with glow effect */}
                  <div className="flex gap-1 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}} />
                    ))}
                  </div>

                  {/* Quote icon */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849v10h-5.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849v10h-6z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground leading-relaxed text-center text-lg italic group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50 justify-center">
                    <div className="relative group/avatar">
                      <ImageWithFallback 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 group-hover/avatar:border-primary/50 transition-colors duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/50 backdrop-blur-lg rounded-full border border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">500+ Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">99% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}