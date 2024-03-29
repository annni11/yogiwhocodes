import { ReactTyped } from 'react-typed';

export default function Typewriter() {
  const handleScrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div className='h-screen flex flex-col justify-evenly'>
      <div className='h-40 w-40'>
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
      <div className='h-40 w-40 cursor-pointer' onClick={handleScrollToBottom}>
        <ReactTyped
          strings={['↓']}
          typeSpeed={40}
          startDelay={4800}
          showCursor={false}
          className='bold 
          hover:text-violet-400'
        />
      </div>
    </div>
  );
}
