import React , {useState} from 'react'
import './TokenModal.css'
import { ethers } from "ethers";
import { ERC1155ABI, ERC1155Address } from "../../Redux/constants/erc1155abi";

export default function TokenModal({setOpenModal, property}) {
  if(property){
    console.log(property)
  }
    const [calculate, setCalculate] = useState(0)
    const [selectTokens, setSelectTokens] = useState(0)
	  const [tokenPrice, setTokenPrice] = useState(0)
	


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
      const transfer = await ERC1155.transfer(`${address}`, `${address}`, `100`, `20`, { gasLimit: 5000000 })
      console.log(transfer)
      ERC1155.on("Resell", (from, to, amount) => {
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
          <div className="modalContainer" style={{color:"black"}}>
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
              <button onClick={ListTokens}
               id="calculateBtn"
              >
                Buy Tokens
              </button>
            </div>
          </div>
        </div>
    
  )
}