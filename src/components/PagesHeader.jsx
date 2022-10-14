import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const PagesHeader = ({ name, icon }) => {
	return (
		<>
			<Box
				display={"flex"}
				alignItems="center"
				justifyContent={"space-between"}
			>
				<Text
					pl="5"
					my="5"
					fontSize={("sm", "md", "lg")}
					color={`${"var(--txt-color-3)"}`}
				>
					{name}
				</Text>
				<Image cursor={"pointer"} w="34px" mr="5" src={icon} />
			</Box>
		</>
	);
};

export default PagesHeader;
