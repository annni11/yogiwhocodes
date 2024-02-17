'use client';
import Typewriter from './components/Typewriter';
import Contact from './components/Contact';
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center m-10'>
      <Typewriter />
      <Contact />
    </main>
  );
}
