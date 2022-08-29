import { Card, CardActions, CardContent, Divider } from "@mui/material";
import "./styles.css";

export default function CardInfo() {
	return (
		<Card>
			<CardContent>
				<h1>Header</h1>
				<Divider />
				<h2>Content</h2>
				<Divider />
			</CardContent>
			<CardActions>Mais...</CardActions>
		</Card>
	);
}
