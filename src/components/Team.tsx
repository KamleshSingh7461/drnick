import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "./ui/carousel";
import { useEffect, useState } from "react";

const teamMembers = [
  {
    name: "Dr. Nicholas J. Svarnias",
    role: "DDS, PC",
    specialties: ["General Dentistry", "Restorative Care", "Cosmetic Dentistry"],
    education: "University of Illinois College of Dentistry",
    experience: "39 years",
    image: "/drnick/Staff_Photos_DrNick.jpg",
    bio: "Dr. Nicholas J. Svarnias is a dedicated general dentist committed to providing high-quality, patient-centered care within a relationship-based practice. With 39 years of experience, Dr. Svarnias brings a depth of knowledge, skill, and clinical insight that only decades of caring for patients can provide. A graduate of the University of Illinois College of Dentistry, he combines a strong clinical foundation with a genuine passion for lifelong learning. He continually expands his expertise through ongoing continuing education, ensuring that his patients benefit from the most current techniques, technologies, and evidence-based practices in modern dentistry. Known for his warm and approachable manner, Dr. Svarnias strives to create an environment where patients feel informed, well educated, comfortable, and confident in their treatment. He enjoys caring for patients of all ages—from children to adults—and provides a full spectrum of services, ranging from routine preventive care to complex restorative and cosmetic cases. His goal is always to deliver treatment that is both personalized and compassionate. Outside the office, Dr. Svarnias enjoys traveling with his wife and two children, spending time with friends and family, staying active in his professional development, and contributing to the well-being of his community."
  },
  {
    name: "Dr. Jonathan Gonzalez",
    role: "DDS",
    specialties: ["General Dentistry", "Preventive Care", "Cosmetic Enhancements"],
    education: "University of Illinois at Chicago College of Dentistry",
    experience: "10+ years",
    image: "/drnick/Staff_Photos_DrJon.jpg",
    bio: "Dr. Jonathan Gonzalez is dedicated to making every patient feel comfortable, cared for, and confident in their smile. He understands that visiting the dentist can sometimes feel intimidating, so he takes the time to listen, explain, and ensure each visit is relaxed and personalized. His goal is to create lasting relationships built on trust, transparency, and excellent care. A graduate of the University of Illinois at Chicago College of Dentistry, Dr. Gonzalez provides comprehensive dental care for patients of all ages. Whether it’s preventive cleanings, cosmetic enhancements, or restorative treatments, he believes in using a gentle touch and the latest techniques to help patients achieve and maintain healthy, beautiful smiles. Before beginning his dental career, Dr. Gonzalez proudly served in the U.S. Marines, where he developed his strong sense of discipline, teamwork, and service—qualities that continue to guide his patient care today. Born and raised in Park Ridge, Illinois, Dr. Gonzalez is proud to serve near his hometown. Outside the office, he enjoys spending time with his wife and daughter, golfing, and cheering on the Chicago Bears."
  },
  {
    name: "Gabriela",
    role: "Dental Hygienist",
    specialties: ["Preventive Care", "Patient Education"],
    education: "Kennedy-King College",
    experience: "20+ years",
    image: "/drnick/Staff_Photos_Gabriela.jpg",
    bio: "With over 20 years of clinical experience, Gabriela is a dedicated dental hygienist who began her career after graduating from Kennedy-King College, where she earned the prestigious Golden Scaler Award for clinical excellence. Her extensive expertise spans preventive care, patient education, and fostering long-term oral health. Known for her gentle approach and strong technical skills, she consistently earns the trust of patients and colleagues alike. She remains deeply passionate about her profession, continually pursuing advanced training to provide the highest standard of care."
  },
  {
    name: "Martha Ramirez",
    role: "Dental Hygienist",
    specialties: ["Patient Education", "Meticulous Care"],
    education: "",
    experience: "~30 years",
    image: "/drnick/Staff_Photos_Martha.png",
    bio: "Martha Ramirez brings almost three decades of experience to her role as a dental hygienist known for her meticulous care and patient education, Martha excels in providing exceptional dental services. Her commitment to oral health, passion for helping others, and compassion for patients who can be hesitant to see a dental professional shine through. An avid Disney geek and proud mom of two handsome young men."
  },
  {
    name: "Renee",
    role: "Dental Hygienist",
    specialties: ["Personalized Home Care"],
    education: "Dental Hygiene School (2013)",
    experience: "20+ years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZmVtYWxlJTIwZGVudGFsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc1NzM1NzM1OHww&ixlib=rb-4.1.0&w=600&q=90&dpr=2",
    bio: "Renee started working with Dr. Nick as a dental assistant over 20 years ago and graduated from dental hygiene school in 2013. She enjoys working with her patients to find the best personalized home care solutions that will motivate them to keep their gums and teeth healthy."
  },
  {
    name: "Diana",
    role: "Dental Hygienist",
    specialties: ["Public Health", "Patient Education"],
    education: "Kennedy King College",
    experience: "30+ years",
    image: "/drnick/Staff_Photos_Diana.jpg",
    bio: "Diana has been in the dental field for over 30 years and the last 20 years as a passionate dental hygienist. She graduated from Kennedy King College and is licensed in Illinois. She prides herself on gentle and compassionate approach with patients and dedication in educating patients about oral and overall health. She keeps up to date on the latest technology and techniques in the dental field by attending many continuing education courses, and In 2023 obtained a certification in public health in the dental field."
  }
];

export function Team() {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const interval = window.setInterval(() => {
      api.scrollNext();
    }, 7000);
    return () => window.clearInterval(interval);
  }, [api]);

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

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
            MEET THE DOCTORS
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our skilled professionals are dedicated to providing exceptional dental care
            with compassion, expertise, and the latest technology.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">

          <Carousel opts={{ loop: true, align: "start", dragFree: false }} setApi={setApi}>
            <div className="flex justify-end mb-4 gap-2">
              <CarouselPrevious className="p-2 rounded-md bg-white/90 hover:bg-white transition-shadow shadow-sm" />
              <CarouselNext className="p-2 rounded-md bg-white/90 hover:bg-white transition-shadow shadow-sm" />
            </div>

            <CarouselContent className="-ml-4 flex gap-6">
              {teamMembers.map((member, index) => (
                <CarouselItem className="pl-4" key={index}>
                  <Card className="group hover:shadow-large transition-all duration-500 bg-white border-border/50 hover:border-primary/30 relative overflow-hidden">
                    {/* Card background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <CardHeader className="text-center pb-6 relative z-10">
                      <div className="relative mx-auto mb-6 group/avatar">
                        <div className="w-36 h-36 rounded-full p-0">
                          <ImageWithFallback
                            src={member.image}
                            alt={member.name}
                            decoding="async"
                            loading="eager"
                            fetchpriority="high"
                            width={144}
                            height={144}
                            sizes="144px"
                            srcSet={
                              member.image.includes('images.unsplash.com')
                                ? `${member.image} 1x, ${member.image}&dpr=2 2x`
                                : `${member.image} 1x, ${member.image} 2x`
                            }
                            className="w-full h-full rounded-full object-cover ring-2 ring-primary/20"
                          />
                        </div>
                        <div className="absolute inset-0 rounded-full border-2 border-primary/20 opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-500"></div>
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
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
