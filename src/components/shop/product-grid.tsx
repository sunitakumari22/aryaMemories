
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Product } from "@/types";

interface ProductGridProps {
  category?: string;
  searchQuery?: string;
}

export function ProductGrid({ category, searchQuery }: ProductGridProps) {
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high">("featured");
  
  let filteredProducts = [...products];
  
  // Apply category filter
  if (category) {
    filteredProducts = filteredProducts.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  // Apply search filter
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(
      product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  // Apply sorting
  filteredProducts.sort((a, b) => {
    if (sortBy === "price-low") {
      return a.price - b.price;
    } else if (sortBy === "price-high") {
      return b.price - a.price;
    } else {
      // Default sort by featured
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    }
  });
  
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <p className="text-memoir-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
          </p>
        </div>
        
        <div className="flex items-center gap-2 mt-3 sm:mt-0">
          <span className="text-sm text-memoir-700">Sort by:</span>
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-sm py-1 px-2 border border-memoir-200 rounded-md bg-white"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="font-medium text-xl text-memoir-800 mb-2">No Products Found</h3>
          <p className="text-memoir-600 mb-6">Try adjusting your filters or search terms</p>
          <Button asChild>
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/shop/${product.id}`} className="group">
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
          
          <div className="mt-4 flex flex-wrap gap-1">
            {product.tags.map((tag) => (
              <span key={tag} className="inline-block bg-memoir-100 text-memoir-800 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
