import { Box } from "@chakra-ui/react";
import React from "react";
import {
	BoxBlock,
	BoxContainer,
	ConnectWallets,
	EntiresDrawer,
	Hero,
	Navbar,
	BlogsContainer,
	StoryContainer,
} from "../components";
import { useStateContext } from "../commen/Context/OceanContext";

const Home = () => {
	const { isAuth } = useStateContext();
	return (
		<>
			<BoxContainer>
				<Navbar
					btn={
						isAuth === true ? (
							<EntiresDrawer
								btnName={"+"}
								classess={`${"var(--main-color) !important"}`}
							/>
						) : (
							<ConnectWallets btnName={"Connect"} />
						)
					}
				/>
				<Box>
					<Hero />
				</Box>
				<Box>
					<BoxBlock name={"Last Blogs"}>
						<BlogsContainer show={true} hide={true} />
					</BoxBlock>
				</Box>
				<Box>
					<BoxBlock name={"Last Stories"}>
						<StoryContainer show={true} />
					</BoxBlock>
				</Box>
			</BoxContainer>
		</>
	);
};

export default Home;
