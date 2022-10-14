import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../assets";

const Navbar = ({ btn }) => {
	return (
		<>
			<Flex
				alignItems={"center"}
				justifyContent="space-between"
				height={"64px"}
			>
				<Link to="/">
					<Box display={"flex"} alignItems="center" justifyContent={"center"}>
						<Box
							width={["40px", "40px", "60px"]}
							height={["40px", "40px", "60px"]}
							rounded="full"
							display={"flex"}
							alignItems="center"
							justifyContent={"center"}
							backgroundColor={"white"}
							boxShadow="base"
							zIndex={"2"}
						>
							<Image w={["20px", "20px", "40px"]} src={icons.icon} />
						</Box>
						<Text
							padding={"1px 35px"}
							rounded="full"
							fontSize={["1.1rem", "1.2rem", "1.5rem"]}
							backgroundColor="white"
							position={"relative"}
							left="-20px"
							color={`${"var(--txt-color)"}`}
							fontWeight="600"
							letterSpacing={"1px"}
							boxShadow="base"
						>
							Ocean
						</Text>
					</Box>
				</Link>
				{btn}
			</Flex>
		</>
	);
};

export default Navbar;
