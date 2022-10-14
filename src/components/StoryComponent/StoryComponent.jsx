import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { icons } from "../../assets";

const stories = [
	{
		id: 1,
		image: icons.blogImg,
		text: "Shallows (Preview)",
		userName: "Pluto",
		part: "PART: 45",
		date: "	August 26th, 2022",
		userAddress: "3P566...87",
		btnName: "Complete",
		categ: "Categories :",
		text2: "Romance_Fantasy_Featured_Ghost....",
		text3:
			"The sea isn't safe. Only the bravest and strongest becom sailors. Luminescent mernaids roam the depths and the shallows ...",
	},
	{
		id: 2,
		image: icons.blogImg,
		text: "Shallows (Preview)",
		userName: "Pluto",
		part: "PART: 46",
		date: "	August 26th, 2022",
		userAddress: "3P566...87",
		btnName: "Ongoing",
		categ: "Categories :",
		text2: "Romance_Fantasy_Featured_Ghost....",
		text3:
			"The sea isn't safe. Only the bravest and strongest becom sailors. Luminescent mernaids roam the depths and the shallows ...",
	},
	{
		id: 3,
		image: icons.blogImg,
		text: "Shallows (Preview)",
		userName: "Pluto",
		part: "PART: 47",
		date: "	August 26th, 2022",
		userAddress: "3P566...87",
		btnName: "Complete",
		categ: "Categories :",
		text2: "Romance_Fantasy_Featured_Ghost....",
		text3:
			"The sea isn't safe. Only the bravest and strongest becom sailors. Luminescent mernaids roam the depths and the shallows ...",
	},
];

const StoryComponent = () => {
	const [open, setOpen] = useState(false);

	const handelBtn = () => {
		setOpen(!open);
	};

	return (
		<>
			<Flex
				p={["20px 20px", "30px 20px", "50px 20px"]}
				mb={"5"}
				flexDirection="column"
			>
				<Grid
					gridTemplateColumns={"repeat(auto-fill, minmax(250px, 1fr))"}
					gap="3"
				>
					{stories.map((story) => (
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
								height="100%"
							>
								<Box display={"flex"} gap="1">
									<Box
										rounded={"lg"}
										height={"100%"}
										flex="1"
										border="1.5px solid #fff"
										boxShadow={"base"}
									>
										<Image rounded={"lg"} h="full" src={story.image} />
									</Box>
									<Box
										display={"flex"}
										justifyContent="flex-start"
										flexDirection={"column"}
										flex="1.5"
									>
										<Box
											display={"flex"}
											alignItems="flex-start"
											justifyContent="space-between"
											textAlign={"left"}
											mb="2"
										>
											<Text fontSize={"sm"} fontWeight="600">
												{story.text}
											</Text>
											<Box
												cursor={"pointer"}
												width={"25px"}
												height={"25px"}
												rounded="lg"
												background={`${"var(--txt-color-3)"}`}
												display="flex"
												alignItems="center"
												justifyContent="center"
											>
												<Box
													as={"i"}
													fontSize="14px"
													className="bx bxs-heart"
													color="white"
												></Box>
											</Box>
										</Box>
										<Box
											display={"flex"}
											flexDirection={"column"}
											textAlign="left"
											mb="2"
											pl="2"
										>
											<Text
												color={`${"var(--txt-color)"}`}
												fontWeight="600"
												fontSize={"md"}
											>
												{story.part}
											</Text>
											<Text
												color={"#353a3a"}
												fontWeight="600"
												fontSize={"12px"}
											>
												{story.date}
											</Text>
										</Box>
										<Box
											display={"flex"}
											justifyContent="space-between"
											alignItems={"center"}
											gap="4"
										>
											<Box
												rounded={"full"}
												py="1"
												px="2"
												backgroundColor={"white"}
												fontSize={"sm"}
												color={`${"var(--txt-color-2)"}`}
												cursor="pointer"
											>
												{story.btnName}
											</Box>
											<Box
												onClick={() => {
													handelBtn();
												}}
												cursor="pointer"
											>
												<Box
													as="i"
													fontSize={"3xl"}
													className={
														open ? "bx bx-chevron-up" : "bx bx-chevron-down"
													}
												></Box>
											</Box>
										</Box>
									</Box>
								</Box>
								<Box
									display={"flex"}
									alignItems="center"
									justifyContent="space-between"
									mt="1"
									w={"full"}
									px="2"
								>
									<Text
										color={`${"var(--txt-color)"}`}
										fontWeight="600"
										fontSize={"md"}
									>
										{story.userName}
									</Text>
									<Text color={"#353a3a"} fontWeight="400" fontSize={"sm"}>
										{story.userAddress}
									</Text>
								</Box>
							</Box>
							<Box
								position={"absolute"}
								background={"#858787"}
								p={["15px 4px"]}
								borderRadius={"0 0 15px 15px"}
								bottom={open ? "-222px" : "-40px"}
								left={["4%", "10.5%", "7.5%"]}
								zIndex={1}
								w={["210px", "230px", "250px"]}
							>
								<Text
									py="1"
									px={["3", "5"]}
									backgroundColor={"#ded8d8"}
									rounded="full"
									color={`${"var(--txt-color-3)"}`}
									fontSize="sm"
									mb="1"
									width={"fit-content"}
								>
									{story.categ}
								</Text>
								<Text
									py={["1", "3"]}
									px={["1", "3"]}
									backgroundColor={"#ded8d8"}
									rounded="xl"
									color={`${"var(--txt-color-3)"}`}
									fontSize="14px"
									mb="3"
								>
									{story.text2}
								</Text>
								<Text fontSize={"sm"} color="white">
									{story.text3}
								</Text>
							</Box>
						</Box>
					))}
				</Grid>
			</Flex>
		</>
	);
};

export default StoryComponent;
