import React from "react";
import { Route, Routes } from "react-router-dom";
import {
	BlogDetails,
	Blogs,
	Entires,
	Favourites,
	Home,
	Publishers,
	Search,
	Settings,
	Stories,
	StoriesDetails,
	Story,
	Subscribers,
	Support,
	UserID,
} from "./pages";

import { FixedNavbar, Footer } from "./components";

const App = () => {
	return (
		<>
			<FixedNavbar />
			<Routes>
				<Route path="/">
					<Route index element={<Home />} />
					<Route path="/blogs">
						<Route index element={<Blogs />} />
						<Route path=":id" element={<BlogDetails />} />
					</Route>
					<Route path="/publishers" element={<Publishers />} />
					<Route path="/stories">
						<Route index element={<Stories />} />
						<Route path=":id" element={<StoriesDetails />} />
					</Route>
					<Route path="/search" element={<Search />} />
					<Route path="/support" element={<Support />} />
				</Route>

				{/* UserRoutes */}
				<Route path="/user/entries" element={<Entires />} />
				<Route path="/user/stories" element={<Story />} />
				<Route path="/user/favourites" element={<Favourites />} />
				<Route path="/user/subscribers" element={<Subscribers />} />
				<Route path="/user/settings" element={<Settings />} />
				<Route path="/users/:id" element={<UserID />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
