/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Image, VStack } from "@chakra-ui/react";
import React from "react";
import UserDrawer from "./UserDrawer";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";
import { icons } from "../../../assets";

const FixedNavbar = () => {
	return (
		<>
			<VStack
				display={["flex", "flex", "flex", "none"]}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<Box className="nav__down" zIndex="9" w={["100%", "80%", "50%"]} p="4">
					<Box cursor={"pointer"} id="four">
						{/* User */}
						<UserDrawer />
					</Box>
					<Box position={"relative"} id="tow">
						<Link to="/">
							<Box className="downNav__center">
								<Image src={icons.arrowUp} />
								<Image src={icons.sq} />
							</Box>
						</Link>
					</Box>
					<Box id="one">
						<NavMenu />
					</Box>
				</Box>
			</VStack>
		</>
	);
};

export default FixedNavbar;
