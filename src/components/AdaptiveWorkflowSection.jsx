import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';

const width = 1620;
const height = 520;

const nodes = [
  { id: 'query', label: 'USER QUERY', subtitle: 'Ask a question', x: 120, y: 260, color: '#38bdf8', tooltip: 'A user request enters the adaptive intelligence engine.' },
  { id: 'analysis', label: 'AGENT ANALYSIS', subtitle: 'Can answer?', x: 380, y: 260, color: '#a855f7', tooltip: 'The AI engine evaluates whether the request can be fulfilled from current capabilities.' },
  { id: 'capability', label: 'HAS CAPABILITY', subtitle: 'Direct answer', x: 660, y: 140, color: '#4ade80', tooltip: 'The system has the capability and returns an instant response.' },
  { id: 'response', label: 'RESPONSE', subtitle: 'Instant reply', x: 860, y: 140, color: '#22c55e', tooltip: 'The request is resolved immediately through the fast path.' },
  { id: 'gap', label: 'CAPABILITY GAP', subtitle: 'Missing skill', x: 660, y: 380, color: '#f472b6', tooltip: 'The system detects a missing capability and initiates the evolution workflow.' },
  { id: 'gather', label: 'GATHER TOOLS', subtitle: 'Collect modules', x: 860, y: 380, color: '#c084fc', tooltip: 'Required tools, modules, and data sources are assembled for the new capability.' },
  { id: 'create', label: 'CREATE TASK', subtitle: 'Define work', x: 1020, y: 380, color: '#facc15', tooltip: 'A precise improvement task is created for the development pipeline.' },
  { id: 'approval', label: 'HUMAN APPROVAL', subtitle: 'Review & ok', x: 1160, y: 380, color: '#38bdf8', tooltip: 'Governance approves the autonomous improvement workflow before it proceeds.' },
  { id: 'development', label: 'DEVELOPMENT', subtitle: 'Build feature', x: 1320, y: 300, color: '#d946ef', tooltip: 'The system develops the missing capability with autonomous execution.' },
  { id: 'testing', label: 'TESTING', subtitle: 'Verify & validate', x: 1320, y: 460, color: '#a855f7', tooltip: 'Quality gates verify the new capability before production activation.' },
  { id: 'enhanced', label: 'ENHANCED RESPONSE', subtitle: 'Smart answer', x: 1480, y: 380, color: '#10b981', tooltip: 'The evolved capability is integrated and ready to respond at higher intelligence.' },
];

const connections = [
  { id: 'flow1', path: `M140 260 C 220 260 300 260 380 260`, color: '#38bdf8', delay: 0 },
  { id: 'flow2', path: `M410 260 C 500 260 560 170 660 140`, color: '#38bdf8', delay: 0.15 },
  { id: 'flow3', path: `M410 260 C 500 260 560 380 660 380`, color: '#c084fc', delay: 0.15 },
  { id: 'flow4', path: `M680 140 C 760 140 840 140 900 140`, color: '#4ade80', delay: 0.3 },
  { id: 'flow5', path: `M680 380 C 760 380 840 380 900 380`, color: '#f472b6', delay: 0.3 },
  { id: 'flow6', path: `M920 380 C 980 380 1040 380 1100 380`, color: '#facc15', delay: 0.45 },
  { id: 'flow7', path: `M1180 380 C 1240 380 1300 340 1320 320`, color: '#38bdf8', delay: 0.6 },
  { id: 'flow8', path: `M1320 340 C 1320 360 1320 430 1320 460`, color: '#a855f7', delay: 0.75 },
  { id: 'flow9', path: `M1320 470 C 1360 470 1420 430 1480 380`, color: '#10b981', delay: 0.9 },
];

const particleAnimations = [
  { id: 'p1', points: [[160, 260], [300, 260], [420, 260], [540, 220], [660, 140]], duration: 5.2, delay: 0 },
  { id: 'p2', points: [[160, 260], [300, 260], [420, 260], [540, 320], [660, 380]], duration: 5.6, delay: 0.6 },
  { id: 'p3', points: [[920, 380], [1020, 380], [1120, 380], [1260, 380], [1500, 320], [1500, 380]], duration: 6.5, delay: 1.2 },
];

function WorkflowLine({ path, color, delay }) {
  return (
    <g>
      <path d={path} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2.5" />
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeDasharray="14 10"
        strokeLinecap="round"
        animate={{ strokeDashoffset: [20, 0] }}
        transition={{ duration: 1.6, ease: 'linear', repeat: Infinity, delay }}
      />
    </g>
  );
}

