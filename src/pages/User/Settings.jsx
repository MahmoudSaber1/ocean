import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../commen/Context/OceanContext";
import {
	BoxBlock,
	BoxContainer,
	ConnectWallets,
	Navbar,
	UserAcounts,
	UserDisplay,
	UserInfo,
} from "../../components";

const Settings = () => {
	const { isAuth } = useStateContext();

	return (
		<>
			<BoxContainer>
				<Navbar
					btn={isAuth === true ? null : <ConnectWallets btnName={"Connect"} />}
				/>
				<Box>
					<BoxBlock name={"Settings"}>
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
							/>
							<UserDisplay />
							<UserAcounts />
						</Box>
					</BoxBlock>
				</Box>
			</BoxContainer>
		</>
	);
};

export default Settings;
