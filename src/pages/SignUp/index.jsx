import useUser from "../../hooks/useUser";
import "./styles.css";

export default function SignUp() {
	const { Card, CardContent, CardActions } = useUser();
	return (
		<div className='container-signup'>
			<Card>
				<CardContent>
					<form>
						<label></label>
					</form>
				</CardContent>
				<CardActions>
					<h1>Ok</h1>
				</CardActions>
			</Card>
		</div>
	);
}
