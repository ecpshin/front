import { Card, CardActions, CardContent, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChargesActive from "../assets/charges-active.svg";
import Charges from "../assets/charges.svg";
import ClientsActive from "../assets/clients-active.svg";
import Clients from "../assets/clients.svg";
import HomeActive from "../assets/home-active.svg";
import Home from "../assets/home.svg";
import api from "../service/api";

export default function useGeneralProvider() {
	const navigate = useNavigate();
	const [activeMenu, setActiveMenu] = useState({
		home: true,
		clients: false,
		charges: false,
		page: "/home",
	});
	const [clientsForm, setClientsForm] = useState({
		nome: "",
		cpf: "",
		telefone: "",
		email: "",
		cep: "",
		logradouro: "",
		complemento: "",
		bairro: "",
		cidade: "",
		estado: "",
	});

	const [chargesForm, setChargesForm] = useState({});

	function handleChangeClientsForm(event) {
		setClientsForm({
			...clientsForm,
			[event.target.name]: event.target.value,
		});
	}
	return {
		api,
		clientsForm,
		setClientsForm,
		activeMenu,
		setActiveMenu,
		chargesForm,
		setChargesForm,
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
		navigate,
		handleChangeClientsForm,
	};
}
