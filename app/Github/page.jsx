import React from 'react'
import "./page.modules.css"
import Link from 'next/link';
const page = () => {
  return (
    <>
      <div className="text-center text-white text-4xl flex justify-center mt-60">
        <h1>This Is a Github Page Page</h1>
      </div>
      <button className="block items-center bg-blue-800 text-white px-4 py-2 ml-64 rounded-md hover:bg-blue-900 hover:text-slate-100 ">
        <Link href="/">Back</Link>
      </button>
    </>
  );
}

export default page
