import { Fragment } from 'react';
import { Inter } from 'next/font/google';
import HeaderTop from '@/components/HeaderTop';
import HeaderContent from '@/components/HeaderContent';
import NavBar from '@/components/NavBar';
import { ReactNode } from 'react'
import "./globals.css";



const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <div className={inter.className}>
        <HeaderTop />
        <HeaderContent />
        <NavBar />
        {children}
      </div>
    </Fragment>
  );
};

export default RootLayout;
