import React from 'react';
import Loader from '../Componenet/Loader';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function FeaturedPage() {
  const { data: topBlogs, isLoading, isError, error } = useQuery({
    queryKey: ['topBlogs'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:3000/feature');
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div className="text-red-500 flex justify-center items-center my-24
    ">Error: {error.message}</div>;
  }


  return (
    <div className="overflow-x-auto my-16 px-1 rounded-xl text-sm sm:text-md min-h-[calc(100vh-500px)] max-w-5xl mx-auto">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-[#60A5FA] text-white">
          <tr className='text-center'>
            <th className="p-4">#</th>
            <th className="p-4 ">Title</th>
            <th className="p-4">Long Description</th>
            <th className="p-4">Category</th>
            <th className="p-4">Word Count</th>
          </tr>
        </thead>
        <tbody>
          {topBlogs.map((topBlog, index) => (
            <tr
              key={topBlog._id}
              className="even:bg-gray-100 hover:bg-gray-200 transition-colors text-center"
            >
              <td className="p-4 text-center">{index + 1}</td>
              <td className="p-4">{topBlog.title}</td>
              <td className="p-4">{topBlog.long_disc}</td>
              <td className="p-4 text-center">{topBlog.category}</td>
              <td className="p-4 text-center">{topBlog.wordCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
