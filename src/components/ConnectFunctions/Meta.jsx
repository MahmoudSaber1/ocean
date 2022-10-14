import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useStateContext } from "../../commen/Context/OceanContext";
import { Signer } from "@waves/signer";
import { ProviderMetamask } from "@waves/provider-metamask";

const Meta = () => {
	const { saveToken } = useStateContext();

	const signer = new Signer({
		// Specify URL of the node on Testnet
		NODE_URL: "https://nodes-testnet.wavesnodes.com",
	});
	signer.setProvider(new ProviderMetamask());

	const WalletLogin = async () => {
		await signer
			.login()
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<>
			<Box
				display={"flex"}
				alignItems="center"
				justifyContent={"space-between"}
				backgroundColor={"#AABCC4"}
				padding="2px 15px"
				rounded={"xl"}
				color="white"
				w="full"
				mb="3"
				onClick={() => WalletLogin()}
				className="scale"
				cursor={"pointer"}
			>
				<Box display={"flex"} alignItems="center" gap="4">
					<Text fontSize={["md", "lg", "xl"]}>Waves Excheng (MetaMask)</Text>
				</Box>
			</Box>
		</>
	);
};

export default Meta;
