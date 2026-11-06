function ShuttleList({ shuttles, onAdd }) {
  if (shuttles.length === 0) {
    return (
      <div className="empty-state">
        <p>Data shuttle belum tersedia.</p>
        <small>Anggota 6</small>
      </div>
    )
  }

  return (
    <div className="component-placeholder">
      <p>{shuttles.length} shuttle siap ditampilkan.</p>
      <button type="button" onClick={onAdd}>
        Tambah shuttle
      </button>
    </div>
  )
}

export default ShuttleList
