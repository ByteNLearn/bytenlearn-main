import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { motion } from 'framer-motion';

function FloatingShape({ position, color, speed, scale }) {
    const mesh = useRef();
    useFrame((state) => {
        mesh.current.rotation.x += 0.005 * speed;
        mesh.current.rotation.y += 0.01 * speed;
        mesh.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.001;
    });

    return (
        <mesh ref={mesh} position={position} scale={scale}>
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color={color} wireframe transparent opacity={0.3} />
        </mesh>
    );
}

function HeroScene() {
    return (
        <>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <FloatingShape position={[-4, 2, -5]} color="#FF5E00" speed={0.5} scale={1.5} />
            <FloatingShape position={[4, -2, -6]} color="#FF2E63" speed={0.7} scale={2} />
            <FloatingShape position={[0, 0, -10]} color="#ffffff" speed={0.3} scale={3} />
        </>
    );
}

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-white dark:bg-brand-black">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <HeroScene />
                </Canvas>
                {/* Gradient Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-white/80 to-brand-white dark:via-brand-black/80 dark:to-brand-black z-0 pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-brand-black/10 dark:border-brand-white/10 bg-brand-white/5 backdrop-blur-sm text-sm font-bold tracking-widest uppercase">
                        Future Ready
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none tracking-tighter mb-6 text-brand-black dark:text-brand-white">
                        Start <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-pink filter drop-shadow-lg">
                            Amazing.
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    className="text-lg md:text-2xl font-body max-w-2xl mx-auto mb-12 text-balance opacity-80 text-brand-black dark:text-brand-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    Building the digital future with <span className="text-brand-orange font-bold">precision</span> and <span className="text-brand-pink font-bold">passion</span>.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <a href="#projects" className="px-10 py-5 bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black font-display font-bold text-xl uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
                        Explore Work
                    </a>
                    <a href="#contact" className="px-10 py-5 border-2 border-brand-black dark:border-brand-white text-brand-black dark:text-brand-white font-display font-bold text-xl uppercase tracking-widest hover:bg-brand-pink hover:border-brand-pink hover:text-white transition-all backdrop-blur-sm">
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
