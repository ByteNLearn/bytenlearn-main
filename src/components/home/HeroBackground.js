import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

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
    return (
        <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 2]}>
            <Scene />
        </Canvas>
    );
}
