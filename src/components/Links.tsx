import { motion } from 'framer-motion'
import { Linkedin, Github, Twitter, Mail, MessageCircle, Sun } from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem } from '../lib/motion'

const links = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kaniel-tordjman',
    icon: Linkedin,
    color: 'hover:border-blue-400/30 hover:text-blue-400',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kaniel149',
    icon: Github,
    color: 'hover:border-white/30 hover:text-white',
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/kanieltord',
    icon: Twitter,
    color: 'hover:border-sky-400/30 hover:text-sky-400',
  },
  {
    label: 'Email',
    href: 'mailto:k@kanielt.com',
    icon: Mail,
    color: 'hover:border-primary/30 hover:text-primary',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/972502213948',
    icon: MessageCircle,
    color: 'hover:border-green-400/30 hover:text-green-400',
  },
  {
    label: 'Solar OS',
    href: 'https://crm.navitas.co.il',
    icon: Sun,
    color: 'hover:border-amber-400/30 hover:text-amber-400',
  },
]

export default function Links() {
  return (
    <section id="links" className="py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-2xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
            Find me online
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              variants={staggerItem}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                flex items-center gap-4 px-6 py-4 rounded-xl
                bg-white/5 border border-white/10
                text-white/60 transition-all duration-300
                hover:bg-white/[0.08]
                ${link.color}
              `}
            >
              <link.icon size={20} />
              <span className="text-sm font-medium">{link.label}</span>
              <span className="ml-auto text-white/20">&rarr;</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
