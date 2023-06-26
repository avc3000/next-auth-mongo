import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <div className='flex justify-center gap-4 bg-sky-700'>
      <h1 className='text-center mt-4 font-bold text-yellow-400 text-xl'>About: </h1>
      <Image src="next.svg" alt='Logo' width={150} height={150} />
    </div>
  )
}

export default AboutPage;