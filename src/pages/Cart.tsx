
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react";

const Cart = () => {
  // Example cart data - in a real app would come from context/state
  const [cartItems, setCartItems] = useState<any[]>([]);
  const isCartEmpty = cartItems.length === 0;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-memoir-50 py-8">
        <div className="container">
          <h1 className="font-serif text-3xl font-medium text-memoir-900 mb-6">Your Cart</h1>
          
          {isCartEmpty ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center max-w-md mx-auto">
              <div className="bg-memoir-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="text-memoir-600" size={24} />
              </div>
              <h2 className="text-xl font-medium text-memoir-900 mb-2">Your cart is empty</h2>
              <p className="text-memoir-600 mb-6">
                Looks like you haven't added any memory books to your cart yet.
              </p>
              <Button asChild>
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-6 divide-y divide-memoir-100">
                  {cartItems.map((item) => (
                    <div key={item.id} className="py-6 first:pt-0 last:pb-0 flex gap-4">
                      {/* Product image */}
                      <div className="w-24 h-24 bg-memoir-50 rounded-md flex-shrink-0"></div>
                      
                      {/* Product details */}
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-memoir-900">{item.name}</h3>
                          <p className="font-medium">${item.price.toFixed(2)}</p>
                        </div>
                        
                        {/* Customizations */}
                        <div className="mt-1 text-sm text-memoir-600">
                          {Object.entries(item.customizations).map(([key, value]) => (
                            <p key={key}>{key}: {String(value)}</p>
                          ))}
                        </div>
                        
                        {/* Quantity selector */}
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex border border-memoir-200 rounded-md w-24">
                            <button className="w-8 flex items-center justify-center text-memoir-700 hover:bg-memoir-50">-</button>
                            <span className="flex-1 text-center py-1">{item.quantity}</span>
                            <button className="w-8 flex items-center justify-center text-memoir-700 hover:bg-memoir-50">+</button>
                          </div>
                          
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                            <Trash2 size={16} className="mr-1" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Button asChild variant="outline">
                    <Link to="/shop" className="flex items-center gap-2">
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="font-medium text-xl text-memoir-900 mb-4">Order Summary</h2>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-memoir-600">
                      <span>Subtotal</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between text-memoir-600">
                      <span>Shipping</span>
                      <span>Calculated at checkout</span>
                    </div>
                    <div className="flex justify-between text-memoir-600">
                      <span>Tax</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-memoir-100 pt-4 mb-6">
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    Proceed to Checkout
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
