import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Github,
  Pin,
  Laptop,
  Heart,
  Linkedin,
  Send,
  Wand2,
  Flame,
  PawPrint,
  Flower,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Contact() {
  return (
    <Card className='w-full p-2 flex flex-col sm:flex-row gap-2'>
      <Card className='sm:w-1/2'>
        <CardHeader>
          <div className='flex justify-between'>
            <div>
              <CardTitle>Annabelle N</CardTitle>
              <br />
              <CardDescription>About me:</CardDescription>
            </div>
            <Avatar>
              <AvatarImage src='https://github.com/annni11/yogiwhocodes/blob/main/src/app/avatar.png?raw=true' />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
          </div>
        </CardHeader>
        <CardContent>
          <div className='flex'>
            <Pin />
            <p>NYC</p>
          </div>
          <div className='flex'>
            <Laptop />
            <p>Full-stack software engineer</p>
          </div>
          <div className='flex'>
            <Heart />
            <p>200-hour certified yoga instructor</p>
          </div>
        </CardContent>
      </Card>
      <div className='sm:w-1/2 flex flex-col gap-2'>
        <Card>
          <CardHeader>
            <CardDescription>Other Hobbies and Interests:</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex'>
              <Wand2 />
              <p>&nbsp;Reading sci-fi and fantasy novels</p>
            </div>
            <div className='flex'>
              <Flame />
              <p>&nbsp;Eating spicy foods</p>
            </div>
            <div className='flex'>
              <PawPrint />
              <p>&nbsp;Playing with my dog Simba</p>
            </div>
            <div className='flex'>
              <Flower />
              <p>
                &nbsp;Upcycling fashion on&nbsp;
                <Link
                  href='https://poshmark.com/closet/fifevintage'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='italic'>
                  Poshmark
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Let's Connect:</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='flex gap-2'>
              <Link
                href='https://www.linkedin.com/in/annabelleni/'
                rel='noopener noreferrer'
                target='_blank'>
                <Linkedin />
              </Link>
              <Link
                href='https://github.com/annni11'
                rel='noopener noreferrer'
                target='_blank'>
                <Github />
              </Link>
              <Link href='mailto:ann.j.ni@gmail.com'>
                <Send />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </Card>
  );
}
