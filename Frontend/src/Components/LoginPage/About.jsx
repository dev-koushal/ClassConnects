import React from 'react'
import { easeInOut, motion } from 'motion/react'

function About() {
  // Sample educational photos - you can replace these with actual images
  const photos = [
    {
      id: 1,
      src: "https://i.pinimg.com/1200x/f9/28/4f/f9284fd53f0cf26f62bd2e52491243ee.jpg",
      alt: "Students learning in rural classroom"
    },
    {
      id: 2,
      src: "https://i.pinimg.com/1200x/f9/28/4f/f9284fd53f0cf26f62bd2e52491243ee.jpg",
      alt: "Children with laptops"
    },
    {
      id: 3,
      src: "https://i.pinimg.com/1200x/f9/28/4f/f9284fd53f0cf26f62bd2e52491243ee.jpg",
      alt: "Teacher helping students"
    },
    {
      id: 4,
      src: "https://i.pinimg.com/1200x/f9/28/4f/f9284fd53f0cf26f62bd2e52491243ee.jpg",
      alt: "Rural school building"
    },
    {
      id: 5,
      src:  "https://i.pinimg.com/1200x/f9/28/4f/f9284fd53f0cf26f62bd2e52491243ee.jpg",
      alt: "Students collaborating"
    },
    {
      id: 6,
      src: "https://i.pinimg.com/1200x/f9/28/4f/f9284fd53f0cf26f62bd2e52491243ee.jpg",
      alt: "Online learning"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {

      }
    }
  }

  return (
    <div id='about' className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Title */}
        <motion.h1 
          initial={{y:10, scale:0.9, opacity:0}} 
          whileInView={{y:0, scale:1, opacity:1}} 
          transition={{duration:0.5}}  
          className='text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-4 bg-[var(--primary)]/70 bg-clip-text text-transparent'
        >
          We are making Education accessible in the Rural area!!
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          initial={{y:50, opacity:0}} 
          whileInView={{y:0, opacity:1}} 
          transition={{duration:0.5, delay:0.3}}
          className='text-lg md:text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto'
        >
          Bridging the digital divide and empowering communities through innovative educational solutions
        </motion.p>

        {/* Photo Grid */}
        <motion.div 
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 transition-all duration-150 ease-in-out'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
              
              }}
              className='overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300'
              style={{
                background: `linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))`,
              }}
            >
              <div className=' bg-gradient-to-br from-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '></div>
              
              <motion.img
                src={photo.src}
                alt={photo.alt}
                className='w-full h-64 md:h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110'
                whileHover={{ scale: 1.1 }}
             
                transition={{ease : easeInOut}}
              />
            </motion.div>
          ))}
        </motion.div>        
      </div>
    </div>
  )
}

export default About