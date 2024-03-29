import {
	Avatar,
	Box,
	Button,
	DrawerHeader,
	Text,
	useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { pushData } from "../../common/Api";

const DrawHeader = ({
	isAuth,
	userWallet,
	name,
	sendData,
	dApps,
	textEditor,
	signer,
	setSendData,
	setTextEditor,
}) => {
	// eslint-disable-next-line no-unused-vars
	const [txId, setTxId] = useState("");
	const addDiv = `<div>${textEditor}</div>`;
	const toast = useToast();

	// Publisher
	const addBlog = (txID) => ({
		type: 16,
		dApp: dApps,
		fee: 500000,
		payment: [],
		call: {
			function: "add_blog",
			args: [
				{
					type: "string",
					value: userWallet.address, // User Address
				},

				{
					type: "string",
					value: sendData.title, // Tilte Text
				},

				{
					type: "string",
					value: txID, // TX Come from push api after send Editor data
				},

				{
					type: "string",
					value: "signature", // معرفهاش
				},

				{
					type: "string",
					value: sendData.imageUrl, // image url come from cloud
				},
			],
		},
		feeAssetId: null,
	});

	const invokePublisher = async (txID) => {
		try {
			await signer.invoke(addBlog(txID)).broadcast();
			toast({
				title: "Success Publish.",
				status: "success",
				duration: 9000,
				isClosable: true,
				position: "top-right",
			});
			setSendData({
				title: "",
				imageUrl: "",
			});
			setTextEditor("");
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

	const handlePushData = () => {
		let xhr = new XMLHttpRequest();
		xhr.open("post", pushData);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					setTxId(xhr.responseText);
					invokePublisher(xhr.responseText);
				}
			}
		};
		let data = new FormData();
		data.append("puch_data", addDiv);
		xhr.send(data);
	};

	return (
		<>
			<DrawerHeader
				borderRadius={"0 0 5px 5px"}
				background={`${"var(--main-bg-2) !important"}`}
			>
				<Box display="flex" gap="2">
					<Avatar
						name={
							isAuth === true
								? `${isAuth === true ? userWallet.address.slice(0, 4) : ""}...${
										isAuth === true ? userWallet.address.slice(-4) : ""
								  }`
								: ""
						}
					/>
					<Box width="full">
						<Text fontSize={["md", "lg", "xl"]} color={"#fff"}>
							{name ? name : "...."}
						</Text>
						<Box
							display={"flex"}
							alignItems="center"
							justifyContent={"space-between"}
							width="full"
						>
							<Text
								backgroundColor={"#AABCC4"}
								color="#657C87"
								fontSize={["sm", "md", "lg"]}
								p={["2px 10px", "2px 18px", "2px 25px"]}
								rounded={"md"}
							>
								{isAuth === true
									? `${userWallet.address.slice(
											0,
											4
									  )}...${userWallet.address.slice(-4)}`
									: ""}
							</Text>
							<Button
								color={"white"}
								background={`${"var(--main-bg-3) !important"}`}
								className={"btnHover"}
								size={["sm"]}
								onClick={() => handlePushData()}
							>
								<Box fontSize={["lg", "xl", "2xl"]} as="p">
									Publish
								</Box>
							</Button>
						</Box>
					</Box>
				</Box>
			</DrawerHeader>
		</>
	);
};

export default DrawHeader;
