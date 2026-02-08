import { motion } from 'framer-motion'
import { Sun, Bot, Globe } from 'lucide-react'
import GlassCard from './ui/GlassCard'
import Badge from './ui/Badge'
import Button from './ui/Button'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/motion'

const services = [
  {
    icon: Sun,
    title: 'Solar CRM Platform',
    description:
      'All-in-one solar project management. Multi-inverter monitoring (SolarEdge, Huawei, Sungrow), licensing automation, financial analytics, and AI-powered insights.',
    badge: 'SaaS',
    badgeVariant: 'primary' as const,
    cta: 'Learn More',
    ctaHref: '#projects',
    gradient: 'from-primary/20 to-primary/0',
    iconColor: 'text-primary',
  },
  {
    icon: Bot,
    title: 'AI Automation & Development',
    description:
      'Custom AI systems for businesses. Chatbots, workflow automation, CRM development, voice cloning, and digital twin creation.',
    badge: 'Services',
    badgeVariant: 'secondary' as const,
    cta: 'Get Quote',
    ctaHref: '#contact',
    gradient: 'from-secondary/20 to-secondary/0',
    iconColor: 'text-secondary',
  },
  {
    icon: Globe,
    title: 'Solar Consulting',
    description:
      'AI-first solar market entry strategy. Feasibility studies, regulatory analysis, technology stack recommendations, and operational setup for new markets.',
    badge: 'Consulting',
    badgeVariant: 'primary' as const,
    cta: 'Book a Call',
    ctaHref: '#contact',
    gradient: 'from-primary/10 via-secondary/10 to-transparent',
    iconColor: 'text-primary',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
            What I build
          </h2>
          <p className="text-white/40 max-w-lg mx-auto">
            End-to-end solutions combining AI, solar technology, and modern web development.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={staggerItem}>
              <GlassCard className="p-8 h-full flex flex-col" glow="primary">
                <div className={`relative mb-6`}>
                  <div className={`absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} blur-xl`} />
                  <div className={`relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${service.iconColor}`}>
                    <service.icon size={22} />
                  </div>
                </div>

                <div className="mb-4">
                  <Badge variant={service.badgeVariant}>{service.badge}</Badge>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                <Button href={service.ctaHref} variant="ghost" size="sm" className="self-start">
                  {service.cta}
                  <span className="text-white/30">&rarr;</span>
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
