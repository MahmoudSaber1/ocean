import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Info from "./Info";
import UserBlock from "./UserBlock";

const UserDisplay = ({ disapleData, handleChangeDisaple, invokePublisher }) => {
	return (
		<>
			<UserBlock name="Display">
				<Box
					display={"flex"}
					flexDirection={["column", "column", "row"]}
					gap="5"
					alignItems={"center"}
					justifyContent="space-between"
					w={"full"}
				>
					<Info
						name="name"
						state="Required"
						disc="What do you want to be known as? This can be either you personally, or the name of a project you’re looking to create."
						type={"text"}
						holder="Enter your Name"
						val={disapleData.name}
						handelChange={handleChangeDisaple}
					/>
					<Info
						name="bio"
						state="OPtional"
						disc="A brief summary of who you are. Accepts basic markdown."
						type={"text"}
						holder="Enter your BIO"
						val={disapleData.bio}
						handelChange={handleChangeDisaple}
					/>
				</Box>
				<Box
					display={"flex"}
					flexDirection={["column", "column", "row"]}
					gap="5"
					alignItems={"center"}
					justifyContent="space-between"
					w={"full"}
				>
					<Info
						name="googleAn"
						name2="Googl Analytics UAID"
						state="OPtional"
						disc="Basic support for Google Analytics. Must be a Universal Analytics ID"
						type={"text"}
						holder="Enter your Analytics ID"
						val={disapleData.googleAn}
						handelChange={handleChangeDisaple}
					/>
					<Info
						name="yandexAN"
						name2="Yandex Analytics"
						state="OPtional"
						disc="Basic support for Yandex Analytics. Must be a Universal Analytics ID.."
						type={"text"}
						holder="Enter your Analytics ID"
						val={disapleData.yandexAN}
						handelChange={handleChangeDisaple}
					/>
				</Box>
				<Box py="5">
					<Button onClick={() => invokePublisher()}>Save</Button>
				</Box>
			</UserBlock>
		</>
	);
};

export default UserDisplay;
