import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logoBP from "@/assets/BP2.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src={logoBP} 
              alt="Bollywood Paathshaala" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-muted-foreground mb-4">
              Transform your dreams into reality with Dubai's premier Bollywood acting workshop. 
              Led by industry expert Shahid Hasan, discover your potential and master the art of acting.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/bollywoodpaathshaala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
             <Link to="/filmography" className="block text-muted-foreground hover:text-primary transition-colors">
                Filmography
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/testimonials" className="block text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link to="/inassociationwith" className="block text-muted-foreground hover:text-primary transition-colors">
                In Association with
              </Link>
              <Link to="/register" className="block text-muted-foreground hover:text-primary transition-colors">
                Register
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm">Al Jaddaf Rotana Suite Hotel, Dubai, UAE</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm">+971-52-348-3891/ +971-50-437-1062</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="text-sm">bollywoodpaathshaala@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Bollywood Paathshala by Shahid Hasan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
