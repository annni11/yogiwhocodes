import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Github, Pin, Laptop, Heart, Linkedin, Send } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import avatar from '../avatar.png';

export default function Contact() {
  return (
    <Card className='w-full p-2 flex gap-2'>
      <Card className='w-1/2'>
        <CardHeader>
          <div className='flex justify-between'>
            <div>
              <CardTitle>Annabelle N</CardTitle>
              <CardDescription>About me:</CardDescription>
            </div>
            <Avatar>
              <AvatarImage />
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
      <div className='w-1/2 flex flex-col gap-2'>
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
