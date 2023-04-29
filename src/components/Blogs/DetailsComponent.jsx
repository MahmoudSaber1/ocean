import React from "react";
import { allBlogData, blogsDetails, userData } from "../../common/Api";
import { useEffect } from "react";
import { useState } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";

const DetailsComponent = ({ id, tx }) => {
	const [html, setHTML] = useState({ __html: "" });
	const [allBlogs, setAllBlogs] = useState([]);
	const [name, setName] = useState("");

	const getAllBlogsData = async (tx) => {
		try {
			const response = await axios.get(allBlogData(tx));
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
		getAllBlogsData(tx);
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

	const uniqueArr = allBlogs.filter(
		(item, index, self) =>
			index === self.findIndex((t) => t.arweave === item.arweave)
	);

	const getCorrectBlog = uniqueArr.filter(
		(blog) => blog.arweave?.split("-")[1] === id
	);

	const getUserData = async () => {
		try {
			const id = getCorrectBlog.map((story) => story.publisher);
			const response = await axios.get(userData(id));
			const data = response.data?.[0]?.value || "";
			return setName(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (getCorrectBlog.length > 0) {
			getUserData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getCorrectBlog.length]);

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
			{getCorrectBlog.map((blog) => {
				return (
					<Flex
						alignItems={"center"}
						justifyContent={"center"}
						flexDirection={"column"}
						gap="15px"
					>
						<Image
							src={blog.blog}
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
									{blog.titel}
								</Text>
								<Text color={"#353a3a"} fontWeight="600" fontSize={"md"}>
									{convertTimeToData(blog.publish)}
								</Text>
							</Flex>
							<Text color={"#353a3a"} fontWeight="600" fontSize={"md"}>
								{name}
							</Text>
						</Flex>
					</Flex>
				);
			})}
			<div className="blog-details" dangerouslySetInnerHTML={html} />
		</Flex>
	);
};

export default DetailsComponent;
