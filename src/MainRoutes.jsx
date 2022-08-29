import { Navigate, Outlet, Route, Routes } from "react-router-dom";
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
			</Route>
		</Routes>
	);
}

function ProtectedRoutes({ redirectTo }) {
	const isAuthenticated = localStorage.getItem("token");
	return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}
