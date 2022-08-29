import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useUserProvider() {
	const navigate = useNavigate();
	const [user, setUser] = useState({ user: {} });
	const [form, setForm] = useState({
		nome: "",
		cpf: "",
		email: "",
		senha: "",
		telefone: "00 0 0000 0000",
	});

	return {
		form,
		setForm,
		user,
		setUser,
		navigate,
	};
}
