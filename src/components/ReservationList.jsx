function ReservationList({
  reservations,
  onUpdateQuantity,
  onRemove,
}) {
  if (reservations.length === 0) {
    return (
      <div className="empty-state">
        <p>Belum ada reservasi.</p>
        <small>Shuttle yang dipilih akan muncul di sini.</small>
      </div>
    )
  }

  return (
    <div className="component-placeholder">
      <p>{reservations.length} reservasi siap dikelola.</p>
      <button type="button" onClick={() => onUpdateQuantity()}>
        Ubah jumlah
      </button>
      <button type="button" onClick={() => onRemove()}>
        Hapus reservasi
      </button>
    </div>
  )
}

export default ReservationList
