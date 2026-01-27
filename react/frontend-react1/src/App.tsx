import './css/App.css'
import Home from "./pages/Home"
import Fav from "./pages/Fav"
import NavBar from "./components/Navbar"
import {Route, Routes} from 'react-router-dom';
import {MovieProvider} from "./contexts/Moviecontexts"

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </MovieProvider>
  );
}

export default App;
