import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white py-6 shadow">
        <h1 className="text-5xl font-extrabold text-center text-black">
          Artistly
        </h1>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">
          Discover and book the best performing artists for your events.
        </h2>
        <p className="text-lg mb-6">
          Choose from singers, dancers, DJs, and more. Connect with professionals across cities.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <Link
            href="/artists"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Explore Artists
          </Link>

          <Link
            href="/manager-dashboard"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Manager Dashboard
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 pb-12">
        {["Singers", "Dancers", "Speakers", "DJs"].map((category) => (
          <div
            key={category}
            className="border rounded-lg shadow p-6 text-center font-semibold text-lg bg-gray-50 hover:bg-gray-100"
          >
            {category}
          </div>
        ))}
      </section>
    </main>
  );
}