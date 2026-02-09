import { motion } from 'framer-motion'
import { Linkedin, Github, Twitter, Mail, MessageCircle } from 'lucide-react'
import { staggerContainer, blurFadeIn } from '../lib/motion'

const socials = [
  { icon: Linkedin, href: 'https://linkedin.com/in/kaniel-tordjman', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/kaniel149', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/kanieltord', label: 'X' },
  { icon: Mail, href: 'mailto:k@kanielt.com', label: 'Email' },
  { icon: MessageCircle, href: 'https://wa.me/972502213948', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/[0.03]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col items-center gap-8"
      >
        <motion.div variants={blurFadeIn} className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-white/20 hover:text-white/60 hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-500"
            >
              <social.icon size={15} />
            </a>
          ))}
        </motion.div>

        <motion.div variants={blurFadeIn} className="flex flex-col items-center gap-2 text-center">
          <span className="text-[11px] text-white/15 tracking-wide">
            &copy; {new Date().getFullYear()} Kaniel Tord. KANIEL TORD LLC.
          </span>
          <span className="text-[11px] text-white/10 tracking-wide">
            Building from Koh Phangan, Thailand.
          </span>
        </motion.div>
      </motion.div>
    </footer>
  )
}
