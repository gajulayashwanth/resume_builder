// File: src/components/landing/HeroSection.jsx

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, CheckCircle2, Zap, Download, FileText, Award, Cpu, Mail, Phone, MapPin, Globe } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

const HERO_IMAGE = 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1800&h=1000&fit=crop&crop=center&auto=format&q=85'
const PROFILE_PHOTO = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face&auto=format'

// ── Feature check row ─────────────────────────────────────────
function FeatureCheck({ text }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
        style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
        <CheckCircle2 className="w-3 h-3 text-white" />
      </div>
      <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.85)' }}>{text}</span>
    </div>
  )
}

// ── Real Resume Template Card ─────────────────────────────────
function ResumeTemplateCard() {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="w-full bg-white rounded-2xl overflow-hidden"
      style={{
        aspectRatio: '1 / 1.41',
        boxShadow: '0 40px 100px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)',
        fontSize: '6px',
      }}
    >
      {/* ── Top accent bar ── */}
      <div style={{ height: 5, background: 'linear-gradient(90deg, #4F46E5, #7C3AED, #EC4899)' }} />

      {/* ── Header ── */}
      <div style={{ padding: '10px 12px 8px', borderBottom: '1px solid #F3F4F6', background: '#FAFAFA' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          {/* Photo */}
          <img
            src={PROFILE_PHOTO}
            alt="Rahul Sharma"
            style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover', border: '1.5px solid #EEF2FF', flexShrink: 0 }}
          />
          {/* Name + title */}
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 9, color: '#0F0E1A', letterSpacing: '-0.01em', marginBottom: 2 }}>
              Rahul Sharma
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 6.5, color: '#4F46E5', marginBottom: 4 }}>
              Senior Software Engineer
            </div>
            {/* Contact row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px 8px' }}>
              {[
                { icon: Mail, text: 'rahul@gmail.com' },
                { icon: Phone, text: '+91 98765 43210' },
                { icon: MapPin, text: 'Bangalore, India' },
                { icon: Globe, text: 'rahulsharma.dev' },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Icon style={{ width: 5, height: 5, color: '#7C3AED', flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: 5, color: '#6B7280' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: 7 }}>

        {/* Summary */}
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 7, color: '#0F0E1A', borderBottom: '1px solid #4F46E5', paddingBottom: 2, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', flexShrink: 0 }} />
            Professional Summary
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 5.5, color: '#4B5563', lineHeight: 1.6 }}>
            Results-driven Software Engineer with 5+ years of experience building scalable web applications.
            Proficient in React, Node.js and cloud technologies. Led teams of 5+ engineers delivering
            products used by 100K+ users.
          </p>
        </div>

        {/* Experience */}
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 7, color: '#0F0E1A', borderBottom: '1px solid #4F46E5', paddingBottom: 2, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', flexShrink: 0 }} />
            Work Experience
          </div>

          {/* Job 1 */}
          <div style={{ marginBottom: 5, paddingLeft: 6, borderLeft: '1.5px solid #EEF2FF' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
              <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 6, color: '#111827' }}>Senior Software Engineer</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: 5, color: '#9CA3AF' }}>2021 – Present</span>
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: 5.5, color: '#4F46E5', fontWeight: 600, marginBottom: 2 }}>Google India · Bangalore</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 5, color: '#6B7280', lineHeight: 1.6 }}>
              • Led development of core search features serving 500M+ daily users<br />
              • Reduced page load time by 40% through performance optimizations<br />
              • Mentored 4 junior engineers and conducted 50+ code reviews
            </div>
          </div>

          {/* Job 2 */}
          <div style={{ paddingLeft: 6, borderLeft: '1.5px solid #EEF2FF' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
              <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 6, color: '#111827' }}>Software Engineer</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: 5, color: '#9CA3AF' }}>2019 – 2021</span>
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: 5.5, color: '#4F46E5', fontWeight: 600, marginBottom: 2 }}>Flipkart · Bangalore</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 5, color: '#6B7280', lineHeight: 1.6 }}>
              • Built real-time inventory management system handling 10K+ requests/sec<br />
              • Integrated payment gateway reducing checkout failures by 25%
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 7, color: '#0F0E1A', borderBottom: '1px solid #4F46E5', paddingBottom: 2, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', flexShrink: 0 }} />
            Education
          </div>
          <div style={{ paddingLeft: 6, borderLeft: '1.5px solid #EEF2FF' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 1 }}>
              <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 6, color: '#111827' }}>B.Tech — Computer Science</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: 5, color: '#9CA3AF' }}>2015 – 2019</span>
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: 5.5, color: '#4F46E5', fontWeight: 600 }}>IIT Bombay · CGPA: 8.9/10</div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 7, color: '#0F0E1A', borderBottom: '1px solid #4F46E5', paddingBottom: 2, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: 'linear-gradient(135deg, #4F46E5, #7C3AED)', flexShrink: 0 }} />
            Skills
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {['React.js', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'PostgreSQL', 'GraphQL'].map((skill) => (
              <span key={skill} style={{
                fontFamily: 'var(--font-ui)',
                fontSize: 5,
                color: '#4F46E5',
                background: '#EEF2FF',
                border: '0.5px solid #C7D2FE',
                borderRadius: 3,
                padding: '1.5px 4px',
                fontWeight: 600
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div style={{
        margin: '0 10px 8px',
        padding: '5px 8px',
        borderRadius: 6,
        background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 5.5, color: 'white', fontWeight: 600 }}>
          ✦ WeBuild — ATS Optimized Template
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Download style={{ width: 7, height: 7, color: 'white' }} />
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 5, color: 'rgba(255,255,255,0.8)' }}>Download PDF</span>
        </div>
      </div>
    </motion.div>
  )
}

// ── Floating badge ────────────────────────────────────────────
function CardBadge({ icon: Icon, text, iconBg, style, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="absolute flex items-center gap-2 rounded-xl px-3 py-2"
      style={{
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        fontFamily: 'var(--font-ui)',
        ...style
      }}
    >
      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: iconBg }}>
        <Icon className="w-3.5 h-3.5 text-white" />
      </div>
      <span className="text-xs font-bold text-gray-800 whitespace-nowrap">{text}</span>
    </motion.div>
  )
}

