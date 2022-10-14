import { Box, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { icons } from "../../assets";
import UserDrawer from "./FixedComponents/UserDrawer";
import "./downNav.css";
import NavMenu from "./FixedComponents/NavMenu";
import { Link } from "react-router-dom";

const FixedNavbar = () => {
	return (
		<>
			<VStack alignItems={"center"} justifyContent={"center"}>
				<Box className="nav__down" zIndex="9" w={["100%", "80%", "50%"]} p="4">
					<Box cursor={"pointer"}>
						{/* User */}
						<UserDrawer />
					</Box>
					<Box position={"relative"}>
						<Link to="/">
							<Box className="downNav__center">
								<Image src={icons.up} />
								<Image src={icons.sq} />
							</Box>
						</Link>
					</Box>
					<Box>
						<NavMenu />
					</Box>
				</Box>
			</VStack>
		</>
	);
};

export default FixedNavbar;
