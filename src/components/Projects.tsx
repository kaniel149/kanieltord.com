import { motion } from 'framer-motion'
import { useRef } from 'react'
import type { MouseEvent } from 'react'
import {
  Sun, Globe, Monitor, TrendingUp, Activity,
  Truck, Link2, Layout, Radio, ArrowUpRight,
} from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/motion'

const systems = [
  {
    title: 'Solar OS',
    outcome: 'Runs 50+ solar companies — projects, monitoring, licensing, payments — all automated.',
    status: 'live' as const,
    url: 'https://crm.navitas.co.il',
    icon: Sun,
  },
  {
    title: 'Solaris Panama',
    outcome: 'AI scans satellite imagery, calculates solar ROI, and generates proposals automatically.',
    status: 'live' as const,
    url: 'https://platform-gray-eta.vercel.app',
    icon: Globe,
  },
  {
    title: 'Solar OS Marketing',
    outcome: 'Captures leads, nurtures prospects, and converts — without a salesperson.',
    status: 'live' as const,
    url: 'https://solar-os-website.vercel.app',
    icon: Monitor,
  },
  {
    title: 'Solari Argentina',
    outcome: 'Complete operations playbook for entering the Argentine solar market — academy, suppliers, licensing.',
    status: 'building' as const,
    icon: TrendingUp,
  },
  {
    title: 'HealthOS',
    outcome: 'Tracks my health data, syncs with Whoop, and optimizes my daily routine automatically.',
    status: 'building' as const,
    icon: Activity,
  },
  {
    title: 'Lavi Distribution',
    outcome: 'Driver routes, deliveries, signatures — a logistics company running on autopilot.',
    status: 'building' as const,
    icon: Truck,
  },
  {
    title: 'LinkHub',
    outcome: 'A link-in-bio that AI agents can read, book through, and pay — not just humans.',
    status: 'building' as const,
    icon: Link2,
  },
  {
    title: 'Project Dashboard',
    outcome: 'Every project, status, and deadline — visible in one command, from anywhere.',
    status: 'building' as const,
    icon: Layout,
  },
  {
    title: 'Morning Briefing',
    outcome: 'AI scans the news, writes a podcast, and sends it to my phone — while I sleep.',
    status: 'building' as const,
    icon: Radio,
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
          <div className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${status.dot} ${system.status === 'live' ? 'animate-pulse-slow' : ''}`} />
            <span className={`text-[11px] font-medium ${status.text}`}>
              {status.label}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white/80 mb-2 group-hover:text-white transition-colors duration-300">
          {system.title}
        </h3>

        <p className="text-sm text-white/25 leading-relaxed mb-4 group-hover:text-white/35 transition-colors duration-300">
          {system.outcome}
        </p>

        {'url' in system && system.url && (
          <a
            href={system.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-white/15 hover:text-primary/70 transition-colors duration-300"
          >
            Visit
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
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
            Systems designed to work
            <br className="hidden sm:block" />
            <span className="text-gradient"> without me.</span>
          </h2>
          <p className="text-white/25 max-w-lg mx-auto text-sm sm:text-base">
            Each one replaces a manual process, a full-time role,
            or an entire workflow I used to do myself.
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
