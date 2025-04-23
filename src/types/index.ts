
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  tags: string[];
  featured: boolean;
  customizationOptions: CustomizationOption[];
  stockLevel: number;
}

export interface CustomizationOption {
  id: string;
  name: string;
  options: string[];
  required: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
  customizations: Record<string, string>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "customer" | "admin";
}
