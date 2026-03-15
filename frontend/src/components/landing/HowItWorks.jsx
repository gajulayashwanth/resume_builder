// File: src/components/landing/HowItWorks.jsx

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { UserPlus, LayoutTemplate, Download, ArrowRight, Zap } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Sign Up Free',
    description: 'Create your free account in seconds. No credit card required, no hidden charges — ever.',
    color: '#4F46E5',
    gradient: 'linear-gradient(135deg, #4F46E5, #6366F1)',
    bg: '#EEF2FF',
    detail: 'Google & GitHub login supported',
  },
  {
    number: '02',
    icon: LayoutTemplate,
    title: 'Choose & Fill',
    description: 'Pick a template, fill in your details. AI suggests content for every section as you type.',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED, #9333EA)',
    bg: '#F5F3FF',
    detail: '30+ ATS-optimized templates',
  },
  {
    number: '03',
    icon: Download,
    title: 'Download & Apply',
    description: 'Download your resume as a perfect PDF instantly. Share, apply, and land your dream job.',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #059669, #10B981)',
    bg: '#ECFDF5',
    detail: 'Instant PDF — no watermarks',
  },
]

function StepCard({ step, index }) {
  const { number, icon: Icon, title, description, color, gradient, bg, detail } = step

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center text-center h-full"
    >
      {/* Number badge */}
      <div
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white z-10"
        style={{ background: gradient, boxShadow: `0 4px 16px ${color}40` }}
      >
        {number}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -6, boxShadow: `0 20px 50px ${color}18` }}
        transition={{ duration: 0.25 }}
        className="w-full rounded-3xl p-8 pt-10 bg-white mt-4 h-full flex flex-col"
        style={{ border: `1.5px solid ${bg}`, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
      >
        {/* Icon circle */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
          style={{ background: gradient, boxShadow: `0 8px 24px ${color}30` }}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.2rem',
          fontWeight: 700,
          color: '#0F0E1A',
          letterSpacing: '-0.01em',
          marginBottom: '0.6rem'
        }}>
          {title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          color: '#6B7280',
          lineHeight: 1.7,
          marginBottom: '1.25rem'
        }}>
          {description}
        </p>

        {/* Detail pill */}
        <div
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{ background: bg, color }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
          <span style={{ fontFamily: 'var(--font-ui)' }}>{detail}</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'white' }}>

      {/* Subtle background tint */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(79,70,229,0.02) 1px, transparent 1px), linear-gradient(to right, rgba(79,70,229,0.02) 1px, transparent 1px)',
        backgroundSize: '44px 44px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#9CA3AF', fontFamily: 'var(--font-ui)' }}>
            Super simple
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: '#0F0E1A',
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            From Zero to{' '}
            <span style={{
              backgroundImage: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Hired in 3 Steps
            </span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: '#6B7280',
            maxWidth: '28rem',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            No learning curve. No complex setup. Just sign up and start building in minutes.
          </p>
        </motion.div>

        {/* Steps grid with connecting line on desktop */}
        <div className="relative">

          {/* Connecting gradient line — desktop only */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
            className="absolute top-12 left-1/6 right-1/6 h-0.5 hidden lg:block"
            style={{
              background: 'linear-gradient(90deg, #4F46E5, #7C3AED, #059669)',
              transformOrigin: 'left',
              zIndex: 0
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 items-stretch">
            {STEPS.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-16"
        >
          <p style={{
            fontFamily: 'var(--font-ui)',
            fontSize: '0.875rem',
            color: '#9CA3AF',
            marginBottom: '1rem'
          }}>
            Takes less than 5 minutes ⚡
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                fontFamily: 'var(--font-ui)',
                boxShadow: '0 8px 32px rgba(79,70,229,0.3)',
                letterSpacing: '0.01em'
              }}
            >
              <Zap className="w-4 h-4" />
              Start Building Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}