import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useUserProvider() {
	const navigate = useNavigate();
	const [user, setUser] = useState({ user: {} });
	const [form, setForm] = useState({
		nome: "",
		cpf: "",
		email: "",
		telefone: "00 0 0000 0000",
		senha: "",
		confirmaSenha: "",
	});

	function handleInputChange(e) {
		e.preventDefault();
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
		console.log(form);
		return;
	}

	return {
		form,
		setForm,
		user,
		setUser,
		navigate,
		handleInputChange,
	};
}
