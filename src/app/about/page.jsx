"use client"

import Brain from '../components/brain'
import { motion } from 'framer-motion'


const AboutPage = () => {
    return (
        <motion.div className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}>
            <div className='flex '>
                <div className='p-4 sm:px-8 md:px-12 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-4 xl:gap-64  w-2/3 xl:1/2'>
                    <div className='flex flex-col gap-12 justify-center'>
                        <h1 className='font-bold text-2xl'> BIOGRAPHY</h1>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Natus, culpa voluptates sunt dolores eos quam vero praesentium
                            expedita porro assumenda, consequuntur tempora dignissimos!
                            Omnis in recusandae optio officiis, dolorem facere.
                        </p>
                        <span className='italic'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </span>
                        <div className='flex flex-col gap-12 justify-center'>
                            <h1 className='font-bold text-2xl'> SKILLS</h1>
                            <div className='flex gap-4 flex-wrap'>
                                <div className='rounded p-2 text-white text-sm cursor-pointer bg-black hover:bg-white hover:text-black'>javascript</div>
                                <div className='rounded p-2 text-white text-sm cursor-pointer bg-black hover:bg-white hover:text-black'>javascript</div>
                                <div className='rounded p-2 text-white text-sm cursor-pointer bg-black hover:bg-white hover:text-black'>javascript</div>
                                <div className='rounded p-2 text-white text-sm cursor-pointer bg-black hover:bg-white hover:text-black'>javascript</div>
                                <div className='rounded p-2 text-white text-sm cursor-pointer bg-black hover:bg-white hover:text-black'>javascript</div>
                                <div className='rounded p-2 text-white text-sm cursor-pointer bg-black hover:bg-white hover:text-black'>javascript</div>
                                <div className='rounded p-2 text-white text-sm cursor-pointer bg-black hover:bg-white hover:text-black'>javascript</div>
                                <div className='rounded p-2 text-white text-sm cursor-pointer bg-black hover:bg-white hover:text-black'>javascript</div>
                                <div className='rounded p-2 text-white text-sm cursor-pointer bg-black hover:bg-white hover:text-black'>javascript</div>
                                <div className='rounded p-2 text-white text-sm cursor-pointer bg-black hover:bg-white hover:text-black'>javascript</div>
                                <div className='rounded p-2 text-white text-sm cursor-pointer bg-black hover:bg-white hover:text-black'>javascript</div>
                                <div className='rounded p-2 text-white text-sm cursor-pointer bg-black hover:bg-white hover:text-black'>javascript</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hiddeen lg:block w-1/3 xl:1/2 '>
                    <Brain />
                </div>
            </div>



        </motion.div>

    )
}

export default AboutPage