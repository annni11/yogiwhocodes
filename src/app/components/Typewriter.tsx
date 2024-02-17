import { ReactTyped } from 'react-typed';
export default function Typewriter() {
  return (
    <div className='h-screen flex flex-col justify-evenly'>
      <div>
        <ReactTyped strings={['Hello, World!']} typeSpeed={40}>
          <input type='text' />
        </ReactTyped>
        <br />
        <ReactTyped
          strings={['I am Annabelle']}
          typeSpeed={40}
          startDelay={1200}>
          <input type='text' />
        </ReactTyped>
        <br />
        <ReactTyped strings={['a.k.a.']} typeSpeed={40} startDelay={2200}>
          <input type='text' />
        </ReactTyped>
        <br />
        <ReactTyped
          strings={['yogi who codes']}
          typeSpeed={40}
          startDelay={3000}>
          <input type='text' />
        </ReactTyped>
      </div>
      <div>
        <ReactTyped
          strings={['↓']}
          typeSpeed={40}
          startDelay={5000}
          className='bold'>
          <input type='text' />
        </ReactTyped>
      </div>
    </div>
  );
}
