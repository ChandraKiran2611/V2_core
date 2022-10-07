// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

//  project for ERC20 tokens
//  allowance function
//  balanceof func
//  transfer
//  approve 
//  mint
//  BURN   
//  transferFrom
 contract ERC20{
address owner;
 uint public totalSupply=1000;
mapping(address=>uint) balanceOf;
mapping(address=>mapping(address=>uint)) allowance;
constructor (){
    owner = msg.sender;
    balanceOf[owner] = totalSupply;
}
event Transfer(address to,uint amount);
event Approve(address spender,uint amount);
event TransferFrom(address from,address to, uint amount);

function transfer(address to , uint amount) public {
    balanceOf[owner] -= amount;
    balanceOf[to] +=amount;
    emit Transfer(to, amount);

}

function balanceAvail(address id) public view returns(uint){
    return balanceOf[id];


}
function allow(address spender) public view returns(uint){
    return allowance[owner][spender];
}
function approve(address spender,uint amount) public {
    allowance[owner][spender] = amount;
   emit Approve(spender,amount);
}

function transferFrom(address from, address to, uint amount) public {
        require(allowance[owner][to]>amount,"the amount of allowance is exceeded");
        allowance[owner][to] -= amount;
        balanceOf[from] -=amount;
        balanceOf[to] +=amount;
        emit TransferFrom(from,to,amount); 

}
function mint(uint amount) public{
    totalSupply += amount;
    balanceOf[owner]+=amount;
    emit Transfer(owner,amount);
}


}