import MovieCard from "../components/MovieCard"
import { useEffect, useState } from "react";
import '../css/Home.css'
import {getPopularmovies, searchMovies} from "../services/api"


function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setmovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularmovies()
                setmovies(popularMovies) 
            } catch(err) {
                console.log(err)
                setError("failed to load movies...")
            } finally {
                setLoading(false)
            }
        }
        
        loadPopularMovies()
    }, [])

    const handlesearch = async (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return
        setLoading(true)

        try{
            const searchResult = await searchMovies(searchQuery)
            setmovies(searchResult)
            setError(null)
        } catch (err){
            console.log(err)
            setError("Sorry can't search the movie....")
        } finally{
            setLoading(false)
        }
    };

    return <div className="home">
        <form onSubmit={handlesearch} className="search-form">
            <input type="text" placeholder="Search here..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>

        {error && <div className = "error-message">{error}</div>}

        {loading ? <div className="loading">loading...</div> : (
    <div className="Movies-grid">
        {movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
)}
    </div>
}

export default Home