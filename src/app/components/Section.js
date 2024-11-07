// pages/index.js

import React from 'react';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <header className="bg-purple-900 w-full py-4 flex justify-end pr-4">
        <button className="text-white border border-white px-4 py-2 rounded-full">
          Apply for Sponsorship
        </button>
      </header>

      <main className="flex flex-col items-center text-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Award Winning digital service
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-4">
            Maximize Engagement at Your Next Big Event!
          </h1>
          <p className="text-gray-600 mb-8">
            At Oohpoint, we are passionate about partnering with events of all types—
            college fests, corporate gatherings, competitions, and more. Whether it's a
            small or large event, we can provide the perfect sponsorship to ensure your
            attendees get the most out of your occasion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg px-4 py-2 flex-1"
            />
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Book a free consultation
            </button>
          </div>

          <div className="flex justify-between items-center mt-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span className="bg-gray-200 p-2 rounded-full text-sm">24/7 Support</span>
              <span>We are always here to help</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-gray-200 p-2 rounded-full text-sm">Award Winning agency</span>
              <span>You are in safe hands</span>
            </div>
          </div>
        </div>

        <section className="flex flex-col items-center mt-12">
          <h2 className="text-lg font-semibold mb-4">100+ Companies trust us</h2>
          <div className="flex gap-8">
            <img src="/marlboro-logo.png" alt="Marlboro" className="h-8" />
            <img src="/intel-logo.png" alt="Intel" className="h-8" />
            <img src="/amazon-logo.png" alt="Amazon" className="h-8" />
            <img src="/uber-logo.png" alt="Uber" className="h-8" />
          </div>
        </section>
      </main>
    </div>
  );
}
