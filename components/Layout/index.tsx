import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <div className="bg-gray-50 dark:bg-[#111111] transition duration-1000 px-5 animate-load overflow-hidden" >
        <div className='mx-auto max-w-2xl min-h-screen'>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>

  );
}

export default Layout;
