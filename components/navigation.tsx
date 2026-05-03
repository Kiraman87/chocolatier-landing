'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: 'Savoir-faire', href: '#craftsmanship' },
    { label: 'Maison', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e8e4df]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex flex-col">
              <span className="font-display text-xl tracking-tight text-[#1a1a1a]">
                Maître Chocolatier
              </span>
              <span className="font-label text-[10px] text-[#c9a962] mt-0.5">
                Paris — Depuis 1924
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-label text-[11px] text-[#6b6b6b] hover:text-[#1a1a1a] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary text-[11px] py-3 px-6"
              >
                Boutique en ligne
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1a1a1a]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1a1a1a]" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#faf8f5] pt-24 px-6"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-3xl text-[#1a1a1a]"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                className="btn-primary text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Boutique en ligne
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
