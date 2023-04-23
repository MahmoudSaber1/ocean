import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

const BoxContainer = ({ name, children, hide }) => {
	return (
		<>
			<VStack
				alignItems={"center"}
				justifyContent="center"
				pt="10"
				pb="10"
				w="100%"
			>
				<Box
					backgroundColor={"white"}
					borderRadius={["25px", "35px", "50px"]}
					width={["100%"]}
					boxShadow={`${"var(--box-shadow)"}`}
				>
					{hide === false ? null : (
						<Box position={"relative"} w="fit-content" top="-20px" left="15px">
							<Text
								background={`${"var(--main-bg-2)"}`}
								color="white"
								p={"2"}
								rounded="md"
								fontSize={["md", "lg", "xl"]}
							>
								{name}
							</Text>
						</Box>
					)}
					{children}
				</Box>
			</VStack>
		</>
	);
};

export default BoxContainer;
