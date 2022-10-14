import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ContextProvider } from "./commen/Context/OceanContext";

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
