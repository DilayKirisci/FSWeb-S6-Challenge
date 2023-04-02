import { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function FilmsAccordion(props) {
	const { char } = props;
	const [filmler, setFilmler] = useState([]);

	useEffect(() => {
		axios
			.get("https://swapi.dev/api/films/")
			.then(function (response) {
				setFilmler(response.data[0].results);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	// Filter the films array based on whether the title property of the film is included in the char.films array
	const filteredFilms = filmler.filter((film) =>
		char.films.includes(film.title)
	);

	return (
		<div style={{ width: "80%", margin: "10px auto" }}>
			{filteredFilms.length > 0 ? (
				filteredFilms.map((film, i) => {
					return (
						<Accordion key={film.url}>
							<AccordionSummary>
								<Typography>{film.title}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>{film.director}</Typography>
							</AccordionDetails>
							<AccordionDetails>
								<Typography>{film.release_date}</Typography>
							</AccordionDetails>
							<AccordionDetails>
								<Typography>{film.opening_crawl}</Typography>
							</AccordionDetails>
						</Accordion>
					);
				})
			) : (
				<Typography>No films found for this character</Typography>
			)}
		</div>
	);
}
