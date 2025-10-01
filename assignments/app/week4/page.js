"use client"
import NewItem from './new-item';

export default function Page () {
  return (
    <main className='p-8 flex justify-center'>
      <div>
        <h1 className='text-shadow-blue-800 font-extrabold mb-5'> Add New Item</h1>
        <section className='rounded border border-black p-6 bg-white box-border w-96'>
        <NewItem/>
        <div>
          <p className='mt-2 text-sm text-gray-800'>Allowed Range: 1-20</p>
        </div>
        </section>
      </div>
    </main>
  );
}