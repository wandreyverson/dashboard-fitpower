import Link from "next/link"
import {
  Pill,
  Newspaper,
  Star,
  Dumbbell,
} from "lucide-react"
import "./CardsViews.css"

const cards = [
  {
    title: "Total Suplementos",
    value: 48,
    description: "Produtos cadastrados",
    icon: Pill,
    href: "/supplements",
  },
  {
    title: "Notícias",
    value: 23,
    description: "Artigos publicados",
    icon: Newspaper,
    href: "/news",
  },
  {
    title: "Avaliações",
    value: 156,
    description: "Reviews de clientes",
    icon: Star,
    href: "/assessment",
  },
  {
    title: "Treinos",
    value: 12,
    description: "Programas ativos",
    icon: Dumbbell,
    href: "/training",
  },
]

export default function CardsViews() {
  return (
    <div className="cards-wrapper">
      <div className="container">
        <div className="cards-grid">
          {cards.map((card, index) => {
            const Icon = card.icon

            return (
              <Link
                key={index}
                href={card.href}
                className="card-item card-link"
              >
                <div className="card-content">
                  <p className="card-title">{card.title}</p>
                  <h2 className="card-value">{card.value}</h2>
                  <p className="card-description">
                    {card.description}
                  </p>
                </div>

                <Icon className="card-icon" size={18} />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
