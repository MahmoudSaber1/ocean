import {
	Box,
	Image,
	Text,
	Link as ChakraLink,
	Heading,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
// import { images } from "../assets";

const AllPuplisher = [
	// {
	// 	id: 1,
	// 	name: "Anglina",
	// 	blogs: "20",
	// 	address: "3PPolkM...mmll",
	// 	image: images.BlogImage,
	// },
	// {
	// 	id: 2,
	// 	name: "Pluto",
	// 	blogs: "40",
	// 	address: "3PPolkM...mmll",
	// 	image: images.BlogImage,
	// },
	// {
	// 	id: 3,
	// 	name: "Anglina",
	// 	blogs: "30",
	// 	address: "3PPolkM...mmll",
	// 	image: images.BlogImage,
	// },
	// {
	// 	id: 4,
	// 	name: "GOGO",
	// 	blogs: "50",
	// 	address: "3PPolkM...mmll",
	// 	image: images.BlogImage,
	// },
];

const PublisherCurd = () => {
	return (
		<>
			<Box px={["3", "2", "5"]} py="5">
				{AllPuplisher.length > 0 ? (
					<Box
						display={"grid"}
						gridTemplateColumns={"repeat(auto-fill, minmax(250px, 1fr))"}
						gap="5"
						mb="10"
					>
						{AllPuplisher.map((publish) => (
							<Box
								background={"#65c1cf"}
								color="white"
								display={"flex"}
								flexDirection="column"
								rounded={"lg"}
								boxShadow="base"
								p="5px 4px"
								zIndex={2}
								key={publish.id}
							>
								<Box display={"flex"} gap="1">
									<Box position={"relative"}>
										<Box
											rounded={"lg"}
											flex="1"
											border="1.5px solid #fff"
											boxShadow={"base"}
											position={"absolute"}
											left="-10px"
											top="-20px"
											h="100px"
											w="90px"
										>
											<Image rounded={"lg"} h="100%" src={publish.image} />
										</Box>
									</Box>
									<Box
										display={"flex"}
										justifyContent="flex-start"
										flexDirection={"column"}
										flex="1.5"
										pl="80px"
									>
										<Box
											pl="2"
											pb="3"
											display={"flex"}
											justifyContent="space-between"
										>
											<Text fontSize={("sm", "md", "lg")} fontWeight="600">
												{publish.name}
											</Text>
											<Box
												cursor={"pointer"}
												width={"25px"}
												height={"25px"}
												rounded="lg"
												background={`${"var(--text-color-3)"}`}
												display="flex"
												alignItems="center"
												justifyContent="center"
											>
												<Box
													as={"i"}
													fontSize="14px"
													className="bx bx-plus"
													color="white"
												></Box>
											</Box>
										</Box>
										<Box
											display={"flex"}
											flexDirection={"column"}
											textAlign="left"
											pl="2"
										>
											<Link to={`/users/${publish.id}`}>
												<Text fontWeight="600" fontSize={"12px"}>
													Blogs: {publish.blogs}
												</Text>
												<Text
													w="fit-content"
													background={`${"var(--text-color-3)"}`}
													fontWeight="600"
													p={["2px 5px", "2px 8px", "2px 10px"]}
													rounded={"full"}
													fontSize={"12px"}
												>
													{publish.address}
												</Text>
											</Link>
										</Box>
									</Box>
								</Box>
							</Box>
						))}
					</Box>
				) : (
					<Heading
						fontSize={["md", "lg", "xl"]}
						textAlign={"center"}
						textTransform={"capitalize"}
					>
						if you want to be in best Publischer , send us a message here:{" "}
						<Text
							fontSize={["md", "lg", "xl"]}
							color={`${"var(--text-color)"}`}
							fontWeight="600"
							textTransform={"lowercase"}
						>
							<ChakraLink href="mailto:contact-me@dxdteam.xyz">
								contact-me@dxdteam.xyz
							</ChakraLink>
						</Text>
					</Heading>
				)}
			</Box>
		</>
	);
};

export default PublisherCurd;
