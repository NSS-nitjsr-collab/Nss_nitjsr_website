import React from "react";
import { Link } from 'react-router-dom';
const Card =({Name, Year, url})=>{

 const modifiedUrl = url.replace(/%/g, '%25'); // Replace '%' with '%25'
  const encodedUrl = encodeURIComponent(modifiedUrl);

    const routePath = `/details/${Name}/${Year}/${encodedUrl}`;

return (
    <div className="w-[300px] rounded-md border flex flex-col justify-center items-center">
    <div className="p-4 ">
      <h1 className="text-lg font-semibold">{Name}</h1>
      <p className="mt-3 text-sm text-gray-600 ">
        {Year}
      </p>
      <Link to={routePath} >
      <div className="flex flex-col justify-center items-center">
      <button
      type="button"
      className="rounded-full bg-black px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Read
    </button>
      </div>
      </Link>
    </div>
  </div>
)
}

export default Card;