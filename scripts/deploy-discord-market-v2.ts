/* eslint-disable capitalized-comments */
/* eslint-disable spaced-comment */
import { ethers } from 'hardhat'

async function main() {
	//!please check!!!!!!!!!
	const adminAddress = ''
	const khaosWallet = ''
	//!!!!!!!!!!!!!!!!!!!!!!

	// DiscordMarketV2
	const discordMarketV2Factory = await ethers.getContractFactory(
		'DiscordMarketV2'
	)
	const discordMarketV2 = await discordMarketV2Factory.deploy()
	await discordMarketV2.deployed()

	const data = ethers.utils.arrayify('0x')

	// MarketProxy
	const marketProxyFactory = await ethers.getContractFactory('MarketProxy')
	const marketProxy = await marketProxyFactory.deploy(
		discordMarketV2.address,
		adminAddress,
		data
	)
	await marketProxy.deployed()

	const proxy = discordMarketV2Factory.attach(marketProxy.address)
	await proxy.initialize()
	await proxy.addKhaosRole(khaosWallet)

	console.log('discord market v2 deployed to:', discordMarketV2.address)
	console.log('market v2 proxy deployed to:', marketProxy.address)
	console.log('market proxy v2 khaosRole is attached to:', khaosWallet)
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})

// memo
// set registryAddress and adminAddress and update .env file
// and execute this command
// npx hardhat run --network arbitrumRinkeby scripts/deploy.ts
