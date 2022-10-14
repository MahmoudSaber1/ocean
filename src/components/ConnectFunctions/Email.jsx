import { Box, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useStateContext } from "../../commen/Context/OceanContext";
import { Signer } from "@waves/signer";
import { ProviderCloud } from "@waves.exchange/provider-cloud";

const Email = () => {
	const { saveToken } = useStateContext();
	const toast = useToast();

	const signer = new Signer({
		// Specify URL of the node on Testnet
		NODE_URL: "https://nodes-testnet.wavesnodes.com",
	});
	signer.setProvider(new ProviderCloud());

	const WalletLogin = async () => {
		await signer
			.login()
			.then((res) => {
				toast({
					title: "Connected Successfully",
					status: "success",
					position: "top-right",
					duration: 9000,
					isClosable: true,
				});
				console.log(res);
			})
			.catch((err) =>
				toast({
					title: "Connected Faild",
					description: err,
					status: "error",
					position: "top-right",
					duration: 9000,
					isClosable: true,
				})
			);
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
				className="scale"
				cursor={"pointer"}
				onClick={() => WalletLogin()}
			>
				<Box display={"flex"} alignItems="center" gap="4">
					<Text fontSize={["md", "lg", "xl"]}>Waves Excheng (Email)</Text>
				</Box>
			</Box>
		</>
	);
};

export default Email;
