import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';

function FloatingShape({ position, color, speed, scale }) {
    const mesh = useRef();
    useFrame((state) => {
        if (!mesh.current) return;
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

function Scene() {
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

export default function HeroBackground() {
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Delay 3D rendering until after the page is idle (non-blocking)
        // This ensures LCP and FCP complete first before the heavy 3D kicks in
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            requestIdleCallback(() => setShouldRender(true), { timeout: 3000 });
        } else {
            // Fallback: load after 2s
            const timer = setTimeout(() => setShouldRender(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    if (!shouldRender) {
        // Lightweight CSS-only animated placeholder while 3D loads
        return (
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-orange/5 blur-[80px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-pink/5 blur-[80px] animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
        );
    }

    return (
        <Canvas
            camera={{ position: [0, 0, 5] }}
            dpr={1}
            gl={{ antialias: false, powerPreference: 'low-power' }}
            frameloop="demand"
            performance={{ min: 0.5 }}
        >
            <Scene />
        </Canvas>
    );
}
