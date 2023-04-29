import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Info from "./Info";
import UserBlock from "./UserBlock";

const UserAcounts = ({ accountData, handleChangeAccount, invokePublisher }) => {
	return (
		<>
			<UserBlock name="Accounts">
				<Info
					name="email"
					name2="Verify your email address"
					disc="Connect and verify your email to receive notifications from Mirror.."
					type={"email"}
					state="Required"
					holder="Enter email address"
					val={accountData.email}
					handelChange={handleChangeAccount}
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
						name="telegram"
						state="OPtional"
						disc="A brief summary of who you are. Accepts basic markdown."
						type={"text"}
						holder="Telegram Link : http://t.me/sulaimansu"
						val={accountData.telegram}
						handelChange={handleChangeAccount}
					/>
					<Info
						name="twitter"
						state="OPtional"
						disc="A brief summary of who you are. Accepts basic markdown."
						type={"text"}
						holder="Twitter ID : @Sulaima65699790"
						val={accountData.twitter}
						handelChange={handleChangeAccount}
					/>
				</Box>
				<Box py="5">
					<Button onClick={() => invokePublisher()}>Save</Button>
				</Box>
			</UserBlock>
		</>
	);
};

export default UserAcounts;
