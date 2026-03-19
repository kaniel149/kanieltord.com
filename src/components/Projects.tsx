import { motion } from 'framer-motion'
import { useRef } from 'react'
import type { MouseEvent } from 'react'
import {
  Sun, Globe, Monitor, TrendingUp, Activity,
  Truck, Link2, Map, GraduationCap, BookOpen,
} from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/motion'

const systems = [
  // — Live projects first —
  {
    title: 'Solar Intelligence',
    outcome: 'AI maps every rooftop in a region, detects solar potential from satellite imagery, generates proposals in 3 languages, and feeds leads straight into CRM.',
    status: 'live' as const,
    icon: Map,
    category: 'Solar',
    metric: '27,800 buildings mapped · 3 regions · $0 ad spend',
  },
  {
    title: 'Solaris CRM',
    outcome: 'One codebase runs 7 solar companies in 4 countries. Each gets their own brand, pipeline, and data — deployed in minutes, not months.',
    status: 'live' as const,
    icon: Sun,
    category: 'Solar',
    metric: '7 instances · 4 countries · multi-tenant',
  },
  {
    title: 'Solaris Panama',
    outcome: 'AI scans satellite imagery, calculates ROI per rooftop, and generates investor-ready proposals — built for the Panama solar market from scratch.',
    status: 'live' as const,
    icon: Globe,
    category: 'Solar',
    metric: 'Market entry in 3 weeks',
  },
  {
    title: 'Solar OS Website',
    outcome: 'Full marketing machine — captures leads, runs email nurture sequences, has an ROI calculator, blog, and converts visitors to customers without a salesperson.',
    status: 'live' as const,
    icon: Monitor,
    category: 'Marketing',
    metric: 'Lead capture → nurture → convert · zero manual',
  },
  {
    title: 'Megged Academy',
    outcome: 'Turned a therapist\'s methodology into a scalable platform — 69 video workshops, 5 AI coaching bots that give personalized guidance, study paths that adapt.',
    status: 'live' as const,
    icon: GraduationCap,
    category: 'Education',
    metric: '69 lessons · 5 AI bots · personalized paths',
  },
  {
    title: 'Megged Course',
    outcome: 'A couples therapy program turned into a product — video lessons, AI-powered exercises, progress tracking, milestones, and a system that scales without the therapist.',
    status: 'live' as const,
    icon: BookOpen,
    category: 'Education',
    metric: '30 exercises · milestone system · Stripe payments',
  },
  // — Building projects —
  {
    title: 'Solaris Argentina',
    outcome: 'Entering a new country with AI — roof scanner mapped 1,251 buildings in Buenos Aires, auto-generates bilingual proposals, includes legal templates and market research.',
    status: 'building' as const,
    icon: TrendingUp,
    category: 'Solar',
    metric: '1,251 buildings · ES/HE/EN',
  },
  {
    title: 'HealthOS',
    outcome: 'Personal operating system — syncs biometric data from Whoop, tracks recovery patterns, and uses AI to optimize daily decisions based on real data.',
    status: 'building' as const,
    icon: Activity,
    category: 'Health',
  },
  {
    title: 'Lavi Distribution',
    outcome: 'Replacing a logistics manager with software — driver route optimization, delivery tracking, digital signatures, all on autopilot.',
    status: 'building' as const,
    icon: Truck,
    category: 'Logistics',
  },
  {
    title: 'LinkHub',
    outcome: 'A link-in-bio page where AI agents — not just humans — can discover services, book meetings, and make payments.',
    status: 'building' as const,
    icon: Link2,
    category: 'AI',
  },
]

const statusConfig = {
  live: { label: 'Live', dot: 'bg-emerald-400', text: 'text-emerald-400/70' },
  building: { label: 'Building', dot: 'bg-amber-400', text: 'text-amber-400/70' },
}

function ProjectCard({ system }: { system: typeof systems[0] }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const status = statusConfig[system.status]

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    cardRef.current.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateZ(10px)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
  }

  return (
    <motion.div variants={staggerItem} className="group">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="h-full rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] hover:bg-white/[0.04] p-6 will-change-transform"
        style={{ transition: 'transform 0.15s ease-out, background-color 0.5s, border-color 0.5s' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:border-primary/20 group-hover:bg-primary/[0.05] transition-all duration-500">
            <system.icon size={18} className="text-white/30 group-hover:text-primary/60 transition-colors duration-500" />
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${status.dot} ${system.status === 'live' ? 'animate-pulse-slow' : ''}`} />
              <span className={`text-[11px] font-medium ${status.text}`}>
                {status.label}
              </span>
            </div>
            {'category' in system && system.category && (
              <span className="text-[10px] font-medium text-white/15 tracking-[0.1em] uppercase">
                {system.category}
              </span>
            )}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white/80 mb-2 group-hover:text-white transition-colors duration-300">
          {system.title}
        </h3>

        <p className="text-sm text-white/25 leading-relaxed mb-4 group-hover:text-white/35 transition-colors duration-300">
          {system.outcome}
        </p>

        {'metric' in system && system.metric && (
          <span className="inline-flex items-center gap-1.5 text-xs text-primary/40 font-medium tracking-wide">
            {system.metric}
          </span>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="systems" className="py-32 px-6 relative">
      {/* Section divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl section-line"
        style={{ transformOrigin: '50%' }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-primary/70 text-[11px] font-medium tracking-[0.2em] uppercase">
            What I've Built
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 leading-tight">
            Not demos.
            <br className="hidden sm:block" />
            <span className="text-gradient"> Real businesses.</span>
          </h2>
          <p className="text-white/25 max-w-lg mx-auto text-sm sm:text-base">
            Every system here serves real customers, generates real revenue,
            or runs a real operation. Built with AI — not for show.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {systems.map((system) => (
            <ProjectCard key={system.title} system={system} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
