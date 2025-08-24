
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import React from 'react'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='h-full flex flex-col'>
      <Header />
       <main className='flex-1 flex flex-col items-center justify-center'>
         {children}
       </main>
       <Footer />
    </div>
  )
}

export default layout