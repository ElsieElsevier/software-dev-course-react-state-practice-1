import './App.css';
import {useState} from "react";
import GenreList from "./components/GenreList";
import MovieList from "./components/MovieList";

function App() {

	const [currentGenre, setCurrentGenre] = useState("");

	return ( <>
		<div>
		<GenreList setCurrentGenre={setCurrentGenre}/>
		<MovieList currentGenre={currentGenre}/>
		</div>
	</>)
}

export default App;
