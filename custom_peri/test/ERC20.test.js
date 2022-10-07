const {expect} = require("chai");
const {ethers} = require('hardhat');

describe("it will deploy a contarct",function (){



 
it("The totalSupply belong to Owner",async ()=>{
    const [manager,p1,p2] = await ethers.getSigners();
    const ERC20 = await ethers.getContractFactory("ERC20");
    const ercd = await ERC20.deploy();
    const managerBal = await ercd.balanceAvail(manager.address)
    console.log("the balance is",managerBal)
    expect(await ercd.balanceAvail(manager.address)).to.equal(managerBal);

});
 it("transfers amount from the manager account to recepient",async ()=>{
    const [manager,p1,p2] = await ethers.getSigners();
    const ERC20 = await ethers.getContractFactory("ERC20");
    const ercd = await ERC20.deploy();
    const managerBal = await ercd.balanceAvail(manager.address)
    const trans = await ercd.transfer(p1.address,200);
    const p1bal=await ercd.balanceAvail(p1.address);
    expect( await ercd.balanceAvail(manager.address)).to.equal(managerBal-p1bal);
    console.log(ercd.events.args.to.toString());
});


});