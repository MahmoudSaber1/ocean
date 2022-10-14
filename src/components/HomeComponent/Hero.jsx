import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
	return (
		<>
			<VStack py="5" alignItems={"center"} justifyContent="center" w="100%">
				<Box
					className="block__bg"
					width={["100%"]}
					height={"100%"}
					boxShadow={"base"}
					textAlign="center"
					display={"flex"}
					alignItems="center"
					justifyContent={"center"}
					flexDirection="column"
					p={["35px 15px", "5", "10"]}
				>
					<Text
						fontSize={["xl", "2xl", "3xl"]}
						color={`${"var(--txt-color)"}`}
						fontWeight="600"
					>
						Dive into Ocean Of thoughts
					</Text>
					<Text
						mt="3"
						mb="3"
						fontSize={["sm", "md", "xl"]}
						fontWeight="400"
						color={`${"var(--txt-color-3)"}`}
					>
						fully decentralized blog space Based on blockchains to let your
						thoughts will be stored forever
					</Text>
					<Button
						color={"white"}
						background={`${"var(--main-color) !important"}`}
						className={"btnHover"}
						mt="5"
					>
						<Box fontSize={["md", "lg", "xl"]} as="p">
							take a tour
						</Box>
					</Button>
				</Box>
			</VStack>
		</>
	);
};

export default Hero;
