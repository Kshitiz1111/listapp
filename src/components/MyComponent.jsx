"use client"

import React, { useState, useEffect, useRef, useMemo } from 'react';

const MyComponent = ({ data }) => {
   const [selectedItems, setSelectedItems] = useState([]);
   const [dataSource, setDataSource] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
   const inputRef = useRef(null);

   useEffect(() => {
      setDataSource(data);
   }, [data]);

   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setDataSource(
            data.filter(
               (item) =>
                  item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.department.toLowerCase().includes(searchTerm.toLowerCase())
            )
         );
      }, 1000);
      return () => clearTimeout(timeoutId);
   }, [searchTerm, data]);


   const handleSelect = (item) => {
      setSelectedItems((currentSelectedItems) => {
         if (currentSelectedItems.includes(item)) {
            return currentSelectedItems.filter((existedItem) => existedItem !== item);
         } else {
            return [...currentSelectedItems, item];
         }
      });
   };


   const handleClear = () => {
      inputRef.current.value = '';
      setSearchTerm('');
   };

   return (
      <div className="w-[90%] sm:w-[400px] md:w-[400px] lg:w-[400px] shadow-lg rounded-xl p-4  ml-auto mr-auto font-mono bg-white">
         <p className='font-bold text-xl text-center'>Employee List</p>
         <div className="flex justify-center my-4">
            <input
               ref={inputRef}
               onChange={e => setSearchTerm(e.target.value)}
               value={searchTerm}
               placeholder="Search..."
               className="p-1 border border-gray-300 rounded-tl-md rounded-bl-md w-auto"
            />
            <button onClick={handleClear} className="bg-red-500 hover:bg-red-700 font-bold text-center text-white rounded-tr-md rounded-br-md px-1">
               clear
            </button>
         </div>
         <div className="">
            <ul className="p-1">
               {dataSource.length > 0 ?
                  dataSource?.map((item) => (
                     <li key={item.id} onClick={() => handleSelect(item)} className={`list-disc w-fit rounded-md m-2 hover:cursor-pointer hover:outline-dashed hover:outline-gray-500 px-1 ${selectedItems.includes(item) ? 'outline outline-gray-500 bg-gray-200 text-black' : 'bg-transparent'}`}>
                        <span className='font-semibold'>{item.name}</span>
                        <span className="ml-1 text-gray-500 text-sm">,{item.department}</span>
                     </li>
                  ))
                  :
                  <p>no result found</p>
               }
            </ul>
         </div>
      </div>
   );
};

export default MyComponent;
