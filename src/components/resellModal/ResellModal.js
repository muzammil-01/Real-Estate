import React from 'react'
import { ERC721ABI } from "../../Redux/constants/erc721ABI";
import { ethers } from "ethers";

export default function ResellModal({setResell, property}) {
  console.log(property)


  	// const ListTokens = async () => {
	// 	try {

	// 	if (window.ethereum) {
	// 		const accounts = await window.ethereum.request({
	// 			method: "eth_requestAccounts",
	// 		  });
	// 		  const address = accounts[0];
	// 		  let provider = new ethers.providers.Web3Provider(window.ethereum);
	// 		let signer = provider.getSigner();
	// 		const ERC721 = new ethers.Contract(
	// 			ERC721ContractAddress,
	// 			ERC721ABI,
	// 			signer,
	// 			{ gas: 2100000, gasPrice: 800000000 }
	// 		);
	// 		let tx= await ERC721.listForsale(quantity,pricePerToken)
	// 		ERC721.on("ListToken", (quantity, pricePerToken) => {
	// 			console.log(`quantity: ${quantity} ,pricePerToken:${pricePerToken}`)
	// 		})
	// 		} 
	// 	else {
	// 		console.alert("Please Install MetaMask Extension")
	// 		}
	// 	}
	// 	catch (error) {
	// 		console.error(error.message)
	// 	}
	// }
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
      <p>TOKEN STOCK : 8980 </p>
      <p> Enter Tokens: <input type="number"  min={0} /> X 1 token price = <input type="number" min={0}/> = <span></span>
          </p>
      </div>
      <div className="footer">
        <button
         id="calculateBtn"
        >
          Calculate
        </button>
        <button>Buy tokens</button>
      </div>
    </div>
  </div>
  )
}
