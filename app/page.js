'use client'

import { useEffect, useState } from "react";

export default async function Home() {
    const [page, setPages] = useState();

    useEffect(() => {
		setPages(1);
	}, [])

    function handlePrev() {
        setPages(page - 1);
      }

    function handleNext() {
        setPages(page + 1);
    }

    const jdata = await fetch(`http://localhost:3000/api/user?page=1`);
    const data = await jdata.json();

  return (
      <div>
          {data.map((user, index) => {
              return <div className='h-screen flex items-center justify-center' key={index}>
                  <div className='h-32 w-96' key={index}>
                      <div className='flex items-center justify-center rounded-md bg-slate-400 h-full' key={index}>{user.id}</div>
                  </div>
              </div>
          })}
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleNext}>Next</button>
      </div>
  )
}
