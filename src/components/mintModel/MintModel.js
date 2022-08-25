import './MintModel.css'
import React, { useState,useEffect } from 'react'
import { ethers } from "ethers";
import { ERC721ABI } from "../../Redux/constants/erc721ABI";

function MintModel({ setOpenModal , property}) {
  const [count, setCount] = useState(0)


  const Mint=async ()=>{
    try{if(property){
    console.log("TokenPrice",property[0].PricePerToken)
    console.log("count",count)
    console.log("wallet",property[0].SellerWalletAddress)
    console.log("CloneAddress",property[0].propertyId.PropertyContractAddress)
    let price=(property[0].PricePerToken*count)
    console.log("price",price)
    let value=ethers.utils.parseEther(`${price}`, 18)
    console.log(value)
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
    const address = accounts[0]
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    let signer = provider.getSigner()
const erc721= new ethers.Contract(property[0].SellerWalletAddress, ERC721ABI, signer)
console.log(value.toNumber(),"value")
console.log(count,"count")
const mint = await erc721.mint(property[0].propertyId.PropertyContractAddress,`${count}`,{value: value ,gasLimit:5000000})
erc721.on("Mint", (owner, quantity) => {
if(quantity === count){console.log("I am Owner",owner)
console.log("I am Quantity",quantity.toNumber())}
})
}
}
catch (error) {
console.log(error)
}
}

console.log(count)


  return (
    <div>
      <div className="mintModalBackground">
        <div className="mintModalContainer">
          <div className="mintModaltitleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="mintModaltitle">
            <p>Enter No of tokens you want to buy and price of 1 token</p>
          </div>
          <div className="mintModalbody">
            <p><b>TOKEN STOCK </b>: {property[0].TotalSupplies} </p>
            <p>
              {count === 0 && <button 
              disabled
              style={{cursor:"not-allowed"}}
              className='decreaseBtn' onClick={() => setCount(count - 1)}>-</button>}
              {count !== 0 && <button className='decreaseBtn' onClick={() => setCount(count - 1)}>-</button>}
              <span className='tokenValue'> {count} </span>
              <button className='increaseBtn' onClick={() => setCount(count + 1)}>+</button>
            </p>
          </div>
          <div className="mintModalfooter">
            <button
              id="mintModalcalculateBtn"
              onClick={Mint}>
              Mint
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MintModel