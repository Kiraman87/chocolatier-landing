'use client'

import React from 'react'
import { Camera, Globe, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="font-display text-2xl">Maître Chocolatier</span>
              <span className="font-label text-[10px] text-[#c9a962] block mt-1">
                Paris — Depuis 1924
              </span>
            </div>
            
            <p className="text-[#b8a89a] max-w-sm">
              Artisans chocolatiers depuis quatre générations, nous créons 
              des expériences gustatives uniques avec passion et exigence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-label text-[11px] text-[#c9a962] mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              <li><a href="#collections" className="text-[#b8a89a] hover:text-white transition-colors">Collections</a></li>
              <li><a href="#craftsmanship" className="text-[#b8a89a] hover:text-white transition-colors">Savoir-faire</a></li>
              <li><a href="#about" className="text-[#b8a89a] hover:text-white transition-colors">Notre Maison</a></li>
              <li><a href="#contact" className="text-[#b8a89a] hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-label text-[11px] text-[#c9a962] mb-4">SUIVEZ-NOUS</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-[#3d2216] flex items-center justify-center hover:border-[#c9a962] hover:text-[#c9a962] transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-[#3d2216] flex items-center justify-center hover:border-[#c9a962] hover:text-[#c9a962] transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-[#3d2216] flex items-center justify-center hover:border-[#c9a962] hover:text-[#c9a962] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#3d2216] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6b6b6b] text-sm">
            © 2024 Maître Chocolatier. Tous droits réservés.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-[#6b6b6b] hover:text-white text-sm transition-colors">Mentions légales</a>
            <a href="#" className="text-[#6b6b6b] hover:text-white text-sm transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
