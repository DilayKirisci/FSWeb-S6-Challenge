import React from "react";
import Karakter from "./components/Karakter.js";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
	const [karakterler, setKarakterler] = useState([]);
	const [filmler, setFilmler] = useState([]);

	useEffect(() => {
		axios.get("https://swapi.dev/api/people/").then(function (response) {
			setKarakterler(response.data);
		});
		axios.get("https://swapi.dev/api/films/").then(function (response) {
			setFilmler(response.data);
		});
	}, []);

	return (
		<div className="App">
			<h1 className="Header">Karakterler</h1>
			<Karakter chars={karakterler} />
		</div>
	);
};

export default App;
