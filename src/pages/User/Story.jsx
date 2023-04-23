import { Box } from "@chakra-ui/react";
import React from "react";
import { images } from "../../assets";
import {
	ConnectWallets,
	EntriesComponent,
	PagesHeader,
	UserStory,
} from "../../components";
import { BoxContainer, OceanContainer } from "../../containers";
import { useStateContext } from "../../ContextProvider";

const stories = [
	{
		id: 1,
		image: images.BlogImage,
		text: "Shallows (Preview)",
		part: "PART: 45",
		date: "	August 26th, 2022",
		btnName: "Complete",
		state: "Puplish",
	},
	{
		id: 2,
		image: images.BlogImage,
		text: "Shallows (Preview)",
		part: "PART: 46",
		date: "	August 26th, 2022",
		btnName: "Ongoing",
		state: "Draft",
	},
	{
		id: 3,
		image: images.BlogImage,
		text: "Shallows (Preview)",
		part: "PART: 47",
		date: "	August 26th, 2022",
		btnName: "Complete",
		state: "Puplish",
	},
	{
		id: 2,
		image: "../../assets/images/blogImage.jpg",
		text: "Shallows (Preview)",
		part: "PART: 46",
		date: "	August 26th, 2022",
		btnName: "Ongoing",
		state: "Draft",
	},
];

const Story = () => {
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
				<BoxContainer name={"Stories"}>
					<PagesHeader
						name={"go to know the pepole who follow you"}
						icon="/assets/icons/searchbar.png"
					/>
					<Box
						display={"grid"}
						gridTemplateColumns={"repeat(auto-fill, minmax(250px, 1fr))"}
						mb="10"
						gap="3"
						px="3"
					>
						{stories.map((story) => (
							<React.Fragment key={story.id}>
								<UserStory
									image={story.image}
									text={story.text}
									part={story.part}
									btnName={story.btnName}
									date={story.date}
									state={story.state}
								/>
							</React.Fragment>
						))}
					</Box>
				</BoxContainer>
			</OceanContainer>
		</>
	);
};

export default Story;
