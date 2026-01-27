import '../css/MovieCard.css'
import { useMoviecontext } from '../contexts/Moviecontexts'
 

function MovieCard({movie}) {
    const {addtoFavourites, removefromFavourites, isFavourite} = useMoviecontext()
    const favourite = isFavourite(movie.id)

    function btnclicked(e){
        e.preventDefault()
        if (favourite) removefromFavourites(movie.id)
        else addtoFavourites(movie)
        
    }

    return <div className = "movie-card">
        <div className="movie-poster">
            <img src={`https:/image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className= {`fav-movie ${favourite ? "active" : ""}`} onClick={btnclicked}>
                    ❤️
                </button>
            </div>
        </div>
        <div className="Movie-desc">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard