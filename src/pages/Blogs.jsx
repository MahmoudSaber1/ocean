import React from "react";
import { icons } from "../assets";
import {
	BlogComponent,
	ConnectWallets,
	EntriesComponent,
	PagesHeader,
} from "../components";
import { BoxContainer, OceanContainer } from "../containers";
import { useStateContext } from "../ContextProvider";

const Blogs = () => {
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
				{/* Blogs */}
				<BoxContainer name={"All Blogs"}>
					<PagesHeader
						name={"	top blogs all over ocean."}
						icon={icons.searchBar}
					/>
					<BlogComponent inBlog={true} />
				</BoxContainer>
			</OceanContainer>
		</>
	);
};

export default Blogs;
