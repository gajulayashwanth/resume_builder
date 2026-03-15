// File: src/components/landing/FeaturesSection.jsx

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, BookOpen, Globe, Mail, Target, Zap, ArrowRight } from 'lucide-react'

const FEATURES = [
  {
    icon: FileText,
    title: 'Resume Builder',
    description: 'ATS-optimized resumes with 30+ templates. Fresher or Experienced mode.',
    color: '#4F46E5',
    gradient: 'linear-gradient(135deg, #4F46E5, #6366F1)',
    conic: '#4F46E5, #6366F1, #A855F7, #4F46E5',
    bg: '#EEF2FF',
    link: '/resume',
    badge: '30+ Templates',
  },
  {
    icon: BookOpen,
    title: 'CV Builder',
    description: 'Detailed academic & professional CVs for research, education and senior roles.',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED, #9333EA)',
    conic: '#7C3AED, #9333EA, #EC4899, #7C3AED',
    bg: '#F5F3FF',
    link: '/cv',
    badge: 'Multi-page',
  },
  {
    icon: Globe,
    title: 'Portfolio Generator',
    description: 'Custom subdomain portfolio with QR code. Share your work instantly.',
    color: '#0891B2',
    gradient: 'linear-gradient(135deg, #0891B2, #06B6D4)',
    conic: '#0891B2, #06B6D4, #0EA5E9, #0891B2',
    bg: '#ECFEFF',
    link: '/portfolio',
    badge: 'Custom Domain',
  },
  {
    icon: Mail,
    title: 'Cover Letter Builder',
    description: 'AI-generated cover letters tailored to each job in seconds.',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899, #F472B6)',
    conic: '#EC4899, #F472B6, #FB923C, #EC4899',
    bg: '#FDF2F8',
    link: '/cover-letter',
    badge: 'AI Generated',
  },
  {
    icon: Target,
    title: 'ATS Score Checker',
    description: 'Check your resume score before applying. Beat the bots, get seen by humans.',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    conic: '#F59E0B, #FBBF24, #EF4444, #F59E0B',
    bg: '#FFFBEB',
    link: '/ats-checker',
    badge: 'Beat the Bots',
  },
  {
    icon: Zap,
    title: 'Smart Convert',
    description: 'Upload any resume. AI reformats it into a beautiful template instantly.',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #059669, #10B981)',
    conic: '#059669, #10B981, #06B6D4, #059669',
    bg: '#ECFDF5',
    link: '/smart-convert',
    badge: '⚡ Unique Feature',
  },
]

function FeatureCard({ feature, index }) {
  const { icon: Icon, title, description, color, gradient, conic, bg, link, badge } = feature

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative"
    >
      {/* ── Rotating conic gradient border ── */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ padding: 1.5 }}
      >
        <div
          className="absolute inset-0 rounded-2xl group-hover:animate-spin-slow"
          style={{
            background: `conic-gradient(from 0deg, ${conic})`,
            borderRadius: 16,
            filter: 'blur(1px)',
          }}
        />
      </div>

      {/* ── Card ── */}
      <motion.div
        className="relative rounded-2xl p-5 bg-white z-10 cursor-pointer"
        style={{
          border: '1.5px solid #F3F4F6',
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          margin: 1.5,
        }}
        whileHover={{
          scale: 1.03,
          boxShadow: `0 16px 40px ${color}20`,
          borderColor: color + '30',
          transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
        }}
      >
        {/* Top row: icon + badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: gradient }}>
            <Icon style={{ width: 18, height: 18, color: 'white' }} />
          </div>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ background: bg, color, fontFamily: 'var(--font-ui)' }}>
            {badge}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem', fontWeight: 700,
          color: '#0F0E1A', letterSpacing: '-0.01em',
          marginBottom: '0.4rem',
        }}>
          {title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.82rem', color: '#6B7280',
          lineHeight: 1.65, marginBottom: '1.1rem',
        }}>
          {description}
        </p>

        {/* CTA */}
        <Link to={link} className="inline-flex items-center gap-1.5 text-xs font-semibold"
          style={{ color, fontFamily: 'var(--font-ui)' }}>
          Try it free
          <ArrowRight style={{ width: 13, height: 13 }}
            className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24" style={{ background: '#F8F7FF' }}>

      {/* Inject spin-slow animation */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>

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
            Everything in one place
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#0F0E1A',
            letterSpacing: '-0.02em', marginBottom: '1rem',
          }}>
            6 Powerful Tools.{' '}
            <span style={{
              backgroundImage: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              One Platform.
            </span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1rem',
            color: '#6B7280', maxWidth: '32rem',
            margin: '0 auto', lineHeight: 1.7,
          }}>
            Everything you need to build a career that stands out — powered by AI, completely free.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link to="/register"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                fontFamily: 'var(--font-ui)',
                boxShadow: '0 8px 32px rgba(79,70,229,0.3)',
              }}>
              <Zap className="w-4 h-4" />
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}