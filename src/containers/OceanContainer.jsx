import { Box, Container, VStack } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../components";

const OceanContainer = ({ children, navBtn }) => {
	return (
		<>
			<VStack background={`${"var(--main-bg) !important"}`}>
				<Container maxW={"7xl"}>
					<Box
						pl={["10px", "30px", "50px"]}
						pr={["10px", "30px", "50px"]}
						pt={["10px", "10px", "10px"]}
						pb={["10px", "10px", "10px"]}
						className="glass__Bg"
						borderRadius={["0 0 25px 25px", "0 0 35px 35px", "0 0 50px 50px"]}
					>
						<Navbar btn={navBtn} />
						{children}
					</Box>
				</Container>
			</VStack>
		</>
	);
};

export default OceanContainer;
