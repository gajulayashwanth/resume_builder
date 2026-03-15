// File: src/components/landing/WhyChooseUs.jsx

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Gift, Zap, RefreshCw, Target, ArrowRight, CheckCircle2 } from 'lucide-react'

const REASONS = [
  {
    icon: Gift,
    emoji: '🆓',
    title: '100% Free',
    description: 'No credit card, no hidden charges, no watermarks. Every single feature is completely free . We mean it.',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #059669, #10B981)',
    bg: '#ECFDF5',
    points: ['No credit card required', 'No watermarks on PDF', 'Unlimited downloads'],
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop&auto=format&q=80',
  },
  {
    icon: Zap,
    emoji: '🤖',
    title: 'AI-Powered Suggestions',
    description: 'AI suggests content, fixes grammar, quantifies achievements and tailors your resume to each job description automatically.',
    color: '#4F46E5',
    gradient: 'linear-gradient(135deg, #4F46E5, #6366F1)',
    bg: '#EEF2FF',
    points: ['AI content suggestions', 'Job-specific tailoring', 'Grammar & tone fixes'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop&auto=format&q=80',
  },
  {
    icon: RefreshCw,
    emoji: '⚡',
    title: 'Smart Convert',
    description: 'Upload any old resume in any format. Our AI instantly reformats it into a beautiful, ATS-optimized WeBuild template in seconds.',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED, #9333EA)',
    bg: '#F5F3FF',
    points: ['Upload PDF or DOCX', 'AI reformats instantly', 'Manual or Auto mode'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop&auto=format&q=80',
  },
  {
    icon: Target,
    emoji: '🎯',
    title: 'ATS Optimized',
    description: '75% of resumes are rejected before a human reads them. Every WeBuild template is engineered to pass ATS systems and get noticed.',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    bg: '#FFFBEB',
    points: ['ATS score checker', 'Keyword suggestions', 'Recruiter-approved formats'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&auto=format&q=80',
  },
]

function ReasonRow({ reason, index }) {
  const { icon: Icon, emoji, title, description, color, gradient, bg, points, image } = reason
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isEven ? '' : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'}`}
    >
      {/* ── Text side ── */}
      <div className="flex flex-col justify-center">
        {/* Emoji + badge */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
            style={{ background: gradient, boxShadow: `0 6px 20px ${color}30` }}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: bg, color, fontFamily: 'var(--font-ui)' }}>
            <span>{emoji}</span>
            <span>WeBuild Feature</span>
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: 700,
          color: '#0F0E1A',
          letterSpacing: '-0.02em',
          marginBottom: '0.75rem',
          lineHeight: 1.15
        }}>
          {title}
        </h3>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          color: '#6B7280',
          lineHeight: 1.75,
          marginBottom: '1.5rem',
          maxWidth: '28rem'
        }}>
          {description}
        </p>

        {/* Bullet points */}
        <div className="flex flex-col gap-2.5 mb-6">
          {points.map((point) => (
            <div key={point} className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ background: gradient }}>
                <CheckCircle2 className="w-3 h-3 text-white" />
              </div>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.9rem', color: '#374151', fontWeight: 500 }}>
                {point}
              </span>
            </div>
          ))}
        </div>

        {/* Learn more link */}
        <Link
          to="/register"
          className="inline-flex items-center gap-1.5 text-sm font-semibold self-start"
          style={{ color, fontFamily: 'var(--font-ui)' }}
        >
          Try it free
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* ── Image side ── */}
      <div className="relative">
        {/* Glow behind image */}
        <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 pointer-events-none"
          style={{ background: gradient, transform: 'scale(0.9) translateY(8px)' }} />

        {/* Image card */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-3xl overflow-hidden"
          style={{ boxShadow: `0 24px 60px ${color}18, 0 0 0 1px ${color}15` }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-64 md:h-80 object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0" style={{
            background: `linear-gradient(135deg, ${color}20 0%, transparent 60%)`
          }} />

          {/* Floating stat pill on image */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: gradient }}>
              <Icon className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-xs font-bold text-gray-900" style={{ fontFamily: 'var(--font-ui)' }}>{title}</div>
              <div className="text-xs text-gray-500" style={{ fontFamily: 'var(--font-ui)' }}>WeBuild Feature</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'white' }}>

      {/* Background tint */}
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
            Why WeBuild
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: '#0F0E1A',
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            Built Different.{' '}
            <span style={{
              backgroundImage: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Built for You.
            </span>
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: '#6B7280',
            maxWidth: '30rem',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            We built WeBuild because great resumes shouldn't cost money.
            Here's what makes us different.
          </p>
        </motion.div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-20 md:gap-28">
          {REASONS.map((reason, i) => (
            <ReasonRow key={reason.title} reason={reason} index={i} />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1E1B4B, #2D1B69)' }}
        >
          <div className="absolute top-0 left-1/4 w-48 h-48 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'rgba(99,102,241,0.3)' }} />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'rgba(124,58,237,0.3)' }} />

          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-indigo-300"
              style={{ fontFamily: 'var(--font-ui)' }}>
              Ready to get hired?
            </p>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem'
            }}>
              Build Your Resume Today —{' '}
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #818CF8, #C084FC)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                It's 100% Free
              </span>
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '2rem'
            }}>
              No credit card required • No watermarks • No limits
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-semibold text-white"
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
          </div>
        </motion.div>

      </div>
    </section>
  )
}