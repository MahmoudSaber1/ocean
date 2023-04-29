import React from "react";
import {
	ConnectWallets,
	DetailsComponent,
	EntriesComponent,
} from "../components";
import { BoxContainer, OceanContainer } from "../containers";
import { useStateContext } from "../ContextProvider";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
	const { isAuth } = useStateContext();
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
				<BoxContainer name={"Blog Details"}>
					<DetailsComponent id={id?.split("-")[1]} tx={id?.split("-")[0]} />
				</BoxContainer>
			</OceanContainer>
		</>
	);
};

export default BlogDetails;
