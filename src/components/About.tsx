import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/motion'

const techStack = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Python',
  'React Native',
  'Supabase',
  'PostgreSQL',
  'Docker',
  'Vercel',
  'Tailwind CSS',
  'AI / ML',
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-4">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            About
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl font-bold text-white mb-8"
        >
          Software engineer building at the
          <br />
          <span className="text-gradient">intersection of solar & AI.</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-white/50 leading-relaxed mb-6 max-w-2xl"
        >
          I founded Navitas, Israel's solar project management platform, and grew it into
          Solar OS — a SaaS CRM now used by 50+ solar companies. From multi-inverter
          monitoring to automated licensing, I build the systems that keep solar businesses running.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-white/50 leading-relaxed mb-12 max-w-2xl"
        >
          Now expanding internationally with AI-powered solar platforms in Panama and Argentina,
          alongside health tech (HealthOS), logistics systems, and AI automation tools.
          I work across the full stack — from React and TypeScript to Python pipelines,
          Supabase backends, and Vercel deployments.
        </motion.p>

        <motion.div variants={fadeInUp} className="mb-4">
          <span className="text-xs font-medium text-white/30 uppercase tracking-wider">
            Tech Stack
          </span>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {techStack.map((tech) => (
            <motion.span
              key={tech}
              variants={staggerItem}
              className="px-4 py-2 text-sm font-medium rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-primary hover:border-primary/30 transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
