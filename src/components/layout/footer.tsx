
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { BrandLogo, BrandText } from "@/components/ui/brand";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-memoir-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <BrandLogo />
            <BrandText className="mt-2" />
            <div className="flex gap-4 mt-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-memoir-100">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-memoir-100">
                <Instagram size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-memoir-100">
                <Twitter size={18} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-memoir-700 hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=Wedding" className="text-memoir-700 hover:text-primary transition-colors">Wedding Books</Link></li>
              <li><Link to="/shop?category=Baby" className="text-memoir-700 hover:text-primary transition-colors">Baby Memory Books</Link></li>
              <li><Link to="/shop?category=Travel" className="text-memoir-700 hover:text-primary transition-colors">Travel Journals</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-memoir-700 hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/process" className="text-memoir-700 hover:text-primary transition-colors">Our Process</Link></li>
              <li><Link to="/testimonials" className="text-memoir-700 hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-memoir-700 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-memoir-700 hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-memoir-700 hover:text-primary transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/privacy" className="text-memoir-700 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-memoir-700 hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-memoir-200">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-memoir-600">
            &copy; {new Date().getFullYear()} Arya Memories. All rights reserved.
          </p>
          <p className="text-sm text-memoir-600 mt-2 md:mt-0">
            Crafted with love for your cherished memories
          </p>
        </div>
      </div>
    </footer>
  );
}
