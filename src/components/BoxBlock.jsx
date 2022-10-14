import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

const BoxBlock = ({ name, children, hide }) => {
	return (
		<>
			<VStack
				alignItems={"center"}
				justifyContent="center"
				pt="10"
				pb="10"
				w="100%"
			>
				<Box className="block__bg" width={["100%"]} boxShadow={"base"}>
					{hide === false ? null : (
						<Box position={"relative"} w="fit-content" top="-20px" left="15px">
							<Text
								background={`${"var(--seconde-color)"}`}
								color="white"
								padding={"10px 35px"}
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

export default BoxBlock;
