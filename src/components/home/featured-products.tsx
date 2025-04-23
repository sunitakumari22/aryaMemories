
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

export function FeaturedProducts() {
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-serif text-3xl font-medium text-memoir-900">Featured Collections</h2>
          <Button variant="ghost" asChild className="group">
            <Link to="/shop" className="flex items-center gap-2">
              View all 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: any }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link 
      to={`/shop/${product.id}`}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-memoir-100 transition duration-300 group-hover:shadow-md">
        <div className="relative aspect-[4/5] bg-memoir-50">
          <div className="absolute inset-0 flex items-center justify-center text-memoir-400 font-serif italic">
            Product Image
          </div>
          {product.stockLevel <= 5 && (
            <div className="absolute top-4 right-4 bg-memoir-800 text-white text-xs px-2 py-1 rounded">
              Low Stock
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-lg text-memoir-900">{product.name}</h3>
            <p className="font-medium text-memoir-800">${product.price.toFixed(2)}</p>
          </div>
          <p className="text-sm text-memoir-600 mt-1 line-clamp-2">{product.description}</p>
          
          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-1">
              {product.tags.slice(0, 2).map((tag: string) => (
                <span key={tag} className="inline-block bg-memoir-100 text-memoir-800 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <Button 
              size="sm" 
              className={`rounded-full transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
