import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maître Chocolatier — Artisan Chocolatier Français',
  description: 'Chocolats artisanaux de prestige, créés avec passion et savoir-faire depuis 1924. Découvrez nos créations uniques et notre engagement pour l\'excellence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Iowan+Old+Style&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}