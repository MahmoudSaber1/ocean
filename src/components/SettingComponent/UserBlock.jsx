import { Box, Text } from "@chakra-ui/react";
import React from "react";

const UserBlock = ({ name, children }) => {
	return (
		<>
			<Box
				backgroundColor={"#8DBBC2"}
				width={["100%"]}
				rounded="lg"
				boxShadow={"base"}
				px={["2", "2", "5"]}
			>
				<Box position={"relative"} w="fit-content" top="-20px" left="15px">
					<Text
						background={"#E2E7EC"}
						color={"#1B6173"}
						padding={"10px 35px"}
						rounded="full"
						fontSize={["md", "lg", "xl"]}
					>
						{name}
					</Text>
				</Box>
				{children}
			</Box>
		</>
	);
};

export default UserBlock;
