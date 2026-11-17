import {movies} from "../mock-data/movies.js"

function MovieList({currentGenre}) {

    const filterMovies = movies.filter(movie =>
        movie.genre === currentGenre)

    return(
        <div>
            <h1>Movies</h1>

            {filterMovies.length === 0 ? (
                <p>No movies found for this genre!</p>
            ) : (
                <ul>
                    {filterMovies.map(movie => (
                        <li key={movie.id}>
                            {movie.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default MovieList;