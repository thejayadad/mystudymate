
## SETUP

## DATABASE SETUP

## HOME PAGE
- route grouping
- layout setup
- setup landing layout
- add header
- add footer
- setup layout
- add in authenication
- components login
- components logout


- header
```
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
```

- login:
```
import React from 'react'

const LoginBtn = () => {
  return (
    <div>LoginBtn</div>
  )
}

export default LoginBtn
```
- logout

```
import React from 'react'

const LogoutBtn = () => {
  return (
    <div>LogoutBtn</div>
  )
}

export default LogoutBtn
```

## MAIN LAYOUT
- create grouping
