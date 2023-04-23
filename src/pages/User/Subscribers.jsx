import { Box } from "@chakra-ui/react";
import React from "react";
import {
	ConnectWallets,
	EntriesComponent,
	PagesHeader,
	PublisherCurd,
} from "../../components";
import { BoxContainer, OceanContainer } from "../../containers";
import { useStateContext } from "../../ContextProvider";

const Subscribers = () => {
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
				<BoxContainer name={"Subscribers"}>
					<PagesHeader
						name={"go to know the pepole who follow you"}
						icon="/assets/icons/searchbar.png"
					/>
					<Box>
						<PublisherCurd />
					</Box>
				</BoxContainer>
			</OceanContainer>
		</>
	);
};

export default Subscribers;
