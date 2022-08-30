import { Card, CardContent } from "@mui/material";
import useUser from "../../hooks/useUser";
import api from "../../service/api";
import "./styles.css";

export default function CardForm() {
	const { form, setForm, setUser, navigate } = useUser();
	function handleClearForm() {
		setForm({
			nome: "",
			cpf: "",
			email: "",
			telefone: "00 0 0000 0000",
			senha: "",
			confirmaSenha: "",
		});
		return;
	}

	async function handleOnSubmitForm(e) {
		e.preventDefault();
		const userFormData = {
			email: form.email,
			senha: form.senha,
		};

		try {
			const response = await api.post("/login", userFormData);
			const { user: userData, token } = response.data;
			localStorage.setItem("token", token);
			setUser(userData);
			handleClearForm();
			navigate("/home");
			return;
		} catch (e) {
			window.alert(e.response.data);
		}
	}

	function handleOnInputChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
		return;
	}

	return (
		<Card className='card-form'>
			<CardContent>
				<h1 className='signin-title'>Acessar Sistema</h1>
				<form onSubmit={(e) => handleOnSubmitForm(e)}>
					<input
						id='email'
						name='email'
						type='email'
						value={form.email}
						placeholder='E-mail'
						onChange={(e) => handleOnInputChange(e)}
					/>
					<input
						id='senha'
						name='senha'
						type='password'
						value={form.senha}
						onChange={(e) => handleOnInputChange(e)}
						placeholder='Senha'
					/>
					<button
						type='submit'
						onClick={(e) => handleOnSubmitForm(e)}
					>
						Entrar
					</button>
				</form>
			</CardContent>
		</Card>
	);
}
