// File: frontend/src/App.jsx
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import useAuthStore from './store/authStore'

// ── Pages ────────────────────────────────────────────────────────
import LandingPage from './pages/LandingPage'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/dashboard/Dashboard'
import ResumeSelection from './pages/resume/ResumeSelection'
import FresherResume from './pages/resume/FresherResume'
import ExperiencedResume from './pages/resume/ExperiencedResume'
import ResumeEditor from './pages/resume/ResumeEditor'
import ResumeDownload from './pages/resume/ResumeDownload'
import CVSelection from './pages/cv/CVSelection'
import FresherCV from './pages/cv/FresherCV'
import ExperiencedCV from './pages/cv/ExperiencedCV'
import CVEditor from './pages/cv/CVEditor'
import PortfolioBuilder from './pages/portfolio/PortfolioBuilder'
import CoverLetterBuilder from './pages/cover-letter/CoverLetterBuilder'
import ATSChecker from './pages/ats/ATSChecker'
import SmartConvert from './pages/smart-convert/SmartConvert'
import Settings from './pages/settings/Settings'
import Profile from './pages/profile/Profile'
import NotFound from './pages/NotFound'

// ── Layout ───────────────────────────────────────────────────────
import Layout from './components/common/Layout'

// ── Protected Route ──────────────────────────────────────────────
function ProtectedRoute({ children }) {
  const { user, loading } = useAuthStore()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F0E1A]">
        <div className="w-10 h-10 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

// ── Public Route (redirect to dashboard if already logged in) ────
function PublicRoute({ children }) {
  const { user, loading } = useAuthStore()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F0E1A]">
        <div className="w-10 h-10 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
      </div>
    )
  }

  if (user) {
    return <Navigate to="/dashboard" replace />
  }

  return children
}

export default function App() {
  const { initialize } = useAuthStore()

  // Initialize auth on app load
  useEffect(() => {
    initialize()
  }, [])

  return (
    <BrowserRouter>
      <Routes>

        {/* ── Public pages (with Navbar + Footer) ── */}
        <Route path="/" element={<Layout><LandingPage /></Layout>} />

        {/* ── Auth pages (no Navbar/Footer) ── */}
        <Route path="/login" element={
          <PublicRoute><Login /></PublicRoute>
        } />
        <Route path="/register" element={
          <PublicRoute><Register /></PublicRoute>
        } />

        {/* ── Protected pages ── */}
        <Route path="/dashboard" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />
        <Route path="/dashboard/documents" element={
          <ProtectedRoute><Dashboard /></ProtectedRoute>
        } />

        {/* Resume routes */}
        <Route path="/resume" element={
          <ProtectedRoute><ResumeSelection /></ProtectedRoute>
        } />
        <Route path="/resume/fresher" element={
          <ProtectedRoute><FresherResume /></ProtectedRoute>
        } />
        <Route path="/resume/experienced" element={
          <ProtectedRoute><ExperiencedResume /></ProtectedRoute>
        } />
        <Route path="/resume/editor" element={
          <ProtectedRoute><ResumeEditor /></ProtectedRoute>
        } />
        <Route path="/resume/download" element={
          <ProtectedRoute><ResumeDownload /></ProtectedRoute>
        } />

        {/* CV routes */}
        <Route path="/cv" element={
          <ProtectedRoute><CVSelection /></ProtectedRoute>
        } />
        <Route path="/cv/fresher" element={
          <ProtectedRoute><FresherCV /></ProtectedRoute>
        } />
        <Route path="/cv/experienced" element={
          <ProtectedRoute><ExperiencedCV /></ProtectedRoute>
        } />
        <Route path="/cv/editor" element={
          <ProtectedRoute><CVEditor /></ProtectedRoute>
        } />

        {/* Other feature routes */}
        <Route path="/portfolio" element={
          <ProtectedRoute><PortfolioBuilder /></ProtectedRoute>
        } />
        <Route path="/cover-letter" element={
          <ProtectedRoute><CoverLetterBuilder /></ProtectedRoute>
        } />
        <Route path="/ats-checker" element={
          <ProtectedRoute><ATSChecker /></ProtectedRoute>
        } />
        <Route path="/smart-convert" element={
          <ProtectedRoute><SmartConvert /></ProtectedRoute>
        } />
        <Route path="/settings" element={
          <ProtectedRoute><Settings /></ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute><Profile /></ProtectedRoute>
        } />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}