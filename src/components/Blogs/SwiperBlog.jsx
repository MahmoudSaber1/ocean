import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Avatar, Box, Image, Text } from "@chakra-ui/react";
import { images } from "../../assets";

const SwiperBlog = ({ hide, Blogs }) => {
	return (
		<>
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
				{Blogs.map((blog, index) => {
					return (
						<SwiperSlide key={blog.arweave}>
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
								{blog.blog === "s" ? (
									<Image
										borderRadius={"3xl"}
										w={"full"}
										h="158px"
										mb="5"
										src={images.BlogImage}
									/>
								) : (
									<Image
										borderRadius={"3xl"}
										w={"full"}
										h="158px"
										mb="5"
										src={blog.blog}
									/>
								)}

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
										<Text fontSize={["sm", "md"]}>{blog.titel}</Text>
										<Text
											backgroundColor={`${"var(--text-color-3)"}`}
											p="3px 5px"
											fontSize={["sm", "md"]}
											rounded="lg"
										>
											{`${blog.publisher.slice(1, 8)}..${blog.publisher.slice(
												-4
											)}`}
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

								{hide && (
									<Avatar
										bottom={"-15px"}
										position={"absolute"}
										size={["sm", "md"]}
										src={blog.blog}
										name={blog.publisher}
									/>
								)}
							</Box>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default SwiperBlog;
