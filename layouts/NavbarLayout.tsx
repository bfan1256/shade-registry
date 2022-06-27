import {ReactNode} from 'react'
import Navbar from './navbar/Navbar'


const NavbarLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Navbar />
      <main className="relative mx-auto">
        {children}
      </main>
    </>
  )
}

export default NavbarLayout
