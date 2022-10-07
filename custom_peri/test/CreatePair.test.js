const {expect} = require("chai");
const {ethers} = require('hardhat');

describe("it will deploy a contarct",function (){



 

 it("The Addresses of Pairs is Not Same",async ()=>{
    const [p1,p2] = await ethers.getSigners();
    const Pair = await ethers.getContractFactory("CreatePair");
    const Pd = await Pair.deploy();
    const erc = 20;
    expect(await Pd.erc).to.equal(20);
});

async function createPair() {
    const create2Address = getCreate2Address(Pd.address, tokens, bytecode)
    await expect(Pd.createPair(...tokens))
      .to.emit(Pd, 'PairCreated')
      .withArgs(TEST_ADDRESSES[0], TEST_ADDRESSES[1], create2Address, bigNumberify(1))

    await expect(Pd.createPair(...tokens)).to.be.reverted // UniswapV2: PAIR_EXISTS
    await expect(Pd.createPair(...tokens.slice().reverse())).to.be.reverted // UniswapV2: PAIR_EXISTS
    expect(await Pd.getPair(...tokens)).to.eq(create2Address)
    expect(await Pd.getPair(...tokens.slice().reverse())).to.eq(create2Address)
    expect(await Pd.allPairs(0)).to.eq(create2Address)
    expect(await Pd.allPairsLength()).to.eq(1)

    const pair = new Contract(create2Address, JSON.stringify(UniswapV2Pair.abi), provider)
    expect(await pair.Pd()).to.eq(Pd.address)
    expect(await pair.token0()).to.eq(TEST_ADDRESSES[0])
    expect(await pair.token1()).to.eq(TEST_ADDRESSES[1])
  }

});