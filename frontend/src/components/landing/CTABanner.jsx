// File: src/components/landing/CTABanner.jsx

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, CheckCircle2 } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#F8F7FF' }}>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden text-center px-8 py-16 md:py-20"
          style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #2D1B69 50%, #1E1B4B 100%)' }}
        >
          {/* Orbs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'rgba(99,102,241,0.35)' }}
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'rgba(124,58,237,0.35)' }}
          />

          {/* Grid overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '44px 44px'
          }} />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.8)',
                fontFamily: 'var(--font-ui)'
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Free — No Credit Card
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                color: 'white',
                letterSpacing: '-0.025em',
                marginBottom: '1rem',
                lineHeight: 1.1
              }}
            >
              Start Building Your{' '}
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #818CF8, #C084FC, #F472B6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Dream Resume
              </span>
              <br />Today — It's Free!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.55)',
                marginBottom: '2.5rem',
                maxWidth: '28rem',
                margin: '0 auto 2.5rem'
              }}
            >
              Join thousands of job seekers building ATS-optimized
              resumes with WeBuild — completely free.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-8"
            >
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                    fontFamily: 'var(--font-ui)',
                    boxShadow: '0 8px 32px rgba(79,70,229,0.5)',
                    letterSpacing: '0.01em'
                  }}
                >
                  <Zap className="w-4 h-4" />
                  Start Building Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold"
                  style={{
                    border: '1.5px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    fontFamily: 'var(--font-ui)',
                    background: 'rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  Browse Templates
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
            >
              {[
                'No credit card required',
                'No watermarks',
                '100% free',
                
              ].map((text) => (
                <span key={text} className="flex items-center gap-1.5 text-xs"
                  style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-ui)' }}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {text}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}