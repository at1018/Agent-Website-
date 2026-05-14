import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function EnterpriseDiagram() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cameraConfig = isMobile
    ? { position: [0, 0, 6.5], fov: 60 }
    : { position: [0, 0, 8], fov: 50 };

  return (
    <div className="relative h-[240px] sm:h-[280px] md:h-[320px] lg:h-[380px] w-full max-w-full overflow-hidden rounded-[16px] sm:rounded-[24px] md:rounded-[32px] border border-white/10 bg-[#07101f]/95 shadow-soft backdrop-blur-xl">
      <Canvas camera={cameraConfig}>
        <color attach="background" args={['#02030a']} />
        <fog attach="fog" args={['#02030a', 4, 12]} />
        <directionalLight position={[2, 3, 2]} intensity={1} color="#84d5ff" />
        <ambientLight intensity={0.3} />
        <EnterpriseNetwork isMobile={isMobile} />
      </Canvas>
    </div>
  );
}

function EnterpriseNetwork({ isMobile }) {
  const scale = isMobile ? 0.7 : 1;
  
  const nodes = [
    { position: [0, 1.5, 0], label: 'AI AGENT', color: '#22c55e', size: 0.8 },
    { position: [-1.7, -0.4, 0], label: 'ERP', color: '#60a5fa', size: 0.5 },
    { position: [-1, -1.5, 0], label: 'HRIS', color: '#60a5fa', size: 0.5 },
    { position: [1, -1.5, 0], label: 'CRM', color: '#60a5fa', size: 0.5 },
    { position: [2, -0.5, 0], label: 'FINANCE', color: '#60a5fa', size: 0.5 },
    { position: [0, -2.5, 0], label: 'INTERNAL TOOLS', color: '#60a5fa', size: 0.5 },
    { position: [-2.5, 0.8, 0], label: 'DATABASES', color: '#60a5fa', size: 0.5 },
  ];

  const connections = [
    [[0, 1.5, 0], [-1.7, -0.9, 0]],
    [[0, 1.5, 0], [-1, -1.5, 0]],
    [[0, 1.5, 0], [1, -1.5, 0]],
    [[0, 1.5, 0], [2, -0.5, 0]],
    [[0, 1.5, 0], [0, -2.5, 0]],
    [[0, 1.5, 0], [-2.5, 0.5, 0]],
  ];

  return (
    <group scale={[scale, scale, scale]}>
      {nodes.map((node, idx) => (
        <Node key={idx} position={node.position} label={node.label} color={node.color} size={node.size} isMobile={isMobile} />
      ))}
      {connections.map((conn, idx) => (
        <Connection key={idx} from={conn[0]} to={conn[1]} />
      ))}
    </group>
  );
}

function Node({ position, label, color, size, isMobile }) {
  const mesh = useRef();
  const fontSize = isMobile ? 0.12 : 0.15;

  return (
    <group position={position}>
      <mesh ref={mesh}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial emissive={color} color="#0b1220" roughness={0.1} metalness={0.8} />
      </mesh>
      <Text
        position={[0, -size - 0.3, 0]}
        fontSize={fontSize}
        fontWeight="bold"
        color={color}
        anchorX="center"
        anchorY="middle"
        maxWidth={1.5}
      >
        {label}
      </Text>
    </group>
  );
}

function Connection({ from, to }) {
  const dir = useMemo(() => {
    return new THREE.Vector3().subVectors(new THREE.Vector3(...to), new THREE.Vector3(...from)).normalize();
  }, [from, to]);

  const distance = new THREE.Vector3(...from).distanceTo(new THREE.Vector3(...to));
  const mid = new THREE.Vector3().addVectors(new THREE.Vector3(...from), new THREE.Vector3(...to)).multiplyScalar(0.5);
  const quaternion = useMemo(() => new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir), [dir]);

  return (
    <mesh position={mid} quaternion={quaternion}>
      <cylinderGeometry args={[0.02, 0.02, distance, 8]} />
      <meshStandardMaterial emissive="#60a5fa" color="#60a5fa" transparent opacity={0.6} />
    </mesh>
  );
}

export default EnterpriseDiagram;