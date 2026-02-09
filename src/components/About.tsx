import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn } from '../lib/motion'

export default function About() {
  return (
    <section id="story" className="py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,280px] gap-12 lg:gap-16 items-start">
          {/* Photo - first on mobile */}
          <motion.div
            variants={scaleIn}
            className="order-first lg:order-last flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-primary/10">
                <img
                  src="/kaniel.jpg"
                  alt="Kaniel Tord"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="absolute -inset-3 rounded-full border border-primary/10 pointer-events-none" />
            </div>
          </motion.div>

          {/* Story */}
          <div className="order-last lg:order-first">
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                My Story
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-white mb-8"
            >
              From building a company
              <br />
              <span className="text-gradient">to building freedom.</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/50 leading-relaxed mb-6 max-w-2xl"
            >
              I started Navitas, a solar installation company in Israel.
              Built it from zero to ₪10M in revenue, expanded internationally,
              led teams of engineers and installers. But I was running faster
              than I was living.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/50 leading-relaxed mb-6 max-w-2xl"
            >
              After 2023 changed everything, my wife and I made a choice:
              we're going to design how we live — not just survive.
              We moved to Koh Phangan, Thailand, and I started building AI
              systems to replace every manual process in my businesses.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/50 leading-relaxed mb-10 max-w-2xl"
            >
              Now my software manages solar companies, writes proposals,
              monitors installations, and captures leads — while I'm
              at the beach with my kids.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="border-l-2 border-primary/30 pl-6"
            >
              <p className="text-white/70 text-lg italic">
                "Every system I build is designed to work without me.
                <br />
                That's the whole point."
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
