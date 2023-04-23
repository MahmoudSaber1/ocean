import { Avatar, Box, Button, DrawerHeader, Text } from "@chakra-ui/react";
import React from "react";

const DrawHeader = ({ isAuth, userWallet, name }) => {
	return (
		<>
			<DrawerHeader
				borderRadius={"0 0 5px 5px"}
				background={`${"var(--main-bg-2) !important"}`}
			>
				<Box display="flex" gap="2">
					<Avatar
						name={
							isAuth === true
								? `${isAuth === true ? userWallet.address.slice(0, 4) : ""}...${
										isAuth === true ? userWallet.address.slice(-4) : ""
								  }`
								: ""
						}
					/>
					<Box width="full">
						<Text fontSize={["md", "lg", "xl"]} color={"#fff"}>
							{name ? name : "...."}
						</Text>
						<Box
							display={"flex"}
							alignItems="center"
							justifyContent={"space-between"}
							width="full"
						>
							<Text
								backgroundColor={"#AABCC4"}
								color="#657C87"
								fontSize={["sm", "md", "lg"]}
								p={["2px 10px", "2px 18px", "2px 25px"]}
								rounded={"md"}
							>
								{isAuth === true
									? `${userWallet.address.slice(
											0,
											4
									  )}...${userWallet.address.slice(-4)}`
									: ""}
							</Text>
							<Button
								color={"white"}
								background={`${"var(--main-bg-3) !important"}`}
								className={"btnHover"}
								size={["sm"]}
								// onClick={() => pushData()}
							>
								<Box fontSize={["lg", "xl", "2xl"]} as="p">
									Publish
								</Box>
							</Button>
						</Box>
					</Box>
				</Box>
			</DrawerHeader>
		</>
	);
};

export default DrawHeader;
