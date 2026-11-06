import { useState } from 'react'
import ShuttleList from './components/ShuttleList'
import SearchFilter from './components/SearchFilter'
import ReservationList from './components/ReservationList'
import Summary from './components/Summary'
import { useReveal } from './hooks/useReveal'
import './App.css'

function App() {
  const [shuttles] = useState([])
  const [reservations] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Semua')

  useReveal()

  const handleAdd = () => undefined
  const handleUpdateQuantity = () => undefined
  const handleRemove = () => undefined

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Sistem Transportasi Kampus</p>
          <h1 className="hero-title">
            <span className="hero-word"><span className="hero-word__inner" style={{ '--i': 0 }}>Reservasi</span></span>{' '}
            <span className="hero-word"><span className="hero-word__inner" style={{ '--i': 1 }}>Tiket</span></span>{' '}
            <span className="hero-word"><span className="hero-word__inner" style={{ '--i': 2 }}>Shuttle</span></span>
          </h1>
          <p className="app-description">
            Pilih jadwal shuttle kampus dan siapkan reservasi perjalananmu.
          </p>
        </div>
      </header>

      <main className="app-content">
        <section className="search-section" data-reveal style={{ '--i': 0 }} aria-labelledby="search-title">
          <div className="section-heading">
            <p className="eyebrow">Katalog perjalanan</p>
            <h2 id="search-title">Cari shuttle</h2>
          </div>
          <SearchFilter
            searchQuery={searchQuery}
            onSearch={setSearchQuery}
            selectedCategory={selectedCategory}
            onFilter={setSelectedCategory}
            resultCount={shuttles.length}
          />
        </section>

        <div className="workspace-grid">
          <section className="panel catalog-panel" data-reveal style={{ '--i': 1 }} aria-labelledby="catalog-title">
            <div className="section-heading">
              <p className="eyebrow">Jadwal tersedia</p>
              <h2 id="catalog-title">Daftar shuttle</h2>
            </div>
            <ShuttleList shuttles={shuttles} onAdd={handleAdd} />
          </section>

          <aside className="panel reservation-panel" data-reveal style={{ '--i': 2 }} aria-labelledby="reservation-title">
            <div className="section-heading">
              <p className="eyebrow">Tiket pilihanmu</p>
              <h2 id="reservation-title">Daftar reservasi</h2>
            </div>
            <ReservationList
              reservations={reservations}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemove}
            />
            <Summary
              totalTickets={0}
              subtotal={0}
              administrationFee={0}
              totalPayment={0}
            />
          </aside>
        </div>
      </main>
    </div>
  )
}

export default App
