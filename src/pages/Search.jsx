import {
	Box,
	FormControl,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { useStateContext } from "../commen/Context/OceanContext";
import { BoxBlock, BoxContainer, ConnectWallets, Navbar } from "../components";

const Search = () => {
	const { isAuth } = useStateContext();

	return (
		<>
			<BoxContainer>
				<Navbar
					btn={isAuth === true ? null : <ConnectWallets btnName={"Connect"} />}
				/>
				<Box>
					<BoxBlock name={"All Stories"}>
						<Text
							pl="5"
							my="5"
							fontSize={"lg"}
							color={`${"var(--txt-color-3)"}`}
						>
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
					</BoxBlock>
				</Box>
			</BoxContainer>
		</>
	);
};

export default Search;
