// File: src/components/landing/StatsBar.jsx

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, Zap, Target, Gift } from 'lucide-react'

// ── Count-up hook ─────────────────────────────────────────────
function useCountUp(target, duration = 1500, started = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])
  return count
}

// ── Single stat card ──────────────────────────────────────────
function StatCard({ icon: Icon, target, suffix = '', label, sublabel, color, gradient, delay, started }) {
  const count = useCountUp(target, 1500, started)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="flex flex-col items-center text-center p-8 rounded-3xl relative overflow-hidden group cursor-default"
      style={{
        background: 'white',
        border: '1px solid #F3F4F6',
        boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 12px 40px ${color}20`
        e.currentTarget.style.borderColor = color + '30'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.05)'
        e.currentTarget.style.borderColor = '#F3F4F6'
      }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at center, ${color}08 0%, transparent 70%)` }} />

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
        style={{ background: gradient }}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Count */}
      <div className="flex items-end gap-0.5 mb-1">
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#0F0E1A',
          lineHeight: 1,
          letterSpacing: '-0.03em',
        }}>
          {count}
        </span>
        {suffix && (
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            fontWeight: 700,
            color,
            lineHeight: 1,
            marginBottom: 2
          }}>{suffix}</span>
        )}
      </div>

      {/* Label */}
      <p style={{
        fontFamily: 'var(--font-ui)',
        fontSize: '0.9rem',
        fontWeight: 600,
        color: '#111827',
        marginBottom: 4
      }}>
        {label}
      </p>

      {/* Sublabel */}
      {sublabel && (
        <p style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.75rem',
          color: '#9CA3AF',
          lineHeight: 1.4
        }}>
          {sublabel}
        </p>
      )}

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-1/2 rounded-full transition-all duration-500"
        style={{ background: gradient }} />
    </motion.div>
  )
}

// ── Main ─────────────────────────────────────────────────────
export default function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const stats = [
    {
      icon: FileText,
      target: 30,
      suffix: '+',
      label: 'Templates',
      sublabel: 'ATS-optimized & recruiter approved',
      color: '#4F46E5',
      gradient: 'linear-gradient(135deg, #4F46E5, #6366F1)',
      delay: 0,
    },
    {
      icon: Gift,
      target: 100,
      suffix: '%',
      label: 'Free',
      sublabel: 'No credit card, no hidden charges',
      color: '#10B981',
      gradient: 'linear-gradient(135deg, #10B981, #059669)',
      delay: 0.1,
    },
    {
      icon: Target,
      target: 6,
      suffix: '+',
      label: 'AI Tools',
      sublabel: 'Resume, CV, Portfolio, Cover Letter & more',
      color: '#F59E0B',
      gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
      delay: 0.2,
    },
    {
      icon: Zap,
      target: 5,
      suffix: 'min',
      label: 'To Build a Resume',
      sublabel: 'From blank to download-ready PDF',
      color: '#7C3AED',
      gradient: 'linear-gradient(135deg, #7C3AED, #9333EA)',
      delay: 0.3,
    },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24" style={{ background: '#F8F7FF' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#9CA3AF', fontFamily: 'var(--font-ui)' }}>
            Simple. Powerful. Free.
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: '#0F0E1A',
            letterSpacing: '-0.02em'
          }}>
            Everything You Need to
            {' '}
            <span style={{
              backgroundImage: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Land the Job
            </span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} started={inView} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-10 text-xs"
          style={{ color: '#9CA3AF', fontFamily: 'var(--font-ui)' }}
        >
          🔒 We never sell your data &nbsp;•&nbsp; No credit card required &nbsp;•&nbsp; Built for Indian job seekers 🇮🇳
        </motion.p>
      </div>
    </section>
  )
}