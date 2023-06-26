import React from 'react';
import Link from 'next/link';
import { getServerSession } from 'next-auth';

const Navbar = async () => {
  const session = await getServerSession();

  return (
    <nav className='bg-zinc-900 p-4'>
      <div className='flex justify-between container mx-auto'>
        <Link href='/'><h1 className='font-bold text-2xl text-orange-500'>NextAuth</h1></Link>
        <ul className='flex gap-x-2'>
          {
            session ? (
              <li className='px-3 py-1 hover:bg-gray-100 hover:text-black rounded-full'>
                <Link href='/dashboard'>Profile</Link>
              </li>
            ) : (
              <>
                <li className='px-3 py-1 hover:bg-gray-100 hover:text-black rounded-full'>
                  <Link href='/about'>About</Link>
                </li>
                <li className='px-3 py-1 hover:bg-gray-100 hover:text-black rounded-full'>
                  <Link href='/login'>Login</Link>
                </li>
                <li className='px-3 py-1 hover:bg-gray-100 hover:text-black rounded-full'>
                  <Link href='/register'>Register</Link>
                </li>
              </>
            )
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;