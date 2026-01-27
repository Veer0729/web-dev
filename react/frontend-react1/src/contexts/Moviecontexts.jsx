import {createContext, useState, useContext, useEffect} from "react"

const Moviecontext = createContext()
export const useMoviecontext = () => useContext(Moviecontext)

export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favourites")
        if (storedFavs) setFavourites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])

    const addtoFavourites = (movie) => {
        setFavourites(prev => [...prev, movie])
    }

    const removefromFavourites = (movieID) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieID))
    }

    const isFavourite = (movieID) => {
        return favourites.some(movie => movie.id === movieID)
    }

    const value = {
        favourites,
        addtoFavourites,
        removefromFavourites,
        isFavourite
    }

    return <Moviecontext.Provider value={value}>
        {children}
    </Moviecontext.Provider>
}
