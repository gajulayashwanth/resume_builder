// File: frontend/src/pages/auth/Login.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, ArrowRight, Loader2, FileText, Sparkles, Zap, CheckCircle } from 'lucide-react'
import useAuthStore from '../../store/authStore'

const WeBuildIcon = ({ size = 24, dark = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="4" width="4" height="10" rx="1" fill={dark ? '#4F46E5' : 'white'} opacity="0.95"/>
    <rect x="10" y="8" width="4" height="6" rx="1" fill={dark ? '#4F46E5' : 'white'} opacity="0.85"/>
    <rect x="17" y="4" width="4" height="10" rx="1" fill={dark ? '#4F46E5' : 'white'} opacity="0.95"/>
    <rect x="3" y="16" width="18" height="3" rx="1.5" fill={dark ? '#4F46E5' : 'white'} opacity="0.4"/>
  </svg>
)

const features = [
  { icon: FileText, text: 'ATS-optimized resume & CV builder' },
  { icon: Sparkles, text: 'AI-powered content suggestions' },
  { icon: Zap, text: 'Smart Convert — reformat any resume instantly' },
  { icon: CheckCircle, text: '100% free • No credit card required' },
]

export default function Login() {
  const navigate = useNavigate()
  const { login, loginWithGoogle, loginWithGithub, error, clearError } = useAuthStore()

  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [githubLoading, setGithubLoading] = useState(false)

  const handleChange = (e) => {
    clearError()
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const { error } = await login(formData.email, formData.password)
    setIsLoading(false)
    if (!error) navigate('/dashboard')
  }

  const handleGoogle = async () => { setGoogleLoading(true); await loginWithGoogle(); setGoogleLoading(false) }
  const handleGithub = async () => { setGithubLoading(true); await loginWithGithub(); setGithubLoading(false) }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8 sm:py-12">

      {/* ── Card wrapper ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm sm:max-w-md lg:max-w-4xl rounded-2xl lg:rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
      >

        {/* ── LEFT PANEL (hidden on mobile/tablet, visible on desktop) ── */}
        <div className="hidden lg:flex lg:w-1/2 bg-indigo-600 relative overflow-hidden flex-col justify-between p-8">

          {/* Background circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600 rounded-full translate-y-1/2 -translate-x-1/2 opacity-40" />
          <div className="absolute top-1/2 right-0 w-48 h-48 bg-indigo-400 rounded-full translate-x-1/2 -translate-y-1/2 opacity-20" />

          {/* Logo */}
          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <WeBuildIcon size={22} />
              </div>
              <span className="text-white font-bold text-xl">WeBuild</span>
            </Link>
          </div>

          {/* Center content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h2 className="text-2xl font-bold text-white leading-tight mb-3">
              Build Resumes That<br />
              <span className="text-indigo-200">Get You Hired</span>
            </h2>
            <p className="text-indigo-200 text-sm mb-6 leading-relaxed">
              Free AI-powered resume builder, portfolio generator & cover letter creator for freshers and professionals.
            </p>
            <div className="space-y-3">
              {features.map(({ icon: Icon, text }, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-indigo-100 text-xs">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom stat badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative z-10 grid grid-cols-3 gap-4"
          >
            {[{ value: '30+', label: 'Templates' }, { value: '100%', label: 'Free' }, { value: 'AI', label: 'Powered' }].map(({ value, label }) => (
              <div key={label} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                <div className="text-white font-bold text-xl">{value}</div>
                <div className="text-indigo-200 text-xs mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT PANEL (full width on mobile/tablet) ── */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-5 py-8 sm:px-8 sm:py-10">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm"
          >
            {/* Logo — visible on mobile/tablet only */}
            <div className="lg:hidden flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center">
                <WeBuildIcon size={18} />
              </div>
              <span className="text-gray-900 font-bold text-lg">WeBuild</span>
            </div>

            {/* Heading */}
            <div className="mb-5">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Welcome back! 👋</h1>
              <p className="text-gray-500 text-xs">Login to continue building your career</p>
            </div>

            {/* Error */}
            {error && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-xl p-3 mb-4 text-red-500 text-xs"
              >
                {error}
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-gray-700 text-xs font-medium mb-1">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    placeholder="you@example.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-9 pr-4 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-gray-700 text-xs font-medium">Password</label>
                  <Link to="/forgot-password" className="text-indigo-500 hover:text-indigo-600 text-xs transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                  <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} required
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-9 pr-9 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                    {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                type="submit" disabled={isLoading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-indigo-500/25 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Login <ArrowRight className="w-3.5 h-3.5" /></>}
              </motion.button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-gray-400 text-xs">or continue with</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Social buttons */}
            <div className="flex gap-3">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleGoogle} disabled={googleLoading}
                className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg py-2.5 text-gray-700 text-xs font-medium transition-all duration-200 shadow-sm"
              >
                {googleLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <img src="https://www.google.com/favicon.ico" className="w-3.5 h-3.5" alt="Google" />}
                Google
              </motion.button>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleGithub} disabled={githubLoading}
                className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg py-2.5 text-gray-700 text-xs font-medium transition-all duration-200 shadow-sm"
              >
                {githubLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : (
                  <svg className="w-3.5 h-3.5 fill-gray-700" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                )}
                GitHub
              </motion.button>
            </div>

            <p className="text-center text-gray-400 text-xs mt-5">
              Don't have an account?{' '}
              <Link to="/register" className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors">
                Create one free →
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}