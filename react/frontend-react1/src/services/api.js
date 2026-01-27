const API_KEY = "a761e177f2289dbb10407e79576415bd"
const BASE_URL = "https://api.themoviedb.org/3"

// Should return data.results, not just data
export const getPopularmovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    console.log("API Response:", data) // Debug this
    return data.results  // Return the array, not the whole object
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    const data = await response.json()
    console.log("Search Response:", data) // Debug this
    return data.results  // Return the array
}
