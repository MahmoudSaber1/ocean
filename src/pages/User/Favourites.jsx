import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import {
	BlogComponent,
	ConnectWallets,
	EntriesComponent,
	PagesHeader,
	StoriesComponent,
} from "../../components";
import { BoxContainer, OceanContainer } from "../../containers";
import { useStateContext } from "../../ContextProvider";

const Favourites = () => {
	const { isAuth } = useStateContext();
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
				<BoxContainer name={"Favourites"}>
					<PagesHeader
						name={"go to know your favourites"}
						icon="/assets/icons/searchbar.png"
					/>
					<Box w="full">
						<Tabs>
							<TabList rounded={"lg"} border="1px solid #ddd">
								<Tab>Favourites BLogs</Tab>
								<Tab>Favourites Stories</Tab>
							</TabList>
							<TabPanels>
								<TabPanel w="full">
									<BlogComponent inBlog={true} />
								</TabPanel>
								<TabPanel>
									<StoriesComponent inStories={true} />
								</TabPanel>
							</TabPanels>
						</Tabs>
					</Box>
				</BoxContainer>
			</OceanContainer>
		</>
	);
};

export default Favourites;
