import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CBlog from "./CBlog";
import SwiperBlog from "./SwiperBlog";
// import { images } from "../../assets";
import axios from "axios";
import { allBlogData, allTxIds, favoritesBlog } from "../../common/Api";
import { useStateContext } from "../../ContextProvider";

// const Blogs = [
// 	{
// 		id: 1,
// 		image: images.BlogImage,
// 		text1:
// 			"PROPOSAL: Add WAVES token to boost Pluto treasury and support the Waves ecosystem",
// 		date: "	August 26th, 2022",
// 		userName: "Pluto",
// 		userAddress: "3P566..87",
// 		avatar: images.BlogImage,
// 	},
// 	{
// 		id: 2,
// 		image: images.BlogImage,
// 		text1:
// 			"PROPOSAL: Add WAVES token to boost Pluto treasury and support the Waves ecosystem",
// 		date: "	August 26th, 2022",
// 		userName: "Pluto",
// 		userAddress: "3P566..87",
// 		avatar: images.BlogImage,
// 	},
// 	{
// 		id: 3,
// 		image: images.BlogImage,
// 		text1:
// 			"PROPOSAL: Add WAVES token to boost Pluto treasury and support the Waves ecosystem",
// 		date: "	August 26th, 2022",
// 		userName: "Pluto",
// 		userAddress: "3P566..87",
// 		avatar: images.BlogImage,
// 	},
// ];

const BlogComponent = ({ BrowsShow, avatarHide, inBlog }) => {
	const [getTxId, setGetTxId] = useState([]);
	const { dApp, signer, userWallet, allBlogs, setAllBlogs } = useStateContext();

	const getAllTxIds = () => {
		axios
			.get(inBlog === true ? favoritesBlog(userWallet.address) : allTxIds())
			.then((res) => {
				const txIds = res.data?.map((item) =>
					item.key.split("_").slice(1, 2).join("")
				);

				const values = res.data?.map((item) => item.value);

				setGetTxId(inBlog === true ? values : txIds);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getAllTxIds();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getAllBlogsData = async (id) => {
		try {
			const response = await axios.get(allBlogData(id));
			const data = response.data;

			const allBlogsData = data.reduce((acc, item) => {
				const { key, value } = item;
				const [, val, k] = key.split("_");

				return {
					...acc,
					[k]: k === "arweave" ? `${val}-${value}` : value,
				};
			}, {});

			setAllBlogs((prevState) => [...prevState, allBlogsData]);
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

	const uniqueArr = allBlogs.filter(
		(item, index, self) =>
			index === self.findIndex((t) => t.arweave === item.arweave)
	);

	return (
		<Flex p={["10px 20px", "10px 20px", "10px 20px"]} flexDirection="column">
			{BrowsShow && (
				<Link to="/blogs">
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
						Browes our Top Articles
						<Box fontSize={"2xl"} as="i" className="bx bx-chevron-right"></Box>
					</Text>
				</Link>
			)}
			<Box>
				{allBlogs.length > 2 ? (
					<CBlog
						Blogs={uniqueArr}
						dApps={dApp}
						signer={signer}
						userWallet={userWallet}
						inBlog={inBlog}
					/>
				) : inBlog === true || inBlog === "blogs" ? (
					<CBlog
						Blogs={uniqueArr}
						dApps={dApp}
						signer={signer}
						userWallet={userWallet}
						inBlog={inBlog}
					/>
				) : (
					<SwiperBlog
						Blogs={uniqueArr}
						hide={avatarHide}
						dApps={dApp}
						signer={signer}
						userWallet={userWallet}
					/>
				)}
			</Box>
		</Flex>
	);
};

export default BlogComponent;
