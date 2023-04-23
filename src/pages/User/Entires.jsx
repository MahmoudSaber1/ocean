import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { ConnectWallets, EntriesComponent } from "../../components";
import { BoxContainer, OceanContainer } from "../../containers";
import { useStateContext } from "../../ContextProvider";

const Entires = () => {
	const { isAuth } = useStateContext();
	return (
		<>
			<OceanContainer
				navBtn={
					isAuth === true ? (
						<EntriesComponent
							btnName={"+"}
							classess={`${"var(--main-bg-3) !important"}`}
						/>
					) : (
						<ConnectWallets btnName={"Connect"} />
					)
				}
			>
				<BoxContainer name={"Entires"}>
					<Box pt="28" pb="32">
						<Box
							display={"flex"}
							alignItems="center"
							justifyContent={"center"}
							flexDirection="column"
							width={"full"}
							gap="3"
						>
							<EntriesComponent
								btnName={"Create your Entires"}
								classess={`${"var(--main-bg-2) !important"}`}
							/>
							<Button
								color={"white"}
								background={`${"var(--main-bg-3) !important"}`}
								className={"btnHover"}
								size={["sm", "sm", "md"]}
							>
								<Box fontSize={"2xl"} as="p">
									Learn More
								</Box>
							</Button>
						</Box>
					</Box>
				</BoxContainer>
			</OceanContainer>
		</>
	);
};

export default Entires;
