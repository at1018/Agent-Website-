import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Text } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function WorkflowScene() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cameraConfig = isMobile
    ? { position: [-0.2, 1.8, 14], fov: 75 }
    : { position: [-1.8, 2.5, 18], fov: 45 };

  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-[24px] sm:rounded-[36px] border border-white/10 bg-[#07101f]/95 shadow-soft backdrop-blur-xl sm:h-[550px] md:h-[680px] lg:h-[750px]">
      <Canvas camera={cameraConfig}>
        <color attach="background" args={['#02030a']} />
        <fog attach="fog" args={['#02030a', 6, 28]} />
        <directionalLight position={[3, 4, 3]} intensity={1.3} color="#84d5ff" />
        <ambientLight intensity={0.2} />
        <pointLight position={[-3, 1.5, 2]} intensity={0.75} color="#38bdf8" />
        <pointLight position={[3, -1, 2]} intensity={0.7} color="#c084fc" />
        <Sparkles count={isMobile ? 40 : 80} scale={isMobile ? 4 : 8} size={1.2} speed={0.3} color="#7dd3fc" />
        <UnifiedWorkflowGraph isMobile={isMobile} />
      </Canvas>
      <WorkflowLegend />
    </div>
  );
}

function WorkflowLegend() {
  return (
    <div className="absolute top-3 left-3 sm:top-6 sm:left-6 space-y-2 sm:space-y-3 z-10">
      <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-300/80 font-semibold">Adaptive AI Workflow</div>
      <div className="space-y-1 sm:space-y-2 text-[10px] sm:text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 flex-shrink-0" />
          <span className="line-clamp-1">Fast Path: Direct Answer</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink-400 flex-shrink-0" />
          <span className="line-clamp-1">Smart Path: Self-Improvement</span>
        </div>
      </div>
    </div>
  );
}

function UnifiedWorkflowGraph({ isMobile }) {
  const root = useRef();

  // Complete workflow with both paths visible simultaneously
  const workflowData = {
    nodes: [
      // START
      { position: [-4.0, 2, 0], label: 'USER QUERY', detail: 'Ask a question', color: '#38bdf8', type: 'start' },
      
      // DECISION POINT
      { position: [-1.6, 2, 0], label: 'AGENT\nANALYSIS', detail: 'Can answer?', color: '#a78bfa', type: 'decision' },
      
      // FAST PATH (Direct Answer)
      { position: [1.1, 2.8, 0], label: 'HAS\nCAPABILITY', detail: 'Direct answer', color: '#22c55e', type: 'path' },
      { position: [3.2, 2.8, 0], label: 'RESPONSE', detail: 'Instant reply', color: '#22c55e', type: 'end' },
      
      // SMART PATH (Self-Improvement)
      { position: [1.1, 1.2, 0], label: 'CAPABILITY\nGAP', detail: 'Missing skill', color: '#f472b6', type: 'path' },
      { position: [3.2, 1.2, 0], label: 'GATHER\nTOOLS', detail: 'Collect modules', color: '#f472b6', type: 'process' },
      { position: [5.1, 1.2, 0], label: 'CREATE\nTASK', detail: 'Define work', color: '#fbbf24', type: 'process' },
      { position: [6.9, 1.2, 0], label: 'HUMAN\nAPPROVAL', detail: 'Review & ok', color: '#60a5fa', type: 'process' },
      { position: [8.7, 1.2, 0], label: 'DEVELOPMENT', detail: 'Build feature', color: '#c084fc', type: 'process' },
      { position: [10.5, 1.2, 0], label: 'TESTING', detail: 'Verify & validate', color: '#c084fc', type: 'process' },
      
      // FINAL RESPONSE (after improvement)
      { position: [12.3, 1.2, 0], label: 'ENHANCED\nRESPONSE', detail: 'Smart answer', color: '#22c55e', type: 'end' },
    ],
    
    beams: [
      // Fast path beams
      { from: [-4.0, 2, 0], to: [-1.6, 2, 0], color: '#38bdf8', delay: 0, cycle: 8 },
      { from: [-1.6, 2, 0], to: [1.1, 2.8, 0], color: '#22c55e', delay: 0.8, cycle: 8 },
      { from: [1.1, 2.8, 0], to: [3.2, 2.8, 0], color: '#22c55e', delay: 1.6, cycle: 8 },
      
      // Smart path beams
      { from: [-1.6, 2, 0], to: [1.1, 1.2, 0], color: '#f472b6', delay: 0.8, cycle: 8 },
      { from: [1.1, 1.2, 0], to: [3.2, 1.2, 0], color: '#f472b6', delay: 2.4, cycle: 8 },
      { from: [3.2, 1.2, 0], to: [5.1, 1.2, 0], color: '#fbbf24', delay: 3.2, cycle: 8 },
      { from: [5.1, 1.2, 0], to: [6.9, 1.2, 0], color: '#60a5fa', delay: 4, cycle: 8 },
      { from: [6.9, 1.2, 0], to: [8.7, 1.2, 0], color: '#c084fc', delay: 4.8, cycle: 8 },
      { from: [8.7, 1.2, 0], to: [10.5, 1.2, 0], color: '#c084fc', delay: 5.6, cycle: 8 },
      { from: [10.5, 1.2, 0], to: [12.3, 1.2, 0], color: '#22c55e', delay: 6.4, cycle: 8 },
    ],
  };

  const scale = isMobile ? [0.58, 0.58, 0.58] : [1.2, 1.2, 1.2];
  const position = isMobile ? [-0.8, -0.2, 0] : [-4.2, -0.6, 0];

  return (
    <group ref={root} position={position} scale={scale}>
      {/* Render all nodes */}
      {workflowData.nodes.map((node, idx) => (
        <NodeSphere 
          key={idx} 
          position={new THREE.Vector3(...node.position)} 
          label={node.label} 
          detail={node.detail} 
          color={node.color}
          type={node.type}
          isMobile={isMobile}
        />
      ))}
      
      {/* Render all beams */}
      {workflowData.beams.map((beam, idx) => (
        <FlowBeam
          key={idx}
          from={new THREE.Vector3(...beam.from)}
          to={new THREE.Vector3(...beam.to)}
          color={beam.color}
          delay={beam.delay}
          cycleDuration={beam.cycle}
        />
      ))}
    </group>
  );
}

