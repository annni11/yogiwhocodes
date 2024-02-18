'use client';
import Typewriter from './components/Typewriter';
import Info from './components/Info';
import FramerWrapper from './FramerWrapper';
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center m-2 sm:m-10'>
      <Typewriter />

      <FramerWrapper children={<Info />} />
    </main>
  );
}
