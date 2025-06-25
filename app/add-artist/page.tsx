'use client';

import { useForm, Controller } from 'react-hook-form';

export default function AddArtistPage() {
  const { register, handleSubmit, control, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Submitted:", data); // ✅ You will see this in the browser console
    reset(); // Clear the form after submission
  };

  const categories = ['Singer', 'Dancer', 'DJ', 'Speaker'];
  const languages = ['Hindi', 'English', 'Punjabi', 'Bengali'];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Add Artist</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block font-medium">Name</label>
          <input {...register('name')} required className="w-full border px-3 py-2 rounded" />
        </div>

        {/* Bio */}
        <div>
          <label className="block font-medium">Bio</label>
          <textarea {...register('bio')} required className="w-full border px-3 py-2 rounded" />
        </div>

        {/* Category (multi-select) */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          {categories.map((cat) => (
            <label key={cat} className="block">
              <input
                type="checkbox"
                value={cat}
                {...register('category')}
                className="mr-2"
              />
              {cat}
            </label>
          ))}
        </div>

        {/* Languages Spoken (multi-select) */}
        <div>
          <label className="block font-medium mb-1">Languages Spoken</label>
          {languages.map((lang) => (
            <label key={lang} className="block">
              <input
                type="checkbox"
                value={lang}
                {...register('languages')}
                className="mr-2"
              />
              {lang}
            </label>
          ))}
        </div>

        {/* Fee Range Dropdown */}
        <div>
          <label className="block font-medium">Fee Range</label>
          <select {...register('fee')} required className="w-full border px-3 py-2 rounded">
            <option value="">Select</option>
            <option value="₹10k–₹20k">₹10k–₹20k</option>
            <option value="₹20k–₹30k">₹20k–₹30k</option>
            <option value="₹30k–₹50k">₹30k–₹50k</option>
            <option value="₹50k+">₹50k+</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium">Location</label>
          <input {...register('location')} required className="w-full border px-3 py-2 rounded" />
        </div>

        {/* Profile Image (optional) */}
        <div>
          <label className="block font-medium">Profile Image (optional)</label>
          <input type="file" {...register('image')} className="w-full" />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
        >
          Submit Artist
        </button>
      </form>
    </div>
  );
}