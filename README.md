# Discord Market

Discord market contracts for the Dev Protocol ecosystem.

## About

This repository contains the smart contracts that authenticate and tokenize Discord
activity for Dev Protocol. It was originally generated from the
[`template-repos-ts-sol`](https://github.com/dev-protocol/template-repos-ts-sol) template
and kept the template's name and description in `package.json` and `README.md` — this
commit aligns them with the repository's actual purpose.

The currently shipped contracts live in `contracts/`:

- `DiscordMarketV2.sol`
- `MarketAdmin.sol`
- `MarketProxy.sol`

## Installation

```bash
yarn
```

## Available Scripts

- `yarn generate` — compile the Solidity contracts
- `yarn test` — run the hardhat test suite
- `yarn build` — type-check the TypeScript sources
- `yarn lint` — run ESLint, Solhint, and Prettier

## License

[MPL-2.0](https://github.com/dev-protocol/discord-market/blob/main/LICENSE)
