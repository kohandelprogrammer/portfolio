"use client"

import { motion } from "framer-motion"

const TestPage = () => {

    const variants = {
        variant1: {
            x: 100,
            y: 100,
            opacity: 0.5,
            transition: {
                duration: 3
            }
        },
        variant2: {
            x: 100,
            y: -300,
            rotation: 90
        }
    }
    return (
        <div className=" flex h-full justify-center items-center">
            <motion.div className="w-96 h-96 bg-red-400 rounded"
                variants={variants}
                animate="variant1"
            >
            </motion.div>
        </div>
    )
}
export default TestPage