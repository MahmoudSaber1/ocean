import { Box } from "@chakra-ui/react";
import React from "react";
import { icons } from "../assets";
import { useStateContext } from "../commen/Context/OceanContext";
import {
	BoxBlock,
	BoxContainer,
	ConnectWallets,
	Navbar,
	PagesHeader,
	PublisherCurd,
} from "../components";

const Publishers = () => {
	const { isAuth } = useStateContext();

	return (
		<>
			<BoxContainer>
				<Navbar
					btn={isAuth === true ? null : <ConnectWallets btnName={"Connect"} />}
				/>
				<Box>
					<BoxBlock name={"Best Publishers"}>
						<PagesHeader
							name={"take a look to our inspired writers."}
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

export default Publishers;
