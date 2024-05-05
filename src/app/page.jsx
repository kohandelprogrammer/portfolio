"use client"

import Image from "next/image"
import { motion } from "framer-motion"


const HomePage = () => {
  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>

      <div className="  h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 xl:px-48">

        <div className=" h-1/2  lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>

        <div className="h-1/2 flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2 ">

          <h1 className="text-4xl font-bold md:text-6xl ">Carting Digital Experience, Designing Tomorrow</h1>
          <p className="flex gap-3 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem aperiam alias, repellendus voluptates officiis vitae quisquam
            facilis excepturi accusantium suscipit dolor exercitationem illum illo similique?
            Vitae atque labore veritatis iure.</p>
          <div className="w-full flex gap-5">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white transition duration-150 delay-150 ease-in-out scale-100 hover:bg-red-300">View My Work</button>
            <button className="p-4 rounded-lg ring-1 ring-black  transform hover:scale-200 ">Contact Me</button>
          </div>

        </div>

      </div >
    </motion.div>
  )
}

export default HomePage
