import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Award, Users, Clock, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Award,
    title: "Excellence",
    description: "Award-winning dental care with the latest technology and techniques."
  },
  {
    icon: Users,
    title: "Experience",
    description: "Over 15 years of combined experience in comprehensive dental care."
  },
  {
    icon: Clock,
    title: "Convenience",
    description: "Flexible scheduling and same-day appointments for urgent care."
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Patient-centered approach with gentle, personalized treatment."
  }
];

export function About() {
  return null;
}