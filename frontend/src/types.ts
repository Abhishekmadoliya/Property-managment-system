export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
  amenities: string[];
  rating: number;
  reviews: number;
}

export interface FilterOptions {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  location?: string;
}