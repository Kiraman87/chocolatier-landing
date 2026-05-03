'use client'

import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Sélection des Fèves',
    description: 'Nous visitons personnellement les plantations pour sélectionner les meilleures fèves de cacao Criollo et Trinitario.',
  },
  {
    number: '02',
    title: 'Toréfaction Artisanale',
    description: 'Chaque lot est torréfié selon un profil unique développé par nos maîtres chocolatiers pour révéler son caractère.',
  },
  {
    number: '03',
    title: 'Conchage Patience',
    description: '72 heures de conchage à basse température pour une texture incomparable et des arômes sublimés.',
  },
  {
    number: '04',
    title: 'Façonnage à la Main',
    description: 'Chaque pièce est moulée, décorée et emballée à la main dans notre atelier parisien.',
  },
]

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-24 lg:py-32 bg-[#2c1810] text-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3d2216] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-label text-[#c9a962] block mb-4"
            >
              Notre Savoir-faire
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-heading text-white mb-6"
            >
              L'Art de la
              <br />
              <span className="text-[#c9a962]">Transformation</span>
            </motion.h2>
            
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="w-16 h-[1px] bg-[#c9a962] mb-8 origin-left"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-body-lg text-[#b8a89a] max-w-md"
            >
              De la fève à la pièce finie, chaque étape de notre processus 
              est maîtrisée avec une précision d'orfèvre. C'est cette rigueur 
              qui fait la différence entre un simple chocolat et une expérience 
              inoubliable.
            </motion.p>
          </div>

          {/* Right Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <span className="font-mono text-3xl text-[#c9a962]/30 group-hover:text-[#c9a962] transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                
                <div className="border-b border-[#3d2216] pb-8">
                  <h3 className="font-display text-xl text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body text-[#b8a89a]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
