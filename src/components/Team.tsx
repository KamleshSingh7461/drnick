import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users } from "lucide-react";

const teamMembers = [
  {
    name: "Nicholas J. Svarnias",
    role: "DDS, PC",
    specialties: [],
    education: "",
    experience: "",
    image: "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3MzU3MzU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Whether your dental needs are a complete exam and cleaning, a full-mouth reconstruction, or anything in between, we promise to provide you with exceptional care as we enhance the natural beauty of your smile. Inside are just some of the many procedures and services we regularly provide to our patients - with a gentle touch, and stunning results. Your smile is our first priority, and we'll give you something to smile about. If you have any questions, concerns, or would like to schedule an appointment, please contact us today. We look forward to providing you with the personal care you deserve."
  },
  {
    name: "Dr. Jon",
    role: "DDS",
    specialties: ["General Dentistry", "Preventive Care", "Patient Care"],
    education: "Doctor of Dental Surgery",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZW50aXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3MzU3MzU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "Dr. Jon is a dedicated dental professional committed to providing exceptional patient care. With years of experience in general dentistry, he focuses on preventive care and ensuring patient comfort during all procedures."
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Team</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              MEET THE DOCTORS
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our skilled professionals are dedicated to providing exceptional dental care 
            with compassion, expertise, and the latest technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-large transition-all duration-500 bg-white/80 backdrop-blur-lg border-border/50 hover:border-primary/30 hover:scale-105 relative overflow-hidden">
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="relative mx-auto mb-6 group/avatar">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 p-1 group-hover/avatar:scale-105 transition-transform duration-300">
                    <ImageWithFallback 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  {/* Floating ring animation */}
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 opacity-0 group-hover/avatar:opacity-100 group-hover/avatar:scale-125 transition-all duration-500"></div>
                </div>
                
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </CardTitle>
                
                <CardDescription className="text-primary font-medium text-base">
                  {member.role}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center relative z-10">
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="text-sm space-y-3 bg-muted/30 rounded-xl p-4">
                    <div>
                      <span className="text-muted-foreground font-medium">Education:</span>
                      <div className="mt-1 font-medium">{member.education}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground font-medium">Experience:</span>
                      <div className="mt-1 font-medium text-primary">{member.experience}</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}