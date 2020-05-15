
async function createMetaMaskDapp() {
    try {
        //Demande à MetaMask l'autorisation de se connecter
        const addresses = await ethereum.enable();
        const address = addresses[0];
        //Connection au client Ethereum fourni par l'objet web3
        const provider = new ethers.providers.Web3Provider(ethereum);
        dapp = { address, provider };
        console.log(dapp);
        balance();
        getNumber();
        getPrice();
    } catch(err) {
        console.log(err);
    }
}

async function balance() {
    dapp.provider.getBalance(dapp.address).then(balance => {
        let etherString = ethers.utils.formatEther(balance);
        document.getElementById("balance").innerHTML = `${etherString} ETH`;
        console.log("Balance:" + etherString)
    })
}
async function getNumber() {
    dapp.provider.getBlockNumber().then(blockNumber => {
        document.getElementById("block").innerHTML = `${blockNumber}` ;
        console.log(blockNumber)
    })
}
async function getPrice() {
    dapp.provider.getGasPrice().then(gasPrice => {
        gasPriceString = gasPrice.toString();
        document.getElementById("price").innerHTML = `${gasPriceString} wei`;
        console.log(gasPriceString)
    })
}
