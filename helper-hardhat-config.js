//this file helps the deploy scripts
const networkConfig = {
    5: {
        name: "goerli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
}
const developmentChains = ["hardhat", "localhost"]

const DECIMALS = 8
//need to add 8 zeros because of 8 DECIMALS above
const INITIAL_ANSWER = 200000000000
module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
}
