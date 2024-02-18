import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Pin, Laptop, Heart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function About() {
  return (
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
  );
}
