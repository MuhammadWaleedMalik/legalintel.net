import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-slate-400 pt-20 pb-10 border-t border-white/5">
      
      {/* MAIN GRID */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">

        {/* COLUMN 1 */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Daily newsfeed</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Panoramic</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Research hubs</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Learn</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">In-depth</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Lexy Find</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Scanner</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Contracts & clauses</li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Lexology Index</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Find an expert</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Reports</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Research methodology</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Submissions</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">FAQ</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Instruct Counsel</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Client Choice 2025</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">More</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Lexy AI</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">About us</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Legal Influencers</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Firms</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Events</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Popular</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Lexology Academic</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Terms of use</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Cookies</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Disclaimer</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Privacy policy</li>
          </ul>
        </div>

        {/* COLUMN 5 */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Help centre</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Contact</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">RSS feeds</li>
            <li className="hover:text-accent-blue cursor-pointer transition-colors">Submissions</li>
          </ul>
        </div>

        {/* COLUMN 6 (RIGHT SIDE) */}
        <div className="flex flex-col gap-8">
          <Link
            href="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-white to-accent-blue bg-clip-text text-transparent"
          >
            {siteConfig.name}
          </Link>

          {/* Social */}
          <div className="flex flex-col gap-4 text-sm font-medium">
            <a href={siteConfig.links.twitter} target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">✕</span> Follow on X
            </a>
            <a href={siteConfig.links.linkedin} target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">in</span> Follow on LinkedIn
            </a>
          </div>

          {/* Login/Register */}
          <div className="flex gap-4 text-sm mt-2">
            <Link href="/login" className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">Login</Link>
            <Link href="/signup" className="px-4 py-2 rounded-lg bg-accent-blue text-white font-bold hover:bg-blue-600 transition-colors">Sign Up</Link>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="container mx-auto px-6 mt-16 border-t border-white/10 pt-8 text-xs text-center text-slate-500 tracking-widest uppercase">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. Premium Legal Intelligence Platform.
        </p>
      </div>
    </footer>

  );
}