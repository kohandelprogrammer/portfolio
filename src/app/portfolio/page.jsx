"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const items = [
    {
        "color": "from-blue-300 to-violet-300",
        "id": 1,
        "title": "picture 1",
        "url": "https://via.placeholder.com/600/92c952",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem aperiam alias, repellendus voluptates officiis vitae quisqua facilis excepturi accusantium suscipit dolor exercitationem illum illo similique? Vitae atque labore veritatis iure",
        "link": "www.google.com"
    },
    {
        "color": "from-violet-300 to-purple-300",
        "id": 2,
        "title": "picture 2",
        "url": "https://via.placeholder.com/600/771796",
        "link": "www.google.com",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem aperiam alias, repellendus voluptates officiis vitae quisqua facilis excepturi accusantium suscipit dolor exercitationem illum illo similique? Vitae atque labore veritatis iure"
    },
    {
        "color": "from-purple-300 to-red-300",
        "id": 3,
        "title": "picture 3",
        "url": "https://via.placeholder.com/600/24f355",
        "link": "www.google.com",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem aperiam alias, repellendus voluptates officiis vitae quisqua facilis excepturi accusantium suscipit dolor exercitationem illum illo similique? Vitae atque labore veritatis iure"
    },
    {
        "color": "from-red-300 to-yellow-300",
        "id": 4,
        "title": "picture 4",
        "url": "https://via.placeholder.com/600/d32776",
        "link": "www.google.com",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem aperiam alias, repellendus voluptates officiis vitae quisqua facilis excepturi accusantium suscipit dolor exercitationem illum illo similique? Vitae atque labore veritatis iure"
    },
    {
        "color": "from-yellow-300 to-green-300",
        "id": 5,
        "title": "picture 5",
        "url": "https://via.placeholder.com/600/f66b97",
        "link": "www.google.com",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorem aperiam alias, repellendus voluptates officiis vitae quisqua facilis excepturi accusantium suscipit dolor exercitationem illum illo similique? Vitae atque labore veritatis iure"
    }]




const PortfolioPage = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref })
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <motion.div className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}>

            <div className="h-[600vh] relative" ref={ref}>
                <div className=" w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-xl text-center">
                    <div className="sticky top-0 h-screen gap-4 items-center">
                        {items.map((item) => (<div className="" key={item.id}>
                            <div className="">
                                <h1>{item.title}</h1>
                                <div className="relative">
                                    <img src={item.url} alt="" fill />
                                </div>
                                <p>{item.desc}</p>
                                <Link href={item.link}><button>see demo</button></Link>

                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </motion.div>

    )

}
export default PortfolioPage