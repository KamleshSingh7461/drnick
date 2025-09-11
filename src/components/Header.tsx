import { Button } from "./ui/button";
import { Phone, Menu, X, Smartphone } from "lucide-react";
import { useState } from "react";

// Desktop Header Component
function DesktopHeader() {
  return (
    <div className="hidden lg:flex justify-between items-center w-full">
      {/* Logo and contact info - Left side */}
      <div className="flex items-center gap-6 flex-1 min-w-0">
        <img 
          src="/logo.png" 
          alt="Dr. Svarnias Dental Logo" 
          className="h-16 w-auto flex-shrink-0"
        />
        <div className="min-w-0 flex-1">
          <a 
            href="tel:+17732829696" 
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300 cursor-pointer block truncate"
          >
            773.282.9696
          </a>
          <p className="text-lg font-bold text-foreground truncate" style={{ fontWeight: '900' }}>
            Nicholas J. Svarnias, DDS, PC
          </p>
        </div>
      </div>

      {/* Navigation and Schedule button - Right side */}
      <div className="flex items-center gap-8">
        {/* Desktop Navigation */}
        <nav className="flex items-center gap-8">
          <a href="#home" className="relative text-foreground/80 hover:text-primary font-medium transition-all duration-300 group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#services" className="relative text-foreground/80 hover:text-primary font-medium transition-all duration-300 group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#team" className="relative text-foreground/80 hover:text-primary font-medium transition-all duration-300 group">
            Team
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a 
            href="tel:+17732829696" 
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer"
          >
            <Smartphone className="w-6 h-6" />
          </a>
        </nav>

        {/* Schedule Button */}
        <Button 
          asChild
          className="gradient-primary border-0 shadow-medium hover:shadow-large hover:scale-105 transition-all duration-300 px-8 py-3 text-lg whitespace-nowrap"
        >
          <a href="#contact">Schedule</a>
        </Button>
      </div>
    </div>
  );
}

// Mobile Header Component
function MobileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="lg:hidden w-full">
      <div className="flex justify-between items-center">
        {/* Logo and contact info - Left side */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <img 
            src="/logo.png" 
            alt="Dr. Svarnias Dental Logo" 
            className="h-10 w-auto flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <a 
              href="tel:+17732829696" 
              className="text-sm font-bold text-foreground hover:text-primary transition-colors duration-300 cursor-pointer block truncate"
            >
              773.282.9696
            </a>
            <p className="text-xs font-bold text-foreground truncate" style={{ fontWeight: '900' }}>
              Nicholas J. Svarnias, DDS, PC
            </p>
          </div>
        </div>

        {/* Right side - Schedule button and menu */}
        <div className="flex items-center gap-2">
          {/* Schedule Button */}
          <Button 
            asChild
            className="gradient-primary border-0 shadow-medium hover:shadow-large hover:scale-105 transition-all duration-300 px-3 py-2 text-xs whitespace-nowrap"
          >
            <a href="#contact">Schedule</a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="relative p-2 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/20 text-primary hover:from-primary/20 hover:to-primary/30 hover:border-primary/30 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md flex-shrink-0 group overflow-hidden"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 transition-all duration-300 ease-in-out" />
              ) : (
                <Menu className="w-5 h-5 transition-all duration-300 ease-in-out" />
              )}
            </div>
            
            {/* Animated background glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-xl bg-primary/20 scale-0 group-active:scale-100 transition-transform duration-200"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mt-4 py-4 border-t border-border/20">
          <div className="flex flex-col space-y-4">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#team" 
                className="text-foreground/80 hover:text-primary font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="tel:+17732829696" 
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Smartphone className="w-4 h-4" />
                <span className="text-sm">Call Now</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-border/50 sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-6">
        <DesktopHeader />
        <MobileHeader />
      </div>
    </header>
  );
}