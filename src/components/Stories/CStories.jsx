import { Box, Grid, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { images } from "../../assets";
import { useState } from "react";
import axios from "axios";
import { userData } from "../../common/Api";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CStories = ({
	stories,
	handelBtn,
	open,
	dApps,
	userWallet,
	signer,
	inStories,
}) => {
	const [name, setName] = useState("");
	const toast = useToast();
	const [loved, setLoved] = useState([]);
	const add_story_to_favorites = (id) => ({
		type: 16,
		dApp: dApps,
		fee: 500000,
		payment: [],
		call: {
			function: "add_story_to_favorites",
			args: [
				{
					type: "string",
					value: userWallet.address,
				},

				{
					type: "string",
					value: id,
				},
			],
		},
		feeAssetId: null,
	});

	const invokePublisher = async (txID) => {
		try {
			await signer.invoke(add_story_to_favorites(txID)).broadcast();
			toast({
				title: "Success Publish.",
				status: "success",
				duration: 9000,
				isClosable: true,
				position: "top-right",
			});
			setLoved({
				...loved,
				[txID]: true,
			});
		} catch (err) {
			toast({
				title: "Error Publish.",
				description: err.message,
				status: "error",
				duration: 9000,
				isClosable: true,
				position: "top-right",
			});
		}
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
	}, [stories.length]);

	return (
		<>
			<Grid
				gridTemplateColumns={"repeat(auto-fill, minmax(250px, 1fr))"}
				gap="3"
			>
				{stories.map((story) => (
					<React.Fragment key={story.arweave}>
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
										<Link to={`/stories/${story.arweave}`}>
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
										</Link>
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
											<Link to={`/stories/${story.arweave}`}>
												<Text fontSize={"sm"} fontWeight="600">
													{story.titel}
												</Text>
											</Link>
											<Box
												cursor={"pointer"}
												width={"25px"}
												height={"25px"}
												rounded="lg"
												background={
													loved[story.arweave] || inStories === true
														? "red.400"
														: `${"var(--text-color-3)"}`
												}
												display="flex"
												alignItems="center"
												justifyContent="center"
												onClick={() =>
													invokePublisher(story.arweave?.split("###")[0])
												}
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
					</React.Fragment>
				))}
			</Grid>
		</>
	);
};

export default CStories;
