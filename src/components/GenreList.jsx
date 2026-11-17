import {genres} from "../mock-data/genres.js"

function GenreList({setCurrentGenre}) {
    return(
        <div>
            <h1>Genres</h1>
            <ul>
                {genres.map(genre => (
                    <li key={genre.id} 
                        onClick={() => setCurrentGenre(genre.name)}
                        >
                        {genre.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GenreList;