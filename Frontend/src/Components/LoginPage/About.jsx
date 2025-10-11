import React from 'react'
import { easeIn, easeInOut, motion } from 'motion/react'

function About() {
  // Sample educational photos - you can replace these with actual images
  const photos = [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/bd/43/ad/bd43addc7c1b186de0e85d4bdc0c83db.jpg",
      alt: "Students learning in rural classroom"
    },
    {
      id: 2,
      src: "https://assets-v2.lottiefiles.com/a/a8c181f0-1172-11ee-93a8-b71a96f7e386/ph8ljmXOOm.gif",
      alt: "Children with laptops"
    },
    {
      id: 3,
      src: "https://i.pinimg.com/1200x/5d/08/dd/5d08ddbf5ce8c5aae625133d3d13db88.jpg",
      alt: "Teacher helping students"
    },
    {
      id: 4,
      src: "https://i.pinimg.com/1200x/a7/fe/d4/a7fed4ca3fac4717aed92639ec438273.jpg ",
      alt: "Rural school building"
    },
    {
      id: 5,
      src:  "https://images.squarespace-cdn.com/content/v1/584d904abe6594f675684f5d/1599932778113-C1PKU435HN7QU6JODY8S/Online+Learning+Landing+Page+Main+Image.gif",
      alt: "Students collaborating"
    },
    {
      id: 6,
      src: "https://i.pinimg.com/736x/f5/02/c5/f502c54ee4662d5ba648cf5e13f9d038.jpg",
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
    <div id='about' className='min-h-screen  bg-gradient-to-br py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Title */}
        <motion.h1 
          initial={{y:10, scale:0.9, opacity:0}} 
          whileInView={{y:0, scale:1, opacity:1}} 
          transition={{duration:0.5}}  
          className='text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-4 bg-blue-800 bg-clip-text text-transparent'
        >
          We are trying to make Education seamless in the Rural areas too!!
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          initial={{y:50, opacity:0}} 
          whileInView={{y:0, opacity:1}} 
          transition={{duration:0.5, delay:0.3}}
          className='text-lg md:text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto'
        >
          This software build to create a seamless experience for students and teachers in rural areas, bridging the educational divide with technology.
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
              className='overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'
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

      {/* what we doing  */}
      <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight text-center mb-8 mt-20">
                  The Challenge We're trying Solve
                </h2>
                
                <motion.div initial={{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} transition={{ease:easeIn, duration:1}} className="space-y-4 text-slate-700  max-w-5xl mx-auto px-4">
                  <p className="text-lg leading-relaxed">
                    In rural India, talented students often face an insurmountable barrier: 
                    <span className="font-semibold text-indigo-600"> lack of access to quality educators</span>. 
                    Distance and poor connectivity have traditionally kept expert professors and eager learners apart.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    We're changing that narrative. Our platform creates a <span className="font-semibold text-blue-600">dual-mode connection system</span> that adapts to each student's environment:
                  </p>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border-l-4 border-indigo-600">
                    <p className="text-base leading-relaxed">
                      <span className="font-bold text-indigo-700">Good connectivity?</span> <br />Enjoy rich, interactive video sessions with screen sharing and real-time collaboration.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-600">
                    <p className="text-base leading-relaxed">
                      <span className="font-bold text-purple-700">Limited internet?</span><br /> Our IVR technology ensures learning never stops - connect via voice calls with interactive menus and audio lessons.
                    </p>
                  </div>
                </motion.div>
              </div>
    </div>
  )
}

export default About