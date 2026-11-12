'use client';

import React from 'react';

export function LocationCard({ title, description }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600">
        {description}
      </p>
    </div>
  );
}