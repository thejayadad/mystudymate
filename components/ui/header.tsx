import { auth } from '@/auth'
import React from 'react'
import LoginBtn from './loginbtn'
import LogoutBtn from './logoutbtn'

const Header = async () => {
    const session = await auth()
    const userEmail = session?.user?.email
  return (
    <header className='h-20 w-full border-b-2 border-neutral-200 border-dotted px-4'>
        <nav className='mx-auto lg:max-w-screen-lg flex items-center justify-between h-full'>
            <div>Logo</div>
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
        </nav>
    </header>
  )
}

export default Header