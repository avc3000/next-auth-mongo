'use client'

import React, { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [error, setError] = useState();
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const signUpResponse = await axios.post('/api/auth/signup', { email: formData.get('email'), password: formData.get('password'), fullName: formData.get('fullName') });
      const res = await signIn('credentials', { email: signUpResponse.data.email, password: formData.get('password'), redirect: false });

      if (res?.ok) return router.push('/dashboard');
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
  };

  return (
    <div className='justify-center h-[calc(100vh-4rem)] flex items-center'>
      <form onSubmit={handleSubmit} className='bg-neutral-900 px-8 py-10 w-3/12 rounded-lg'>
        {
          error && <div className='bg-red-500 text-white p-2 mb-2 font-bold rounded-lg'>{error}</div>
        }
        <h1 className='text-4xl font-bold mb-7 text-sky-800 text-center'>SignUp</h1>
        <input type="text" placeholder='Antony Jordan' name='fullName' className='bg-zinc-800 px-4 py-2 mb-2 rounded-xl w-full' />
        <input type="email" placeholder='email@mail.com' name='email' className='bg-zinc-800 px-4 py-2 block mb-2 rounded-xl w-full' />
        <input type="password" placeholder='******' name='password' className='bg-zinc-800 px-4 py-2 block mb-2 rounded-xl w-full' />
        <button className='bg-indigo-700 px-4 py-2 w-full mt-2 font-bold rounded-xl hover:bg-indigo-500'>Register</button>
      </form>
    </div>
  )
}

export default RegisterPage;