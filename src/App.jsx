import { useState, useEffect } from 'react';
import header from './assets/header.jpeg';
import './App.css';
import PokemonCard from './components/PokemonCard';
import { fetchPokemons } from './service/pokemonService'; // Importa el servicio


const App = () => {
  const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
    fetchPokemons()
      .then(setPokemons)
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div class="container shadow p-0">
      <header className="header-bg">
        <img src={header} alt="header" class="w-100" />
      </header>
      <div class="row p-3 justify-content-center">
        {pokemons.map((pokemon) => (
          <div class="col-md-6 col-lg-4 mb-3">
            <PokemonCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
          </div>
        ))}
      </div>
      <footer className='footer-bg'>
        <h1>© 2025 Pokédex App</h1>
      </footer>
    </div>
  );
};
export default App;
