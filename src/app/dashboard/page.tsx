'use client'

import { useSession, signOut } from 'next-auth/react';

const DashboardPage = () => {
  const { data: session, status } = useSession();

  return (
    <div className='justify-center h-[calc(100vh-4rem)] flex flex-col items-center gap-y-4'>
      <h1 className='font-bold text-3xl text-sky-500'>Welcome: <span className='text-2xl text-white uppercase'>{session?.user?.fullName}</span></h1>
      <pre className='bg-zinc-800 p-4 rounded-xl w-3/12'>
        <div className='font-bold'>
          <div className='flex justify-center'>
            <p className='text-green-600 w-32'>Id: </p>
            <input type="text" value={session?.user?._id} className='bg-zinc-900 px-4 py-2 block mb-2 rounded-xl w-full' />
          </div>
          <div className='flex justify-center'>
            <p className='text-green-600 w-32'>Email: </p>
            <input type="text" value={session?.user?.email} className='bg-zinc-900 px-4 py-2 block mb-2 rounded-xl w-full' />
          </div>
          <div className='flex justify-center'>
            <p className='text-green-600 w-32'>FullName: </p>
            <input type="text" value={session?.user?.fullName} className='bg-zinc-900 px-4 py-2 block mb-2 rounded-xl w-full' />
          </div>
          <div className='flex justify-center'>
            <p className='text-green-600 w-32'>Expires: </p>
            <input type="text" value={session?.expires} className='bg-zinc-900 px-4 py-2 block mb-2 rounded-xl w-full' />
          </div>
          <div className='flex justify-center'>
            <p className='text-green-600 w-32'>Status: </p>
            <input type="text" value={status} className='bg-zinc-900 px-4 py-2 block mb-2 rounded-xl w-full' />
          </div>
        </div>
      </pre>
      <button onClick={() => signOut()} className='bg-indigo-700 px-4 py-2 mb-2 font-bold rounded-xl hover:bg-indigo-500 w-3/12'>LOGOUT</button>
    </div>
  )
}

export default DashboardPage;