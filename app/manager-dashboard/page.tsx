import Navbar from '../components/Navbar';

const mockArtists = [
  { name: "Riya Sharma", category: "Singer", location: "Delhi", fee: "₹20k–₹30k" },
  { name: "Amit Raj", category: "Dancer", location: "Mumbai", fee: "₹15k–₹25k" },
  { name: "Sneha Verma", category: "Speaker", location: "Bangalore", fee: "₹10k–₹20k" },
  { name: "DJ Nitesh", category: "DJ", location: "Pune", fee: "₹25k–₹40k" },
];

export default function ManagerDashboard() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Manager Dashboard
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-xl">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
                <th className="py-3 px-6 border-b">Name</th>
                <th className="py-3 px-6 border-b">Category</th>
                <th className="py-3 px-6 border-b">Location</th>
                <th className="py-3 px-6 border-b">Fee</th>
                <th className="py-3 px-6 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockArtists.map((artist, idx) => (
                <tr key={idx} className="text-gray-700">
                  <td className="py-3 px-6 border-b">{artist.name}</td>
                  <td className="py-3 px-6 border-b">{artist.category}</td>
                  <td className="py-3 px-6 border-b">{artist.location}</td>
                  <td className="py-3 px-6 border-b">{artist.fee}</td>
                  <td className="py-3 px-6 border-b">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}