function NodeSphere({ position, label, detail, color, type, isMobile }) {
  const mesh = useRef();
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.scale.setScalar(1 + Math.sin(clock.getElapsedTime() * 2.5) * 0.04);
    }
  });

  const size = type === 'decision' ? 0.6 : type === 'start' || type === 'end' ? 0.55 : 0.42;
  const titleSize = isMobile ? 0.14 : 0.19;
  const detailSize = isMobile ? 0.1 : 0.13;
  const textWidth = isMobile ? 1.4 : 2.2;
  const titleOffset = isMobile ? -0.65 : -0.75;
  const detailOffset = isMobile ? -0.9 : -1.05;

  return (
    <group position={position}>
      <mesh ref={mesh}>
        {type === 'decision' ? (
          <octahedronGeometry args={[size, 0]} />
        ) : (
          <icosahedronGeometry args={[size, 2]} />
        )}
        <meshStandardMaterial 
          emissive={color} 
          color="#0b1220" 
          roughness={0.1} 
          metalness={0.88}
          wireframe={type === 'decision'}
        />
      </mesh>
      
      <Text 
        position={[0, titleOffset, 0]} 
        fontSize={titleSize} 
        fontWeight="bold" 
        color={color} 
        anchorX="center" 
        anchorY="middle" 
        maxWidth={textWidth}
      >
        {label}
      </Text>
      
      <Text 
        position={[0, detailOffset, 0]} 
        fontSize={detailSize} 
        color="#cbd5e1" 
        anchorX="center" 
        anchorY="middle" 
        maxWidth={textWidth}
      >
        {detail}
      </Text>
    </group>
  );
}

function FlowBeam({ from, to, color, delay, cycleDuration }) {
  const pulse = useRef();
  const line = useRef();
  
  const dir = useMemo(() => {
    return new THREE.Vector3().subVectors(to, from).normalize();
  }, [from, to]);
  
  const distance = from.distanceTo(to);
  const mid = new THREE.Vector3().addVectors(from, to).multiplyScalar(0.5);
  const quaternion = useMemo(() => new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir), [dir]);

  useFrame(({ clock }) => {
    if (pulse.current) {
      // Continuous flowing animation
      const elapsed = clock.getElapsedTime() + delay;
      const t = (elapsed / cycleDuration) % 1;
      pulse.current.position.copy(new THREE.Vector3().lerpVectors(from, to, t));
      
      // Pulsing opacity
      pulse.current.material.opacity = 0.8 + Math.sin(elapsed * 4) * 0.3;
    }
    
    if (line.current) {
      // Animated line with traveling highlight
      line.current.material.opacity = 0.2 + Math.sin((clock.getElapsedTime() + delay) * 3) * 0.15;
    }
  });

  return (
    <group>
      {/* Static beam line */}
      <mesh ref={line} position={mid} quaternion={quaternion}>
        <cylinderGeometry args={[0.025, 0.025, distance, 8]} />
        <meshStandardMaterial 
          emissive={color} 
          color={color} 
          transparent 
          opacity={0.25}
        />
      </mesh>
      
      {/* Animated flowing particle */}
      <mesh ref={pulse}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial 
          emissive={color} 
          color={color} 
          transparent
          opacity={0.8}
          roughness={0.1} 
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

export default WorkflowScene;
