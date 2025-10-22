import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const ParallaxBackground = () => {
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress, {stiffness: 100, damping: 30, mass: 1});
    const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
    const plantesX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
    const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
    const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);
    return (
        <section className="absolute inset-0 bg-black/40">
            <div className="relative h-screen overflow-y-hidden">
                {/*Background Sky*/}
                <div className="absolute inset-0 w-full h-screen -z-50"
                    style={{
                        backgroundImage: "url(/assets/sky.jpg)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }}
                ></div>
                {/*Mountain Layer 3 */}
                <motion.div className="absolute inset-0 -z-40"
                    style={{
                        backgroundImage: "url(/assets/mountain-3.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain3Y
                    }}
                ></motion.div>
                {/*Plantes*/}
                <motion.div className="absolute inset-0 -z-30"
                    style={{
                        backgroundImage: "url(/assets/planets.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        x: plantesX,
                    }}
                ></motion.div>
                {/*Mountain Layer 2 */}
                <motion.div className="absolute inset-0 -z-20"
                    style={{
                        backgroundImage: "url(/assets/mountain-2.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain2Y,
                    }}
                ></motion.div>
                {/*Mountain Layer 1 */}
                <motion.div className="absolute inset-0 -z-10"
                    style={{
                        backgroundImage: "url(/assets/mountain-1.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain1Y,
                    }}
                ></motion.div>
        </div>
        </section>
    )
}

export default ParallaxBackground