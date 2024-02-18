import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
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
            <Linkedin className='hover:text-pink-300' />
          </Link>
          <Link
            href='https://github.com/annni11'
            rel='noopener noreferrer'
            target='_blank'>
            <Github className='hover:text-pink-300' />
          </Link>
          <Link href='mailto:ann.j.ni@gmail.com'>
            <Send className='hover:text-pink-300' />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
