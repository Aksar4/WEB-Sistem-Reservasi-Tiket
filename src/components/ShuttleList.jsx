function ShuttleList({ shuttles, onAdd }) {
  if (shuttles.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state__title">Data shuttle belum tersedia.</p>
        <small className="empty-state__note">Anggota 6</small>
      </div>
    )
  }

  return (
    <div className="component-placeholder">
      <p>{shuttles.length} shuttle siap ditampilkan.</p>
      <button type="button" className="btn btn--accent" onClick={onAdd}>
        Tambah shuttle
      </button>
    </div>
  )
}

export default ShuttleList
