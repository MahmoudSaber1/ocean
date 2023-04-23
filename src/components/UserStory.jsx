import {
	Box,
	Image,
	Text,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import React from "react";

const UserStory = ({ image, text, part, btnName, date, state, key }) => {
	return (
		<>
			<Box key={key}>
				<Box display={"flex"} position="relative">
					<Box
						background={"#65c1cf"}
						color="white"
						display={"flex"}
						flexDirection="column"
						rounded={"lg"}
						boxShadow="base"
						p="5px 4px"
						zIndex={2}
					>
						<Box display={"flex"} gap="1">
							<Box
								rounded={"lg"}
								height={"100%"}
								flex="1"
								border="1.5px solid #fff"
								boxShadow={"base"}
							>
								<Image rounded={"lg"} h="full" src={image} />
							</Box>
							<Box
								display={"flex"}
								justifyContent="flex-start"
								flexDirection={"column"}
								flex="2"
							>
								<Box
									display={"flex"}
									alignItems="flex-start"
									justifyContent="space-between"
									textAlign={"left"}
									mb="2"
								>
									<Text fontSize={"sm"} fontWeight="600">
										{text}
									</Text>
									<Box
										cursor={"pointer"}
										display="flex"
										alignItems="center"
										justifyContent="flex-end"
										zIndex={2}
									>
										<Menu placement="left">
											<MenuButton>
												<Box
													as={"i"}
													fontSize="25px"
													className="bx bx-dots-vertical-rounded"
													color="white"
												></Box>
											</MenuButton>
											<MenuList zIndex={99}>
												<MenuItem
													w={"full"}
													justifyContent="space-between"
													color={"#1B6173"}
												>
													<Text fontSize={"1rem"}>Edit</Text>
												</MenuItem>
												<MenuItem
													w={"full"}
													justifyContent="space-between"
													color={"#1B6173"}
												>
													<Text fontSize={"1rem"}>Delete</Text>
												</MenuItem>
											</MenuList>
										</Menu>
									</Box>
								</Box>
								<Box
									display={"flex"}
									alignItems="center"
									justifyContent="space-between"
									textAlign="left"
								>
									<Text
										color={`${"var(--text-color)"}`}
										fontWeight="600"
										fontSize={["sm", "md", "md"]}
									>
										{part}
									</Text>
									<Box
										rounded={"full"}
										py={["0"]}
										px={["1", "2", "2"]}
										backgroundColor={"white"}
										fontSize={["12px", "sm", "sm"]}
										color={`${"var(--text-color-2)"}`}
									>
										{btnName}
									</Box>
								</Box>
								<Box
									display={"flex"}
									justifyContent="space-between"
									alignItems={"center"}
									gap="5"
								>
									<Text color={"#353a3a"} fontWeight="600" fontSize={"12px"}>
										{date}
									</Text>
									<Text color={"#353a3a"} fontWeight="600" fontSize={"12px"}>
										{state}
									</Text>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default UserStory;
