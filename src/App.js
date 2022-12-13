import './App.css';
import Pokedex from "./Pages/pokedex";
import ListingPokemon from "./Pages/listingPokemon";
import ManagePokemon from "./Pages/managePokemon";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";

function App(props) {
  return (
  <Router>
    <nav>
      <ul>
          <li><Link to="/">ListingPokemon</Link></li>
          <li><Link to="/ManagePokemon">ManagePokemon</Link></li>
          <li><Link to="/Pokedex">Pokedex</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route exact path="/">
        <ListingPokemon />
      </Route>
      <Route path="/ManagePokemon">
        <ManagePokemon />
      </Route>
      <Route path="/Pokedex">
        <Pokedex />
      </Route>
    </Switch>
  </Router>   
    
  );
}

export default App;