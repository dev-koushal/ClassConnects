import React from 'react';
import { AppWindow, Target } from 'lucide-react';
function NavBarLogin() {
  return (
   <>
    <div className=" shadow-sm rounded-full z-50 m-2 shadow-gray-600 p-4 flex justify-between items-center">
        <div role='button'  className='text-2xl font-semibold text-(--primary) flex justify-center items-center gap-2 '>  <Target strokeWidth={1.75} /><a href="/">ClassConnect</a></div>
        <div className='text-lg hidden lg:block'>
            <ul className='text-(--primary) text-xl flex gap-22 mr-22 '>
                <li className='inline-block mx-4 cursor-pointer '><a href="home">Home </a></li>
                <li className='inline-block mx-4 cursor-pointer '><a href="about">About </a></li>
                <li className='inline-block mx-4 cursor-pointer '><a href="contact">Contact us</a></li>
            </ul>
        </div>
        <div className=' lg:hidden  block mr-6 '>
            <AppWindow className='text-(--primary)' size={30} strokeWidth={1.75} />
        </div>
    </div>
   </>
  )
}

export default NavBarLogin