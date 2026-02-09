import { Linkedin, Github, Twitter, Mail, MessageCircle } from 'lucide-react'

const socials = [
  { icon: Linkedin, href: 'https://linkedin.com/in/kaniel-tordjman', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/kaniel149', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/kanieltord', label: 'X' },
  { icon: Mail, href: 'mailto:k@kanielt.com', label: 'Email' },
  { icon: MessageCircle, href: 'https://wa.me/972502213948', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        {/* Social links */}
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>

        {/* Info */}
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Kaniel Tord. KANIEL TORD LLC.
          </span>
          <span className="text-sm text-white/20">
            Building from Koh Phangan, Thailand.
          </span>
        </div>
      </div>
    </footer>
  )
}
