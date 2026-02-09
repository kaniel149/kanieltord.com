import { motion } from 'framer-motion'
import {
  Sun, Globe, Monitor, TrendingUp, Activity,
  Truck, Link2, Layout, Radio, ArrowUpRight,
} from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/motion'

const projects = [
  {
    title: 'Solar OS',
    subtitle: 'SaaS CRM for Solar Companies',
    description:
      'End-to-end solar project management — multi-inverter monitoring, licensing automation, AI proposals, Stripe payments, and 6-step onboarding wizard.',
    tags: ['React', 'TypeScript', 'Supabase', 'Stripe', 'Vercel'],
    status: 'live' as const,
    url: 'https://crm.navitas.co.il',
    icon: Sun,
    gradient: 'from-sky-500/20 to-amber-500/20',
    highlight: '34 pages · 100+ components',
  },
  {
    title: 'Solaris Panama',
    subtitle: 'AI-Powered Solar Analysis',
    description:
      'Commercial rooftop solar platform with AI roof scanner, solar calculator (IRR/NPV/LCOE), and Claude-powered proposal generator with satellite mapping.',
    tags: ['React', 'Mapbox', 'Claude AI', 'PVWatts'],
    status: 'live' as const,
    url: 'https://platform-gray-eta.vercel.app',
    icon: Globe,
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    highlight: '14 pages · 3 AI tools',
  },
  {
    title: 'Solar OS Website',
    subtitle: 'Marketing & Lead Funnel',
    description:
      'CRO-optimized Hebrew marketing site with 3-step demo funnel, lead capture to Supabase + WhatsApp notifications, and Stripe checkout.',
    tags: ['React', 'CRO', 'Supabase', 'Vercel'],
    status: 'live' as const,
    url: 'https://solar-os-website.vercel.app',
    icon: Monitor,
    gradient: 'from-violet-500/20 to-fuchsia-500/20',
    highlight: '5 pages · Lead funnel',
  },
  {
    title: 'Solari Argentina',
    subtitle: 'Solar Operations Platform',
    description:
      'Bilingual partner ops guide — solar academy (15 topics), supplier directory, utility guides, licensing tracker, and AI proposal tool for the Argentine market.',
    tags: ['React', 'i18n', 'Recharts', 'TypeScript'],
    status: 'dev' as const,
    icon: TrendingUp,
    gradient: 'from-blue-500/20 to-indigo-500/20',
    highlight: '15 routes · 96 components',
  },
  {
    title: 'HealthOS',
    subtitle: 'Personal Health Platform',
    description:
      'React Native health app with Whoop integration, nutrition tracking, AI health assistant, and wearable sync across 16 screens.',
    tags: ['React Native', 'Expo', 'Express', 'Whoop API'],
    status: 'dev' as const,
    icon: Activity,
    gradient: 'from-green-500/20 to-emerald-500/20',
    highlight: '16 screens · Whoop sync',
  },
  {
    title: 'Lavi Distribution',
    subtitle: 'Logistics Management',
    description:
      'Full-stack distribution PWA with driver mobile flow (signature capture), manager dashboard, real-time Socket.io tracking, and Docker deployment.',
    tags: ['React', 'Express', 'PostgreSQL', 'Docker'],
    status: 'dev' as const,
    icon: Truck,
    gradient: 'from-orange-500/20 to-red-500/20',
    highlight: 'Docker · Real-time · PWA',
  },
  {
    title: 'LinkHub',
    subtitle: 'Link-in-Bio Platform',
    description:
      'Premium link-in-bio with Apple-inspired dark design, analytics dashboard, custom themes, service cards, and booking system.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    status: 'dev' as const,
    icon: Link2,
    gradient: 'from-pink-500/20 to-rose-500/20',
    highlight: '34 routes · Apple design',
  },
  {
    title: 'Project Dashboard',
    subtitle: 'Developer Productivity',
    description:
      'Electron + Web app with 4 view modes (List/Grid/Kanban/GitGraph), ⌘K command palette, Vim-style navigation, and GitHub heatmap.',
    tags: ['React', 'Electron', 'Zustand', 'dnd-kit'],
    status: 'dev' as const,
    icon: Layout,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    highlight: '4 views · ⌘K palette',
  },
  {
    title: 'Morning Briefing',
    subtitle: 'AI Daily Podcast',
    description:
      'Automated daily briefing — AI news from Reddit & HackerNews → NotebookLM podcast generation → WhatsApp + Telegram delivery.',
    tags: ['Python', 'NotebookLM', 'ElevenLabs', 'WhatsApp'],
    status: 'dev' as const,
    icon: Radio,
    gradient: 'from-yellow-500/20 to-amber-500/20',
    highlight: 'Daily automation',
  },
]

const statusStyles = {
  live: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  dev: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
}

const statusLabels = {
  live: 'Live',
  dev: 'In Dev',
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
            What I've been building
          </h2>
          <p className="text-white/40 max-w-lg mx-auto">
            A selection of projects across solar energy, AI, and software platforms.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 overflow-hidden">
                {/* Gradient header with icon */}
                <div className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <project.icon size={32} className="text-white/40" />

                  {/* Status badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full border ${statusStyles[project.status]}`}>
                      {statusLabels[project.status]}
                    </span>
                  </div>

                  {/* External link */}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all"
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary/80 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-white/40 leading-relaxed mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <p className="text-xs text-white/25 mb-4">
                    {project.highlight}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] rounded-full bg-white/5 text-white/40 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
