
import { auth } from '@/auth';
import LoginBtn from '@/components/ui/loginbtn';
import Logo from '@/components/ui/logo';
import LogoutBtn from '@/components/ui/logoutbtn';
import MobileHeader from '@/components/ui/mobile-header';
import SideBar from '@/components/ui/sidebar';
import React from 'react'

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
    const session = await auth()

  return (
<div className='h-full grid grid-cols-1 grid-rows-12 lg:grid-cols-12 lg:grid-rows-1'>
    <div className='col-span-1 row-span-1 lg:hidden flex items-center justify-between  px-6 border-b border-dotted border-neutral-200'>
        <MobileHeader />
        <div>
                    {!session ?  (
                    <>
                    <LoginBtn />
                    </>
                ) : (
                    <>
                        <LogoutBtn />
                    </>
                )
                }
        </div>
    </div>
    <aside className='lg:block lg:col-span-2 lg:row-span-1 hidden'>
           <SideBar />
    </aside>
    <main className='col-span-1 row-span-11 lg:col-span-10 lg:row-span-1 px-6'>
        {children}
    </main>
</div>
  )
}

export default layout