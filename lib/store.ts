import { create } from 'zustand'

interface AppState {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
  toggleMenu: () => void
  currentSection: string
  setCurrentSection: (section: string) => void
}

export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  currentSection: 'home',
  setCurrentSection: (section) => set({ currentSection: section })
}))
