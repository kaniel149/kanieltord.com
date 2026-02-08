export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <span className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Kaniel Tord. KANIEL TORD LLC.
          </span>
        </div>

        <span className="text-sm text-white/20">
          Based in the world. Building globally.
        </span>
      </div>
    </footer>
  )
}
