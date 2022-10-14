/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Text,
	useDisclosure,
	Button,
} from "@chakra-ui/react";
// import axios from "axios";
// import React, { useEffect } from "react";
// import { useStateContext } from "../commen/Context/OceanContext";
import Seed from "./ConnectFunctions/Seed";
import Email from "./ConnectFunctions/Email";
import Kepper from "./ConnectFunctions/Kepper";
import Meta from "./ConnectFunctions/Meta";

const ConnectWallets = ({ btnName }) => {
	// const { userWallet } = useStateContext();
	const { isOpen, onOpen, onClose } = useDisclosure();

	// Check user
	// const checkUser = async () => {
	// 	const { data } = await axios(
	// 		`https://nodes-testnet.wavesnodes.com/addresses/data/3MqxhXjG6DVDwFuLsaBz7sgt38iwHj9Da7f?matches=user_${userWallet}_.%2A`
	// 	);
	// 	console.log(data);
	// };

	// useEffect(() => {
	// 	const Interval = setInterval(() => {
	// 		checkUser();
	// 	}, 5000);
	// 	return () => {
	// 		clearInterval(Interval);
	// 	};
	// }, []);

	return (
		<>
			<Button
				color={"white"}
				background={`${"var(--main-color) !important"}`}
				className={"btnHover"}
				size={["sm", "sm", "md"]}
				onClick={() => {
					onOpen();
				}}
			>
				<p>{btnName}</p>
			</Button>

			<Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent
					backgroundColor={"#657C87"}
					borderRadius="md"
					margin="auto"
					width={["100%", "70%", "50%"]}
				>
					<DrawerCloseButton backgroundColor={"#fff"} />
					<DrawerHeader
						borderRadius={"0 0 15px 15px"}
						backgroundColor={"#788C95"}
						color="white"
					>
						Connect Wallet
					</DrawerHeader>
					<DrawerBody mt="2">
						<Email />
						<Seed />
						<Meta />
						<Kepper />
						<Text
							color="white"
							textDecoration={"underline"}
							textAlign="center"
							mt="2"
							cursor={"pointer"}
							fontSize={["sm", "md", "lg"]}
						>
							I Don't Have A Wallet?
						</Text>
						<Text
							fontSize={["sm", "md", "lg"]}
							color="white"
							textAlign="center"
							my="5"
						>
							By Connecting wallet you agree to the Terms Of Service and Privacy
							Policy
						</Text>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default ConnectWallets;
