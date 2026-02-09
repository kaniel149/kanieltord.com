import { motion } from 'framer-motion'
import { Blocks, Bot, Sun, ArrowRight } from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/motion'

const services = [
  {
    icon: Blocks,
    title: 'SaaS Development',
    description:
      'Custom platforms that run your business — from database and auth to payments, dashboards, and deployment. You describe the workflow, I build the system.',
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description:
      'Turn manual processes into automated ones — chatbots, document processing, voice cloning, smart pipelines. Less busywork, more freedom.',
  },
  {
    icon: Sun,
    title: 'Solar Technology',
    description:
      'Full-stack solar business systems — CRM setup, inverter monitoring, energy analysis, licensing automation. Everything a solar company needs to scale.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 relative">
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
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="text-primary/70 text-[11px] font-medium tracking-[0.2em] uppercase">
            Work With Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 leading-tight">
            I help founders build systems
            <br />
            <span className="text-gradient">that set them free.</span>
          </h2>
          <p className="text-white/25 max-w-lg mx-auto text-sm sm:text-base">
            You shouldn't be the bottleneck in your own business.
            Let's build the software that replaces the work you hate.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={staggerItem} className="group">
              <div className="h-full rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-500 p-8 flex flex-col">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:border-primary/20 group-hover:bg-primary/[0.05] transition-all duration-500">
                    <service.icon size={22} className="text-white/30 group-hover:text-primary/60 transition-colors duration-500" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white/80 mb-3 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-white/25 text-sm leading-relaxed mb-8 flex-1 group-hover:text-white/35 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="self-start">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm text-white/25 hover:text-white/70 transition-colors duration-300 group/btn"
                  >
                    Let's Talk
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
