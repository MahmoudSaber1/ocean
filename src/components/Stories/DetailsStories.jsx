import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { allStoryData, blogsDetails, userData } from "../../common/Api";
import { Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";

const DetailsStories = ({ id, tx }) => {
	const [html, setHTML] = useState({ __html: "" });
	const [allStories, setAllStories] = useState([]);
	const [name, setName] = useState("");

	const getAllStoriesData = async (tx) => {
		try {
			const response = await axios.get(allStoryData(tx));
			const data = response.data;

			const allBlogsData = data.reduce((acc, item) => {
				const { key, value } = item;
				const [, val, k] = key.split("_");

				return {
					...acc,
					[k]: k === "arweave" ? `${val}-${value}` : value,
				};
			}, {});

			setAllStories((prevState) => [...prevState, allBlogsData]);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getAllStoriesData(tx);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		async function createMarkup() {
			let response;
			response = await fetch(blogsDetails(id));
			const backendHtmlString = await response.text();

			return { __html: backendHtmlString };
		}
		createMarkup().then((result) => setHTML(result));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const uniqueArr = allStories.filter(
		(item, index, self) =>
			index === self.findIndex((t) => t.arweave === item.arweave)
	);

	const getCorrectStory = uniqueArr.filter(
		(blog) => blog.arweave?.split("-")[1] === id
	);

	const getUserData = async () => {
		try {
			const id = getCorrectStory.map((story) => story.publisher);
			const response = await axios.get(userData(id));
			const data = response.data?.[0]?.value || "";
			return setName(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (getCorrectStory.length > 0) {
			getUserData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getCorrectStory.length]);

	const convertTimeToData = (time) => {
		const newDate = new Date(time);
		const year = newDate.getFullYear();
		const month = newDate.getMonth() + 1;
		const day = newDate.getDate();

		return `${year}-${
			month.toLocaleString().length === 1 ? `0${month}` : month
		}-${day.toLocaleString().length === 1 ? `0${day}` : day}`;
	};

	return (
		<Flex p={["10px 20px", "10px 20px", "10px 20px"]} flexDirection="column">
			{getCorrectStory.map((story) => {
				return (
					<Flex
						alignItems={"center"}
						justifyContent={"center"}
						flexDirection={"column"}
						gap="15px"
					>
						<Image
							src={story.story}
							w="100%"
							h="360px"
							rounded={"md"}
							objectFit={"cover"}
						/>
						<Flex
							alignItems={"flex-start"}
							justifyContent={"space-between"}
							gap="20px"
							w="100%"
						>
							<Flex
								alignItems={"flex-start"}
								justifyContent={"flex-start"}
								gap="20px"
								w="100%"
							>
								<Text color={"#353a3a"} fontWeight="600" fontSize={"lg"}>
									{story.titel}
								</Text>
								<Text color={"#353a3a"} fontWeight="600" fontSize={"md"}>
									{convertTimeToData(story.publish)}
								</Text>
							</Flex>
							<Text color={"#353a3a"} fontWeight="600" fontSize={"md"}>
								{name}
							</Text>
						</Flex>
					</Flex>
				);
			})}
			<div className="story-details" dangerouslySetInnerHTML={html} />
		</Flex>
	);
};

export default DetailsStories;
