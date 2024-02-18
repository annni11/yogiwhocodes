import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Wand2, Flame, PawPrint, Flower } from 'lucide-react';

export default function Extra() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Other Hobbies and Interests:</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex'>
          <PawPrint />
          <p>&nbsp;Playing with my dog Simba</p>
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
