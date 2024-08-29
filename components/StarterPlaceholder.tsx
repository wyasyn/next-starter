import Link from 'next/link'
import { Button } from './ui/button'
import { SendHorizontal } from 'lucide-react'
import CustomeImage from './CustomeImage'
import BackgroundBlur from './BackgroundBlur'

export default function StarterPlaceholder() {
  return (
    <div className='relative grid min-h-dvh w-full place-items-center overflow-clip'>
      <BackgroundBlur top='top-0' left='left-0' />
      <BackgroundBlur
        size='200'
        bottom='bottom-0'
        right='right-0'
        color='primary'
      />
      <div className='flex flex-col items-center gap-4'>
        <CustomeImage
          width='w-[300px]'
          title='placeholder'
          src='https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        />
        <h1 className='font-lato text-balance text-center text-4xl font-bold md:text-5xl'>
          Welcome to your new Next.js app!
        </h1>
        <p className='text-center'>
          Get started by editing{' '}
          <code className='text-accent font-mono'>app/page.tsx</code> or{' '}
          <code>components/StarterPlaceholder.tsx</code>.
        </p>
        <Button size='sm'>
          <Link
            href='https://nextjs.org/docs'
            className='flex items-center gap-2'
          >
            Documentation <SendHorizontal size={18} />
          </Link>
        </Button>
      </div>
    </div>
  )
}
