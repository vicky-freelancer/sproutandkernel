export type ProductCategory = 
  | "All" 
  | "Herbal Soup" 
  | "Leaf-Based" 
  | "Traditional Mix" 
  | "Spices & Immunity";

export interface WeightOption {
  weight: string; // e.g. "100g", "200g", "500g"
  price: number;
  originalPrice?: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  preparation: string;
  storage: string;
  weight: string; // Default display weight
  availableWeights?: WeightOption[];
  price: number;
  originalPrice?: number;
  isBestSeller?: boolean;
  isCombo?: boolean;
  isNew?: boolean;
  comboItems?: string[]; // If combo, list of included soups
  rating: number;
  reviewCount: number;
  stockStatus: "In Stock" | "Low Stock" | "Out of Stock";
}

export interface Review {
  id: string;
  userName: string;
  userLocation: string;
  rating: number;
  date: string;
  comment: string;
  verifiedBuyer: boolean;
  productSlug?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface PolicyType {
  title: string;
  lastUpdated: string;
  content: string[];
}
