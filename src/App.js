import React from 'react';
import './App.scss';

const defaults = {
  url: "https://picsum.photos/id/1084/536/354?grayscale",
  size: 200
}

const getUrl = size => `https://picsum.photos/${size}`

function App() {
  const [size, setSize] = React.useState(defaults.size);
  const [url, setUrl] = React.useState(defaults.url);

  const handleChange = ({ target }) => {
    setUrl(getUrl(target.value));
    setSize(target.value);
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
