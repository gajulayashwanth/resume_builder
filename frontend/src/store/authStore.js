// File: frontend/src/store/authStore.js
import { create } from 'zustand'
import { supabase, signIn, signUp, signOut, signInWithGoogle, signInWithGithub } from '../lib/supabase'

const useAuthStore = create((set) => ({
  // ── State ──────────────────────────────────────────────────────
  user: null,
  session: null,
  loading: true,
  error: null,

  // ── Initialize auth (call once on app load) ────────────────────
  initialize: async () => {
    try {
      // Get current session
      const { data: { session } } = await supabase.auth.getSession()
      set({
        session,
        user: session?.user ?? null,
        loading: false,
      })

      // Listen for auth changes (login, logout, token refresh)
      supabase.auth.onAuthStateChange((_event, session) => {
        set({
          session,
          user: session?.user ?? null,
          loading: false,
        })
      })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },

  // ── Login with email + password ────────────────────────────────
  login: async (email, password) => {
    set({ loading: true, error: null })
    const { data, error } = await signIn(email, password)
    if (error) {
      set({ error: error.message, loading: false })
      return { error }
    }
    set({
      user: data.user,
      session: data.session,
      loading: false,
      error: null,
    })
    return { data }
  },

  // ── Register with email + password ────────────────────────────
  register: async (email, password, name) => {
    set({ loading: true, error: null })
    const { data, error } = await signUp(email, password, name)
    if (error) {
      set({ error: error.message, loading: false })
      return { error }
    }
    set({ loading: false, error: null })
    return { data }
  },

  // ── Login with Google ──────────────────────────────────────────
  loginWithGoogle: async () => {
    set({ loading: true, error: null })
    const { error } = await signInWithGoogle()
    if (error) {
      set({ error: error.message, loading: false })
      return { error }
    }
    set({ loading: false })
    return {}
  },

  // ── Login with GitHub ──────────────────────────────────────────
  loginWithGithub: async () => {
    set({ loading: true, error: null })
    const { error } = await signInWithGithub()
    if (error) {
      set({ error: error.message, loading: false })
      return { error }
    }
    set({ loading: false })
    return {}
  },

  // ── Logout ─────────────────────────────────────────────────────
  logout: async () => {
    set({ loading: true, error: null })
    const { error } = await signOut()
    if (error) {
      set({ error: error.message, loading: false })
      return { error }
    }
    set({
      user: null,
      session: null,
      loading: false,
      error: null,
    })
    return {}
  },

  // ── Clear error ────────────────────────────────────────────────
  clearError: () => set({ error: null }),
}))

export default useAuthStore