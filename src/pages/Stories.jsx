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
	StoryContainer,
} from "../components";

const Stories = () => {
	const { isAuth } = useStateContext();

	return (
		<>
			<BoxContainer>
				<Navbar
					btn={isAuth === true ? null : <ConnectWallets btnName={"Connect"} />}
				/>
				<Box>
					<BoxBlock name={"All Stories"}>
						<PagesHeader
							name={"top stories all over ocean."}
							icon={icons.searchBar}
						/>
						<StoryContainer />
					</BoxBlock>
				</Box>
			</BoxContainer>
		</>
	);
};

export default Stories;
