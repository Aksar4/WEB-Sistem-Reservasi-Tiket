
function SearchFilter(props) {
  const {
    search,
    onSearch,
    selected,
    filter,
    totalResult,
  } = props;

  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    filter(event.target.value);
  };

  return (
    <div className="search-filter">
      <label className="field">
        <span>Cari nama shuttle</span>
        <input
          type="search"
          placeholder="Contoh: Shuttle Utara"
          value={search}
          onChange={handleSearchChange}
        />
      </label>

      <label className="field">
        <span>Sesi perjalanan</span>
        <select
          value={selected}
          onChange={handleFilterChange}
        >
          <option value="Semua">Semua</option>
          <option value="Pagi">Pagi</option>
          <option value="Siang">Siang</option>
          <option value="Sore">Sore</option>
        </select>
      </label>

      <p className="result-count">
        {totalResult} hasil
      </p>
    </div>
  );
}

export default SearchFilter;