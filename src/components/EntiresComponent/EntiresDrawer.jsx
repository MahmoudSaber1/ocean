/* eslint-disable no-unused-vars */
import {
	Avatar,
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Image,
	Input,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useStateContext } from "../../commen/Context/OceanContext";
import RichTextEditor from "../RichTextEditor";

const EntiresDrawer = ({ btnName, classess }) => {
	const { userWallet, isAuth } = useStateContext();
	const [selectedImages, setSelectedImages] = useState("");
	const onSelectFile = (event) => {
		const selectedFiles = event.target.files[0];
		const selectedFilesArray = URL.createObjectURL(selectedFiles);
		setSelectedImages(selectedFilesArray);
		// FOR BUG IN CHROME
		event.target.value = "";
	};

	const [value, setValue] = useState("");
	const getValue = (value) => {
		setValue(value);
	};
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button
				color={"white"}
				background={classess}
				className={"btnHover"}
				size={["sm", "sm", "md"]}
				onClick={onOpen}
			>
				<Box fontSize={"2xl"} as="p">
					{btnName}
				</Box>
			</Button>
			<Drawer
				size={["full", "md", "lg"]}
				placement={"left"}
				onClose={onClose}
				isOpen={isOpen}
			>
				<DrawerOverlay />
				<DrawerContent background={`${"var(--main-bg) !important"}`}>
					<DrawerCloseButton
						size={["sm"]}
						color={"#2CADC1"}
						backgroundColor={"#fff"}
					/>
					<DrawerHeader
						borderRadius={"0 0 5px 5px"}
						background={`${"var(--seconde-color) !important"}`}
					>
						<Box display="flex" gap="2">
							<Avatar name="gg" />
							<Box width="full">
								<Text fontSize={["md", "lg", "xl"]} color={"#fff"}>
									GOGO
								</Text>
								<Box
									display={"flex"}
									alignItems="center"
									justifyContent={"space-between"}
									width="full"
								>
									<Text
										backgroundColor={"#AABCC4"}
										color="#657C87"
										fontSize={["sm", "md", "lg"]}
										p={["2px 10px", "2px 18px", "2px 25px"]}
										rounded={"md"}
									>
										{isAuth === true
											? `${userWallet.address.slice(
													0,
													4
											  )}...${userWallet.address.slice(-4)}`
											: ""}
									</Text>
									<Button
										color={"white"}
										background={`${"var(--main-color) !important"}`}
										className={"btnHover"}
										size={["sm"]}
										onClick={onOpen}
									>
										<Box fontSize={["lg", "xl", "2xl"]} as="p">
											Publish
										</Box>
									</Button>
								</Box>
							</Box>
						</Box>
					</DrawerHeader>
					<DrawerBody>
						<Box display={"flex"} alignItems="center" justifyContent={"center"}>
							{selectedImages === "" ? (
								<>
									<Box as="label">
										<Box fontSize={"larger"} as="span">
											+
										</Box>
										<Input
											type="file"
											hidden
											name="images"
											onChange={onSelectFile}
											accept="image/png , image/jpeg, image/webp"
										/>
									</Box>
									<br />
									<Input type="file" hidden />
								</>
							) : (
								<Box
									display={"flex"}
									alignItems="center"
									justifyContent={"center"}
									flexDirection="column"
								>
									<Image
										src={selectedImages}
										w="12rem"
										rounded={"md"}
										h="10rem"
									/>
									<Box>
										<Box
											as="label"
											background={`${"var(--main-color) !important"}`}
											border="none"
											color="white"
											h="2rem"
											mt="2"
											onClick={onSelectFile}
										>
											Add New Image
											<Input
												type="file"
												hidden
												name="images"
												onChange={onSelectFile}
												accept="image/png , image/jpeg, image/webp"
											/>
										</Box>
										<Input type="file" hidden />
									</Box>
								</Box>
							)}
						</Box>
						<Input
							backgroundColor={"white"}
							mt="5"
							mb="5"
							color="black"
							type="text"
							placeholder="Give it a Title"
						/>
						<RichTextEditor initialValue="" getValue={getValue} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default EntiresDrawer;
