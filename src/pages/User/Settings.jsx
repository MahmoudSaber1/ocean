import { Box } from "@chakra-ui/react";
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

const Settings = () => {
	const { isAuth, userWallet } = useStateContext();
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
						<UserDisplay />
						<UserAcounts />
					</Box>
				</BoxContainer>
			</OceanContainer>
		</>
	);
};

export default Settings;
