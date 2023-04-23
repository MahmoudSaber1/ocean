import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const menuLinks = [
	{ id: 1, name: "Home", to: "/" },
	{
		id: 2,
		name: "Publishers",
		to: "/publishers",
	},
	{
		id: 3,
		name: "Stories",
		to: "/stories",
	},
	{ id: 4, name: "Blogs", to: "/blogs" },
	// { id: 5, name: "Search", to: "/search" },
	// { id: 6, name: "Support", to: "/support" },
];

const DesktopMenu = () => {
	return (
		<>
			<Flex alignItems={"center"} justifyContent={"center"} gap="5">
				{menuLinks.map((link) => (
					<Link to={link.to} key={link.id}>
						<Box
							w={"full"}
							display="flex"
							justifyContent="space-between"
							className="links"
						>
							<Text fontSize={"1.05rem"}>{link.name}</Text>
						</Box>
					</Link>
				))}
			</Flex>
		</>
	);
};

export default DesktopMenu;
