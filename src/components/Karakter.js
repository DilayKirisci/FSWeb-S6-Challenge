import AccordionChar from "./Accordion.js";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Karakter() {
	const [karakterler, setKarakterler] = useState([]);

	useEffect(() => {
		axios.get("https://swapi.dev/api/people/").then(function (response) {
			console.log(response.data);
			setKarakterler(response.data);
		});
	}, []);

	return (
		<div>
			{karakterler.map((karakter) => (
				<AccordionChar char={karakter} key={karakter.url} />
			))}
		</div>
	);
}
