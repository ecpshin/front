import { Button, Card, CardContent, TextField } from "@mui/material";
import { Box } from "@mui/system";
import useUser from "../../hooks/useUser";

import "./styles.css";

export default function CardEditUser() {
	const { form, setForm, handleInputChange, api } = useUser();

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const response = await api.post("/users", form);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className='container-edit-user'>
			<Card sx={{ width: "50%", padding: "25px" }}>
				<CardContent
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<form
						style={{ width: "100%" }}
						onSubmit={(e) => handleSubmit(e)}
					>
						<TextField
							name='nome'
							type='text'
							value={form.nome}
							placeholder='Nome'
							onChange={(e) => handleInputChange(e)}
							required
						/>
						<TextField
							name='email'
							type='email'
							value={form.email}
							placeholder='E-mail'
							required
						/>
						<Box
							border={"1px solid #ccc"}
							columnGap={1.5}
							display={"flex"}
						>
							<TextField
								name='cpf'
								type='text'
								value={form.cpf}
								placeholder='CPF'
								required
								style={{ width: "100%" }}
							/>
							<TextField
								name='telefone'
								type='text'
								value={form.telefone}
								placeholder='Telefone'
								style={{ width: "100%" }}
							/>
						</Box>
						<TextField
							name='senha'
							type={"password"}
							value={form.senha}
							placeholder='Senha'
							required
						/>
						<TextField
							name='repetirSenha'
							type={"password"}
							value={form.repetirSenha}
							placeholder='Confirme a senha'
							required
						/>
						<Button
							variant='contained'
							color='success'
							onClick={handleSubmit}
						>
							Atualizar
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
