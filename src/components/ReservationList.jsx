function ReservationList({
  reservations,
  onUpdateQuantity,
  onRemove,
}) {
  if (reservations.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state__title">Belum ada reservasi.</p>
        <small className="empty-state__note">Shuttle yang dipilih akan muncul di sini.</small>
      </div>
    )
  }

  return (
    <div className="component-placeholder">
      <p>{reservations.length} reservasi siap dikelola.</p>
      <button type="button" className="btn btn--ghost" onClick={() => onUpdateQuantity()}>
        Ubah jumlah
      </button>
      <button type="button" className="btn btn--ghost" onClick={() => onRemove()}>
        Hapus reservasi
      </button>
    </div>
  )
}

export default ReservationList
