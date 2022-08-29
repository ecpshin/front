import { useContext } from "react";
import UseGeneralContext from "../contexts/UseGeneralContext";

export default function useGeneral() {
	return useContext(UseGeneralContext);
}
