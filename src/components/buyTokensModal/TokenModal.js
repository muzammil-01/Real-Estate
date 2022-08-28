import React , {useState} from 'react'
import './TokenModal.css'
import { ethers } from "ethers";
import { ERC721ABI } from "../../Redux/constants/erc721ABI";
import BN from "bn.js";

export default function TokenModal({setOpenModal}) {
    const [calculate, setCalculate] = useState(0)
    const [selectTokens, setSelectTokens] = useState(0)
	const [tokenPrice, setTokenPrice] = useState(0)
	
	// const TransferTokens = async () => { 
	// 	try {
	// 		const accounts = await window.ethereum.request({
	// 			method: "eth_requestAccounts",
	// 		  });
	// 		  const address = accounts[0];
	// 		  let provider = new ethers.providers.Web3Provider(window.ethereum);
	// 		  let signer = provider.getSigner();
	// 		  const erc721 = new ethers.Contract(
	// 			property[0].SellerWalletAddress,
	// 			ERC721ABI,
	// 			signer
	// 		  );
	// 		let tx = erc721.transfer(from, to, quantity, { value: value, gasLimit: 5000000 })
	// 		erc721.on("TransferToken", (from, to, quantity, priceperToken) => {
				
	// 		})
			
	// 	} catch (error) {
			
	// 	}
	// }





  return (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
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
            <p> Enter Tokens: <input type="number"  min={0} onChange={(e)=> setSelectTokens(e.target.value)}/> X 1 token price = <input type="number" min={0} onChange={(e)=> setTokenPrice(e.target.value)}/> = <span>{calculate}</span>
                </p>
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  setCalculate(selectTokens*tokenPrice)
                }}
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