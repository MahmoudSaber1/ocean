import { Avatar, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { images } from "../../assets";

const CBlog = ({ Blogs }) => {
	return (
		<>
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
						key={blog.arweave}
					>
						{blog.blog === "s" ? (
							<Image
								borderRadius={"3xl"}
								w={"full"}
								h="100%"
								mb="5"
								src={images.BlogImage}
							/>
						) : (
							<Image
								borderRadius={"3xl"}
								w={"full"}
								h="100%"
								mb="5"
								src={blog.blog}
							/>
						)}
						<Text textAlign={"left"} fontSize={["sm", "md"]} mb="2">
							{blog.text1}
						</Text>
						<Text textAlign={"left"} fontSize={["sm", "md"]} color={"#353a3a"}>
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
								<Text fontSize={["sm", "md"]}>{blog.titel}</Text>
								<Text
									backgroundColor={`${"var(--text-color-3)"}`}
									p="3px 5px"
									fontSize={["sm", "md"]}
									rounded="lg"
								>
									{`${blog.publisher.slice(1, 8)}..${blog.publisher.slice(-4)}`}
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
									background={`${"var(--text-color-3)"}`}
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
							src={blog.blog}
							name={blog.publisher}
						/>
					</Box>
				))}
			</Box>
		</>
	);
};

export default CBlog;
