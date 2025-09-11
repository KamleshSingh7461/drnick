import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Smile, 
  Shield, 
  Sparkles, 
  Heart, 
  Baby, 
  Zap,
  Camera,
  Wrench,
  Stethoscope,
  Scissors,
  AlertTriangle,
  Activity
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Routine cleanings and checkups are the key to long-lasting oral health. We remove plaque and tartar, polish your teeth, and check for early signs of cavities, gum disease, or oral cancer. Regular visits help prevent problems before they start.",
    features: [
      "Cleanings & Exams - Routine cleanings and checkups are the key to long-lasting oral health. We remove plaque and tartar, polish your teeth, and check for early signs of cavities, gum disease, or oral cancer. Regular visits help prevent problems before they start.",
      "Sealants & Fluoride - We offer protective sealants for children and adults to guard against cavities in hard-to-reach areas. Fluoride treatments help strengthen enamel and reduce sensitivity."
    ]
  },
  {
    icon: Heart,
    title: "Gum Health",
    description: "Healthy gums are the foundation of a healthy smile. If you have bleeding, swollen gums, or bad breath, it may be early gum disease. We provide deep cleanings (scaling and root planing) and maintenance care to restore gum health and prevent tooth loss.",
    features: [
      "Periodontal Disease Treatment - Healthy gums are the foundation of a healthy smile. If you have bleeding, swollen gums, or bad breath, it may be early gum disease. We provide deep cleanings (scaling and root planing) and maintenance care to restore gum health and prevent tooth loss."
    ]
  },
  {
    icon: Wrench,
    title: "Restorative Dentistry",
    description: "Tooth-colored (composite) fillings repair cavities while blending naturally with your teeth. They restore strength and protect against further decay.",
    features: [
      "Fillings - Tooth-colored (composite) fillings repair cavities while blending naturally with your teeth. They restore strength and protect against further decay.",
      "Crowns & Bridges - Crowns: Restore strength and appearance to a damaged tooth. Bridges: Replace one or more missing teeth by attaching to neighboring teeth. Implant-Supported Crowns: A natural-looking, long-term replacement for a single missing tooth.",
      "Dentures & Partials - For patients missing multiple teeth, we offer natural-looking full dentures, partial dentures, and implant-supported options for a more secure fit."
    ]
  },
  {
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description: "Brighten your smile safely and effectively with professional whitening. We offer in-office and take-home options to lift years of stains.",
    features: [
      "Whitening - Brighten your smile safely and effectively with professional whitening. We offer in-office and take-home options to lift years of stains.",
      "Veneers & Bonding - Porcelain veneers and bonding can correct chips, gaps, stains, and uneven teeth, giving you a confident, natural-looking smile.",
      "Smile Makeovers - A customized plan combining cosmetic and restorative treatments to completely refresh your smile."
    ]
  },
  {
    icon: Stethoscope,
    title: "Endodontics",
    description: "When tooth decay or infection reaches the nerve, a root canal can save your tooth. We gently remove the infection, seal the tooth, and restore it with a crown for long-term function and comfort.",
    features: [
      "Root Canals - When tooth decay or infection reaches the nerve, a root canal can save your tooth. We gently remove the infection, seal the tooth, and restore it with a crown for long-term function and comfort."
    ]
  },
  {
    icon: Scissors,
    title: "Oral Surgery",
    description: "Sometimes a tooth must be removed due to damage, infection, or crowding. We provide gentle extractions and discuss replacement options to keep your smile complete.",
    features: [
      "Extractions - Sometimes a tooth must be removed due to damage, infection, or crowding. We provide gentle extractions and discuss replacement options to keep your smile complete."
    ]
  },
  {
    icon: AlertTriangle,
    title: "Emergency Dentistry",
    description: "Toothaches, injuries, and broken teeth can happen anytime. We provide same-day emergency care to quickly relieve pain and protect your smile.",
    features: [
      "Emergency Care - Toothaches, injuries, and broken teeth can happen anytime. We provide same-day emergency care to quickly relieve pain and protect your smile."
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured Services At
            <span className="block bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              SVARNIAS DENTAL
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From routine cleanings to advanced procedures, we offer a full range of 
            dental services to meet all your oral health needs with cutting-edge technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className={`group hover:shadow-large transition-all duration-500 bg-white/80 backdrop-blur-lg border-border/50 hover:border-primary/30 hover:scale-105 relative overflow-hidden ${
              index === 6 ? 'sm:col-span-2 lg:col-span-1 xl:col-span-1' : ''
            }`}>
              {/* Card background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-medium transition-all duration-300 relative">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                </div>
                
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors duration-300 mb-3">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-sm text-muted-foreground leading-relaxed" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs group/item hover:text-primary transition-colors">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-primary/60 rounded-full group-hover/item:scale-125 transition-transform flex-shrink-0"></div>
                      <span className="font-medium leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shadow-sm hover:shadow-medium text-xs"
                  onClick={() => {
                    // Scroll to contact section for appointment booking
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="gradient-primary border-0 shadow-medium hover:shadow-large hover:scale-105 transition-all duration-300 px-12 py-4 text-lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}