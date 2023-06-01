'use client'

import getUsers from './data';

export default async function Home() {
    const jdata = await fetch('http://localhost:3000/api/user');
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
      </div>
  )
}
