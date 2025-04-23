
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-memoir-50 to-white">
      <div className="container py-12 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="space-y-6 lg:w-1/2">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-memoir-900">
            Preserve Your Most Precious Memories
          </h1>
          <p className="text-lg md:text-xl text-memoir-700 leading-relaxed max-w-xl">
            Handcrafted memory books that tell your unique story. From wedding days to baby's first steps, create keepsakes that last generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/shop">Shop Collections</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
          <p className="text-sm text-memoir-600 italic">
            Free shipping on orders over $75
          </p>
        </div>
        <div className="lg:w-1/2 relative min-h-[300px] md:min-h-[400px] w-full rounded-lg overflow-hidden shadow-2xl bg-white">
          <div className="absolute inset-0 bg-memoir-200 flex items-center justify-center font-serif italic text-memoir-500 text-xl">
          <img
      src="images/1.jpg"
      alt="Memory Book"
      className="w-full h-full object-cover"
    />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
