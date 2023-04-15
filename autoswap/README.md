# Autoswap Module for Safe Wallet

This repository contains the Autoswap Module, a smart contract designed to interact with the Safe Wallet wallet and enable automated token swaps using the Uniswap V2 Router. The Autoswap Module allows the wallet owner to set desired tokens and source tokens for swapping. The module utilizes `execTransactionFromModule` function provided by the Safe Wallet to bypass security controls and execute token swaps via the Uniswap V2 Router.

## Features

Authorized Safe Wallet users:
- Set a desired token for the Safe
- Set source tokens for the Safe
- Unset source tokens for the Safe
Any party:
- Execute autoswap using Uniswap V2 Router

## Usage

1. Deploy the AutoswapModule contract, providing the Uniswap V2 Router02 contract address as a constructor parameter.
```
npx hardhat run scripts/deploy.ts --network polygon
```
2. Enable the deployed AutoswapModule as a module in the Safe Wallet wallet.
e.g. https://app.safe.global/matic:0x04A55848D38EDec988A6F2287B8E00718E14ab14/transactions/tx?id=multisig_0x04A55848D38EDec988A6F2287B8E00718E14ab14_0x5f45465a6e897267c1515b9e9dd0473dfea2b2c1be109ec1f70f4a997af937bc
3. Set a desired token by calling `setDesiredToken()` from the Safe wallet.
4. Set source tokens that are allowed to be swapped by calling `setSourceToken()` from the Safe wallet.
e.g. https://app.safe.global/matic:0x04A55848D38EDec988A6F2287B8E00718E14ab14/transactions/tx?id=multisig_0x04A55848D38EDec988A6F2287B8E00718E14ab14_0x43fdaa9d4e9c81826a977d877ee73f159e0209f9857ad500bb68f332cfe3c590
5. (Optional) Unset source tokens that should no longer be allowed for swapping by calling `unsetSourceToken()` from the Safe wallet.

Whenever an allowlisted source token is received, anyone could swap them into desired token by
1. Execute an autoswap by calling `executeAutoswap()`, providing the Safe address, token to swap, and the amount to swap.
```
npx hardhat run scripts/autoswap.ts --network polygon
```
e.g. https://polygonscan.com/tx/0x2842461e19f4c84203e760b723abe91536ba5f2e8ec9075445cdc0419374c770
In the context payroll service, the payroll administrator could push this transaction automatically as a contract with their payee. It is also easy to set up relayer / MEV incentives such that an external party will be motivated to facilitate these transactions.

In fact, it is very much in company's interest to use this set up instead of company actively swapping the tokens before sending to payees. That is because company would have incur taxable event and additional account burden if the settlement currency hits company's book. In this setup, the company's payment currency first lands in user's wallet and company is simply facilitating non-custodial blockchain interactions as approved by the user.

## Contract Overview

- **SafeWallet Interface**: An interface for interacting with the Safe Wallet wallet.
- **AutoswapModule**: Main contract implementing the Autoswap Module functionality.
  - **setDesiredToken()**: Sets the desired token for the Safe wallet.
  - **setSourceToken()**: Sets a source token to be allowed for swapping.
  - **unsetSourceToken()**: Unsets a source token, disallowing it for swapping.
  - **executeAutoswap()**: Executes the autoswap for a specified Safe, token, and amount using the Uniswap V2 Router.

## Events

- **SourceTokenSet**: Emitted when a source token is set for a Safe wallet.
- **SourceTokenUnset**: Emitted when a source token is unset for a Safe wallet.
- **DesiredTokenSet**: Emitted when a desired token is set for a Safe wallet.
- **ExecuteAutoswap**: Emitted when an autoswap is executed for a Safe wallet.

## Security Considerations

- This contract has not been audited. Use at your own risk.
- As with other Safe Wallet modules, the Autoswap Module bypasses Safe Wallet security controls using `execTransactionFromModule`. Make sure to follow best practices when using this module.
- Ensure that the Autoswap Module is only added to the Safe Wallet wallet by trusted parties to prevent unauthorized swaps.
- To prevent unexpected behavior or loss of funds, always verify that the desired token and source tokens have been set correctly.
