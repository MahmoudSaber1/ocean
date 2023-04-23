import { Avatar, Box, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const UserInfo = ({ link, name, avatar, address }) => {
	const [selectedImages, setSelectedImages] = useState("");
	const onSelectFile = (event) => {
		const selectedFiles = event.target.files[0];
		const selectedFilesArray = URL.createObjectURL(selectedFiles);
		setSelectedImages(selectedFilesArray);
		// FOR BUG IN CHROME
		event.target.value = "";
	};

	return (
		<>
			<Box
				display={"flex"}
				alignItems="center"
				justifyContent={"center"}
				flexDirection="column"
				w={"full"}
			>
				<Box width={"full"} height={"200px"} position="relative">
					{selectedImages === "" ? (
						<>
							<Box
								as="label"
								w={"0"}
								h={"0"}
								position="absolute"
								top={10}
								right="4"
							>
								<Box
									as="i"
									p="1"
									border="1px solid #777"
									rounded={"md"}
									color="black"
									cursor={"pointer"}
									className="bx bx-plus"
								></Box>
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
						<>
							<Image src={selectedImages} objectFit="cover" w="full" h="full" />
							<Box
								as="label"
								w={"0"}
								h={"0"}
								position="absolute"
								top={10}
								right="4"
							>
								<Box
									as="i"
									p="1"
									border="1px solid #777"
									rounded={"md"}
									color="black"
									cursor={"pointer"}
									className="bx bx-plus"
								></Box>
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
					)}
					{selectedImages === "" ? (
						<Box backgroundColor={"#ddd"} w="full" h="full" />
					) : null}
					<Avatar
						size="lg"
						position={"relative"}
						name={avatar}
						top="-8"
						left="5"
					/>
				</Box>
				<Box pl="24" pt="4" w="full" display={"flex"} flexDirection="column">
					<Text fontSize={["md", "lg", "xl"]} color={`${"var(--txt-color-2)"}`}>
						{name ? name : "...."}
					</Text>
					<Box
						w="full"
						display={"flex"}
						alignItems="center"
						justifyContent={"space-between"}
					>
						<Text
							backgroundColor={"#DDD"}
							rounded="md"
							py="1px"
							px="5px"
							fontSize={"12px"}
						>
							{address}
						</Text>
						<Box cursor={"pointer !important"}>{link}</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default UserInfo;
