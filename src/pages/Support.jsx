import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { icons } from "../assets";
import { ConnectWallets, PagesHeader } from "../components";
import { BoxContainer, OceanContainer } from "../containers";
import { useStateContext } from "../ContextProvider";

const Support = () => {
	const { isAuth } = useStateContext();
	return (
		<>
			<OceanContainer
				navBtn={
					isAuth === true ? (
						<Button
							color={"white"}
							background={`${"var(--main-bg-3) !important"}`}
							className={"btnHover"}
							size={["sm", "sm", "md"]}
						>
							<Box fontSize={"2xl"} as="p">
								New Ticket
							</Box>
						</Button>
					) : (
						<ConnectWallets btnName={"Connect"} />
					)
				}
			>
				<Box>
					<BoxContainer name={"Support"}>
						<Box pl="5">
							<Text
								fontSize={"2xl"}
								fontWeight="600"
								color={`${"var(--text-color)"}`}
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
							borderColor={`${"var(--text-color-3)"}`}
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
									color={`${"var(--text-color-3)"}`}
								>
									you have't submitted any tickets
								</Text>
							</Box>
						</Box>
					</BoxContainer>
				</Box>
			</OceanContainer>
		</>
	);
};

export default Support;
