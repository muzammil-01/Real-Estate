import React, { useState } from 'react'
import { ERC721ABI } from "../../Redux/constants/erc721ABI";
import { ethers } from "ethers";


export default function ResellModal({ setResell, property }) {
  console.log(property)
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0)

  const ListTokens = async () => {
    try {
      let pricePerToken = ethers.utils.parseEther("3", 18);


      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        let signer = provider.getSigner();
        const ERC721 = new ethers.Contract(
          property.PropertyContractAddress,
          ERC721ABI,
          signer
        );
        console.log("property.PropertyContractAddress", property.PropertyContractAddress)
        console.log("count", count)
        console.log("price", price)
        console.log("pricePerToken", pricePerToken)
        ERC721.listForsale(`${count}`, pricePerToken, { gasLimit: 9000000 })
          .then((tx) => {
            return tx.wait()
              .then((receipt) => {
                // This is entered if the transaction receipt indicates success
                return true;
              }), (error) => {
                // This is entered if the status of the receipt is failure
                return error.checkCall().then((error) => {
                  console.log("Error", error);
                  return false;
                });
              }
          });
        ERC721.on(`ListToken`, (address, count, pricePerToken) => {
          console.log(`address: ${address},count: ${count} ,pricePerToken:${pricePerToken}`)
        })
      }
      else {
        console.alert("Please Install MetaMask Extension")
      }
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
