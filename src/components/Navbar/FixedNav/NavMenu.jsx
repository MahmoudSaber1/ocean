import {
	Box,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../../assets";

const menuLinks = [
	{ id: 1, name: "Home", to: "/", icon: icons.home },
	{
		id: 2,
		name: "Best Publishers",
		to: "/publishers",
		icon: icons.publish,
	},
	{
		id: 3,
		name: "All Stories",
		to: "/stories",
		icon: icons.story,
	},
	{
		id: 4,
		name: "All Blogs",
		to: "/blogs",
		icon: icons.blogs,
	},
	{
		id: 5,
		name: "Search",
		to: "/search",
		icon: icons.search,
	},
	{
		id: 6,
		name: "Support",
		to: "/support",
		icon: icons.homeSup,
	},
];

const NavMenu = () => {
	return (
		<>
			<Menu>
				<MenuButton>
					<Box
						color={"#45C3D6"}
						fontSize="2rem"
						as="i"
						className="bx bx-menu"
					></Box>
				</MenuButton>
				<MenuList>
					{menuLinks.map((link) => (
						<Link to={link.to} key={link.id}>
							<MenuItem
								w={"full"}
								justifyContent="space-between"
								color={"#1B6173"}
							>
								<Text fontSize={"1.2rem"}>{link.name}</Text>
								<Image w="20px" src={link.icon} />
							</MenuItem>
						</Link>
					))}
				</MenuList>
			</Menu>
		</>
	);
};

export default NavMenu;
