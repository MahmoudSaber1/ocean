import React from "react";
import { icons } from "../assets";
import {
	ConnectWallets,
	EntriesComponent,
	PagesHeader,
	StoriesComponent,
} from "../components";
import { BoxContainer, OceanContainer } from "../containers";
import { useStateContext } from "../ContextProvider";

const Stories = () => {
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
				{/* Stories */}
				<BoxContainer name={"All Stories"}>
					<PagesHeader
						name={"top stories all over ocean."}
						icon={icons.searchBar}
					/>

					<StoriesComponent
						inStories={true}
						storiesName="All Stories"
						storiesShow={false}
					/>
				</BoxContainer>
			</OceanContainer>
		</>
	);
};

export default Stories;
