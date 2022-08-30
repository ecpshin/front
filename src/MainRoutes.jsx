import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Charges from "./pages/Charges";
import Clients from "./pages/Clients";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function MainRoutes() {
	return (
		<Routes>
			<Route path=''>
				<Route path='/' element={<SignIn />} />
				<Route path='/signup' element={<SignUp />} />
			</Route>
			<Route element={<ProtectedRoutes redirectTo={"/"} />}>
				<Route path='/home' element={<Home />} />
				<Route path='/clients' element={<Clients />} />
				<Route path='/charges' element={<Charges />} />
			</Route>
		</Routes>
	);
}

function ProtectedRoutes({ redirectTo }) {
	const isAuthenticated = localStorage.getItem("token");
	return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}
