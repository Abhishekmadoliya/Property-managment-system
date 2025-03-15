import React, { useState } from 'react';
import { Property, FilterOptions } from './types';
import { PropertyCard } from './components/PropertyCard';
import { Filters } from './components/Filters';
import { Building } from 'lucide-react';

// Sample data
const SAMPLE_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Luxury Beachfront Villa',
    description: 'Beautiful villa with ocean views',
    price: 299,
    location: 'Malibu, CA',
    bedrooms: 4,
    bathrooms: 3,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
    amenities: ['Pool', 'Ocean View', 'WiFi', 'Kitchen'],
    rating: 4.9,
    reviews: 128
  },
  {
    id: '2',
    title: 'Modern Downtown Loft',
    description: 'Stylish loft in the heart of the city',
    price: 199,
    location: 'New York, NY',
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80',
    amenities: ['City View', 'Gym', 'Parking'],
    rating: 4.7,
    reviews: 95
  },
  {
    id: '3',
    title: 'Mountain Retreat Cabin',
    description: 'Cozy cabin with mountain views',
    price: 159,
    location: 'Aspen, CO',
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80',
    amenities: ['Fireplace', 'Hot Tub', 'Mountain View'],
    rating: 4.8,
    reviews: 76
  }
];

function App() {
  const [filters, setFilters] = useState<FilterOptions>({});
  
  const filteredProperties = SAMPLE_PROPERTIES.filter((property) => {
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.bedrooms && property.bedrooms < filters.bedrooms) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Building className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">StayFinder</h1>
          </div>
        </div>
      </header>

      {/* Filters */}
      <Filters filters={filters} onFilterChange={setFilters} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;