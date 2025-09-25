import ItemList from './item-list.js';
import Item from './item.js';

export default function Page () {
  return (
    <main className='p-5 bg-amber-50 min-h-screen'>
      <h1 className='text-5xl font-sans text-blue-700 mb-5'>Shopping List</h1>
      <ItemList/>
    </main>
  ); 
}