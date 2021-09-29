function SearchBar(props) {
  return (
    <form>
      <input
        type="text" placeholder="Enter search terms"
        onChange={(event) => props.updateSearch(event.target.value)}
      />
    </form>
  );
}

export default SearchBar;
