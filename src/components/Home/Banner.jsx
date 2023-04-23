/* eslint-disable no-unused-vars */
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BoxContainer } from "../../containers";

const Banner = () => {
	return (
		<>
			<BoxContainer hide={false}>
				<VStack alignItems={"center"} justifyContent="center" w="100%">
					<Box
						textAlign="center"
						display={"flex"}
						alignItems="center"
						justifyContent={"center"}
						flexDirection="column"
						p={["35px 15px", "5", "10"]}
						w={["100%", "100%", "560px"]}
					>
						<Text
							fontSize={["xl", "2xl", "3xl"]}
							color={`${"var(--text-color)"}`}
							fontWeight="600"
						>
							Dive into Ocean Of thoughts
						</Text>
						<Text
							mt="3"
							mb="3"
							fontSize={["sm", "md", "xl"]}
							fontWeight="400"
							color={`${"var(--text-color-3)"}`}
						>
							fully decentralized blog space Based on blockchains to let your
							thoughts will be stored forever
						</Text>
						{/* <Button
							color={"white"}
							background={`${"var(--main-bg-3) !important"}`}
							className={"btnHover"}
							mt="5"
							// onClick={() => driver.start()}
						>
							<Box fontSize={["md", "lg", "xl"]} as="p">
								take a tour
							</Box>
						</Button> */}
					</Box>
				</VStack>
			</BoxContainer>
		</>
	);
};

export default Banner;
