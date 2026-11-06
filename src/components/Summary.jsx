function Summary({
  totalTickets,
  subtotal,
  administrationFee,
  totalPayment,
}) {
  return (
    <div className="summary" aria-label="Ringkasan pembayaran">
      <div className="summary-row">
        <span>Jumlah tiket</span>
        <strong>{totalTickets}</strong>
      </div>
      <div className="summary-row">
        <span>Subtotal</span>
        <strong>Rp{subtotal.toLocaleString('id-ID')}</strong>
      </div>
      <div className="summary-row">
        <span>Biaya administrasi</span>
        <strong>Rp{administrationFee.toLocaleString('id-ID')}</strong>
      </div>
      <div className="summary-total">
        <span>Total pembayaran</span>
        <strong>Rp{totalPayment.toLocaleString('id-ID')}</strong>
      </div>
    </div>
  )
}

export default Summary
