import React, { useState } from 'react'
import { ERC1155ABI ,ERC1155Address} from "../../Redux/constants/erc1155abi";
import { ethers } from "ethers";


export default function ResellModal({ setResell, property }) {
  console.log(property)
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0)

  const ListTokens = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];
      console.log(ERC1155Address)
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      let signer = provider.getSigner();
      const ERC1155 = new ethers.Contract(
        "0x68B03e17443F4cBbb5958e621264fFED3F1A0b41",
        ERC1155ABI,
        signer
      );
      const transfer=await ERC1155.transfer(`${address}`,`${address}`,`100`,`20`,{gasLimit: 5000000})
      console.log(transfer)
      ERC1155.on("Resell",(from,to,amount)=>{
console.log(from)
console.log(to)
console.log(amount)
      })
    }
    catch (error) {
      console.error(error.message)
    }
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setResell(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <p>Enter No of tokens you want to buy and price of 1 token</p>
        </div>
        <div className="body">
          <p>
            <input type="text" placeholder='Enter price of 1 token' onChange={(e) => { setPrice(e.target.value) }} />
            {count === 0 && (
              <button
                disabled
                style={{ cursor: "not-allowed" }}
                className="decreaseBtn"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
            )}
            {count !== 0 && (
              <button
                className="decreaseBtn"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
            )}
            <span className="tokenValue"> <b> {count} </b></span>
            <button
              className="increaseBtn"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </p>
        </div>
        <div className="footer">
          <button id="calculateBtn" onClick={ListTokens}>
            List
          </button>
        </div>
      </div>
    </div>
  )
}
