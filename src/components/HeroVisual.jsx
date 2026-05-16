import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

function HeroVisual() {
  const [sceneScale, setSceneScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth <= 640) {
        setSceneScale(0.82);
      } else if (window.innerWidth <= 900) {
        setSceneScale(0.92);
      } else {
        setSceneScale(1);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#07101f]/95 shadow-soft backdrop-blur-xl w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[520px]">
      <Canvas camera={{ position: [0, 0, 14], fov: 32 }} className="h-full w-full">
        <color attach="background" args={["#030615"]} />
        <fog attach="fog" args={["#030615", 8, 24]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[4, 4, 5]} intensity={1.1} color="#7dd3fc" />
        <pointLight position={[-2.8, 2.2, 3]} color="#c084fc" intensity={0.8} />
        <pointLight position={[2.4, -2.3, 3]} color="#38bdf8" intensity={0.75} />
        <group scale={[sceneScale, sceneScale, sceneScale]}>
          <ParticleSwarm />
          <NetworkCore />
          <OrbitNodes />
        </group>
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#05080f] to-transparent" />
    </div>
  );
}

function NetworkCore() {
  const core = useRef();
  const ringA = useRef();
  const ringB = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (core.current) {
      core.current.rotation.y = t * 0.16;
      core.current.rotation.x = Math.sin(t * 0.35) * 0.08;
    }
    if (ringA.current) {
      ringA.current.rotation.z = t * 0.18;
    }
    if (ringB.current) {
      ringB.current.rotation.x = t * 0.14;
    }
  });

  return (
    <group position={[0, 0.3, 0]}>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.55, 3]} />
        <meshStandardMaterial emissive="#38bdf8" color="#0d1320" roughness={0.12} metalness={0.92} />
      </mesh>
      <mesh ref={ringA} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.6, 0.04, 12, 120]} />
        <meshStandardMaterial emissive="#a855f7" color="#0b1320" roughness={0.15} metalness={0.9} />
      </mesh>
      <mesh ref={ringB} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2.18, 0.03, 12, 120]} />
        <meshStandardMaterial emissive="#22d3ee" color="#0b1320" roughness={0.13} metalness={0.9} />
      </mesh>
    </group>
  );
}

function OrbitNodes() {
  const nodes = useMemo(() => {
    return Array.from({ length: 12 }, (_, index) => {
      const theta = (index / 12) * Math.PI * 2;
      const radius = 3.1 + (index % 3) * 0.08;
      return {
        position: new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius * 0.8, Math.sin(theta * 1.3) * 0.7),
        color: index % 2 === 0 ? '#7dd3fc' : '#c084fc',
      };
    });
  }, []);

  return (
    <group>
      {nodes.map((node, index) => (
        <OrbitNode key={index} position={node.position} color={node.color} />
      ))}
    </group>
  );
}

function OrbitNode({ position, color }) {
  const mesh = useRef();

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.3;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.24;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <sphereGeometry args={[0.14, 18, 18]} />
      <meshStandardMaterial emissive={color} color="#0c1320" roughness={0.1} metalness={0.9} />
    </mesh>
  );
}

function ParticleSwarm() {
  const points = useMemo(() => {
    const positions = new Float32Array(240);
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 14;
      positions[i + 1] = (Math.random() - 0.5) * 6;
      positions[i + 2] = (Math.random() - 0.5) * 12;
    }
    return positions;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={points.length / 3} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#7dd3fc" transparent opacity={0.7} depthWrite={false} />
    </points>
  );
}

export default HeroVisual;
