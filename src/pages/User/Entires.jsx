import { Box, Button } from "@chakra-ui/react";
import React from "react";
import {
	BoxBlock,
	BoxContainer,
	EntiresDrawer,
	Navbar,
} from "../../components";

const Entires = () => {
	return (
		<>
			<BoxContainer>
				<Navbar
					btn={
						<EntiresDrawer
							btnName={"+"}
							classess={`${"var(--main-color) !important"}`}
						/>
					}
				/>
				<BoxBlock name={"Entires"}>
					<Box pt="28" pb="32">
						<Box
							display={"flex"}
							alignItems="center"
							justifyContent={"center"}
							flexDirection="column"
							width={"full"}
							gap="3"
						>
							<EntiresDrawer
								btnName={"Create your Entires"}
								classess={`${"var(--seconde-color) !important"}`}
							/>
							<Button
								color={"white"}
								background={`${"var(--main-color) !important"}`}
								className={"btnHover"}
								size={["sm", "sm", "md"]}
							>
								<Box fontSize={"2xl"} as="p">
									Learn More
								</Box>
							</Button>
						</Box>
					</Box>
				</BoxBlock>
			</BoxContainer>
		</>
	);
};

export default Entires;
