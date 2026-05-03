'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[#f5f0e8] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#2c1810]/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-label text-[#c9a962]">[Image: Atelier de création]</span>
              </div>
              
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-[#c9a962]" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-[#c9a962]" />
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-label text-[#c9a962] mb-4 block">
                Notre Maison
              </span>
              
              <h2 className="font-display text-heading text-[#1a1a1a] mb-6">
                Un Héritage de
                <br />
                <span className="text-[#c9a962]">Passion & Savoir-faire</span>
              </h2>
              
              <div className="divider-gold" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-body text-[#6b6b6b]"
            >
              <p>
                Fondée en 1924 par Pierre Dubois, notre maison perpétue une tradition 
                centenaire d'excellence chocolatière. Chaque génération a apporté 
                son savoir-faire unique, enrichissant un héritage précieux transmis 
                de père en fils.
              </p>
              
              <p>
                Nous sélectionnons personnellement nos fèves de cacao dans les 
                meilleures plantations d'Équateur, de Madagascar et de Côte d'Ivoire. 
                Notre engagement pour une chocolaterie éthique et durable guide 
                chacune de nos décisions.
              </p>

              <div className="pt-8 grid grid-cols-3 gap-8">
                <div>
                  <span className="font-display text-4xl text-[#1a1a1a]">100</span>
                  <p className="font-label text-[11px] text-[#6b6b6b] mt-2">Années d'histoire</p>
                </div>
                <div>
                  <span className="font-display text-4xl text-[#1a1a1a]">47</span>
                  <p className="font-label text-[11px] text-[#6b6b6b] mt-2">Créations uniques</p>
                </div>
                <div>
                  <span className="font-display text-4xl text-[#1a1a1a]">12</span>
                  <p className="font-label text-[11px] text-[#6b6b6b] mt-2">Pays fournisseurs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
