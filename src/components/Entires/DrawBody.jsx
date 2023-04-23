import { Box, DrawerBody, Image, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { uploadImage } from "../../common/Functions/UploadImage";

const DrawBody = () => {
	const [selectedImages, setSelectedImages] = useState("");
	const onSelectFile = (event) => {
		const selectedFiles = event.target.files[0];
		// Upload Functions
		uploadImage(selectedFiles)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		const selectedFilesArray = URL.createObjectURL(selectedFiles);
		setSelectedImages(selectedFilesArray);
		// FOR BUG IN CHROME
		event.target.value = "";
	};
	const [title, setTitle] = useState("");

	return (
		<>
			<DrawerBody>
				<Box display={"flex"} alignItems="center" justifyContent={"center"}>
					{selectedImages === "" ? (
						<>
							<Box
								as="label"
								w={["10rem", "25rem", "25rem"]}
								h={["8rem", "15rem", "15rem"]}
							>
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
								w={["12rem", "25rem", "25rem"]}
								h={["10rem", "15rem", "15rem"]}
								rounded="md"
							/>
							<Box>
								<Box
									as="label"
									background={`${"var(--main-bg-3) !important"}`}
									border="none"
									color="white"
									h="2rem"
									mt="2"
									p="5"
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
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<RichTextEditor />
			</DrawerBody>
		</>
	);
};

export default DrawBody;
