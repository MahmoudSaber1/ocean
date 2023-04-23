import {
	Box,
	Button,
	FormControl,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { ConnectWallets } from "../components";
import { BoxContainer, OceanContainer } from "../containers";
import { useStateContext } from "../ContextProvider";

const Search = () => {
	const { isAuth } = useStateContext();
	return (
		<>
			<OceanContainer
				navBtn={isAuth === true ? null : <ConnectWallets btnName={"Connect"} />}
			>
				<BoxContainer name={"All Stories"}>
					<Text pl="5" my="5" fontSize={"lg"} color={`${"var(--txt-color-3)"}`}>
						search Blogs, Stories, Puplishers, that meet your intersts
					</Text>

					<Box
						my="10"
						display={"flex"}
						alignItems="center"
						justifyContent={"center"}
						w="full"
						p="5"
					>
						<FormControl pb="28" w={["100%", "70%", "50%"]}>
							<InputGroup>
								<Input
									boxShadow={"base"}
									borderColor="#ddd"
									placeholder="Search...."
								/>
								<InputRightElement
									children={<i className="bx bx-search"></i>}
								/>
							</InputGroup>
						</FormControl>
					</Box>
				</BoxContainer>
			</OceanContainer>
		</>
	);
};

export default Search;
