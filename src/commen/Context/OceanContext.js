import React, { createContext, useContext, useState } from "react";

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
	};

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
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
