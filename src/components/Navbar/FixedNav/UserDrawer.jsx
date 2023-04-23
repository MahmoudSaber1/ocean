import {
	Avatar,
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Image,
	Text,
	Skeleton,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../../assets";
import { useStateContext } from "../../../ContextProvider";
import ConnectWallets from "../../ConnectFunctions/ConnectWallets";

const DrawerUserLinks = [
	{
		id: 1,
		rightIcon: icons.entrier,
		name: "Blogs",
		leftIcon: icons.left,
		to: "/user/entries",
	},
	{
		id: 2,
		rightIcon: icons.stories,
		name: "Stories",
		leftIcon: icons.left,
		to: "/user/stories",
	},
	{
		id: 3,
		rightIcon: icons.fav,
		name: "Favourites",
		leftIcon: icons.left,
		to: "/user/favourites",
	},
	{
		id: 4,
		rightIcon: icons.subscribes,
		name: "Subscribers",
		leftIcon: icons.left,
		to: "/user/subscribers",
	},
	{
		id: 5,
		rightIcon: icons.setting,
		name: "Settings",
		leftIcon: icons.left,
		to: "/user/settings",
	},
];

const UserDrawer = ({ name }) => {
	const { isAuth, userWallet, logout } = useStateContext();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Box
				color={"#45C3D6"}
				fontSize="2rem"
				as="i"
				className="bx bx-user"
				cursor={"pointer"}
				onClick={onOpen}
			></Box>
			<Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent backgroundColor={"#657C87"} borderRadius="md">
					<DrawerCloseButton backgroundColor={"#fff"} />
					<DrawerHeader
						borderRadius={"0 0 15px 15px"}
						backgroundColor={"#788C95"}
					>
						{isAuth === null || isAuth === false ? (
							<Skeleton rounded="full" w="60px" h="60px" />
						) : (
							<Box display="flex" gap="2">
								<Avatar
									name={
										isAuth === true
											? `${
													isAuth === true ? userWallet.address.slice(0, 4) : ""
											  }...${
													isAuth === true ? userWallet.address.slice(-4) : ""
											  }`
											: ""
									}
								/>
								<Box>
									<Text color={"#fff"}>{name ? name : "...."}</Text>
									<Text
										backgroundColor={"#AABCC4"}
										color="#657C87"
										fontSize={["sm", "md", "lg"]}
										p={["2px 10px", "2px 18px", "2px 25px"]}
										rounded={"md"}
									>
										{isAuth === true
											? `${
													isAuth === true ? userWallet.address.slice(0, 4) : ""
											  }...${
													isAuth === true ? userWallet.address.slice(-4) : ""
											  }`
											: ""}
									</Text>
								</Box>
							</Box>
						)}
					</DrawerHeader>
					{isAuth === null || isAuth === false ? (
						<Box
							display="flex"
							alignItems="center"
							h="full"
							w="full"
							justifyContent="center"
						>
							<ConnectWallets btnName="Connect Wallet" />
						</Box>
					) : (
						<>
							<DrawerBody mt="2">
								{DrawerUserLinks.map((link) => (
									<Link to={link.to} key={link.id}>
										<Box
											display={"flex"}
											alignItems="center"
											justifyContent={"space-between"}
											backgroundColor={"#AABCC4"}
											padding="2px 15px"
											rounded={"2xl"}
											color="white"
											w="full"
											mb="3"
											className="scale"
											onClick={onClose}
										>
											<Box display={"flex"} alignItems="center" gap="4">
												<Image src={link.rightIcon} />
												<Text fontSize={"1.3rem"}>{link.name}</Text>
											</Box>
											<Image src={link.leftIcon} />
										</Box>
									</Link>
								))}
							</DrawerBody>
							<DrawerFooter
								display={"flex"}
								flexDirection="column"
								justifyContent={"flex-start"}
								alignItems="flex-start"
							>
								<Link to={"/support"}>
									<Box color="white" w="full" mb="3">
										<Box display={"flex"} alignItems="center" gap="4">
											<Image src={icons.supp} />
											<Text fontSize={"1.3rem"}>Support</Text>
										</Box>
									</Box>
								</Link>

								<Box color="white" w="full" mb="3">
									<Box
										cursor={"pointer"}
										display={"flex"}
										alignItems="center"
										gap="4"
										onClick={logout}
									>
										<Image src={icons.log} />
										<Text fontSize={"1.3rem"}>Log Out</Text>
									</Box>
								</Box>
							</DrawerFooter>
						</>
					)}
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default UserDrawer;