// ── Main ─────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>

      {/* Full bleed background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Professional workspace"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(10,8,40,0.75) 0%, rgba(20,15,60,0.65) 40%, rgba(10,8,40,0.5) 100%)'
        }} />
        {/* Indigo tint */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(79,70,229,0.25) 0%, transparent 60%)'
        }} />
        {/* Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '44px 44px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full"
         style={{ minHeight: '100vh', padding: 'clamp(6rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 5vw, 4rem)' }}>

        {/* LEFT */}
        <div>
          {/* Badge */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 self-start"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.9)',
              fontFamily: 'var(--font-ui)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
             Free AI Resume Builder
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={0.1} variants={fadeUp} initial="hidden" animate="visible"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              lineHeight: 1.06,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.025em',
              marginBottom: '1.25rem'
            }}
          >
            Your Dream Job<br />
            Starts With a<br />
            <span style={{
              backgroundImage: 'linear-gradient(135deg, #818CF8 0%, #C084FC 50%, #F472B6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Great Resume.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={0.2} variants={fadeUp} initial="hidden" animate="visible"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.8,
              marginBottom: '2rem',
              maxWidth: '28rem'
            }}
          >
            Create ATS-optimized resumes, stunning portfolios and
            personalized cover letters 
          </motion.p>

          {/* Feature checklist */}
          <motion.div
            custom={0.25} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-col gap-2.5 mb-8"
          >
            <FeatureCheck text="ATS-optimized templates — recruiter approved" />
            <FeatureCheck text="AI-powered content suggestions in one click" />
            <FeatureCheck text="Download as PDF instantly — no watermarks" />
            <FeatureCheck text="Portfolio with custom subdomain & QR code" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={0.3} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}
          >
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 text-white rounded-2xl text-sm font-semibold"
                style={{
                  padding: '0.9rem 1.8rem',
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
              <a
                href="#templates"
                className="inline-flex items-center gap-2 rounded-2xl text-sm font-semibold"
                style={{
                  padding: '0.9rem 1.8rem',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  color: 'white',
                  fontFamily: 'var(--font-ui)',
                  background: 'rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                View Templates
              </a>
            </motion.div>
          </motion.div>

          {/* Stat pills */}
          <motion.div
            custom={0.4} variants={fadeUp} initial="hidden" animate="visible"
            className="flex items-center gap-5 flex-wrap pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            {[
              { icon: FileText, value: '30+',  label: 'Templates', color: '#818CF8' },
              { icon: Cpu,      value: 'AI',   label: 'AI',        color: '#C084FC' },
              { icon: Award,    value: 'Free', label: 'Free',      color: '#34D399' },
              { icon: Download, value: 'PDF',  label: 'Instant',   color: '#FBBF24' },
            ].map(({ icon: Icon, value, label, color }, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: color + '20', border: `1px solid ${color}30` }}>
                  <Icon className="w-3.5 h-3.5" style={{ color }} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-none" style={{ fontFamily: 'var(--font-display)' }}>{value}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-ui)' }}>{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Real resume card */}
        <motion.div
          initial={{ opacity: 0, y: 40, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative" style={{ width: 520, height: 740 }}>

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
              background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.45) 0%, transparent 70%)',
              filter: 'blur(35px)',
              transform: 'scale(1.15)'
            }} />

            {/* Resume card — bigger */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 360 }}>
              <ResumeTemplateCard />

              {/* Badges */}
              <CardBadge
                icon={Zap}
                text="AI Powered"
                iconBg="linear-gradient(135deg, #4F46E5, #7C3AED)"
                style={{ top: '10%', right: '-100px' }}
                delay={0.9}
              />
              <CardBadge
                icon={Download}
                text="PDF Ready!"
                iconBg="linear-gradient(135deg, #7C3AED, #EC4899)"
                style={{ top: '45%', right: '-95px' }}
                delay={1.1}
              />
              <CardBadge
                icon={Award}
                text="100% Free"
                iconBg="linear-gradient(135deg, #10B981, #059669)"
                style={{ bottom: '18%', right: '-90px' }}
                delay={1.3}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}