import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { GoogleOAuthProvider } from '@react-oauth/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Encode Media',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <GoogleOAuthProvider clientId='9890h343' >
      <div>
        <Navbar />
        <div className=' flex gap-6 selection:md:gap-20'>
          <div className='h-[92vh] overflow-hidden md:hover:overflow-auto'>
            <Sidebar />
          </div>
          <div className='videos mt-4 flex h-[88vh] flex-1 flex-col gap-10 overflow-auto'>            
            {children}            
          </div>
        </div>
      </div>
      </GoogleOAuthProvider>
    </html>
  );
}
