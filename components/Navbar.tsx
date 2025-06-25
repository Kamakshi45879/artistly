'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg py-4 px-8 flex justify-between items-center text-lg font-semibold text-gray-800">
      <div className="flex-1 text-left">
        <Link href="/" className="hover:text-blue-600">Home</Link>
      </div>
      <div className="flex-1 text-center">
        <Link href="/artists" className="hover:text-blue-600">Artists</Link>
      </div>
      <div className="flex-1 text-right">
        <Link href="/add-artist" className="hover:text-blue-600">Add Artist</Link>
      </div>
    </nav>
  );
}