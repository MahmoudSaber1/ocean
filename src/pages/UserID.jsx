import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { ConnectWallets } from "../components";
import { OceanContainer } from "../containers";
import { useStateContext } from "../ContextProvider";

const UserID = () => {
	const { isAuth } = useStateContext();
	return (
		<>
			<OceanContainer
				navBtn={
					isAuth === true ? (
						// <EntiresDrawer
						//     btnName={"+"}
						//     classess={`${"var(--main-color) !important"}`}
						// />
						<Button
							color={"white"}
							background={`${"var(--main-bg-3) !important"}`}
							className={"btnHover"}
							size={["sm", "sm", "md"]}
						>
							<Box fontSize={"2xl"} as="p">
								+
							</Box>
						</Button>
					) : (
						<ConnectWallets btnName={"Connect"} />
					)
				}
			>
				{/* Banner */}

				{/* Blogs */}

				{/* Stories */}
			</OceanContainer>
		</>
	);
};

export default UserID;
