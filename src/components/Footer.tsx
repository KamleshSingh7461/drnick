import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Clock,
  Calendar
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Practice Name */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-6">
            Nicholas J. Svarnias, DDS, PC
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Column 1 - Our Address */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              Our Address
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-white/80">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-lg">5265 N Central Avenue</p>
                  <p className="text-lg">Chicago, IL 60630</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-lg">Phone: <a href="tel:+17732829696" className="hover:text-white transition-colors">773.282.9696</a></p>
                  <p className="text-lg">Fax: 773.282.6868</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-white/80">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-lg">Email: <a href="mailto:admin@drsvarnias.com" className="hover:text-white transition-colors">admin@drsvarnias.com</a></p>
                </div>
              </div>
            </div>

            {/* Facebook Link */}
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group pt-4">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </div>
              <a href="#" className="text-lg hover:underline">Follow us on Facebook</a>
            </div>
          </div>

          {/* Column 2 - Clinic Hours */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-white flex items-center gap-2">
              <Clock className="w-6 h-6" />
              Clinic Hours
            </h4>
            <div className="space-y-3 text-white/80">
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="font-medium">Monday</span>
                <span className="text-primary font-bold">9:00am - 6:30pm</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="font-medium">Tuesday</span>
                <span className="text-primary font-bold">9:00am - 5:00pm</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="font-medium">Wednesday</span>
                <span className="text-primary font-bold">8:00am - 5:00pm</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="font-medium">Thursday</span>
                <span className="text-primary font-bold">10:00am - 4:00pm</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="font-medium">Friday</span>
                <span className="text-primary font-bold">By Appointment</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/20">
                <span className="font-medium">Saturday (Alternating)</span>
                <span className="text-primary font-bold">8:00am - 2:00pm</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium">Sunday</span>
                <span className="text-muted-foreground">Closed</span>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="pt-4">
              <Button 
                asChild
                size="lg" 
                className="gradient-primary border-0 shadow-medium hover:shadow-large hover:scale-105 transition-all duration-300 px-8 py-4 text-lg w-full"
              >
                <a href="#contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </a>
              </Button>
            </div>
          </div>

          {/* Column 3 - Find Us */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              Find Us
            </h4>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.123456789!2d-87.7654321!3d41.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcc029d143045%3A0xb8be34d6b4d06e18!2s5265%20N%20Central%20Ave%2C%20Chicago%2C%20IL%2060630%2C%20USA!5e0!3m2!1sen!2sus!4v1757630399220!5m2!1sen!2sus" 
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
            <div className="text-center">
              <Button 
                asChild
                variant="outline" 
                className="border-white/50 text-white bg-white/5 hover:bg-white/10 hover:border-white/70 transition-all duration-300 w-full"
              >
                <a 
                  href="https://maps.app.goo.gl/Ksr1dh2j5sRnUNyP7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        {/* Cancellation Policy */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-white mb-4">Cancellation Policy</h4>
          <div className="text-white/80 space-y-3 leading-relaxed">
            <p>
              We ask that all cancellations or re-scheduling of appointments take place a full 24 hours in advance to avoid a cancellation fee and to better assist you in finding a new appointment that suits your schedule.
            </p>
            <p>
              Unfortunately at this time, we are not able to accept requests for cancellations or re-scheduling of appointments via email.
            </p>
            <p className="font-semibold">Thank You.</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/80">
          <p>©2025 by NICHOLAS J. SVARNIAS D.D.S.</p>
        </div>
      </div>
    </footer>
  );
}