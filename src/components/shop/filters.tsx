
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

// Extract all unique categories and tags from products
const allCategories = Array.from(new Set(products.map(p => p.category)));
const allTags = Array.from(new Set(products.flatMap(p => p.tags)));

interface FiltersProps {
  selectedCategory: string | null;
  selectedTags: string[];
  onCategoryChange: (category: string | null) => void;
  onTagToggle: (tag: string) => void;
  onClearFilters: () => void;
}

export function Filters({
  selectedCategory,
  selectedTags,
  onCategoryChange,
  onTagToggle,
  onClearFilters
}: FiltersProps) {
  const [isMobileFiltersVisible, setIsMobileFiltersVisible] = useState(false);
  
  // Close filters dropdown when clicking outside (mobile only)
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Element;
      if (isMobileFiltersVisible && !target.closest('.filters-container')) {
        setIsMobileFiltersVisible(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileFiltersVisible]);
  
  return (
    <div>
      {/* Mobile filters button */}
      <div className="md:hidden mb-4">
        <Button onClick={() => setIsMobileFiltersVisible(!isMobileFiltersVisible)}>
          {isMobileFiltersVisible ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>
      
      {/* Filters panel */}
      <div className={`filters-container bg-white md:bg-transparent border rounded-lg md:border-none p-4 md:p-0 mb-6 md:block ${isMobileFiltersVisible ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h3 className="font-medium text-lg">Filters</h3>
          {(selectedCategory || selectedTags.length > 0) && (
            <Button variant="ghost" size="sm" onClick={onClearFilters}>
              Clear All
            </Button>
          )}
        </div>
        
        {/* Categories */}
        <div className="mb-6">
          <h4 className="font-medium text-sm mb-3 text-memoir-600">Categories</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                checked={selectedCategory === null}
                onChange={() => onCategoryChange(null)}
                className="accent-memoir-600"
              />
              <span className={selectedCategory === null ? "text-memoir-900" : "text-memoir-600"}>All Categories</span>
            </label>
            
            {allCategories.map((category) => (
              <label key={category} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  checked={selectedCategory === category}
                  onChange={() => onCategoryChange(category)}
                  className="accent-memoir-600"
                />
                <span className={selectedCategory === category ? "text-memoir-900" : "text-memoir-600"}>
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Tags */}
        <div>
          <h4 className="font-medium text-sm mb-3 text-memoir-600">Popular Tags</h4>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagToggle(tag)}
                className={`text-xs px-3 py-1 rounded-full border ${
                  selectedTags.includes(tag) 
                    ? "bg-memoir-200 border-memoir-300 text-memoir-900" 
                    : "border-memoir-200 text-memoir-600 hover:bg-memoir-50"
                }`}
              >
                {tag}
                {selectedTags.includes(tag) && (
                  <X size={12} className="ml-1 inline-block" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
