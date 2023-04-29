import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { ConnectWallets, EntriesComponent, CBlog } from "../../components";
import { BoxContainer, OceanContainer } from "../../containers";
import { useStateContext } from "../../ContextProvider";
import { useState } from "react";
import axios from "axios";
import { allBlogData, userBlog } from "../../common/Api";
import { useEffect } from "react";

const Entires = () => {
	const [getTxId, setGetTxId] = useState([]);
	const [allBlogs, setAllBlogs] = useState([]);
	const { isAuth, userWallet } = useStateContext();

	const getAllTxIds = () => {
		axios
			.get(userBlog(userWallet.address))
			.then((res) => {
				const values = res.data?.map((item) => item.value);

				setGetTxId(values);
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
					[k]: k === "arweave" ? val : value,
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
		<>
			<OceanContainer
				navBtn={
					isAuth === true ? (
						<EntriesComponent
							btnName={"+"}
							classess={`${"var(--main-bg-3) !important"}`}
						/>
					) : (
						<ConnectWallets btnName={"Connect"} />
					)
				}
			>
				<BoxContainer name={"Entires"}>
					<Box pt="28" pb="32">
						{uniqueArr.length > 0 ? (
							<Box px="5">
								<CBlog Blogs={uniqueArr} inUser={true} />
							</Box>
						) : (
							<Box
								display={"flex"}
								alignItems="center"
								justifyContent={"center"}
								flexDirection="column"
								width={"full"}
								gap="3"
							>
								<EntriesComponent
									btnName={"Create your Entires"}
									classess={`${"var(--main-bg-2) !important"}`}
								/>
								<Button
									color={"white"}
									background={`${"var(--main-bg-3) !important"}`}
									className={"btnHover"}
									size={["sm", "sm", "md"]}
								>
									<Box fontSize={"2xl"} as="p">
										Learn More
									</Box>
								</Button>
							</Box>
						)}
					</Box>
				</BoxContainer>
			</OceanContainer>
		</>
	);
};

export default Entires;
