import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { icons } from "../../assets";
import { useStateContext } from "../../commen/Context/OceanContext";
import {
	BlogsContainer,
	BoxBlock,
	BoxContainer,
	ConnectWallets,
	Navbar,
	PagesHeader,
	StoryContainer,
} from "../../components";

const Favourites = () => {
	const { isAuth } = useStateContext();

	return (
		<>
			<BoxContainer>
				<Navbar
					btn={isAuth === true ? null : <ConnectWallets btnName={"Connect"} />}
				/>
				<Box>
					<BoxBlock name={"Favourites"}>
						<PagesHeader
							name={"go to know your favourites"}
							icon={icons.searchBar}
						/>
						<Box w="full">
							<Tabs>
								<TabList rounded={"lg"} border="1px solid #ddd">
									<Tab backgroundColor={"white"}>Favourites BLogs</Tab>
									<Tab>Favourites Stories</Tab>
								</TabList>
								<TabPanels>
									<TabPanel w="full">
										<BlogsContainer />
									</TabPanel>
									<TabPanel>
										<StoryContainer />
									</TabPanel>
								</TabPanels>
							</Tabs>
						</Box>
					</BoxBlock>
				</Box>
			</BoxContainer>
		</>
	);
};

export default Favourites;
