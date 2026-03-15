// File: frontend/src/components/common/Footer.jsx
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1E1B4B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="4" height="10" rx="1" fill="white" opacity="0.95"/>
                  <rect x="10" y="8" width="4" height="6" rx="1" fill="white" opacity="0.85"/>
                  <rect x="17" y="4" width="4" height="10" rx="1" fill="white" opacity="0.95"/>
                  <rect x="3" y="16" width="18" height="3" rx="1.5" fill="white" opacity="0.4"/>
                </svg>
              </div>
              <span className="font-bold text-lg">WeBuild</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Free AI-powered resume builder, portfolio generator & cover letter creator for freshers and professionals in India.
            </p>
            <p className="text-white/30 text-xs">🔒 We never sell your data</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80">Product</h4>
            <ul className="space-y-2">
              {[
                { label: 'Resume Builder', to: '/resume' },
                { label: 'CV Builder', to: '/cv' },
                { label: 'Portfolio Generator', to: '/portfolio' },
                { label: 'Cover Letter', to: '/cover-letter' },
                { label: 'ATS Checker', to: '/ats-checker' },
                { label: 'Smart Convert', to: '/smart-convert' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-white/50 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80">Resources</h4>
            <ul className="space-y-2">
              {[
                'Resume Tips',
                'ATS Guide',
                'Interview Prep',
                'Career Blog',
                'Templates',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-white/80">Company</h4>
            <ul className="space-y-2">
              {[
                'About Us',
                'Privacy Policy',
                'Terms of Service',
                'Contact',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                href="https://github.com/gajulayashwanth/webuild"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub (Open Source)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            WeBuild © 2025 • Free Forever • webuild.site
          </p>
          <p className="text-white/30 text-sm">
            MIT License • Open Source
          </p>
        </div>
      </div>
    </footer>
  )
}