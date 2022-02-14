/* eslint-disable capitalized-comments */
/* eslint-disable spaced-comment */
import { ethers } from 'hardhat'

async function main() {
	//!please check!!!!!!!!!
	const adminAddress = ''
	const khaosWallet = ''
	//!!!!!!!!!!!!!!!!!!!!!!

	// DiscordMarket
	const discordMarketFactory = await ethers.getContractFactory('DiscordMarket')
	const discordMarket = await discordMarketFactory.deploy()
	await discordMarket.deployed()

	const data = ethers.utils.arrayify('0x')

	// MarketProxy
	const marketProxyFactory = await ethers.getContractFactory('MarketProxy')
	const marketProxy = await marketProxyFactory.deploy(
		discordMarket.address,
		adminAddress,
		data
	)
	await marketProxy.deployed()

	const proxy = discordMarketFactory.attach(marketProxy.address)
	await proxy.initialize()
	await proxy.addKhaosRole(khaosWallet)

	console.log('discord market deployed to:', discordMarket.address)
	console.log('market proxy deployed to:', marketProxy.address)
	console.log('market proxy khaosRole is attached to:', khaosWallet)
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
