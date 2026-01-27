import '../css/Favourite.css'
import { useMoviecontext } from "../contexts/Moviecontexts";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const { favourites } = useMoviecontext();

  if (favourites) {
    return (
      <div className="favourites">
        <h2>Your Favourites</h2>
        <div className="movies-grid">
          {favourites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favourites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  );
}

export default Favourites;