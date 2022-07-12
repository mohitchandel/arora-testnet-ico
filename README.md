# ICO Fresh Token

Fresh Token Smart Contract

Token (**FRTK**) is created and deployed on Aurora Test network => (0x4228c42B33003500b07DBdb58675ACD3f28Ef23a)[https://testnet.aurorascan.dev/address/0x4228c42B33003500b07DBdb58675ACD3f28Ef23a]

Crowdsale Contract => (0x59153C78D4Bc0bD51c3797Cd0b7CbDB870899Cb5)[https://testnet.aurorascan.dev/address/0x59153C78D4Bc0bD51c3797Cd0b7CbDB870899Cb5]

## Steps to Follow first
1. First need to allow token spend using ```token.approve()``` function


## How to start ICO

*StartCrowdsale* function will start ICO and launch the ICO phase from **0** to **1**

```
function startCrowdsale() 
```

**There are two Ico phase**
1. Pres Sale - Below 30 Million (Prise - $0.0125)
2. After Pre Sale - Over 30 Million (Prise - $0.0255)


## Buy Fresh Token

with *buyToken* function users can buy Token. The user will put the Ethereum amount as a parameter and this function will calculate how many tokens will be allotted according to the given price.

```
function buyToken(uint256 _amount) 
```

Transaction example => (0xf0a90b257dea5ac1bd3e267b7df8df9213db56de4bcf8eddcc9de57024467d68)[https://testnet.aurorascan.dev/tx/0xf0a90b257dea5ac1bd3e267b7df8df9213db56de4bcf8eddcc9de57024467d68]