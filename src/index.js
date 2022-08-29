import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GeneralProvider } from "./contexts/UseGeneralContext";
import { UserProvider } from "./contexts/UseUserContext";
import MainRoutes from "./MainRoutes";

import "./all.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<UserProvider>
				<GeneralProvider>
					<div className='container'>
						<MainRoutes />
					</div>
				</GeneralProvider>
			</UserProvider>
		</BrowserRouter>
	</React.StrictMode>
);
