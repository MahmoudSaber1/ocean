/* eslint-disable no-unused-vars */
import {
	Box,
	Button,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useStateContext } from "../../ContextProvider";
import DrawHeader from "./DrawHeader";
import DrawBody from "./DrawBody";

const EntriesComponent = ({ btnName, classess }) => {
	const { userWallet, isAuth } = useStateContext();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button
				color={"white"}
				background={classess}
				className={"btnHover"}
				size={["sm", "sm", "md"]}
				onClick={onOpen}
			>
				<Box fontSize={"2xl"} as="p">
					{btnName}
				</Box>
			</Button>
			<Drawer
				size={["full"]}
				placement={"left"}
				onClose={onClose}
				isOpen={isOpen}
			>
				<DrawerOverlay />
				<DrawerContent background={`${"var(--main-bg) !important"}`}>
					<DrawerCloseButton
						size={["sm"]}
						color={"#2CADC1"}
						backgroundColor={"#fff"}
					/>
					<DrawHeader isAuth={isAuth} userWallet={userWallet} />
					<DrawBody />
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default EntriesComponent;
