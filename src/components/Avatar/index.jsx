import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import * as React from "react";

function stringAvatar(name) {
	return {
		sx: {
			bgcolor: "#000",
		},
		children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
	};
}

export default function UserAvatar() {
	return (
		<Stack direction='row' spacing={2}>
			<Avatar {...stringAvatar("Francisco Shin")} />
		</Stack>
	);
}
