import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Dependency
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./ContextProvider";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter basename="/ocean">
		<React.StrictMode>
			<ContextProvider>
				<ChakraProvider>
					<App />
				</ChakraProvider>
			</ContextProvider>
		</React.StrictMode>
	</BrowserRouter>
);
