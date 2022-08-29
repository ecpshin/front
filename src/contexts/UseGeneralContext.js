import { createContext } from "react";
import useGeneralProvider from "../hooks/useGeneralProvider";

const GeneralContext = createContext(useGeneralProvider);

export function GeneralProvider(props) {
	const provider = useGeneralProvider();
	return (
		<GeneralContext.Provider value={provider}>
			{props.children}
		</GeneralContext.Provider>
	);
}

export default GeneralContext;
