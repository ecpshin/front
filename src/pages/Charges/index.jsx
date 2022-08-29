import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import "./styles.css";

export default function Home() {
	const { setUser, ChargesMenu, ClientsMenu, HomeMenu } = useUser();

	const navigate = useNavigate();

	function handleClose(e) {
		e.preventDefault();
		localStorage.clear();
		setUser({ user: {} });
		navigate("/");
	}

	return (
		<div className='container-home'>
			<div className='home-sidebar'>
				<nav>
					<img src={HomeMenu} alt='navicons' />
					<img
						src={ClientsMenu}
						sx={{ width: "59px", height: "74px" }}
						alt='navicons'
					/>
					<img
						className='icon-charges'
						src={ChargesMenu}
						alt='icon-charge'
					/>
				</nav>
			</div>
			<div className='home-content'>
				<h1>Home Content</h1>
			</div>
		</div>
	);
}
