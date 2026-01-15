import Link from "next/link"
import {
    Newspaper,
    Star,
    Pill,
    Dot,
} from "lucide-react"
import "./quickactioncards.css"

const quickActions = [
    {
        title: "Novo Suplemento",
        description: "Adicionar produto",
        icon: Pill,
        href: "/supplements",
    },
    {
        title: "Nova Notícia",
        description: "Publicar artigo",
        icon: Newspaper,
        href: "/news",
    },
    {
        title: "Gerenciar Reviews",
        description: "Moderar avaliações",
        icon: Star,
        href: "/assessment",
    },
    {
        title: "Ver Suplementos",
        description: "Lista completa",
        icon: Pill,
        href: "/training",
    },
]

export default function QuickActionCards() {
    return (
        <section className="quick-action-cards container">
            {/* QUICK ACTIONS */}
            <div className="quick-action-wrapper">
                <header className="card-content-action">
                    <h2 className="title">
                        Quick Action Cards
                    </h2>
                    <p className="subtitle">
                        Gerencie todo o conteúdo do FitPower
                    </p>
                </header>

                <div className="quick-action-grid">
                    {quickActions.map((action) => {
                        const Icon = action.icon

                        return (
                            <Link
                                key={action.title}
                                href={action.href}
                                className="quick-action-link"
                            >
                                <article className="card-action">
                                    <Icon size={18} className="card-icon" />
                                    <p className="card-title">{action.title}</p>
                                    <p className="card-description">
                                        {action.description}
                                    </p>
                                </article>
                            </Link>
                        )
                    })}
                </div>
            </div>

            {/* RECENT ACTIVITY */}
            <aside className="recent-activity">
                <header>
                    <h3 className="recent-title">
                        Atividades recentes
                    </h3>
                    <p className="recent-subtitle">
                        Últimas atualizações
                    </p>
                </header>

                <div className="recent-item">
                    <div className="recent-main">
                        <Dot size={16} />
                        <span>Novo Suplemento</span>
                    </div>

                    <span className="recent-time">
                        Há 2 horas
                    </span>
                </div>
            </aside>
        </section>
    )
}
