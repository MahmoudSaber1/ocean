import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Info from "./Info";
import UserBlock from "./UserBlock";

const UserAcounts = () => {
	return (
		<>
			<UserBlock name="Accounts">
				<Info
					name="Verify your email address"
					disc="Connect and verify your email to receive notifications from Mirror.."
					type={"email"}
					holder="Enter email address"
				/>
				<Box py="2">
					<Button w="full">Verify Email</Button>
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
						name="Telegram"
						state="OPtional"
						disc="A brief summary of who you are. Accepts basic markdown."
						type={"text"}
						holder="Telegram Link"
						val={"http://t.me/sulaimansu"}
					/>
					<Info
						name="Twitter"
						state="OPtional"
						disc="A brief summary of who you are. Accepts basic markdown."
						type={"text"}
						holder="Twitter ID"
						val={"@Sulaima65699790"}
					/>
				</Box>
				<Box py="5">
					<Button>Save</Button>
				</Box>
			</UserBlock>
		</>
	);
};

export default UserAcounts;
