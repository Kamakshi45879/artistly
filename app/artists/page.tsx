'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import ArtistCard from '@/components/ArtistCard';
import FilterBlock from '@/components/FilterBlock';

type Artist = {
  name: string;
  category: string;
  price: string;
  location: string;
};

const artists: Artist[] = [
  { name: "Riya Sharma", category: "Singer", price: "₹20k", location: "Delhi" },
  { name: "Amit Raj", category: "Dancer", price: "₹15k", location: "Mumbai" },
  { name: "Sneha Verma", category: "Speaker", price: "₹10k", location: "Bangalore" },
  { name: "DJ Nitesh", category: "DJ", price: "₹35k", location: "Pune" },
  { name: "Pooja Mehra", category: "Singer", price: "₹28k", location: "Delhi" },
  { name: "Rahul Kapoor", category: "Dancer", price: "₹22k", location: "Mumbai" },
];

function parsePrice(value: string) {
  return parseInt(value.replace("₹", "").replace("k", "")) * 1000;
}

export default function ArtistListPage() {
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');

  const filtered = artists.filter((artist) => {
    const matchCategory = category ? artist.category === category : true;
    const matchLocation = location ? artist.location === location : true;

    let matchPrice = true;
    const parsed = parsePrice(artist.price);
    if (price === 'low') matchPrice = parsed <= 20000;
    else if (price === 'mid') matchPrice = parsed > 20000 && parsed <= 30000;
    else if (price === 'high') matchPrice = parsed > 30000;

    return matchCategory && matchLocation && matchPrice;
  });

  return (
    <>
      <Navbar />
      <main className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Explore Artists</h1>

        <FilterBlock
          category={category}
          location={location}
          price={price}
          setCategory={setCategory}
          setLocation={setLocation}
          setPrice={setPrice}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((artist) => (
            <ArtistCard key={artist.name} artist={artist} />
          ))}
        </div>
      </main>
    </>
  );
}