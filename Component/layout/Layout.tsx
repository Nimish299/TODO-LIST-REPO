import React,{ReactNode} from 'react'
import Navbar from './navbar/navbar'

const Layout = ({children }:{children:ReactNode}) => {
  return (
   <>
   <Navbar/ >
   {children}
   </>
  )
}

export default Layout