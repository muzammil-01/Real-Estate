import React, { useState } from 'react'
import { ERC1155ABI, ERC1155Address } from "../../Redux/constants/erc1155abi";
import { ethers } from "ethers";
import axios from 'axios'


export default function ResellModal({ setResell, property }) {
  console.log(property)
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0)

  const ListTokens = async () => {
    var a = localStorage.getItem('userInfo')
    if (a) {
      var token = JSON.parse(a).authToken
    }
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
    const address = accounts[0]
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const CurrentWalletAddress = await signer.getAddress()
    const testData = {
      Pricepertoken: price, SellerWalletAddress: CurrentWalletAddress, numberOfSupplies: count, propertyId: property._id
    }

    console.log("test data", testData)

    const config = {
      headers: {
        'Content-Type': 'application/json',
        "auth-token": token
      }
    }
    const data1 = await axios.post('http://localhost:3001/api/property/checkToken', testData, config)
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
