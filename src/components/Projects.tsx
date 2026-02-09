import { motion } from 'framer-motion'
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
    gradient: 'from-sky-500/20 to-amber-500/20',
  },
  {
    title: 'Solaris Panama',
    outcome: 'AI scans satellite imagery, calculates solar ROI, and generates proposals automatically.',
    status: 'live' as const,
    url: 'https://platform-gray-eta.vercel.app',
    icon: Globe,
    gradient: 'from-emerald-500/20 to-cyan-500/20',
  },
  {
    title: 'Solar OS Marketing',
    outcome: 'Captures leads, nurtures prospects, and converts — without a salesperson.',
    status: 'live' as const,
    url: 'https://solar-os-website.vercel.app',
    icon: Monitor,
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
  },
  {
    title: 'Solari Argentina',
    outcome: 'Complete operations playbook for entering the Argentine solar market — academy, suppliers, licensing.',
    status: 'building' as const,
    icon: TrendingUp,
    gradient: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    title: 'HealthOS',
    outcome: 'Tracks my health data, syncs with Whoop, and optimizes my daily routine automatically.',
    status: 'building' as const,
    icon: Activity,
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Lavi Distribution',
    outcome: 'Driver routes, deliveries, signatures — a logistics company running on autopilot.',
    status: 'building' as const,
    icon: Truck,
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'LinkHub',
    outcome: 'A link-in-bio that AI agents can read, book through, and pay — not just humans.',
    status: 'building' as const,
    icon: Link2,
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
  {
    title: 'Project Dashboard',
    outcome: 'Every project, status, and deadline — visible in one command, from anywhere.',
    status: 'building' as const,
    icon: Layout,
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Morning Briefing',
    outcome: 'AI scans the news, writes a podcast, and sends it to my phone — while I sleep.',
    status: 'building' as const,
    icon: Radio,
    gradient: 'from-yellow-500/20 to-amber-500/20',
  },
]

const statusConfig = {
  live: { label: 'Live', dot: 'bg-emerald-400', text: 'text-emerald-400' },
  building: { label: 'Building', dot: 'bg-amber-400', text: 'text-amber-400' },
}

export default function Projects() {
  return (
    <section id="systems" className="py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            What I've Built
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
            Systems designed to work without me.
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Each one replaces a manual process, a full-time role,
            or an entire workflow I used to do myself.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {systems.map((system) => {
            const status = statusConfig[system.status]
            return (
              <motion.div
                key={system.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group"
              >
                <div className="h-full rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 p-6">
                  {/* Header: icon + status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${system.gradient} flex items-center justify-center`}>
                      <system.icon size={20} className="text-white/60" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                      <span className={`text-[11px] font-medium ${status.text}`}>
                        {status.label}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {system.title}
                  </h3>

                  {/* Outcome */}
                  <p className="text-sm text-white/40 leading-relaxed mb-4">
                    {system.outcome}
                  </p>

                  {/* Link */}
                  {'url' in system && system.url && (
                    <a
                      href={system.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary/70 hover:text-primary transition-colors"
                    >
                      Visit
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
