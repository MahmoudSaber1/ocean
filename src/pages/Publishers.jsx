import { Box } from "@chakra-ui/react";
import React from "react";
import { icons } from "../assets";
import {
	ConnectWallets,
	EntriesComponent,
	PagesHeader,
	PublisherCurd,
} from "../components";
import { BoxContainer, OceanContainer } from "../containers";
import { useStateContext } from "../ContextProvider";

const Publishers = () => {
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
				<Box>
					<BoxContainer name={"Best Publishers"}>
						<PagesHeader
							name={"take a look to our inspired writers."}
							icon={icons.searchBar}
						/>
						<Box>
							<PublisherCurd />
						</Box>
					</BoxContainer>
				</Box>
			</OceanContainer>
		</>
	);
};

export default Publishers;
