import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import Button from './ui/Button'
import { blurFadeIn, staggerContainer } from '../lib/motion'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      {/* Section divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl section-line"
        style={{ transformOrigin: '50%' }}
      />

      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <motion.span
            variants={blurFadeIn}
            className="text-primary/70 text-[11px] font-medium tracking-[0.2em] uppercase"
          >
            Contact
          </motion.span>

          {/* Line-by-line headline reveal */}
          <div className="mt-4 mb-6">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%', filter: 'blur(8px)' }}
                whileInView={{ y: '0%', filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
              >
                Ready to build
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: '100%', filter: 'blur(8px)' }}
                whileInView={{ y: '0%', filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              >
                <span className="text-gradient">your system?</span>
              </motion.h2>
            </div>
          </div>

          <motion.p
            variants={blurFadeIn}
            className="text-white/25 text-base sm:text-lg mb-4"
          >
            Tell me what's eating your time. I'll show you how to automate it.
          </motion.p>

          <motion.p
            variants={blurFadeIn}
            className="text-white/45 text-base mb-10"
          >
            k@kanielt.com
          </motion.p>

          <motion.div
            variants={blurFadeIn}
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
