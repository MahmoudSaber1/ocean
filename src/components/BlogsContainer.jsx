import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../assets";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

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
];

const BlogsContainer = ({ show, hide }) => {
	return (
		<>
			<Flex p={["10px 20px", "10px 20px", "10px 20px"]} flexDirection="column">
				{show && (
					<Link to="/blogs">
						<Text
							py="1"
							px="2"
							backgroundColor={"#76969b3d"}
							color={`${"var(--txt-color-3)"}`}
							fontSize={["sm", "md", "lg"]}
							display="flex"
							gap={"1"}
							rounded="md"
							alignItems="center"
							justifyContent={"center"}
							mb="5"
						>
							Browes our Top Articles
							<Box
								fontSize={"2xl"}
								as="i"
								className="bx bx-chevron-right"
							></Box>
						</Text>
					</Link>
				)}
				<Box>
					<Swiper
						loop={true}
						pagination={{
							dynamicBullets: true,
						}}
						slidesPerView={"1"}
						spaceBetween={10}
						modules={[Pagination]}
						className="mySwiper"
						breakpoints={{
							// when window width is >= 640px
							640: {
								slidesPerView: 2,
								spaceBetween: 10,
							},
							// when window width is >= 768px
							768: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
						}}
					>
						{Blogs.map((blog) => (
							<SwiperSlide key={blog.id}>
								<Box
									background={"#65c1cf"}
									color="white"
									display={"flex"}
									flexDirection="column"
									rounded={"lg"}
									boxShadow="base"
									position="relative"
									p="3"
								>
									<Image
										borderRadius={"3xl"}
										w={"full"}
										mb="5"
										src={blog.image}
									/>
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

									{hide && (
										<Avatar
											bottom={"-15px"}
											position={"absolute"}
											size={["sm", "md"]}
											src={blog.avatar}
										/>
									)}
								</Box>
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
			</Flex>
		</>
	);
};

export default BlogsContainer;
