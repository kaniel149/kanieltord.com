import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/motion'

const techStack = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'AI / ML',
  'Supabase',
  'PostgreSQL',
  'Vercel',
  'Docker',
  'Tailwind CSS',
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
          Full-stack developer building
          <br />
          <span className="text-gradient">the future of solar.</span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-white/50 leading-relaxed mb-6 max-w-2xl"
        >
          I specialize in AI automation and solar technology. As the founder of Navitas,
          I built Israel's solar project management platform from the ground up -- handling
          everything from multi-inverter monitoring to automated licensing workflows.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-white/50 leading-relaxed mb-12 max-w-2xl"
        >
          Now I'm taking the AI-first approach global, building solar operations platforms
          for international markets and offering development and consulting services for
          businesses ready to leverage AI.
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
              className="px-4 py-2 text-sm font-medium rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
