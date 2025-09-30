import { useState } from "react";
import Page from "../page";

export default function NewItem(){
  const [quantity, setQuantity]= useState(1);
//  const [counter, setCounter] = useState(0)
  return (
    <>
      <div className="flex items-center gap-4">
       <button onClick={() => setQuantity(quantity -1)} className="text-shadow-lg font-bold bg-blue-200 text-black px-7 py-7 rounded-full curser-pointer hover:bg-amber-600 hover:shadow-lg transition ease-linear duration-200" > - </button>
      <button onClick={() => setQuantity(quantity + 1)} className="text-shadow-lg font-bold bg-green-100 text-black px-7 py-7 rounded-full curser-pointer hover:bg-amber-200 hover:shadow-lg transition ease-linear duration-200"> + </button>
     
      <Page quantity={quantity} />
      </div>
    </>
  );
}