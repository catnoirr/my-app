"use client";
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative max-w-md">
        {/* Main Image */}
        <Image
          src="/path/to/your/image.png" // Replace with actual path
          width={600}
          height={400}
          alt="Laptop and plant on table"
          className="rounded-lg"
        />

        {/* Top Card - Meeting With */}
        <div className="absolute top-5 right-5 bg-purple-900 text-white p-3 rounded-lg shadow-lg flex items-center space-x-2">
          <span className="text-sm font-semibold">Meeting with</span>
          <div className="flex -space-x-2">
            <img
              src="/path/to/avatar1.jpg" // Replace with actual path
              alt="Avatar 1"
              className="w-8 h-8 rounded-full border-2 border-purple-800"
            />
            <img
              src="/path/to/avatar2.jpg" // Replace with actual path
              className="w-8 h-8 rounded-full border-2 border-purple-800"
              alt="Avatar 2"
            />
          </div>
        </div>

        {/* Bottom Card - Customer Satisfaction */}
        <div className="absolute bottom-5 left-5 bg-purple-900 text-white p-4 rounded-lg shadow-lg w-48">
          <p className="text-sm font-semibold">Our Lovely Customers</p>
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex -space-x-2">
              <img
                src="/path/to/avatar3.jpg" // Replace with actual path
                className="w-6 h-6 rounded-full border-2 border-purple-800"
                alt="Avatar 3"
              />
              <img
                src="/path/to/avatar4.jpg" // Replace with actual path
                className="w-6 h-6 rounded-full border-2 border-purple-800"
                alt="Avatar 4"
              />
              <img
                src="/path/to/avatar5.jpg" // Replace with actual path
                className="w-6 h-6 rounded-full border-2 border-purple-800"
                alt="Avatar 5"
              />
            </div>
            <span className="text-sm">5K+</span>
          </div>
          <p className="text-xs mt-2">Satisfaction Rate 80%</p>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
            <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
