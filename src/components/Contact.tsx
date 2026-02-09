import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import Button from './ui/Button'
import { fadeInUp, staggerContainer } from '../lib/motion'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-primary text-sm font-medium tracking-wider uppercase"
          >
            Contact
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6"
          >
            Ready to build
            <br />
            <span className="text-gradient">your system?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/40 text-lg mb-4"
          >
            Tell me what's eating your time. I'll show you how to automate it.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-white/60 text-base mb-10"
          >
            k@kanielt.com
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              href="mailto:k@kanielt.com"
              variant="primary"
              size="lg"
              icon={<Mail size={18} />}
            >
              Send Email
            </Button>

            <Button
              href="https://wa.me/972502213948"
              variant="secondary"
              size="lg"
              icon={<MessageCircle size={18} />}
            >
              WhatsApp
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
