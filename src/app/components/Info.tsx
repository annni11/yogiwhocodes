import { Card } from '@/components/ui/card';

import About from './About';
import Extra from './Extra';
import Contact from './Contact';
export default function Info() {
  return (
    <Card className='w-full p-2 flex flex-col sm:flex-row gap-2'>
      <About />
      <div className='sm:w-1/2 flex flex-col gap-2'>
        <Extra />
        <Contact />
      </div>
    </Card>
  );
}
