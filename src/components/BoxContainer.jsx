import { Box, Container, VStack } from "@chakra-ui/react";
import React from "react";

const BoxContainer = ({ children }) => {
	return (
		<>
			<VStack background={`${"var(--main-bg) !important"}`}>
				<Container maxW={"6xl"}>
					<Box
						pl={["10px", "30px", "50px"]}
						pr={["10px", "30px", "50px"]}
						pt={["10px", "10px", "10px"]}
						pb={["10px", "10px", "10px"]}
						className="glass__Bg"
					>
						{children}
					</Box>
				</Container>
			</VStack>
		</>
	);
};

export default BoxContainer;
