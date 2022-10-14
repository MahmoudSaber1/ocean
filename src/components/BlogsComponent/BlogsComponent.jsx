import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { icons } from "../../assets";

const Blogs = [
	{
		id: 1,
		image: icons.blogImg,
		text1:
			"PROPOSAL: Add WAVES token to boost Pluto treasury and support the Waves ecosystem",
		date: "	August 26th, 2022",
		userName: "Pluto",
		userAddress: "3P566..87",
		avatar: icons.blogImg,
	},
	{
		id: 2,
		image: icons.blogImg,
		text1:
			"PROPOSAL: Add WAVES token to boost Pluto treasury and support the Waves ecosystem",
		date: "	August 26th, 2022",
		userName: "Pluto",
		userAddress: "3P566..87",
		avatar: icons.blogImg,
	},
	{
		id: 3,
		image: icons.blogImg,
		text1:
			"PROPOSAL: Add WAVES token to boost Pluto treasury and support the Waves ecosystem",
		date: "	August 26th, 2022",
		userName: "Pluto",
		userAddress: "3P566..87",
		avatar: icons.blogImg,
	},
	{
		id: 4,
		image: icons.blogImg,
		text1:
			"PROPOSAL: Add WAVES token to boost Pluto treasury and support the Waves ecosystem",
		date: "	August 26th, 2022",
		userName: "Pluto",
		userAddress: "3P566..87",
		avatar: icons.blogImg,
	},
	{
		id: 5,
		image: icons.blogImg,
		text1:
			"PROPOSAL: Add WAVES token to boost Pluto treasury and support the Waves ecosystem",
		date: "	August 26th, 2022",
		userName: "Pluto",
		userAddress: "3P566..87",
		avatar: icons.blogImg,
	},
];

const BlogsComponent = () => {
	return (
		<>
			<Flex alignItems="center" px={["2", "2", "5"]} justifyContent={"center"}>
				<Box
					display={"grid"}
					gridTemplateColumns={"repeat(auto-fill, minmax(250px, 1fr))"}
					gap="5"
					mb="10"
				>
					{Blogs.map((blog) => (
						<Box
							background={"#65c1cf"}
							color="white"
							display={"flex"}
							flexDirection="column"
							rounded={"lg"}
							boxShadow="base"
							position="relative"
							p="3"
							flex="1"
							key={blog.id}
						>
							<Image borderRadius={"3xl"} w={"full"} mb="5" src={blog.image} />
							<Text textAlign={"left"} fontSize={["sm", "md"]} mb="2">
								{blog.text1}
							</Text>
							<Text
								textAlign={"left"}
								fontSize={["sm", "md"]}
								color={"#353a3a"}
							>
								{blog.date}
							</Text>
							<Box
								pr="5"
								mt="5"
								w="full"
								display={"flex"}
								alignItems="center"
								justifyContent={"center"}
							>
								<Box
									display={"flex"}
									alignItems="center"
									justifyContent={"center"}
									flex="2"
									flexDirection="column"
								>
									<Text fontSize={["sm", "md"]}>{blog.userName}</Text>
									<Text
										backgroundColor={`${"var(--txt-color-3)"}`}
										p="3px 5px"
										fontSize={["sm", "md"]}
										rounded="lg"
									>
										{blog.userAddress}
									</Text>
								</Box>
								<Box
									display={"flex"}
									alignItems="center"
									justifyContent={"flex-end"}
									flex="0.3"
								>
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
							</Box>

							<Avatar
								bottom={"-15px"}
								position={"absolute"}
								size={["sm", "md"]}
								src={blog.avatar}
							/>
						</Box>
					))}
				</Box>
			</Flex>
		</>
	);
};

export default BlogsComponent;
