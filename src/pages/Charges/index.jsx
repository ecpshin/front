import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "./styles.css";

export default function Charges() {
	return (
		<div className='container-charges'>
			<Sidebar />
			<div className='charges-content'>
				<Header />
				<main className='main-content'>
					<h1>Charges</h1>
				</main>
			</div>
		</div>
	);
}
