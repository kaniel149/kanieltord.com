import { motion } from 'framer-motion'
import { ExternalLink, Zap, Globe, Mic, Truck } from 'lucide-react'
import GlassCard from './ui/GlassCard'
import Badge from './ui/Badge'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/motion'

const projects = [
  {
    title: 'Navitas CRM',
    description:
      'Solar project management platform powering installations across Israel. Multi-inverter monitoring, automated licensing workflows, financial analytics, and AI-powered operational insights.',
    tags: ['React', 'TypeScript', 'Supabase', 'Vercel'],
    icon: Zap,
    link: 'https://crm.navitas.co.il',
    linkLabel: 'crm.navitas.co.il',
    status: null,
    gradient: 'from-primary/30 via-primary/10 to-transparent',
  },
  {
    title: 'Solaris Panama',
    description:
      'AI-first commercial rooftop solar platform for the Panama market. Automated roof scanning, lead generation, system design, and regulatory compliance tools.',
    tags: ['React', 'AI', 'Solar Design'],
    icon: Globe,
    link: null,
    linkLabel: null,
    status: 'In Development',
    gradient: 'from-secondary/30 via-secondary/10 to-transparent',
  },
  {
    title: 'AI Voice Cloning Pipeline',
    description:
      'Professional voice cloning service using Demucs vocal isolation and ElevenLabs for speakers and thought leaders. Full audio processing and quality pipeline.',
    tags: ['Python', 'AI', 'ElevenLabs'],
    icon: Mic,
    link: null,
    linkLabel: null,
    status: 'Active',
    gradient: 'from-pink-500/30 via-pink-500/10 to-transparent',
  },
  {
    title: 'Distribution Management System',
    description:
      'Full-stack PWA for managing delivery routes, drivers, and real-time logistics. Mobile-first driver interface with manager dashboard and analytics.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    icon: Truck,
    link: null,
    linkLabel: null,
    status: null,
    gradient: 'from-amber-500/30 via-amber-500/10 to-transparent',
  },
]

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
            Featured projects
          </h2>
          <p className="text-white/40 max-w-lg mx-auto">
            A selection of platforms and systems I've built and shipped.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={staggerItem}>
              <GlassCard className="p-8 h-full flex flex-col" glow="primary">
                <div className="relative mb-6">
                  <div className={`absolute -inset-4 bg-gradient-to-br ${project.gradient} rounded-2xl blur-2xl opacity-50`} />
                  <div className="relative w-full h-40 rounded-xl bg-surface-50 border border-white/5 flex items-center justify-center overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
                    <project.icon size={48} className="relative text-white/20" />
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  {project.status && (
                    <Badge variant="status">{project.status}</Badge>
                  )}
                </div>

                <p className="text-white/40 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary/80 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} />
                    {project.linkLabel}
                  </a>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
