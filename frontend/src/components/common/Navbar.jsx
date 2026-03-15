// File: frontend/src/components/common/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, LayoutDashboard, FileText, Settings, LogOut, User } from 'lucide-react'
import useAuthStore from '../../store/authStore'

export default function Navbar() {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Detect scroll for navbar style change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="4" height="10" rx="1" fill="white" opacity="0.95"/>
                <rect x="10" y="8" width="4" height="6" rx="1" fill="white" opacity="0.85"/>
                <rect x="17" y="4" width="4" height="10" rx="1" fill="white" opacity="0.95"/>
                <rect x="3" y="16" width="18" height="3" rx="1.5" fill="white" opacity="0.4"/>
              </svg>
            </div>
            <span className={`font-bold text-lg transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              WeBuild
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Templates', 'How It Works'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              // Logged in — show avatar dropdown
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-3 py-2 transition-all duration-200"
                >
                  <div className="w-7 h-7 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {user.email?.[0]?.toUpperCase()}
                    </span>
                  </div>
                  <span className={`text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    {user.user_metadata?.full_name?.split(' ')[0] || 'Account'}
                  </span>
                  <ChevronDown className={`w-4 h-4 ${isScrolled ? 'text-gray-500' : 'text-white/70'}`} />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      {[
                        { icon: LayoutDashboard, label: 'Dashboard', to: '/dashboard' },
                        { icon: FileText, label: 'My Documents', to: '/dashboard/documents' },
                        { icon: User, label: 'Profile', to: '/profile' },
                        { icon: Settings, label: 'Settings', to: '/settings' },
                      ].map(({ icon: Icon, label, to }) => (
                        <Link
                          key={label}
                          to={to}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                          {label}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              // Not logged in — show login + register buttons
              <>
                <Link to="/login">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`text-sm font-medium px-4 py-2 rounded-xl border transition-all duration-200 ${
                      isScrolled
                        ? 'border-gray-200 text-gray-700 hover:border-indigo-300 hover:text-indigo-600'
                        : 'border-white/30 text-white hover:bg-white/10'
                    }`}
                  >
                    Login
                  </motion.button>
                </Link>
                <Link to="/register">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-sm font-semibold px-4 py-2 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/25 transition-all duration-200"
                  >
                    Get Started Free
                  </motion.button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {['Features', 'Templates', 'How It Works'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm text-gray-700 hover:text-indigo-600 font-medium"
                >
                  {item}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2 border-t border-gray-100">
                {user ? (
                  <>
                    <Link to="/dashboard" onClick={() => setMobileOpen(false)}
                      className="py-2 text-sm text-gray-700 font-medium">Dashboard</Link>
                    <button onClick={handleLogout}
                      className="py-2 text-sm text-red-500 font-medium text-left">Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setMobileOpen(false)}>
                      <button className="w-full py-2.5 text-sm font-medium border border-gray-200 rounded-xl text-gray-700">
                        Login
                      </button>
                    </Link>
                    <Link to="/register" onClick={() => setMobileOpen(false)}>
                      <button className="w-full py-2.5 text-sm font-semibold rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 text-white">
                        Get Started Free
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}