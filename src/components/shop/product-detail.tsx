
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, Share2, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Product, CartItem } from "@/types";

export function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === productId);
  
  // If product not found, navigate to shop
  if (!product) {
    navigate("/shop");
    return null;
  }
  
  return <ProductView product={product} />;
}

function ProductView({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [customizations, setCustomizations] = useState<Record<string, string>>(
    // Initialize with first option of each customization
    product.customizationOptions.reduce((acc, option) => {
      if (option.options.length > 0) {
        acc[option.id] = option.options[0];
      }
      return acc;
    }, {} as Record<string, string>)
  );
  
  const handleAddToCart = () => {
    // In a real app, this would dispatch to a cart context or state manager
    const cartItem: CartItem = {
      productId: product.id,
      quantity,
      customizations
    };
    
    console.log("Added to cart:", cartItem);
    // For now, just log the cart item
  };
  
  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };
  
  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const updateCustomization = (id: string, value: string) => {
    setCustomizations(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="relative aspect-square bg-memoir-50 rounded-lg mb-4">
            <div className="absolute inset-0 flex items-center justify-center text-memoir-400 font-serif italic text-xl">
              {product.name} - Image {currentImageIndex + 1}
            </div>
            
            <button 
              onClick={handlePrevImage} 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button 
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-20 h-20 bg-memoir-100 rounded-md flex-shrink-0 ${
                  currentImageIndex === index ? "ring-2 ring-primary" : ""
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <div className="flex items-center justify-center w-full h-full text-memoir-400 text-sm">
                  {index + 1}
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <div className="mb-6">
            <h1 className="font-serif text-3xl font-medium text-memoir-900 mb-2">
              {product.name}
            </h1>
            <div className="flex items-baseline gap-4 mb-4">
              <span className="text-2xl font-medium text-memoir-900">
                ${product.price.toFixed(2)}
              </span>
              {product.stockLevel <= 5 && (
                <span className="text-sm text-red-600">
                  Only {product.stockLevel} left!
                </span>
              )}
            </div>
            <p className="text-memoir-700 leading-relaxed">
              {product.description}
            </p>
            
            <div className="flex gap-1 mt-3">
              {product.tags.map(tag => (
                <span key={tag} className="inline-block bg-memoir-100 text-memoir-800 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Customization Options */}
          <div className="space-y-6 mb-8">
            {product.customizationOptions.map(option => (
              <div key={option.id} className="space-y-2">
                <label className="block text-sm font-medium text-memoir-800">
                  {option.name} {option.required && <span className="text-red-500">*</span>}
                </label>
                <div className="flex flex-wrap gap-2">
                  {option.options.map(choice => (
                    <button
                      key={choice}
                      type="button"
                      onClick={() => updateCustomization(option.id, choice)}
                      className={`px-3 py-2 border rounded-md text-sm ${
                        customizations[option.id] === choice
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-memoir-200 hover:border-memoir-300"
                      }`}
                    >
                      {choice}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Quantity & Add to Cart */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <div className="flex border border-memoir-200 rounded-md w-32">
              <button 
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="w-10 flex items-center justify-center text-memoir-700 hover:bg-memoir-50"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="flex-1 text-center py-2">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 flex items-center justify-center text-memoir-700 hover:bg-memoir-50"
                disabled={quantity >= product.stockLevel}
              >
                +
              </button>
            </div>
            
            <Button onClick={handleAddToCart} className="flex-1" size="lg">
              Add to Cart
            </Button>
            
            <Button variant="outline" size="icon" aria-label="Add to Wishlist">
              <Heart size={18} />
            </Button>
            
            <Button variant="outline" size="icon" aria-label="Share">
              <Share2 size={18} />
            </Button>
          </div>
          
          {/* Shipping Info */}
          <div className="flex items-center gap-3 text-sm text-memoir-700 p-4 bg-memoir-50 rounded-lg">
            <Truck size={18} className="text-memoir-600 flex-shrink-0" />
            <div>
              Free shipping on orders over $75. Standard delivery: 3-5 business days.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
