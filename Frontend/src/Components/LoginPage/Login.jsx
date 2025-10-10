import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router';
import NavBarLogin from './NavBarLogin'
import BannerImage from './assets/BannerImage.avif'
import {motion} from 'motion/react'
import Contact from './Contact'
import About from './About';
const Loginpop = lazy(() => import('./Loginpop/LoginPopup'))
function Login() {
  
  const[popup,SetPopup]=React.useState(false);

  return (
    <>  
    
       <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 '>
         <nav className='min-w-full fixed'><NavBarLogin /></nav>
        <div id='home' className='min-h-screen flex items-center justify-between flex-wrap md:flex-wrap lg:flex-nowrap'>
    <div className="flex  flex-col items-center justify-center text-center mt-30 lg:mt-0 px-6 py-10 space-y-6">
      {/* Heading */}
      <motion.h1 initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5, delay:0.5}} className="text-3xl sm:text-4xl font-light text-gray-700">
        <span className="font-bold text-gray-800 underline decoration-purple-400">
          Effectiveness
        </span>{" "}
        of the classroom now in your{" "}
        <span className="font-bold text-gray-800">hands</span>
      </motion.h1>      
      <motion.p  initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1}} className="text-gray-500 max-w-xl">
        The only classroom experience that focus on continous learning<br />
        Enjoy and learn even when internet is slow.
      </motion.p>

      {/* Logins (need to be fetched) */}
      <motion.div  initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1.5}}  className="flex gap-4">
        <button onClick={()=>SetPopup(!popup)} className=" px-6 py-2 rounded-md bg-purple-600 text-white shadow hover:bg-purple-700 transition hover:scale-95 cursor-pointer  duration-200 ease-in-out">
          Join as a student
        </button>
        <button className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-200 ease-in-out hover:scale-95 cursor-pointer">
          <Link to='/teacherdashboard' >Join as a teacher</Link>
        </button>

      </motion.div>
      {
        popup && (
            <div className='fixed inset-0 flex items-center justify-center  '>
              <Loginpop />
              <div onClick={()=>SetPopup(false)} className='fixed bg-black/70 min-h-full mt-5 min-w-screen'></div>
            </div>
        )
      }
      <motion.div initial={{x:-200,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:1.8}}  className="flex gap-12 pt-4">    
        <div className="flex flex-col items-center">
          <span className="text-2xl font-semibold text-gray-800">40%</span>
          <div className="flex space-x-1">
            <p className='text-gray-500'>Less disconnections</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-semibold text-gray-800">80%</span>
          <span className="text-gray-500">Fall Backs</span>
        </div>
      </motion.div>
    </div>
    {/* 2nd flex */}
    <motion.div  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='align-middle items-center justify-center mx-auto' >
           <img className='h-80 md:h-96 lg:h-[80vh]' src={BannerImage} alt="Banner Image" />        
    </motion.div>
</div> 
<About />   
<Contact />
       </div>
    </>
  )
}

export default Login

