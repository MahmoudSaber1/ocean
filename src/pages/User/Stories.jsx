import { Box } from "@chakra-ui/react";
import React from "react";
import { icons } from "../../assets";
import { useStateContext } from "../../commen/Context/OceanContext";
import {
	BoxBlock,
	BoxContainer,
	ConnectWallets,
	Navbar,
	PagesHeader,
	UserStory,
} from "../../components";

const stories = [
	{
		id: 1,
		image: icons.blogImg,
		text: "Shallows (Preview)",
		part: "PART: 45",
		date: "	August 26th, 2022",
		btnName: "Complete",
		state: "Puplish",
	},
	{
		id: 2,
		image: icons.blogImg,
		text: "Shallows (Preview)",
		part: "PART: 46",
		date: "	August 26th, 2022",
		btnName: "Ongoing",
		state: "Draft",
	},
	{
		id: 3,
		image: icons.blogImg,
		text: "Shallows (Preview)",
		part: "PART: 47",
		date: "	August 26th, 2022",
		btnName: "Complete",
		state: "Puplish",
	},
	{
		id: 2,
		image: icons.blogImg,
		text: "Shallows (Preview)",
		part: "PART: 46",
		date: "	August 26th, 2022",
		btnName: "Ongoing",
		state: "Draft",
	},
];

const Stories = () => {
	const { isAuth } = useStateContext();

	return (
		<>
			<BoxContainer>
				<Navbar
					btn={isAuth === true ? null : <ConnectWallets btnName={"Connect"} />}
				/>
				<Box>
					<BoxBlock name={"Subscribers"}>
						<PagesHeader
							name={"go to know the pepole who follow you"}
							icon={icons.searchBar}
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
					</BoxBlock>
				</Box>
			</BoxContainer>
		</>
	);
};

export default Stories;
