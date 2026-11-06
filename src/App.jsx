import { useState } from 'react'
import ShuttleList from './components/ShuttleList'
import SearchFilter from './components/SearchFilter'
import ReservationList from './components/ReservationList'
import Summary from './components/Summary'
import './App.css'

const INITIAL_SHUTTLES = [
  {
    id: 'S01',
    nama: 'Kampus ke Stasiun',
    kategori: 'Pagi',
    harga: 12000,
    stok: 6,
  },
  {
    id: 'S02',
    nama: 'Kampus ke Terminal',
    kategori: 'Pagi',
    harga: 15000,
    stok: 3,
  },
  {
    id: 'S03',
    nama: 'Kampus ke Pusat Kota',
    kategori: 'Siang',
    harga: 18000,
    stok: 5,
  },
  {
    id: 'S04',
    nama: 'Kampus ke Asrama',
    kategori: 'Siang',
    harga: 8000,
    stok: 0,
  },
  {
    id: 'S05',
    nama: 'Kampus ke Bandara',
    kategori: 'Sore',
    harga: 35000,
    stok: 2,
  },
  {
    id: 'S06',
    nama: 'Kampus ke Stasiun',
    kategori: 'Sore',
    harga: 12000,
    stok: 8,
  },
]

function App() {
  const [shuttles] = useState(INITIAL_SHUTTLES)
  const [reservations] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Semua')

  const handleAdd = (shuttle) => {
    console.log('Shuttle ditambahkan:', shuttle)
  }
  const handleUpdateQuantity = () => undefined
  const handleRemove = () => undefined

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Sistem Transportasi Kampus</p>
          <h1>Reservasi Tiket Shuttle</h1>
          <p className="app-description">
            Pilih jadwal shuttle kampus dan siapkan reservasi perjalananmu.
          </p>
        </div>
      </header>

      <main className="app-content">
        <section className="search-section" aria-labelledby="search-title">
          <div className="section-heading">
            <p className="eyebrow">Katalog perjalanan</p>
            <h2 id="search-title">Cari shuttle</h2>
          </div>
          <SearchFilter
            search={searchQuery}
            onSearch={setSearchQuery}
            selected={selectedCategory}
            filter={setSelectedCategory}
            totalResult={shuttles.length}
          />
        </section>

        <div className="workspace-grid">
          <section className="panel catalog-panel" aria-labelledby="catalog-title">
            <div className="section-heading">
              <p className="eyebrow">Jadwal tersedia</p>
              <h2 id="catalog-title">Daftar shuttle</h2>
            </div>
            <ShuttleList shuttles={shuttles} onAdd={handleAdd} />
          </section>

          <aside className="panel reservation-panel" aria-labelledby="reservation-title">
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
