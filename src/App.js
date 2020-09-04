import React from 'react';
import { useUrl } from "./useUrl";
import './App.scss';

function App() {
  const {
    size,
    update,
    url,
  } = useUrl();

  const handleChange = ({ target }) => {
    update(target.value);
  }

  return (
    <div className="container items-center justify-center">
       <div className="flex flex-col">
         <div className="flex flex-col">
            <h1 className="font-4xl">Random Image by Size</h1>
            <div className="font-thin text-gray-600">Current size is {size}</div>
            <input type="range" className="bg-white rounded-lg shadow-xl" min={50} max={500} value={size} onChange={handleChange} />
         </div>
         <div>
           <img src={url} alt="" className="bg-white rounded-lg shadow-xl mt-8" />
         </div>
       </div>
    </div>
  );
}

export default App;
