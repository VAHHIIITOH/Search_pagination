import React from 'react'
import Searching from './Searching';
import Pagination from './Pagination';
import Stories from './Stories';
import { useGlobalContext } from './Context';

function App() {
  return (
    <>
      <div className="bg-blue-50 py-10">
        <h2 className='font-bold text-2xl text-center'>Darshan's New Website..!!!</h2>
        <Searching />
        <Pagination />
        <Stories />
      </div>
    </>
  );
}

export default App;
