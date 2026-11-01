import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Tyler Laurisch",
    role: "Another Great Cleaning and Check-up",
    content: "The six-month cleaning and check-up went smoothly and yielded the good news that, at my advanced age, the only way I can lose my teeth is if I get punched in the mouth. I can thank the longevity of my teeth to the years of care from Dr. Svarnias and his excellent staff.",
    rating: 5
  },
  {
    name: "Verified Patient",
    role: "Friendly & Efficient Cleanings",
    content: "It's always a positive experience here. The team is very friendly, and appointments are on time and efficient. Good general dental advice and honesty around procedures (with no pressure). We've been coming here for 25+ years and will continue to do so.",
    rating: 5
  },
  {
    name: "Marienne Perry",
    role: "Google Review",
    content: "Dr Svarnias and his Staff are the BEST! Dr Svarnias has been my dentist for more than 30 years. You have to be good to earn that kind of loyalty, especially when the location is no longer around the corner from home.",
    rating: 5
  },
  {
    name: "Gunther Duelfer",
    role: "Google Review",
    content: "Starting with the wonderful receptionist Trish, making the appointment and then greeting me with a friendly smile and then the talented Hygienist Gabby and Chiqui make every appointment pleasurable. These 3 fine women and others make Dr Nick's office run great and it is capped with the capable Dentist Dr. Nick. My family has been going to see him for well over 40 years and are always in capable hands. Thank you all",
    rating: 5
  },
  {
    name: "Adanna Byrd",
    role: "Google Review",
    content: "I have been going to Dr. Nick since I was a little girl and this is the best dentist. The space is clean and the staff is professional and friendly. My forever go to! Thank you for continuing to provide great dental service for over 20 years and on!",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
            What Patients Say About Svarnias Dental
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real reviews from the patients and families who have trusted
            Dr. Svarnias and our team for decades.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] group hover:shadow-large transition-all duration-500 bg-white/80 backdrop-blur-lg border-border/50 hover:border-primary/30 hover:scale-105 relative overflow-hidden">
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-8 relative z-10 h-full">
                <div className="flex flex-col h-full space-y-6">
                  {/* Rating with glow effect */}
                  <div className="flex gap-1 justify-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>

                  {/* Quote icon */}
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849v10h-5.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849v10h-6z" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <blockquote className="flex-1 text-muted-foreground leading-relaxed text-center text-lg italic group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="pt-6 border-t border-border/50 text-center">
                    <div className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground font-medium">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators removed as requested */}
      </div>
    </section>
  );
}