function WorkflowNode({ node, onHover, active }) {
  const glow = node.color;
  const isAnalysis = node.id === 'analysis';

  return (
    <motion.g
      onMouseEnter={() => onHover(node)}
      onMouseLeave={() => onHover(null)}
      animate={isAnalysis ? { rotate: [0, 360] } : { y: [0, -6, 0] }}
      transition={isAnalysis ? { duration: 14, repeat: Infinity, ease: 'linear' } : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: 'center center' }}
      whileHover={{ scale: 1.08 }}
    >
      <circle
        cx={node.x}
        cy={node.y}
        r="42"
        fill={node.color}
        opacity="0.14"
      />
      <circle
        cx={node.x}
        cy={node.y}
        r="22"
        fill={node.color}
        opacity="0.6"
        style={{ filter: `drop-shadow(0 0 20px ${glow})` }}
      />
      <circle
        cx={node.x}
        cy={node.y}
        r="10"
        fill="#ffffff"
        opacity="0.9"
      />
      <text x={node.x} y={node.y + 70} textAnchor="middle" fontSize="18" fill="#ffffff" fontWeight="700">{node.label}</text>
      <text x={node.x} y={node.y + 96} textAnchor="middle" fontSize="12" fill="#94a3b8" letterSpacing="0.05em">{node.subtitle}</text>
      <circle
        cx={node.x}
        cy={node.y}
        r="56"
        fill="none"
        stroke={node.color}
        strokeWidth="1"
        opacity="0.22"
      />
      <circle
        cx={node.x}
        cy={node.y}
        r="74"
        fill="none"
        stroke={node.color}
        strokeWidth="1"
        opacity="0.1"
      />
    </motion.g>
  );
}

function FlowParticle({ points, delay }) {
  const pathX = points.map((point) => point[0]);
  const pathY = points.map((point) => point[1]);

  return (
    <motion.circle
      cx={pathX[0]}
      cy={pathY[0]}
      r="5"
      fill="#ffffff"
      opacity="0.92"
      animate={{ cx: pathX, cy: pathY, opacity: [0.2, 1, 0.2] }}
      transition={{ duration: durationFromPoints(points), repeat: Infinity, repeatType: 'loop', ease: 'linear', delay }}
    />
  );
}

function durationFromPoints(points) {
  return Math.max(4, points.length * 0.9);
}

function workflowParticlePaths() {
  return particleAnimations;
}

function AdaptiveWorkflowCanvas() {
  const points = useMemo(() => {
    const positions = new Float32Array(180 * 3);
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 24;
      positions[i + 1] = (Math.random() - 0.5) * 14;
      positions[i + 2] = (Math.random() - 0.5) * 18;
    }
    return positions;
  }, []);

  const mesh = useRef();

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.02;
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.03;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={points.length / 3} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#7dd3fc" transparent opacity={0.25} depthWrite={false} />
    </points>
  );
}

function AdaptiveWorkflowSection() {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <div id="adaptive-evolution" className="rounded-[32px] border border-white/10 bg-[#07101f]/90 p-6 shadow-soft backdrop-blur-xl">
      <div className="grid gap-8">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-300">Adaptive Capability Evolution</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-white">Adaptive Capability Evolution</h2>
          <p className="max-w-2xl text-base leading-7 text-slate-300">The system continuously evaluates whether existing capabilities are sufficient to fulfill incoming requests. When limitations are identified, autonomous improvement workflows are triggered to expand system intelligence.</p>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#06131f]/95 p-4 sm:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.08),transparent_24%),radial-gradient(circle_at_90%_25%,rgba(168,85,247,0.1),transparent_20%)]" />
          <div className="absolute inset-0 opacity-70">
            <Canvas camera={{ position: [0, 0, 18], fov: 35 }} className="pointer-events-none">
              <color attach="background" args={["transparent"]} />
              <fog attach="fog" args={["#06131f", 6, 22]} />
              <ambientLight intensity={0.35} />
              <directionalLight position={[6, 6, 5]} intensity={0.5} color="#7dd3fc" />
              <AdaptiveWorkflowCanvas />
            </Canvas>
          </div>

          <div className="relative mx-auto max-w-[1720px] py-8">
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#081724]/90 p-4">
                <svg viewBox={`0 0 ${width} ${height}`} className="h-[520px] w-full">
                  <defs>
                    <linearGradient id="gradient-fast" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#4ade80" />
                    </linearGradient>
                    <linearGradient id="gradient-evo" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#d946ef" />
                      <stop offset="100%" stopColor="#f472b6" />
                    </linearGradient>
                  </defs>
                  {connections.map((connection) => (
                    <WorkflowLine key={connection.id} path={connection.path} color={connection.color} delay={connection.delay} />
                  ))}
                  {workflowParticlePaths().map((particle) => (
                    <FlowParticle key={particle.id} points={particle.points} delay={particle.delay} />
                  ))}
                  {nodes.map((node) => (
                    <WorkflowNode key={node.id} node={node} onHover={setHoveredNode} />
                  ))}
                </svg>
                {hoveredNode && (
                  <div
                    className="pointer-events-none absolute z-20 max-w-xs rounded-3xl border border-white/10 bg-[#020a13]/95 p-4 text-sm text-slate-100 shadow-soft backdrop-blur-xl"
                    style={{
                      left: `${(hoveredNode.x / width) * 100}%`,
                      top: `${(hoveredNode.y / height) * 100}%`,
                      transform: 'translate(-50%, -110%)',
                    }}
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">{hoveredNode.label}</p>
                    <p className="mt-2 leading-6 text-slate-300">{hoveredNode.tooltip}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:hidden space-y-6">
              {nodes.map((node, index) => (
                <motion.div
                  key={node.id}
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#081724]/95 p-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white" style={{ boxShadow: `0 0 28px ${node.color}` }}>
                      ●
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{node.label}</p>
                      <p className="mt-1 text-sm text-slate-400">{node.subtitle}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{node.tooltip}</p>
                  {index < nodes.length - 1 && <div className="absolute right-5 top-full h-8 w-[2px] bg-gradient-to-b from-transparent via-cyan-300/50 to-transparent" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdaptiveWorkflowSection;
