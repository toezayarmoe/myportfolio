// src/app/layout.js
import './styles/globals.css'

export const metadata = {
  title: 'Toe Zayar Moe | Cyber Security Analyst',
  description: 'Portfolio of Toe Zayar Moe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
