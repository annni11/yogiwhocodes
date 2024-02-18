import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';
const font = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'yogiwhocodes',
  description: "Annabelle's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
