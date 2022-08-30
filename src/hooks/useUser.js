import { useContext } from "react";
import UserContext from "../contexts/UseUserContext";

export default function useUser() {
	return useContext(UserContext);
}
