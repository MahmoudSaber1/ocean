import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Info from "./Info";
import UserBlock from "./UserBlock";

const UserDisplay = () => {
	return (
		<>
			<UserBlock name="Display">
				<Box
					display={"flex"}
					flexDirection={["column", "column", "row"]}
					gap="5"
					alignItems={"center"}
					justifyContent="space-between"
					w={"full"}
				>
					<Info
						name="Name"
						state="Required"
						disc="What do you want to be known as? This can be either you personally, or the name of a project you’re looking to create."
						type={"text"}
						holder="Enter your Name"
						val={"GOGO"}
					/>
					<Info
						name="Bio"
						state="OPtional"
						disc="A brief summary of who you are. Accepts basic markdown."
						type={"text"}
						holder="Enter your BIO"
						val={"........"}
					/>
				</Box>
				<Box
					display={"flex"}
					flexDirection={["column", "column", "row"]}
					gap="5"
					alignItems={"center"}
					justifyContent="space-between"
					w={"full"}
				>
					<Info
						name="Googl Analytics UAID"
						state="OPtional"
						disc="Basic support for Google Analytics. Must be a Universal Analytics ID"
						type={"text"}
						holder="Enter your Name"
						val={"UA-000000-01"}
					/>
					<Info
						name="Yandex Analytics"
						state="OPtional"
						disc="Basic support for Yandex Analytics. Must be a Universal Analytics ID.."
						type={"text"}
						val={"UA-000000-01"}
					/>
				</Box>
				<Box py="5">
					<Button>Save</Button>
				</Box>
			</UserBlock>
		</>
	);
};

export default UserDisplay;
