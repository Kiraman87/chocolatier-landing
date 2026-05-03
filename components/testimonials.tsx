'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Les meilleurs chocolats que j'ai jamais goûtés. Une expérience sensorielle incomparable.",
    author: 'Marie-Claire Dubois',
    role: 'Directrice, Guide Michelin France',
  },
  {
    quote: "Le Praliné aux Noisettes est absolument divin. On sent la qualité des ingrédients et le savoir-faire.",
    author: 'Pierre Hermé',
    role: 'Pâtissier, Paris',
  },
  {
    quote: "Un cadeau d'exception. La présentation est aussi belle que le contenu est délicieux.",
    author: 'Sophie Martin',
    role: ' cliente fidèle depuis 2015',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-label text-[#c9a962] block mb-4"
          >
            Témoignages
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-heading text-[#1a1a1a]"
          >
            Ce qu'ils en disent
          </motion.h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-editorial text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c9a962] text-[#c9a962]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-lg text-[#1a1a1a] mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-semibold text-[#1a1a1a]">{testimonial.author}</p>
                <p className="font-label text-[11px] text-[#6b6b6b]">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
