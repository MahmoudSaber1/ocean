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
	Box,
} from "@chakra-ui/react";
import React from "react";
import Seed from "./Seed";
import Email from "./Email";
import Kepper from "./Kepper";
import Meta from "./Meta";

const ConnectWallets = ({ btnName }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	// Check user

	return (
		<>
			<Box id="three">
				<Button
					color={"white"}
					background={`${"var(--main-bg-3) !important"}`}
					className={"btnHover"}
					size={["sm", "sm", "md"]}
					onClick={() => {
						onOpen();
					}}
				>
					<p>{btnName}</p>
				</Button>
			</Box>

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
