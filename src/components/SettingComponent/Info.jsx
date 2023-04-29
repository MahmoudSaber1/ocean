import { Box, Input, Text } from "@chakra-ui/react";
import React from "react";

const Info = ({
	name,
	disc,
	state,
	type,
	holder,
	val,
	handelChange,
	name2,
}) => {
	return (
		<>
			<Box pt="5">
				<Box
					display={"flex"}
					alignItems="center"
					justifyContent={"space-between"}
					mb="2"
				>
					<Text
						fontSize={["lg", "lg", "xl"]}
						color={"#1B6173"}
						fontWeight="600"
						textTransform={"capitalize"}
					>
						{name2 ? name2 : name}
					</Text>
					<Text py={"1px"} px="2" rounded={"full"} backgroundColor={"#E2E7EC"}>
						{state}
					</Text>
				</Box>
				<Text color={"#3f4143"} fontSize="12px" mb="1">
					{disc}
				</Text>
				<Input
					color="white"
					value={val}
					type={type}
					name={name}
					placeholder={holder}
					onChange={handelChange}
				/>
			</Box>
		</>
	);
};

export default Info;
