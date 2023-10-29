"use client"
import {useRef} from 'react'
import Image from 'next/image'
import { Button, buttonVariant } from './components/Button'
import Link from 'next/link'

export default function Home() {
  const ref = useRef<null | HTMLButtonElement>(null)
  ref.current
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <Button ref={ref} variant={'default'} size={'sm'}>Any text</Button>
    </main>
  )
}
