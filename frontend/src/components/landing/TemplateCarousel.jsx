// File: src/components/landing/TemplateCarousel.jsx

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/effect-coverflow'

// ── Template data ─────────────────────────────────────────────
const TEMPLATES = [
  {
    id: 1, name: 'Fresh Graduate', type: 'fresher',
    accent: '#4F46E5', bg: '#EEF2FF',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face&auto=format',
    person: 'Arjun Mehta', title: 'Computer Science Graduate',
    company: 'IIT Delhi · 2024', skills: ['Python', 'React', 'SQL', 'Git'],
  },
  {
    id: 2, name: 'Tech Fresher', type: 'fresher',
    accent: '#0891B2', bg: '#ECFEFF',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&auto=format',
    person: 'Priya Sharma', title: 'B.Tech — Electronics',
    company: 'NIT Trichy · 2024', skills: ['C++', 'MATLAB', 'Arduino', 'IoT'],
  },
  {
    id: 3, name: 'Design Fresher', type: 'fresher',
    accent: '#EC4899', bg: '#FDF2F8',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format',
    person: 'Sneha Patel', title: 'UI/UX Design Graduate',
    company: 'NID Ahmedabad · 2024', skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
  },
  {
    id: 4, name: 'Campus Ready', type: 'fresher',
    accent: '#059669', bg: '#ECFDF5',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format',
    person: 'Rohit Kumar', title: 'MBA — Marketing',
    company: 'IIM Calcutta · 2024', skills: ['Marketing', 'Excel', 'PowerPoint', 'CRM'],
  },
  {
    id: 5, name: 'Project Showcase', type: 'fresher',
    accent: '#D97706', bg: '#FFFBEB',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format',
    person: 'Vivek Nair', title: 'Full Stack Developer',
    company: 'BITS Pilani · 2024', skills: ['Node.js', 'MongoDB', 'AWS', 'Docker'],
  },
  {
    id: 6, name: 'Executive Pro', type: 'experienced',
    accent: '#4F46E5', bg: '#EEF2FF',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face&auto=format',
    person: 'Rahul Sharma', title: 'Senior Software Engineer',
    company: 'Google India · 5 yrs', skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
  },
  {
    id: 7, name: 'Tech Lead', type: 'experienced',
    accent: '#7C3AED', bg: '#F5F3FF',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face&auto=format',
    person: 'Ananya Singh', title: 'Engineering Manager',
    company: 'Microsoft · 8 yrs', skills: ['System Design', 'Java', 'Azure', 'Agile'],
  },
  {
    id: 8, name: 'Product Manager', type: 'experienced',
    accent: '#0891B2', bg: '#ECFEFF',
    photo: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=80&h=80&fit=crop&crop=face&auto=format',
    person: 'Karan Malhotra', title: 'Senior Product Manager',
    company: 'Flipkart · 6 yrs', skills: ['Roadmapping', 'Analytics', 'SQL', 'Jira'],
  },
  {
    id: 9, name: 'Data Scientist', type: 'experienced',
    accent: '#059669', bg: '#ECFDF5',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face&auto=format',
    person: 'Deepika Rao', title: 'Lead Data Scientist',
    company: 'Razorpay · 4 yrs', skills: ['Python', 'TensorFlow', 'Spark', 'MLOps'],
  },
  {
    id: 10, name: 'Marketing Expert', type: 'experienced',
    accent: '#EC4899', bg: '#FDF2F8',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face&auto=format',
    person: 'Aditya Kapoor', title: 'Head of Digital Marketing',
    company: 'Swiggy · 7 yrs', skills: ['SEO', 'Google Ads', 'Analytics', 'Content'],
  },
]

// ── Mini resume card ──────────────────────────────────────────
function MiniResumeCard({ template }) {
  const { accent, bg, photo, person, title, company, skills, name } = template
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden h-full"
      style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.12)', border: '1px solid #F3F4F6' }}>

      {/* Accent bar */}
      <div style={{ height: 4, background: `linear-gradient(90deg, ${accent}, ${accent}99)` }} />

      {/* Header */}
      <div className="p-4" style={{ borderBottom: `1px solid ${bg}`, background: bg + '60' }}>
        <div className="flex items-center gap-3">
          <img src={photo} alt={person}
            className="w-10 h-10 rounded-xl object-cover shrink-0"
            style={{ border: `2px solid ${accent}30` }} />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', color: '#0F0E1A' }}>
              {person}
            </div>
            <div style={{ color: accent, fontFamily: 'var(--font-ui)', fontSize: '0.65rem', fontWeight: 600, marginTop: 2 }}>
              {title}
            </div>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', color: '#9CA3AF', marginTop: 1 }}>
              {company}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3">
        {/* Summary */}
        <div>
          <div className="h-1.5 w-14 rounded-full mb-2" style={{ background: accent }} />
          <div className="space-y-1.5">
            {[100, 85, 70].map((w, i) => (
              <div key={i} className="h-1.5 bg-gray-100 rounded-full" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="h-1.5 rounded-full mb-2" style={{ background: accent, width: 60 }} />
          <div className="pl-2.5 space-y-1" style={{ borderLeft: `2px solid ${bg}` }}>
            <div className="h-2 w-24 rounded-full" style={{ background: '#1F2937' }} />
            <div className="h-1.5 w-16 rounded-full" style={{ background: accent + '60' }} />
            {[100, 80].map((w, i) => (
              <div key={i} className="h-1.5 bg-gray-100 rounded-full" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <div className="h-1.5 rounded-full mb-2" style={{ background: accent, width: 40 }} />
          <div className="flex flex-wrap gap-1">
            {skills.map((skill) => (
              <span key={skill} style={{
                fontFamily: 'var(--font-ui)', fontSize: '0.55rem',
                color: accent, background: bg,
                border: `0.5px solid ${accent}40`,
                borderRadius: 4, padding: '2px 5px', fontWeight: 600
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-3">
        <div className="flex items-center justify-between p-2.5 rounded-xl" style={{ background: bg }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', fontWeight: 700, color: accent }}>
            {name}
          </span>
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.6rem', color: '#9CA3AF' }}>
            Use this →
          </span>
        </div>
      </div>
    </div>
  )
}

// ── Main ─────────────────────────────────────────────────────
export default function TemplateCarousel() {
  return (
    <section id="templates" className="py-16 md:py-24 overflow-hidden" style={{ background: 'white' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: '#9CA3AF', fontFamily: 'var(--font-ui)' }}>
            Ready to use
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#0F0E1A',
            letterSpacing: '-0.02em', marginBottom: '1rem'
          }}>
            Pick Your Perfect Template
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#6B7280', maxWidth: '28rem', margin: '0 auto' }}>
            Every template is ATS-optimized, recruiter-approved and fully customizable.
          </p>
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 80, modifier: 2.5, slideShadows: false }}
          autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          style={{ paddingTop: 20, paddingBottom: 40 }}
        >
          {TEMPLATES.map((template) => (
            <SwiperSlide key={template.id} style={{ width: 220, height: 340 }}>
              {({ isActive }) => (
                <motion.div
                  animate={{ scale: isActive ? 1 : 0.9, opacity: isActive ? 1 : 0.65 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <MiniResumeCard template={template} />
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Centered CTA */}
        <div className="flex items-center justify-center mt-10">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
                fontFamily: 'var(--font-ui)',
                boxShadow: '0 8px 24px rgba(79,70,229,0.3)'
              }}
            >
              Browse All Templates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}