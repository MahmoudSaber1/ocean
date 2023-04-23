import { Box, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useStateContext } from "../../ContextProvider";
import { Signer } from "@waves/signer";
import { ProviderSeed } from "@waves/provider-seed";
import { libs } from "@waves/waves-transactions";

const Seed = () => {
	const { saveToken } = useStateContext();
	const toast = useToast();

	const seed = libs.crypto.randomSeed(15);
	const signer = new Signer({
		// Specify URL of the node on Testnet
		NODE_URL: "https://nodes-testnet.wavesnodes.com",
	});
	signer.setProvider(new ProviderSeed(seed));

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
				saveToken(res, true);
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
				onClick={() => WalletLogin()}
				cursor={"pointer"}
			>
				<Box display={"flex"} alignItems="center" gap="4">
					<Text fontSize={["md", "lg", "xl"]}>Waves Excheng (Seed)</Text>
				</Box>
			</Box>
		</>
	);
};

export default Seed;
