"use client"
import { useState } from 'react';
import NewItem from './new-item';

export default function Page () {
  return (
    <main className='p-8 max-w-md mx-auto'>
      <div>
        <h1 className='text-shadow-blue-800 font-extrabold mb-5'> Add New Item</h1>
        <section className='rounded border border-black p-6 bg-white'>
          <p className='mb-6'>
            <span className='text-2xl font-bold text-gray-600'>Quantity:</span>
            <span className='text-2xl font-sans font-extrabold'>1</span>
          </p>
        <NewItem/>
        <div>
          <p className='mt-2 text-sm text-gray-800'>Allowed Range: 1-20</p>
        </div>
        </section>
      </div>
    </main>
  );
}