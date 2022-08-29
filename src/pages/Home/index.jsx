import { useEffect } from "react";
import useGeneral from "../../hooks/useGeneral";
import useUser from "../../hooks/useUser";
import "./styles.css";

export default function Home() {
	const {
		activeMenu,
		setActiveMenu,
		Charges,
		ChargesActive,
		Clients,
		ClientsActive,
		Home,
		HomeActive,
	} = useGeneral();

	const { setUser, navigate } = useUser();

	useEffect(
		function init() {
			setActiveMenu({
				home: true,
				clients: false,
				charges: false,
			});
		},
		[setActiveMenu]
	);

	function handleClose(e) {
		e.preventDefault();
		localStorage.clear();
		setUser({ user: {} });
		navigate("/");
	}

	function handleOnClickIconMenu(name) {
		console.log(name);
		const atual = { ...activeMenu };
		for (let item in atual) {
			if (item === name) {
				atual[name] = true;
			} else {
				atual[item] = false;
			}
		}
		setActiveMenu(atual);
	}

	return (
		<div className='container-home'>
			<div className='home-sidebar'>
				<nav className='navbar'>
					<div className={activeMenu.home && "item-active"}>
						<img
							name='home'
							src={activeMenu.home ? HomeActive : Home}
							alt='icon-home'
							onClick={(e) =>
								handleOnClickIconMenu(e.target.name)
							}
						/>
					</div>
					<div className={activeMenu.clients && "item-active"}>
						<img
							name='clients'
							src={activeMenu.clients ? ClientsActive : Clients}
							alt='icon-clients'
							onClick={(e) =>
								handleOnClickIconMenu(e.target.name)
							}
						/>
					</div>
					<div className={activeMenu.charges && "item-active"}>
						<img
							name='charges'
							className='icon-charges'
							src={activeMenu.charges ? ChargesActive : Charges}
							alt='icon-charge'
							onClick={(e) =>
								handleOnClickIconMenu(e.target.name)
							}
						/>
					</div>
				</nav>
			</div>
			<div className='home-content'>
				<h1>Home Content</h1>
				<button onClick={(e) => handleClose(e)}>Fechar</button>
			</div>
		</div>
	);
}
