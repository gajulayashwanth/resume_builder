// File: src/components/landing/ATSCallout.jsx

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, AlertTriangle, CheckCircle2, XCircle, Zap } from 'lucide-react'

export default function ATSCallout() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#0F0E1A' }}>

      {/* Background orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.2), transparent)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.3), transparent)' }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '44px 44px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Stats + Text */}
          <div>
            {/* Warning badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
              style={{
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)',
                color: '#FCA5A5',
                fontFamily: 'var(--font-ui)'
              }}
            >
              <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
              Did you know?
            </motion.div>

            {/* Big stat */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(4rem, 10vw, 7rem)',
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                marginBottom: '0.5rem',
                backgroundImage: 'linear-gradient(135deg, #EF4444, #F97316)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                75%
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: 700,
                color: 'white',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
                lineHeight: 1.2
              }}
            >
              of resumes are rejected by robots{' '}
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>
                before a human ever reads them.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.75,
                marginBottom: '2rem',
                maxWidth: '28rem'
              }}
            >
              Applicant Tracking Systems (ATS) filter out resumes that don't match
              their criteria. WeBuild's ATS Checker tells you exactly what to fix
              before you apply.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
                <Link
                  to="/ats-checker"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-sm font-semibold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #EF4444, #F97316)',
                    fontFamily: 'var(--font-ui)',
                    boxShadow: '0 8px 32px rgba(239,68,68,0.4)',
                    letterSpacing: '0.01em'
                  }}
                >
                  <Zap className="w-4 h-4" />
                  Check My ATS Score — Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: ATS Score Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, #EF4444, #4F46E5)', transform: 'scale(0.9) translateY(12px)' }} />

            {/* Score card */}
            <div className="relative rounded-3xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}>

              {/* Card header */}
              <div className="px-6 py-4 flex items-center justify-between"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div>
                  <div className="text-sm font-bold text-white" style={{ fontFamily: 'var(--font-ui)' }}>ATS Score Report</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-ui)' }}>Software Engineer Resume</div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(251,191,36,0.15)', color: '#FBBF24', border: '1px solid rgba(251,191,36,0.2)', fontFamily: 'var(--font-ui)' }}>
                  ⚠️ Needs Work
                </div>
              </div>

              {/* Big score */}
              <div className="px-6 py-6 flex items-center gap-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="relative w-24 h-24 shrink-0">
                  <svg className="w-24 h-24 -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                    <motion.circle
                      cx="18" cy="18" r="15.9" fill="none"
                      stroke="url(#scoreGrad)" strokeWidth="3"
                      strokeDasharray="100" strokeDashoffset="100"
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: 100 }}
                      whileInView={{ strokeDashoffset: 42 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                    />
                    <defs>
                      <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#EF4444" />
                        <stop offset="100%" stopColor="#F97316" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>58</span>
                    <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-ui)' }}>/100</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-1" style={{ fontFamily: 'var(--font-ui)' }}>Low ATS Score</div>
                  <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
                    Your resume is likely getting filtered out before reaching a recruiter.
                  </div>
                </div>
              </div>

              {/* Score breakdown */}
              <div className="px-6 py-4 space-y-3">
                {[
                  { label: 'Keywords Match', score: 40, max: 100, status: 'bad' },
                  { label: 'Formatting', score: 90, max: 100, status: 'good' },
                  { label: 'Skills Match', score: 50, max: 100, status: 'warn' },
                  { label: 'Contact Info', score: 100, max: 100, status: 'good' },
                ].map(({ label, score, status }) => (
                  <div key={label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-ui)' }}>{label}</span>
                      <div className="flex items-center gap-1.5">
                        {status === 'good' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                        {status === 'bad' && <XCircle className="w-3.5 h-3.5 text-red-400" />}
                        {status === 'warn' && <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />}
                        <span className="text-xs font-bold" style={{
                          color: status === 'good' ? '#34D399' : status === 'bad' ? '#F87171' : '#FBBF24',
                          fontFamily: 'var(--font-ui)'
                        }}>
                          {score}%
                        </span>
                      </div>
                    </div>
                    <div className="h-1.5 rounded-full w-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        style={{
                          background: status === 'good'
                            ? 'linear-gradient(90deg, #10B981, #34D399)'
                            : status === 'bad'
                              ? 'linear-gradient(90deg, #EF4444, #F87171)'
                              : 'linear-gradient(90deg, #F59E0B, #FBBF24)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Fix button */}
              <div className="px-6 pb-5">
                <Link
                  to="/ats-checker"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #EF4444, #F97316)',
                    fontFamily: 'var(--font-ui)',
                    boxShadow: '0 4px 16px rgba(239,68,68,0.3)'
                  }}
                >
                  <Zap className="w-4 h-4" />
                  Fix My ATS Score Now
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}