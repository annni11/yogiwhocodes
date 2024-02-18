import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import { Wand2, Flame, PawPrint, Flower } from 'lucide-react';
import simba from '../../../public/IMG_0193.jpeg';
import Image from 'next/image';
export default function Extra() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Other Hobbies and Interests:</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex'>
          <PawPrint />
          <p>&nbsp;Playing with my dog&nbsp;</p>
          <HoverCard>
            <HoverCardTrigger>
              <i className='hover:text-pink-300'>Simba</i>
            </HoverCardTrigger>
            <HoverCardContent className='h-26 w-26'>
              <Image
                src={simba}
                alt={'simba'}
                height={86}
                width={86}
                className='border rounded-md'
              />
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className='flex'>
          <Wand2 />
          <p>&nbsp;Reading sci-fi and fantasy novels</p>
        </div>
        <div className='flex'>
          <Flame />
          <p>&nbsp;Eating spicy foods</p>
        </div>
        <div className='flex'>
          <Flower />
          <p>
            &nbsp;Upcycling fashion on&nbsp;
            <Link
              href='https://poshmark.com/closet/fifevintage'
              rel='noopener noreferrer'
              target='_blank'
              className='italic hover:text-pink-300'>
              Poshmark
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
