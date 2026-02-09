import { motion } from 'framer-motion'
import { Blocks, Bot, Sun, ArrowRight } from 'lucide-react'
import GlassCard from './ui/GlassCard'
import Button from './ui/Button'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/motion'

const services = [
  {
    icon: Blocks,
    title: 'SaaS Development',
    description:
      'Custom platforms that run your business — from database and auth to payments, dashboards, and deployment. You describe the workflow, I build the system.',
    gradient: 'from-primary/20 to-primary/0',
    iconColor: 'text-primary',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description:
      'Turn manual processes into automated ones — chatbots, document processing, voice cloning, smart pipelines. Less busywork, more freedom.',
    gradient: 'from-secondary/20 to-secondary/0',
    iconColor: 'text-secondary',
  },
  {
    icon: Sun,
    title: 'Solar Technology',
    description:
      'Full-stack solar business systems — CRM setup, inverter monitoring, energy analysis, licensing automation. Everything a solar company needs to scale.',
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
            Work With Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
            I help founders build systems
            <br />
            <span className="text-gradient">that set them free.</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto">
            You shouldn't be the bottleneck in your own business.
            Let's build the software that replaces the work you hate.
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
                <div className="relative mb-6">
                  <div className={`absolute inset-0 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} blur-xl`} />
                  <div className={`relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${service.iconColor}`}>
                    <service.icon size={22} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                <Button href="#contact" variant="ghost" size="sm" className="self-start">
                  Let's Talk
                  <ArrowRight size={14} className="text-white/30" />
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
