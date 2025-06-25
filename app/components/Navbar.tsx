'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-md py-4">
      <div className="max-w-7xl mx-auto flex justify-center items-center space-x-10">
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/artists" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
          Artists
        </Link>
        <Link href="/add-artist" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
          Add Artist
        </Link>
      </div>
    </nav>
  );
}