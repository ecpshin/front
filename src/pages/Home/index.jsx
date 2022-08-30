import CardEditUser from "../../components/CardEditUSer";
import Sidebar from "../../components/Sidebar";
import "./styles.css";

export default function Home() {
	return (
		<div className='container-home'>
			<Sidebar />
			<div className='home-content'>
				<h1>Home Content</h1>
				<CardEditUser />
			</div>
		</div>
	);
}
