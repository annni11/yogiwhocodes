import Link from 'next/link';
import { ReactTyped } from 'react-typed';
export default function Typewriter() {
  const handleScrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div className='h-screen flex flex-col justify-evenly'>
      <div>
        <ReactTyped
          strings={['Hello, World!']}
          typeSpeed={40}
          showCursor={false}
        />
        <br />
        <ReactTyped
          strings={['I am Annabelle']}
          typeSpeed={40}
          startDelay={1200}
          showCursor={false}
        />
        <br />
        <ReactTyped
          strings={['a.k.a.']}
          typeSpeed={40}
          startDelay={2200}
          showCursor={false}
        />
        <br />
        <ReactTyped
          strings={['yogi who codes']}
          typeSpeed={40}
          startDelay={3000}
          showCursor={false}
        />
      </div>
      <div onClick={handleScrollToBottom} className='cursor-pointer'>
        <ReactTyped
          strings={['↓']}
          typeSpeed={40}
          startDelay={4800}
          className='bold'
          showCursor={false}
        />
      </div>
    </div>
  );
}
