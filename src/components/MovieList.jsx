import movie from "../mock-data/movies.js"

function MovieList({movies}) {
    return(
        <div>
            <h1>Genres</h1>
            
            {movies === 0 ?(
                <p>No movies exists for this genre</p>
            ):(
                <ul>
                    {movies.map(movie => (
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
