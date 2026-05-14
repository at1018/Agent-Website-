import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Briefcase, Cloud, Code2, Cpu, FileText, GitBranch, Layers, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import WorkflowScene from '../components/WorkflowScene';
import EnterpriseDiagram from '../components/EnterpriseDiagram';
import HeroVisual from '../components/HeroVisual';
import AdaptiveWorkflowSection from '../components/AdaptiveWorkflowSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="relative overflow-hidden px-3 sm:px-6 pb-20 pt-[110px] sm:pt-[120px] lg:pt-[140px]">
      <div className="mx-auto max-w-7xl space-y-24">
        <HeroSection />
        <ProblemSection />
        <WorkflowSection />
        <GovernanceSection />
        <AgentFactorySection />
        <RoiSection />
        <UseCasesSection />
        <ArchitectureSection />
        <VisionSection />
        <ContactCtaSection />
      </div>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="rounded-[32px] border border-white/10 bg-[#08101f]/90 p-6 shadow-soft backdrop-blur-xl">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }} className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-300">
            Self-Evolving AI Infrastructure
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-white">AI That Expands Beyond Its Original Capabilities.</h1>
          <p className="max-w-3xl text-base sm:text-lg leading-7 text-slate-300">Traditional AI systems stop at predefined tools. Our infrastructure detects capability gaps, orchestrates autonomous development workflows, and continuously evolves through human-approved intelligence expansion.</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="/#workflow" className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">Watch Evolution <ArrowRight className="ml-3 h-4 w-4" /></a>
            <a href="/#architecture" className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10">Explore Architecture</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Adaptive Intelligence', description: 'Capability-aware reasoning across every request.' },
              { label: 'Autonomous Workflows', description: 'Smart orchestration from analysis to deployment.' },
              { label: 'Continuous Growth', description: 'Every gap becomes a new permanent capability.' },
              { label: 'Human Governance', description: 'Safe expansion with approvals at every stage.' },
            ].map((item) => (
              <div key={item.label} className="rounded-[28px] border border-white/10 bg-[#09131f]/95 p-5 shadow-soft backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }} className="relative">
          <HeroVisual />
          <div className="absolute left-6 top-6 rounded-3xl border border-cyan-300/10 bg-[#06121f]/90 px-4 py-3 shadow-soft backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Live intelligence</p>
            <p className="mt-2 text-sm text-white">Realtime capability growth metrics</p>
          </div>
          <div className="absolute right-6 bottom-6 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 shadow-soft backdrop-blur-xl">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 mr-2" />Active evolution engine
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="rounded-[32px] border border-white/10 bg-[#07101f]/90 p-6 shadow-soft backdrop-blur-xl">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Problem"
            title="AI Systems Are Still Static."
            description="Modern AI assistants can answer questions, but they cannot autonomously expand their capabilities. Every new workflow, integration, or feature still requires manual engineering effort, creating development bottlenecks for enterprises."
          />
          <p className="max-w-2xl text-sm leading-7 text-slate-300">Our platform redefines AI intelligence as infrastructure that learns from its limitations, automatically creates delivery workflows, and grows its own capability registry over time.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: 'Traditional AI', items: ['Fixed toolsets', 'Manual integrations', 'Static intelligence', 'Engineering-heavy updates'], accent: 'from-sky-500 to-cyan-300' },
            { title: 'Our Infrastructure', items: ['Expanding capabilities', 'Autonomous orchestration', 'Adaptive evolution', 'Capability-gap automation'], accent: 'from-fuchsia-500 to-violet-500' },
          ].map((panel) => (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
              className="rounded-[28px] border border-white/10 bg-[#081224]/95 p-6 shadow-soft backdrop-blur-xl"
            >
              <div className={`inline-flex rounded-full bg-gradient-to-r ${panel.accent} px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-white/90`}>{panel.title}</div>
              <ul className="mt-6 space-y-4">
                {panel.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-cyan-400/80" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  const steps = [
    'User Request',
    'Capability Analysis',
    'Gap Detected',
    'Tool Discovery',
    'Task Creation',
    'Human Approval',
    'Coding Agent',
    'Testing Agent',
    'Deployment',
    'Enhanced Capability',
  ];

  return (
    <section id="workflow" className="overflow-visible rounded-[32px] border border-white/10 bg-[#07101f]/90 p-6 shadow-soft backdrop-blur-xl">
      <div className="mx-auto max-w-[1400px] w-full overflow-visible">
        <SectionHeading
          eyebrow="Workflow"
          title="From Capability Gaps to Autonomous Evolution."
          description="Instead of failing when encountering unsupported requests, the system identifies capability gaps, creates improvement workflows, and orchestrates the lifecycle required to expand its intelligence."
        />
        <div className="mt-10 space-y-10">
          <AdaptiveWorkflowSection />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#08111f]/95 p-5 shadow-soft backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">Workflow timeline</p>
              <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-5">
                  {steps.map((step, index) => (
                    <div key={step} className="rounded-[28px] border border-white/10 bg-[#0b1320]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/15 font-semibold">{index + 1}</div>
                      <h3 className="mt-4 text-lg font-semibold text-white">{step}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{step === 'Gap Detected' ? 'The system flags missing capability and elevates it into the expansion pipeline.' : step === 'Enhanced Capability' ? 'The new skill is activated and future requests are handled automatically.' : 'A progressive phase in the autonomous capability lifecycle.'}</p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="w-full rounded-[28px] border border-white/10 bg-[#08111f]/95 p-6 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Evolution summary</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">The system does not simply execute tasks. It evolves its ability to solve future tasks.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">Each unsupported request becomes a data-driven improvement opportunity, with every workflow designed to expand the platform's capability registry permanently.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function GovernanceSection() {
  return (
    <section className="rounded-[32px] border border-white/10 bg-[#07101f]/90 p-6 shadow-soft backdrop-blur-xl">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Governance"
            title="Autonomy With Human Governance."
            description="No capability reaches production automatically. Every improvement workflow passes through human approval, validation, and testing layers, ensuring safe and controlled system evolution."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: 'Approval Gateways', detail: 'Review every proposed capability before deployment.' },
              { label: 'Audit Trail', detail: 'Track every request, task, and decision across the infrastructure.' },
              { label: 'Validation Checks', detail: 'Automated quality gates ensure safe production delivery.' },
              { label: 'Rollback Controls', detail: 'Revert new capabilities in a single click when necessary.' },
            ].map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/10 bg-[#08111f]/95 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">{item.label}</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] border border-cyan-300/10 bg-[#06111f]/90 p-6 shadow-soft backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Governance Dashboard</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Approve the next capability expansion.</h3>
            </div>
            <span className="rounded-full bg-cyan-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Human first</span>
          </div>
          <div className="mt-8 space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-[#081421]/95 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Pending request</p>
                  <p className="mt-2 text-xl font-semibold text-white">Add CRM data mapping capability</p>
                </div>
                <span className="rounded-full bg-rose-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-rose-300">Review required</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Source', value: 'User workflow', icon: Briefcase },
                  { label: 'Impact', value: 'Automated integrations', icon: Cloud },
                  { label: 'ETA', value: '12 min orchestration', icon: Layers },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-[#06111f]/90 p-4">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-cyan-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <button className="inline-flex items-center justify-center rounded-3xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">Approve capability</button>
              <button className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-rose-300/40 hover:bg-white/10">Reject and document</button>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-[#081524]/95 p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Validation status</p>
              <div className="mt-4 space-y-4">
                {[
                  { label: 'Requirement approval', progress: 92 },
                  { label: 'Code generation', progress: 78 },
                  { label: 'Testing readiness', progress: 64 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between text-sm text-slate-300"><span>{item.label}</span><span>{item.progress}%</span></div>
                    <div className="mt-2 h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AgentFactorySection() {
  const agents = [
    { title: 'Manager Agent', description: 'Breaks down missing capability requirements into a precise delivery plan.', accent: 'from-cyan-400 to-violet-500', icon: Briefcase },
    { title: 'Coding Agent', description: 'Generates implementation logic, integrations, and production-ready code.', accent: 'from-fuchsia-500 to-pink-500', icon: Code2 },
    { title: 'Testing Agent', description: 'Creates and validates automated tests for every new feature.', accent: 'from-sky-400 to-cyan-400', icon: ShieldCheck },
    { title: 'Deployment Agent', description: 'Activates new capability and updates the persistent capability registry.', accent: 'from-lime-400 to-cyan-400', icon: ArrowRight },
  ];

  return (
    <section className="rounded-[32px] border border-white/10 bg-[#07101f]/90 p-6 shadow-soft backdrop-blur-xl">
      <SectionHeading
        eyebrow="Agent Factory"
        title="The Autonomous Development Lifecycle."
        description="Specialized agents collaborate across the entire capability expansion pipeline, transforming unsupported requests into deployable functionality."
      />
      <div className="relative mt-10 grid gap-6 xl:grid-cols-4">
        <div className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/80 to-transparent xl:block" />
        {agents.map((agent, index) => (
          <motion.div
            key={agent.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#08101f]/95 p-6 shadow-soft backdrop-blur-xl"
          >
            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${agent.accent} text-white shadow-[0_0_30px_rgba(67,170,255,0.18)]`}>
              <agent.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{agent.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{agent.description}</p>
            <div className="absolute -right-4 top-1/2 hidden h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl xl:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function RoiSection() {
  const metrics = [
    { value: '5.8×', label: 'Faster AI deployment' },
    { value: '68%', label: 'Lower engineering overhead' },
    { value: '24/7', label: 'Continuous capability growth' },
    { value: '100%', label: 'Human governance control' },
  ];

  return (
    <section className="rounded-[32px] border border-white/10 bg-[#07101f]/90 p-6 shadow-soft backdrop-blur-xl">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Enterprise ROI"
            title="Reducing AI Engineering Bottlenecks."
            description="Enterprise AI systems require constant engineering effort to support new workflows, integrations, and evolving user requirements. Our infrastructure reduces operational overhead by orchestrating capability expansion workflows automatically."
          />
          <div className="rounded-[28px] border border-white/10 bg-[#08121f]/95 p-6 shadow-soft backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Operational leverage</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Every failed request becomes a future strength.</h3>
              </div>
              <div className="rounded-3xl bg-white/5 px-4 py-3 text-sm text-slate-300">Enterprise first</div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-[#06111e]/95 p-4">
                <p className="text-sm text-slate-400">Workflow automation readiness</p>
                <div className="mt-4 h-3 rounded-full bg-white/10">
                  <div className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: '88%' }} />
                </div>
                <p className="mt-3 text-sm text-slate-300">88% of capability expansion pathways are pre-defined for enterprise systems.</p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-[#06111e]/95 p-4">
                <p className="text-sm text-slate-400">Risk reduction index</p>
                <div className="mt-4 h-3 rounded-full bg-white/10">
                  <div className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" style={{ width: '74%' }} />
                </div>
                <p className="mt-3 text-sm text-slate-300">74% of scope gaps are surfaced with governance controls before deployment.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              whileHover={{ y: -6 }}
              className="rounded-[28px] border border-white/10 bg-[#08111f]/95 p-6 shadow-soft backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">{metric.label}</p>
              <p className="mt-4 text-4xl font-bold text-white">{metric.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const cases = [
    {
      title: 'Intelligent Data Operations',
      flow: ['Unsupported data format detected', 'Parser workflow generated', 'Capability permanently added'],
      icon: Cpu,
    },
    {
      title: 'Enterprise Workflow Automation',
      flow: ['Missing CRM integration identified', 'Integration pipeline orchestrated', 'Workflow deployed'],
      icon: GitBranch,
    },
    {
      title: 'Autonomous Reporting Systems',
      flow: ['Unsupported report request', 'Capability gap triggered', 'Reporting engine generated'],
      icon: FileText,
    },
  ];

  return (
    <section className="rounded-[32px] border border-white/10 bg-[#07101f]/90 p-6 shadow-soft backdrop-blur-xl">
      <SectionHeading
        eyebrow="Use Cases"
        title="Built for Adaptive Enterprise Workflows."
        description="Every enterprise process becomes a training signal for the infrastructure, converting unsupported tasks into permanent capabilities."
      />
      <div className="mt-10 grid gap-6 xl:grid-cols-3">
        {cases.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55 }}
            className="rounded-[28px] border border-white/10 bg-[#08111f]/95 p-6 shadow-soft backdrop-blur-xl"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-violet-500 text-white shadow-[0_0_30px_rgba(99,179,255,0.18)]">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
            <div className="mt-5 space-y-4">
              {item.flow.map((step) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  <p className="text-sm leading-6 text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ArchitectureSection() {
  return (
    <section id="architecture" className="rounded-[32px] border border-white/10 bg-[#07101f]/90 p-6 shadow-soft backdrop-blur-xl">
      <SectionHeading
        eyebrow="Architecture"
        title="Infrastructure Designed for Continuous Evolution."
        description="A modular platform built to detect gaps, orchestrate tasks, coordinate agents, validate outputs, and deploy new capabilities while preserving a persistent capability registry."
      />
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div className="rounded-[28px] border border-white/10 bg-[#08111f]/95 p-6 shadow-soft backdrop-blur-xl">
            {[
              'Capability Detection Layer',
              'Task Orchestration Layer',
              'Agent Collaboration Layer',
              'Testing & Validation Layer',
              'Deployment Layer',
              'Persistent Capability Registry',
            ].map((layer, index) => (
              <div key={layer} className="flex gap-4 border-b border-white/5 py-4 last:border-b-0">
                <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/15">{index + 1}</div>
                <div>
                  <p className="text-base font-semibold text-white">{layer}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{layer === 'Capability Detection Layer' ? 'Analyze every request against current capabilities to avoid wasted cycles.' : layer === 'Task Orchestration Layer' ? 'Convert gaps into executable workflows with clear ownership.' : layer === 'Agent Collaboration Layer' ? 'Specialized agents collaborate on design, build, and QA.' : layer === 'Testing & Validation Layer' ? 'Automated quality gates verify outputs before approval.' : layer === 'Deployment Layer' ? 'Seamless rollout and activation of new capabilities.' : 'Store every new skill in a secure, queryable capability graph.'}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {['Multi-Agent Orchestration', 'Dynamic Tool Registry', 'Modular Agent Architecture', 'Human Approval Pipelines', 'Scalable Workflow Infrastructure'].map((tag) => (
              <span key={tag} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">{tag}</span>
            ))}
          </div>
        </div>
        <EnterpriseDiagram />
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section id="vision" className="rounded-[32px] border border-white/10 bg-[#07101f]/90 p-6 shadow-soft backdrop-blur-xl">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Vision"
            title="Toward Self-Evolving Intelligence Infrastructure."
            description="The future of AI is not static assistants. It is adaptive infrastructure capable of identifying limitations, orchestrating improvement workflows, and continuously expanding intelligence over time."
          />
          <div className="rounded-[28px] border border-white/10 bg-[#08111f]/95 p-6 shadow-soft backdrop-blur-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Adaptive core', value: 'The platform learns from each unsupported request.' },
                { label: 'Enterprise scale', value: 'Designed for distributed teams, multi-agent ecosystems, and robust compliance.' },
              ].map((item) => (
                <div key={item.label} className="rounded-[24px] border border-white/10 bg-[#06101d]/95 p-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#06101e]/95 p-8 shadow-soft backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.14),_transparent_30%)]" />
          <div className="relative space-y-6 text-slate-300">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300">•</span>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Evolving sphere</p>
                <p className="text-xl font-semibold text-white">A cinematic network that grows with each new capability.</p>
              </div>
            </div>
            <div className="grid gap-4">
              {['Expanding network graph', 'Glowing capability registry', 'Autonomous adaptation loops'].map((item) => (
                <div key={item} className="rounded-[24px] border border-white/10 bg-[#08121e]/95 p-4">
                  <p className="text-sm text-slate-300">{item}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[24px] border border-white/10 bg-[#0b1524]/95 p-4 text-sm text-slate-300">
              <p>Investors see a platform that does not just respond—it grows, validates, and activates new enterprise skills with every interaction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCtaSection() {
  return (
    <section id="contact" className="rounded-[32px] border border-white/10 bg-[#07101f]/90 p-6 shadow-soft backdrop-blur-xl">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Connect"
            title="Build the Future of Adaptive AI Infrastructure."
            description="Partner with us to unlock autonomous capability expansion, reduce technical debt, and launch enterprise-grade AI that learns to grow."
          />
          <p className="max-w-3xl text-sm leading-7 text-slate-300">Request a demo, connect with our founders, or arrange a private briefing for your leadership team. This platform is built for enterprises that need AI to evolve safely and strategically.</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="mailto:hello@novamind.ai" className="inline-flex items-center justify-center rounded-3xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110">Request Demo</a>
            <a href="mailto:hello@novamind.ai" className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/10">Connect With Founders</a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { name: 'Atul Tiwari', role: 'Founder & CTO' },
            { name: 'Yogesh Kumar', role: 'Co-Founder & Product' },
          ].map((profile) => (
            <div key={profile.name} className="rounded-[28px] border border-white/10 bg-[#08101f]/95 p-6 shadow-soft backdrop-blur-xl">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-cyan-300 font-semibold">{profile.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}</div>
              <h3 className="mt-5 text-lg font-semibold text-white">{profile.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{profile.role}</p>
              <div className="mt-5 flex items-center gap-3 text-slate-300">
                <a href="#" className="transition hover:text-white">LinkedIn</a>
                <span className="text-slate-600">•</span>
                <a href="#" className="transition hover:text-white">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
