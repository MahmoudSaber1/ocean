import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SwiperStories from "./SwiperStories";
import CStories from "./CStories";
// import { images } from "../../assets";
import axios from "axios";
import { allStoryData, allStoryTxIds } from "../../common/Api";
import { useEffect } from "react";

// const Stories = [
// 	{
// 		id: 1,
// 		image: images.BlogImage,
// 		text: "Shallows (Preview)",
// 		userName: "Pluto",
// 		part: "PART: 45",
// 		date: "	August 26th, 2022",
// 		userAddress: "3P566...87",
// 		btnName: "Complete",
// 		categ: "Categories :",
// 		text2: "Romance_Fantasy_Featured_Ghost....",
// 		text3:
// 			"The sea isn't safe. Only the bravest and strongest becom sailors. Luminescent mernaids roam the depths and the shallows ...",
// 	},
// 	{
// 		id: 2,
// 		image: images.BlogImage,
// 		text: "Shallows (Preview)",
// 		userName: "Pluto",
// 		part: "PART: 46",
// 		date: "	August 26th, 2022",
// 		userAddress: "3P566...87",
// 		btnName: "Ongoing",
// 		categ: "Categories :",
// 		text2: "Romance_Fantasy_Featured_Ghost....",
// 		text3:
// 			"The sea isn't safe. Only the bravest and strongest becom sailors. Luminescent mernaids roam the depths and the shallows ...",
// 	},
// 	{
// 		id: 3,
// 		image: images.BlogImage,
// 		text: "Shallows (Preview)",
// 		userName: "Pluto",
// 		part: "PART: 47",
// 		date: "	August 26th, 2022",
// 		userAddress: "3P566...87",
// 		btnName: "Complete",
// 		categ: "Categories :",
// 		text2: "Romance_Fantasy_Featured_Ghost....",
// 		text3:
// 			"The sea isn't safe. Only the bravest and strongest becom sailors. Luminescent mernaids roam the depths and the shallows ...",
// 	},
// ];

const StoriesComponent = ({ storiesShow, inStories }) => {
	const [open, setOpen] = useState({});

	const handelBtn = (id) => {
		setOpen((prevOpen) => ({ ...prevOpen, [id]: !prevOpen[id] }));
	};

	// Get All TxIds
	const [getTxId, setGetTxId] = useState([]);
	const [allStories, setAllStories] = useState([]);

	const getAllTxIds = () => {
		axios
			.get(allStoryTxIds())
			.then((res) => {
				const txIds = res.data?.map((item) =>
					item.key.split("_").slice(1, 2).join("")
				);

				setGetTxId(txIds);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getAllTxIds();
	}, []);

	const getAllBlogsData = async (id) => {
		try {
			const response = await axios.get(allStoryData(id));
			const data = response.data;

			const allBlogsData = data.reduce((acc, item) => {
				const { key, value } = item;
				const [, , k] = key.split("_");

				return {
					...acc,
					[k]: value,
				};
			}, {});

			setAllStories((prevState) => [...prevState, allBlogsData]);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (getTxId.length > 0) {
			getTxId.forEach((id) => getAllBlogsData(id));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getTxId]);

	const uniqueArr = allStories.filter(
		(item, index, self) =>
			index === self.findIndex((t) => t.arweave === item.arweave)
	);

	return (
		<>
			<Flex
				p={["10px 20px", "10px 20px", "10px 20px"]}
				mb={"5"}
				flexDirection="column"
			>
				{storiesShow && (
					<Link to="/stories">
						<Text
							py="1"
							px="2"
							backgroundColor={"#76969b3d"}
							color={`${"var(--text-color-3)"}`}
							fontSize={["sm", "md", "lg"]}
							display="flex"
							gap={"1"}
							rounded="md"
							alignItems="center"
							justifyContent={"center"}
							mb="5"
						>
							Browes our Top Stories
							<Box
								fontSize={"2xl"}
								as="i"
								className="bx bx-chevron-right"
							></Box>
						</Text>
					</Link>
				)}

				<Box>
					{inStories === true ? (
						<CStories stories={uniqueArr} handelBtn={handelBtn} open={open} />
					) : (
						<SwiperStories stories={uniqueArr} />
					)}
				</Box>
			</Flex>
		</>
	);
};

export default StoriesComponent;
