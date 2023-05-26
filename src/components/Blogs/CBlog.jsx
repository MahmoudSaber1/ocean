import { Avatar, Box, Image, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { images } from "../../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const CBlog = ({ Blogs, dApps, signer, userWallet, inUser, inBlog }) => {
	const toast = useToast();
	const [loved, setLoved] = useState([]);
	const add_blog_to_favorites = (id) => ({
		type: 16,
		dApp: dApps,
		fee: 500000,
		payment: [],
		call: {
			function: "add_blog_to_favorites",
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
			await signer.invoke(add_blog_to_favorites(txID)).broadcast();
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
						key={blog?.arweave}
					>
						<Link to={`/blogs/${blog?.arweave}`}>
							{blog?.blog === "s" ? (
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
									src={blog?.blog}
								/>
							)}
						</Link>
						<Text textAlign={"left"} fontSize={["sm", "md"]} mb="2">
							{blog?.text1}
						</Text>
						<Text textAlign={"left"} fontSize={["sm", "md"]} color={"#353a3a"}>
							{blog?.date}
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
								<Link to={`/blogs/${blog?.arweave}`}>
									<Text fontSize={["sm", "md"]}>{blog?.titel}</Text>
								</Link>
								<Text
									backgroundColor={`${"var(--text-color-3)"}`}
									p="3px 5px"
									fontSize={["sm", "md"]}
									rounded="lg"
								>
									{`${blog?.publisher?.slice(1, 8)}..${blog?.publisher?.slice(
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
								{inUser ? null : (
									<Box
										cursor={"pointer"}
										width={"25px"}
										height={"25px"}
										rounded="lg"
										background={
											loved[blog?.arweave] || inBlog === true
												? "red.400"
												: `${"var(--text-color-3)"}`
										}
										display="flex"
										alignItems="center"
										justifyContent="center"
										onClick={() =>
											invokePublisher(blog?.arweave?.split("###")[0])
										}
									>
										<Box
											as={"i"}
											fontSize="14px"
											className="bx bxs-heart"
											color="white"
										></Box>
									</Box>
								)}
							</Box>
						</Box>

						<Avatar
							bottom={"-15px"}
							position={"absolute"}
							size={["sm", "md"]}
							src={blog?.blog}
							name={blog?.publisher}
						/>
					</Box>
				))}
			</Box>
		</>
	);
};

export default CBlog;
