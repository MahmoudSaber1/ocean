// DAPP
// export const oceandApp = `3N2kVUxYqFz4rHNgnVr7ffhsnC7DptJ1BzH`;
export const oceandApp = `3MqxhXjG6DVDwFuLsaBz7sgt38iwHj9Da7f`;

export const userData = (wallet_address) => {
	// return `https://nodes-testnet.wavesnodes.com/addresses/data/${oceandApp}?matches=user_${wallet_address}_.%2A`;
	return `https://nodes-testnet.wavesnodes.com/addresses/data/${oceandApp}?matches=user_${wallet_address}_name`;
};

export const favoritesStory = ({ wallet_address }) => {
	return `https://nodes-testnet.wavesnodes.com/addresses/data/${oceandApp}?matches=user_${wallet_address}_story_favorite_.%2A`;
};

export const verifiedUser = ({ wallet_address }) => {
	return `https://nodes-testnet.wavesnodes.com/addresses/data/${oceandApp}?matches=user_${wallet_address}_verified_.%2A`;
};

export const listOfVerifiedUsers = () => {
	return `https://nodes-testnet.wavesnodes.com/addresses/data/${oceandApp}?matches=.%2A_verified`;
};

export const likesByBlogId = ({ wallet_address }) => {
	return `https://nodes-testnet.wavesnodes.com/addresses/data/${oceandApp}?matches=blog_${wallet_address}_favorite_.%2A`;
};

export const likesByStoryId = ({ wallet_address }) => {
	return `https://nodes-testnet.wavesnodes.com/addresses/data/${oceandApp}?matches=story_${wallet_address}_favorite_.%2A`;
};

export const allTxIds = () => {
	return `https://nodes-testnet.wavesnodes.com/addresses/data/${oceandApp}?matches=blog_.%2A_arweave_tx_id`;
};

export const allBlogData = (txId) => {
	return `https://nodes-testnet.wavesnodes.com/addresses/data/${oceandApp}?matches=blog_${txId}_.%2A`;
};

export const allStoryTxIds = () => {
	// return `https://nodes-testnet.wavesnodes.com/addresses/data/${oceandApp}?matches=blog_.%2A_arweave_tx_id`;
	return `https://nodes-testnet.wavesnodes.com/addresses/data/3N2kVUxYqFz4rHNgnVr7ffhsnC7DptJ1BzH?matches=story_.%2A`;
};

export const allStoryData = (txId) => {
	// return `https://nodes-testnet.wavesnodes.com/addresses/data/${oceandApp}?matches=blog_${txId}_.%2A`;
	return `https://nodes-testnet.wavesnodes.com/addresses/data/3N2kVUxYqFz4rHNgnVr7ffhsnC7DptJ1BzH?matches=story_${txId}_.%2A`;
};

export const imageData = ({ link, name }) => {
	return `https://dxdteam.xyz/arw/puchs?link=${link}?name=${name}`;
};
