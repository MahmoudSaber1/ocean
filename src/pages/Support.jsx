import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { icons } from "../assets";
import { useStateContext } from "../commen/Context/OceanContext";
import {
	BoxBlock,
	BoxContainer,
	ConnectWallets,
	Navbar,
	PagesHeader,
} from "../components";

const Support = () => {
	const { isAuth } = useStateContext();

	return (
		<>
			<BoxContainer>
				<Navbar
					btn={isAuth === true ? null : <ConnectWallets btnName={"Connect"} />}
				/>
				<Box>
					<BoxBlock name={"Support"}>
						<Box pl="5">
							<Text
								fontSize={"2xl"}
								fontWeight="600"
								color={`${"var(--txt-color)"}`}
							>
								Tickets
							</Text>
							<PagesHeader
								name={"Get help by using our tickets system."}
								icon={icons.searchBar}
							/>
						</Box>
						<Box
							mx="5"
							rounded={"md"}
							mb="10"
							height="350px"
							border={"1px solid"}
							borderColor={`${"var(--txt-color-3)"}`}
						>
							<Box
								display={"flex"}
								alignItems="center"
								justifyContent={"center"}
								h="full"
								textAlign={"center"}
							>
								<Text
									fontSize={("lg", "xl", "2xl")}
									fontWeight="600"
									color={`${"var(--txt-color-3)"}`}
								>
									you have't submitted any tickets
								</Text>
							</Box>
						</Box>
					</BoxBlock>
				</Box>
			</BoxContainer>
		</>
	);
};

export default Support;
