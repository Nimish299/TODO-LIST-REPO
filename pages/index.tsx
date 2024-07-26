import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@chakra-ui/react'

import Homeindex from "../Component/home/UI"
import Navbar from '../Component/layout/navbar/navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      {/* <Navbar/> */}
    <Homeindex/>
    </main>
  )
}
