// SPDX-License-Identifier: UNLISENCED
pragma solidity ^0.8.13;

contract Pair{
 mapping(address=>mapping(address=>address)) public getPair;
 mapping(address=>uint) public balance;
 address tokenc;
 address token2;
 address[] public allpairs;
 event createdPair(address indexed tokenA,address indexed tokenB,address indexed pair,uint);
 constructor(){
     balance[tokenc] =100;
     balance[token2] =300;
 }
 function balanceOf(address id) public pure returns(uint){
     return balance(id);
 }
    function CreatePair(address tokenA,address tokenB) public returns(address pair){

        balance[tokenA] = 100;
        balance[tokenB] = 200;
        require(tokenA!=tokenB,"Same addresses can't form a pair");
        (address token0, address token1) = balance[tokenA] < balance[tokenB] ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 !=address(0),"zero Address error");
        getPair[token0][token1] = pair;
        allpairs.push(pair);
        emit createdPair(token0, token1, pair,allpairs.length);
        return pair;
    } 

}
