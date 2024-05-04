function App () {
  return `
    <div id="root">
      ${Header()}
      ${SearchBar()}
      ${PokemonList()}
    </div>
  `
}
export default App;