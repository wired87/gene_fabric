"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Head() {
  const router = useRouter();

  const toSignup = () => {
    router.push("/register");
  };
  const toLogin = () => {
    router.push("/login");
  };
  return (
    <header className=''>
      <div className='py-4 px-2 lg:mx-4 xl:mx-12 '>
        <div className='header-main'>
          <nav className='flex items-center justify-between flex-wrap'>
            <div className='block lg:hidden'>
              <button className='navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white'>
                <svg
                  className='fill-current h-6 w-6 text-gray-700'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Menu</title>
                  <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                </svg>
              </button>
            </div>
            <div
              id='main-nav'
              className='w-full flex-grow lg:flex items-center lg:w-auto hidden  '
            >
              <div className='text-sm flex justify-between lg:flex-grow mt-2 animated jackinthebox xl:mx-8'>
                <div>
                  <a
                    href='/'
                    className='block lg:inline-block text-md font-bold text-gray-500  sm:hover:border-indigo-400  hover:text-black mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg'
                  >
                    Home
                  </a>
                  <a
                    href='demo'
                    className='block lg:inline-block text-md font-bold  text-gray-500  sm:hover:border-indigo-400  hover:text-black mx-2 focus:text-blue-500  p-1 hover:bg-gray-300 sm:hover:bg-transparent rounded-lg'
                  >
                    Demo
                  </a>
                </div>
                <div>
                  <Button className='mx-2' onClick={toSignup}>
                    Sign up
                  </Button>
                  <Button variant='outline' onClick={toLogin}>
                    Log in
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
