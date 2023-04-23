import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Dependency
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./ContextProvider";
import "driver.js/dist/driver.min.css";
import "draft-js/dist/Draft.css";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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
