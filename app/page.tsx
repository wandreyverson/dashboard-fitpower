import CardsViews from "@/component/cardsviews/CardsViews";
import QuickActionCards from "@/component/quickactioncards/quickActionCards";

export default function Home() {
  return (
    <>
      <div
        style={{ padding: "16px 0" }}
        className="border-b border-gray-200"
      >
        <div className="container">
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard Admin
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Gerencie todo o conteúdo do FitPower
          </p>
        </div>
      </div>

      <CardsViews />
      <QuickActionCards />
    </>
  )
}
