import { assets } from '@/assets/assets'
import { Asset } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <a href="/">
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />
        </a>

      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2026 La'Trisha Gomer. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li>
                <a href="https://github.com/LaTrishaGomer" target="_blank">GitHub</a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/latrisha-gomer/" target="_blank">Linkedin</a>
            </li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
