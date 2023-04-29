import { Box, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {
	ConnectWallets,
	EntriesComponent,
	UserAcounts,
	UserDisplay,
	UserInfo,
} from "../../components";
import { BoxContainer, OceanContainer } from "../../containers";
import { useStateContext } from "../../ContextProvider";
import { useState } from "react";

const Settings = () => {
	const { isAuth, userWallet, dApp, signer } = useStateContext();
	const toast = useToast();
	const [disapleData, setDisapleData] = useState({
		name: "",
		bio: "",
		googleAn: "",
		yandexAN: "",
	});

	const [accountData, setAccountData] = useState({
		email: "",
		twitter: "",
		telegram: "",
	});

	const handleChangeDisaple = (e) => {
		setDisapleData({ ...disapleData, [e.target.name]: e.target.value });
	};

	const handleChangeAccount = (e) => {
		setAccountData({ ...accountData, [e.target.name]: e.target.value });
	};

	const set_user_data = {
		type: 16,
		dApp: dApp,
		fee: 500000,
		payment: [],
		call: {
			function: "set_user_data",
			args: [
				{
					type: "string",
					value: userWallet.address,
				},

				{
					type: "string",
					value: disapleData.name,
				},

				{
					type: "string",
					value: "image_link",
				},

				{
					type: "string",
					value: "cover_link",
				},

				{
					type: "string",
					value: disapleData.bio,
				},

				{
					type: "string",
					value: disapleData.googleAn,
				},

				{
					type: "string",
					value: accountData.twitter,
				},

				{
					type: "string",
					value: accountData.telegram,
				},

				{
					type: "string",
					value: disapleData.yandexAN,
				},

				{
					type: "string",
					value: "notes",
				},
			],
		},
		feeAssetId: null,
	};

	const invokePublisher = async () => {
		try {
			await signer.invoke(set_user_data).broadcast();
			toast({
				title: "Success Publish.",
				status: "success",
				duration: 9000,
				isClosable: true,
				position: "top-right",
			});
			setAccountData({
				email: "",
				twitter: "",
				telegram: "",
			});
			setDisapleData({
				name: "",
				bio: "",
				googleAn: "",
				yandexAN: "",
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
				<BoxContainer name={"Settings"}>
					<Box
						px={["2", "5", "8"]}
						display="flex"
						alignItems={"center"}
						justifyContent="center"
						flexDirection={"column"}
						w="full"
						gap="10"
						mb="8"
					>
						<UserInfo
							link={
								<Link to="/">
									<Box
										backgroundColor={"#DDD"}
										p="1"
										rounded={"md"}
										as="i"
										className="bx bx-show-alt"
									></Box>
								</Link>
							}
							address={
								isAuth === true
									? `${
											isAuth === true ? userWallet.address.slice(0, 4) : ""
									  }...${isAuth === true ? userWallet.address.slice(-4) : ""}`
									: ""
							}
							avatar={
								isAuth === true
									? `${
											isAuth === true ? userWallet.address.slice(0, 4) : ""
									  }...${isAuth === true ? userWallet.address.slice(-4) : ""}`
									: ""
							}
						/>
						<UserDisplay
							disapleData={disapleData}
							handleChangeDisaple={handleChangeDisaple}
							invokePublisher={invokePublisher}
						/>
						<UserAcounts
							accountData={accountData}
							handleChangeAccount={handleChangeAccount}
							invokePublisher={invokePublisher}
						/>
					</Box>
				</BoxContainer>
			</OceanContainer>
		</>
	);
};

export default Settings;
