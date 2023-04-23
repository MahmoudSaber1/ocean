import { Box, Container, Link, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<>
			<VStack background={`${"var(--text-color) !important"}`} color={"white"}>
				<Container maxW={"6xl"}>
					<Box h={["220px", "220px", "220px", "auto"]} py="5">
						<Box
							display={"flex"}
							alignItems="center"
							justifyContent={"space-between"}
						>
							<Link>Twitter</Link>
							<Link>telegram</Link>
							<Link>Email</Link>
						</Box>
						<Link href="/support">
							<Box textAlign={"center"} mt="5">
								Submit a ticket
							</Box>
						</Link>
					</Box>
				</Container>
			</VStack>
		</>
	);
};

export default Footer;
