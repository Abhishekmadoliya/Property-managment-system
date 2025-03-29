import React, { useState } from 'react';

import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Show from './pages/Show';



// Sample data
// const SAMPLE_PROPERTIES = [
//   {
//     id: '1',
//     title: 'Luxury Beachfront Villa',
//     description: 'Beautiful villa with ocean views',
//     price: 299,
//     location: 'Malibu, CA',
//     bedrooms: 4,
//     bathrooms: 3,
//     imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
//     amenities: ['Pool', 'Ocean View', 'WiFi', 'Kitchen'],
//     rating: 4.9,
//     reviews: 128
//   },
//   {
//     id: '2',
//     title: 'Modern Downtown Loft',
//     description: 'Stylish loft in the heart of the city',
//     price: 199,
//     location: 'New York, NY',
//     bedrooms: 2,
//     bathrooms: 2,
//     imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80',
//     amenities: ['City View', 'Gym', 'Parking'],
//     rating: 4.7,
//     reviews: 95
//   },
//   {
//     id: '3',
//     title: 'Mountain Retreat Cabin',
//     description: 'Cozy cabin with mountain views',
//     price: 159,
//     location: 'Aspen, CO',
//     bedrooms: 3,
//     bathrooms: 2,
//     imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80',
//     amenities: ['Fireplace', 'Hot Tub', 'Mountain View'],
//     rating: 4.8,
//     reviews: 76
//   }
// ];

function App() {
  // const [filters, setFilters] = useState({});
  
  // const filteredProperties = SAMPLE_PROPERTIES.filter((property) => {
  //   if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
  //     return false;
  //   }
  //   if (filters.bedrooms && property.bedrooms < filters.bedrooms) {
  //     return false;
  //   }
  //   return true;
  // });

  return (

    <>
      <div className="container">
        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Show />} />
            {/* <Route path="/blogs" element={< Blogpost/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/post/:id" element={<Blogbyid />} /> */}
            {/* <Route path="/:user/dashboard" element={<Dashboard  />}  />
            <Route path="/:user/new" element={<Blogform />} /> */}
          </Routes>
        </main>
      </div>
    </>
  );
}


export default App;