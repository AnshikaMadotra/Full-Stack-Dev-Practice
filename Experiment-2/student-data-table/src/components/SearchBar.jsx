const SearchBar = ({ search, setSearch, disabled }) => {
  return (
    <input
      type="text"
      className="search"
      placeholder="🔍 Search by name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      disabled={disabled}
    />
  );
};

export default SearchBar;