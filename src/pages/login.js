import Image from 'next/image'
import { Poppins } from 'next/font/google'
import Eye from '../../public/assets/icon/eye'

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

export default function Login() {
  return (
    <main
      className={`flex h-screen p-3 ${poppins.className}`}
    >
      <section className='w-full lg:w-2/4 h-full flex justify-center items-center'>
        <form className='md:w-[400px]'>
          <aside className='mb-6'>
            <h3 className='capitalize text-xl text-[#262626]'>Log in</h3>
            <p className='text-[#4F4F4F]'>
              Enter your details to access your account
            </p>
          </aside>
          <div className='w-full my-4'>
            <label className='block text-[#262626] text-[14px]'>Email Address</label>
            <input
              className='w-full py-2 px-3 my-2 rounded-md'
              placeholder='Email Address'
              type='email' />
          </div>
          <div className='w-full my-4'>
            <label className='block text-[#262626] text-[14px]'>Password</label>
            <input
              className='w-full py-2 px-3 my-2 rounded-md'
              placeholder='Password'
              type='password' />
            <Eye />
          </div>
        </form>
      </section>
      <section className='w-3/4 h-full  hidden lg:block '>
        <article className='bg-[#F0F8FF] h-full rounded-lg flex justify-center items-center'>
          <Image
            src={'/login/login.png'}
            width={500}
            height={500}
            alt='login '
          />
        </article>
      </section>

    </main>
  )
}