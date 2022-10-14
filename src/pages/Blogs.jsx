import { Box } from "@chakra-ui/react";
import React from "react";
import { icons } from "../assets";
import { useStateContext } from "../commen/Context/OceanContext";
import {
	BlogsComponent,
	BoxBlock,
	BoxContainer,
	ConnectWallets,
	Navbar,
	PagesHeader,
} from "../components";

const Blogs = () => {
	const { isAuth } = useStateContext();

	return (
		<>
			<BoxContainer>
				<Navbar
					btn={isAuth === true ? null : <ConnectWallets btnName={"Connect"} />}
				/>

				<Box>
					<BoxBlock name={"All Blogs"}>
						<PagesHeader
							name={"	top blogs all over ocean."}
							icon={icons.searchBar}
						/>
						<BlogsComponent />
					</BoxBlock>
				</Box>
			</BoxContainer>
		</>
	);
};

export default Blogs;
