'use client';

type FilterProps = {
  category: string;
  location: string;
  price: string;
  setCategory: (val: string) => void;
  setLocation: (val: string) => void;
  setPrice: (val: string) => void;
};

export default function FilterBlock({
  category,
  location,
  price,
  setCategory,
  setLocation,
  setPrice,
}: FilterProps) {
  return (
    <div className="bg-white border p-4 rounded-xl mb-6 flex flex-wrap gap-4">
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded">
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="Dancer">Dancer</option>
        <option value="Speaker">Speaker</option>
        <option value="DJ">DJ</option>
      </select>

      <select value={location} onChange={(e) => setLocation(e.target.value)} className="border p-2 rounded">
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Pune">Pune</option>
      </select>

      <select value={price} onChange={(e) => setPrice(e.target.value)} className="border p-2 rounded">
        <option value="">All Prices</option>
        <option value="low">₹0 - ₹20k</option>
        <option value="mid">₹20k - ₹30k</option>
        <option value="high">₹30k+</option>
      </select>
    </div>
  );
}