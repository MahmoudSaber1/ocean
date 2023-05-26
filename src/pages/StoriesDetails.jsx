import React from "react";
import {
	ConnectWallets,
	DetailsStories,
	EntriesComponent,
} from "../components";
import { BoxContainer, OceanContainer } from "../containers";
import { useStateContext } from "../ContextProvider";
import { useLocation, useParams } from "react-router-dom";

const StoriesDetails = () => {
	const { isAuth } = useStateContext();
	const { hash } = useLocation();
	const { id } = useParams();

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
				{/* Blogs */}
				<BoxContainer name={"Story Details"}>
					<DetailsStories id={hash?.split("###")[1]} tx={id} />
				</BoxContainer>
			</OceanContainer>
		</>
	);
};

export default StoriesDetails;
