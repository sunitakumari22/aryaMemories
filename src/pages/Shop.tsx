
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductGrid } from "@/components/shop/product-grid";
import { Filters } from "@/components/shop/filters";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  // Initialize from URL params
  useEffect(() => {
    const category = searchParams.get("category");
    const tags = searchParams.get("tags");
    const search = searchParams.get("q");
    
    if (category) setSelectedCategory(category);
    if (tags) setSelectedTags(tags.split(","));
    if (search) setSearchQuery(search);
  }, []);
  
  // Update URL params when filters change
  useEffect(() => {
    const newParams = new URLSearchParams();
    if (selectedCategory) newParams.set("category", selectedCategory);
    if (selectedTags.length > 0) newParams.set("tags", selectedTags.join(","));
    if (searchQuery) newParams.set("q", searchQuery);
    
    setSearchParams(newParams);
  }, [selectedCategory, selectedTags, searchQuery]);
  
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };
  
  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSelectedTags([]);
  };
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already updating via effect
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-memoir-50 py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="font-serif text-3xl font-medium text-memoir-900 mb-4">Memory Books Collection</h1>
            <p className="text-memoir-700 max-w-2xl">
              Browse our handcrafted memory books designed to preserve your most cherished moments. Each piece is thoughtfully created with premium materials and customizable to your unique story.
            </p>
          </div>
          
          <form onSubmit={handleSearchSubmit} className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-memoir-400" size={18} />
              <Input 
                type="search"
                placeholder="Search for products..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Filters 
                selectedCategory={selectedCategory}
                selectedTags={selectedTags}
                onCategoryChange={handleCategoryChange}
                onTagToggle={handleTagToggle}
                onClearFilters={handleClearFilters}
              />
            </div>
            
            <div className="md:col-span-3">
              <ProductGrid 
                category={selectedCategory || undefined}
                searchQuery={searchQuery || undefined}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
