import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import useGeneral from "../../hooks/useGeneral";

import "./styles.css";

export default function Clients() {
	const { api, clientsForm, handleChangeClientsForm } = useGeneral();

	async function handleRegisterClient(e) {
		e.preventDefault();

		try {
			const response = await api.post("/clients", clientsForm, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			console.log(response.data);
		} catch (error) {
			console.log(error.response);
		}
	}

	return (
		<div className='container-clients'>
			<Sidebar />
			<div className='client-content'>
				<Header />
				<main className='main-content'>
					<form
						onSubmit={(e) => handleRegisterClient(e)}
						className='clients-form'
					>
						<input
							type='text'
							name='nome'
							value={clientsForm.nome}
							onChange={(e) => handleChangeClientsForm(e)}
							required
							placeholder='Nome'
						/>
						<input
							type='email'
							name='email'
							value={clientsForm.email}
							onChange={(e) => handleChangeClientsForm(e)}
							required
							placeholder='E-mail'
						/>
						<input
							type='text'
							name='cpf'
							value={clientsForm.cpf}
							onChange={(e) => handleChangeClientsForm(e)}
							maxLength='14'
							required
							placeholder='cpf'
						/>
						<input
							type='text'
							name='telefone'
							maxLength={18}
							value={clientsForm.telefone}
							onChange={(e) => handleChangeClientsForm(e)}
							placeholder='Telefone'
						/>
						<input
							type='text'
							name='cep'
							value={clientsForm.cep}
							onChange={(e) => handleChangeClientsForm(e)}
							placeholder='CEP'
						/>
						<input
							type='text'
							name='logradouro'
							value={clientsForm.logradouro}
							onChange={(e) => handleChangeClientsForm(e)}
							placeholder='Endereço'
						/>
						<input
							type='text'
							name='complemento'
							value={clientsForm.complemento}
							onChange={(e) => handleChangeClientsForm(e)}
							placeholder='Complemento'
						/>
						<input
							type='text'
							name='bairro'
							value={clientsForm.bairro}
							onChange={(e) => handleChangeClientsForm(e)}
							placeholder='Bairro'
						/>
						<input
							type='text'
							name='cidade'
							value={clientsForm.cidade}
							onChange={(e) => handleChangeClientsForm(e)}
							placeholder='Cidade'
						/>
						<input
							type='text'
							name='estado'
							value={clientsForm.uf}
							onChange={(e) => handleChangeClientsForm(e)}
							placeholder='Estado'
						/>
						<button type='submit' onClick={handleRegisterClient}>
							Cadastrar
						</button>
					</form>
				</main>
			</div>
		</div>
	);
}
