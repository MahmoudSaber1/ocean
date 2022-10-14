import {
	Box,
	Image,
	Link,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { icons } from "../../assets";
import { useStateContext } from "../../commen/Context/OceanContext";
import {
	BlogsContainer,
	BoxBlock,
	BoxContainer,
	ConnectWallets,
	Navbar,
	StoryContainer,
	UserInfo,
} from "../../components";

const AllPuplisher = [
	{
		id: 1,
		name: "Anglina",
		blogs: "20",
		address: "3PPolkM...mmll",
		image: icons.blogImg,
	},
	{
		id: 2,
		name: "Pluto",
		blogs: "40",
		address: "3PPolkM...mmll",
		image: icons.blogImg,
	},
	{
		id: 3,
		name: "Anglina",
		blogs: "30",
		address: "3PPolkM...mmll",
		image: icons.blogImg,
	},
	{
		id: 4,
		name: "GOGO",
		blogs: "50",
		address: "3PPolkM...mmll",
		image: icons.blogImg,
	},
];

const UserID = () => {
	const { isAuth } = useStateContext();

	const page = window.location.pathname;
	const current = parseInt(page.split("/").slice("-1")[0]);
	console.log(current);

	return (
		<>
			<BoxContainer>
				<Navbar
					btn={isAuth === true ? null : <ConnectWallets btnName={"Connect"} />}
				/>
				<Box>
					<BoxBlock hide={false}>
						<Box
							px={["2", "5", "8"]}
							display="flex"
							alignItems={"center"}
							justifyContent="center"
							flexDirection={"column"}
							w="full"
							gap="5"
							mb="8"
						>
							{AllPuplisher.filter((publish) => {
								return publish.id === current;
							}).map((publish) => (
								<React.Fragment key={publish.id}>
									<UserInfo
										link={
											<Box
												cursor={"pointer"}
												width={"25px"}
												height={"25px"}
												rounded="lg"
												background={`${"var(--txt-color-3)"}`}
												display="flex"
												alignItems="center"
												justifyContent="center"
											>
												<Box
													as={"i"}
													fontSize="14px"
													className="bx bxs-heart"
													color="white"
												></Box>
											</Box>
										}
										name={publish.name}
										address={publish.address}
										avatar={publish.image}
									/>
									<Box
										rounded={"md"}
										px="2"
										width={"full"}
										height="50px"
										backgroundColor={"#DDD"}
									>
										................
									</Box>
									<Box
										display="flex"
										alignItems={"center"}
										justifyContent="space-between"
										w="full"
									>
										<Link display="flex" alignItems={"center"} gap="1">
											<Image w="20px" src={icons.twiiter} />
											<Text>TWitter</Text>
										</Link>
										<Link display="flex" alignItems={"center"} gap="1">
											<Image w="20px" src={icons.telegram} />
											<Text>Telegram</Text>
										</Link>
									</Box>
									<Box w="full">
										<Tabs>
											<TabList rounded={"lg"} border="1px solid #ddd">
												<Tab backgroundColor={"white"}>BLogs: 3</Tab>
												<Tab>Stories: 3</Tab>
											</TabList>
											<TabPanels>
												<TabPanel w="full">
													<BlogsContainer />
												</TabPanel>
												<TabPanel>
													<StoryContainer />
												</TabPanel>
											</TabPanels>
										</Tabs>
									</Box>
								</React.Fragment>
							))}
						</Box>
					</BoxBlock>
				</Box>
			</BoxContainer>
		</>
	);
};

export default UserID;
