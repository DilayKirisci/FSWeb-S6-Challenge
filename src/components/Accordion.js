import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FilmsAccordion from "./FilmsAccordion.js";

export default function AccordionChar(props) {
	const { char } = props;

	return (
		<div style={{ width: "80%", margin: "10px auto" }}>
			<Accordion key={char.url}>
				<AccordionSummary>
					<Typography>{char.name.toUpperCase()}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>height:{char.height}</Typography>
				</AccordionDetails>
				<AccordionDetails>
					<Typography>mass:{char.mass}</Typography>
				</AccordionDetails>
				<AccordionDetails>
					<Typography>hair:{char.hair_color}</Typography>
				</AccordionDetails>
				<AccordionDetails>
					<Typography>skin: {char.skin_color}</Typography>
				</AccordionDetails>
				<AccordionDetails>
					<Typography>eye: {char.eye_color}</Typography>
				</AccordionDetails>
				<AccordionDetails>
					<Typography>year:{char.birth_year}</Typography>
				</AccordionDetails>
				<AccordionDetails>
					<Accordion key={char.url + "f"}>
						<AccordionSummary>
							<Typography>Films</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<FilmsAccordion char={char} />
						</AccordionDetails>
					</Accordion>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
