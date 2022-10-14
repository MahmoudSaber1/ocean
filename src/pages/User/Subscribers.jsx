import { Box } from "@chakra-ui/react";
import React from "react";
import { icons } from "../../assets";
import { useStateContext } from "../../commen/Context/OceanContext";
import {
	BoxBlock,
	BoxContainer,
	ConnectWallets,
	Navbar,
	PagesHeader,
	PublisherCurd,
} from "../../components";
const Subscribers = () => {
	const { isAuth } = useStateContext();

	return (
		<>
			<BoxContainer>
				<Navbar
					btn={isAuth === true ? null : <ConnectWallets btnName={"Connect"} />}
				/>
				<Box>
					<BoxBlock name={"Subscribers"}>
						<PagesHeader
							name={"go to know the pepole who follow you"}
							icon={icons.searchBar}
						/>
						<Box>
							<PublisherCurd />
						</Box>
					</BoxBlock>
				</Box>
			</BoxContainer>
		</>
	);
};

export default Subscribers;
