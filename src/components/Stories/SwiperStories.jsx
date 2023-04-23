import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { images } from "../../assets";
import { userData } from "../../common/Api";
import axios from "axios";
import { useEffect } from "react";

const SwiperStories = ({ stories }) => {
	const [open, setOpen] = useState({});
	const [name, setName] = useState("");

	const handelBtn = (id) => {
		setOpen((prevOpen) => ({ ...prevOpen, [id]: !prevOpen[id] }));
	};

	const convertTimeToData = (time) => {
		const newDate = new Date(time);
		const year = newDate.getFullYear();
		const month = newDate.getMonth() + 1;
		const day = newDate.getDate();

		return `${year}-${
			month.toLocaleString().length === 1 ? `0${month}` : month
		}-${day.toLocaleString().length === 1 ? `0${day}` : day}`;
	};

	const getUserData = async () => {
		try {
			const id = stories.map((story) => story.publisher);
			const response = await axios.get(userData(id));
			const data = response.data?.[0]?.value || "";
			return setName(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (stories.length > 0) {
			getUserData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [stories]);

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
						slidesPerView: 1,
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
				{stories.map((story) => (
					<SwiperSlide key={story.arweave}>
						<Box overflow={"hidden"}>
							<Box
								background={"#65c1cf"}
								color="white"
								display={"flex"}
								flexDirection="column"
								rounded={"lg"}
								boxShadow="base"
								p="5px 4px"
								zIndex={"2 !important"}
								position="relative"
							>
								<Box display={"flex"} gap="1">
									<Box
										rounded={"lg"}
										maxH="78.8px"
										flex="1"
										border="1.5px solid #fff"
										boxShadow={"base"}
									>
										{story.story === "s" || story.story === "" ? (
											<Image
												rounded={"lg"}
												w={"full"}
												h="100%"
												mb="5"
												src={images.BlogImage}
												objectFit="cover"
											/>
										) : (
											<Image
												rounded={"lg"}
												w={"full"}
												h="100%"
												mb="5"
												src={story.story}
												objectFit="cover"
											/>
										)}
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
												{story.titel}
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
												color={`${"var(--text-color)"}`}
												fontWeight="600"
												fontSize={"md"}
											>
												PART : {story.last}
											</Text>
											<Text
												color={"#353a3a"}
												fontWeight="600"
												fontSize={"12px"}
											>
												{convertTimeToData(story.publish)}
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
												color={`${"var(--text-color-2)"}`}
												cursor="pointer"
											>
												{story.status}
											</Box>
											<Box
												onClick={() => {
													handelBtn(story.arweave);
												}}
												cursor="pointer"
											>
												<Box
													as="i"
													fontSize={"3xl"}
													className={
														open[story.arweave]
															? "bx bx-chevron-up"
															: "bx bx-chevron-down"
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
										color={`${"var(--text-color)"}`}
										fontWeight="600"
										fontSize={"md"}
									>
										{name}
									</Text>
									<Text color={"#353a3a"} fontWeight="400" fontSize={"sm"}>
										{`${story.publisher.slice(1, 8)}..${story.publisher.slice(
											-4
										)}`}
									</Text>
								</Box>
							</Box>
							<Box
								className={
									open[story.arweave] ? "backContent2 active" : "backContent2"
								}
								left={["7%", "10.5%", "13.5%", "5%"]}
								w={["210px", "230px", "250px"]}
							>
								<Text
									py="1"
									px={["3", "5"]}
									backgroundColor={"#ded8d8"}
									rounded="full"
									color={`${"var(--text-color-3)"}`}
									fontSize="sm"
									mb="1"
									width={"fit-content"}
								>
									{story.categorys}
								</Text>
								<Text
									py={["1", "3"]}
									px={["1", "3"]}
									backgroundColor={"#ded8d8"}
									rounded="xl"
									color={`${"var(--text-color-3)"}`}
									fontSize="14px"
									mb="3"
								>
									{story.description}
								</Text>
								<Text fontSize={"sm"} color="white">
									{story.text3}
								</Text>
							</Box>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default SwiperStories;
