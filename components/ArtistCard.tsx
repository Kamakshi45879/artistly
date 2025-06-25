'use client';

type Artist = {
  name: string;
  category: string;
  price: string;
  location: string;
};

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition text-center">
      <h2 className="text-xl font-bold text-gray-900 mb-2">{artist.name}</h2>
      <p className="text-gray-600 mb-1">Category: {artist.category}</p>
      <p className="text-gray-600 mb-1">Price: {artist.price}</p>
      <p className="text-gray-600 mb-4">Location: {artist.location}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Ask for Quote
      </button>
    </div>
  );
}