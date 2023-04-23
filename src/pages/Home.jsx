import React from "react";
import {
	Banner,
	BlogComponent,
	ConnectWallets,
	EntriesComponent,
	StoriesComponent,
} from "../components";
import { BoxContainer, OceanContainer } from "../containers";
import { useStateContext } from "../ContextProvider";

const Home = () => {
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
				{/* Banner */}
				<Banner />

				{/* Blogs */}
				<BoxContainer name={"Last Blogs"}>
					<BlogComponent BrowsShow={true} avatarHide={true} inBlog={false} />
				</BoxContainer>

				{/* Stories */}
				<BoxContainer name={"Last Stories"}>
					<StoriesComponent inStories={false} storiesShow={true} />
				</BoxContainer>
			</OceanContainer>
		</>
	);
};

export default Home;
