
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    setIsSubmitted(true);
    setEmail("");
  };
  
  return (
    <section className="py-16 bg-memoir-800 text-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-medium mb-4">Join Our Community</h2>
          <p className="text-memoir-100 mb-8">
            Subscribe for early access to new collections, exclusive offers, and memory-keeping inspiration.
          </p>
          
          {isSubmitted ? (
            <div className="bg-memoir-700/50 p-6 rounded-lg">
              <p className="text-white">Thank you for subscribing! Check your email for a special welcome gift.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-memoir-700/50 border-memoir-600 text-white placeholder:text-memoir-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-white text-memoir-800 hover:bg-memoir-100 rounded-full">
                Subscribe
              </Button>
            </form>
          )}
          
          <p className="text-xs text-memoir-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
