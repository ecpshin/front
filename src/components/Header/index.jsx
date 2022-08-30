import LogoutIcon from "@mui/icons-material/Logout";
import UserAvatar from "../Avatar";
import "./styles.css";

export default function Header() {
	return (
		<header className='header'>
			<h1>Header Logo</h1>
			<nav className='header-menu'>
				<UserAvatar />
				<LogoutIcon
					sx={{
						width: "5rem",
						height: "5.5rem",
						color: "#000",
						fontSize: "3.8rem",
						borderRadius: "15%",
						border: "1px solid #ccc",
						padding: "0.5rem",
					}}
					className='header-menu_logout'
				/>
			</nav>
		</header>
	);
}
