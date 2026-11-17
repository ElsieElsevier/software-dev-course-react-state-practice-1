import './App.css';
import {useState} from "react";
import GenreList from "./components/GenreList";
import MovieList from "./components/MovieList";

function App() {

	const [currentGenre, setCurrentGenre] = useState("");

	return <>
		<GenreList setCurrentGenre={setCurrentGenre}/>
		<MovieList currentGenre={currentGenre}/>
	</>
}

export default App;
