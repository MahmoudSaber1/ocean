import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { userData } from "./common/Api";
import { oceandApp } from "./common/Api";
import { Signer } from "@waves/signer";
import { ProviderKeeper } from "@waves/provider-keeper";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	// User Auth & Connect Wallet
	const getUser = () => {
		const userString = sessionStorage.getItem("user");
		const user_detail = JSON.parse(userString);
		return user_detail;
	};
	const isAuthenticated = () => {
		const userAuth = sessionStorage.getItem("auth");
		const user_auth = JSON.parse(userAuth);
		return user_auth;
	};
	const [userWallet, setUserWallet] = useState(getUser());
	const [isAuth, setIsAuth] = useState(isAuthenticated());
	const saveToken = (user, auth) => {
		sessionStorage.setItem("user", JSON.stringify(user));
		sessionStorage.setItem("auth", JSON.stringify(auth));
		setUserWallet(user);
		setIsAuth(auth);
	};
	const logout = () => {
		sessionStorage.clear();
		window.location.reload();
	};

	const checkUser = async () => {
		await axios.post(userData(userWallet.address));
	};

	const dApp = `${oceandApp}`;

	useEffect(() => {
		isAuth && checkUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth]);

	const signer = new Signer({
		// Specify URL of the node on Testnet
		NODE_URL: "https://nodes-testnet.wavesnodes.com",
	});
	const keeper = new ProviderKeeper();
	signer.setProvider(keeper);

	const [allBlogs, setAllBlogs] = useState([]);

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<StateContext.Provider
			value={{
				setIsAuth,
				isAuth,
				userWallet,
				setUserWallet,
				saveToken,
				logout,
				dApp,
				signer,
				allBlogs,
				setAllBlogs,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
