import { Card, CardActions, CardContent, TextField } from "@mui/material";
import { useState } from "react";
import ChargesActive from "../assets/charges-active.svg";
import Charges from "../assets/charges.svg";
import ClientsActive from "../assets/clients-active.svg";
import Clients from "../assets/clients.svg";
import HomeActive from "../assets/home-active.svg";
import Home from "../assets/home.svg";

export default function useGeneralProvider() {
	const [activeMenu, setActiveMenu] = useState({
		home: true,
		clients: false,
		charges: false,
	});
	return {
		activeMenu,
		setActiveMenu,
		Charges,
		ChargesActive,
		Clients,
		ClientsActive,
		Home,
		HomeActive,
		Card,
		CardActions,
		CardContent,
		TextField,
	};
}
