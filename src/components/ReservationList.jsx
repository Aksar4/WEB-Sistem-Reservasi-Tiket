import React from 'react';

function ReservationList({
  reservations = [],
  onUpdateQuantity,
  onRemove,
}) {
  const handleQuantityChange = (id, e) => {
    if (typeof onUpdateQuantity === 'function') {
      onUpdateQuantity(id, parseInt(e.target.value, 10) || '');
      // Mengirimkan nilai input ke App.jsx, dikonversi menjadi angka
      // Validasi maksimal tiket dan stok akan ditangani oleh Anggota 7 di App.jsx
    }
  };

  const handleRemove = (id) => {
    if (typeof onRemove === 'function') {
      onRemove(id);
    }
  };

  if (reservations.length === 0) {
    return (
      <div className="empty-state">
        <p>Belum ada reservasi.</p>
        <small>Shuttle yang dipilih akan muncul di sini.</small>
      </div>
    );
  }

  return (
    <div className="reservation-list" aria-label="Daftar reservasi">
      {reservations.map((reservation) => {
        // Menggunakan properti sesuai dengan instruksi file JSON COTS
        const id = reservation.id;
        const name = reservation.nama ?? 'Shuttle';
        const session = reservation.kategori ?? 'Umum'; 
        const price = Number(reservation.harga ?? 0);
        const quantity = Number(reservation.qty ?? 1);
        const subtotal = price * quantity;

        // Menggunakan key dari ID saat menampilkan daftar sesuai aturan
        return (
          <article key={id} className="reservation-item">
            <div className="reservation-details">
              <div className="reservation-header">
                <h3>{name}</h3>
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => handleRemove(id)}
                >
                  Hapus
                </button>
              </div>

              <p className="reservation-meta">
                {session} • Rp{price.toLocaleString('id-ID')} / tiket
              </p>
              <p className="reservation-total">
                Subtotal: Rp{subtotal.toLocaleString('id-ID')}
              </p>
            </div>

            <div className="reservation-actions">
              <div className="quantity-control">
                {/* Menggunakan label dan input sesuai syarat soal */}
                <label htmlFor={`qty-${id}`} style={{ marginRight: '8px' }}>
                  Jumlah tiket:
                </label>
                <input
                  id={`qty-${id}`}
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(id, e)}
                  aria-label={`Jumlah tiket untuk ${name}`}
                  style={{ width: '60px', textAlign: 'center' }}
                />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default ReservationList;