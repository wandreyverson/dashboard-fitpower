// components/navBar/navBar.tsx
"use client"

import Link from "next/link"
import {
  LayoutDashboard,
  Pill,
  Newspaper,
  Star,
  Dumbbell,
} from "lucide-react"
import "./navBar.css"

export default function NavBar() {
  return (
    <header className="navbar">
      <nav className="navbar-menu container">
        <Link href="/" className="nav-item">
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </Link>

        {/* <Link href="/supplements" className="nav-item">
          <Pill size={18} />
          <span>Suplementos</span>
        </Link> */}

        <Link href="/news" className="nav-item">
          <Newspaper size={18} />
          <span>Notícias</span>
        </Link>

        <Link href="/assessment" className="nav-item">
          <Star size={18} />
          <span>Avaliações</span>
        </Link>

        <Link href="/training" className="nav-item">
          <Dumbbell size={18} />
          <span>Treinos</span>
        </Link>
      </nav>
    </header>
  )
}
