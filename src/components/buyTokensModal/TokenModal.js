import React , {useState} from 'react'
import './TokenModal.css'
import { ethers } from "ethers";
import { ERC1155ABI, ERC1155Address } from "../../Redux/constants/erc1155abi";
import axios from 'axios'

export default function TokenModal({setOpenModal, property}) {
  console.log(property._id)
  var a = localStorage.getItem('userInfo')
if(a){
  var token = JSON.parse(a).authToken
}
  const [selectTokens, setSelectTokens] = useState(0)


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
      const transfer = await ERC1155.transfer(`${property.SellerWalletAddress}`, `${address}`, `${property.propertyId.TokenId}`, `${selectTokens}`, { gasLimit: 5000000 })
      console.log(transfer)
      ERC1155.on("Resell", (from, to, amount) => {
        console.log(from)
        console.log(to)
        console.log(amount)
      })

      const buyerData = {

        quantity: selectTokens, ListingTokensId: property._id, BuyerWalletAddress: address, propertyId:property.propertyId._id
      }
      console.log(buyerData)

      const config = {
        headers: {
          'Content-Type': 'application/json',
          "auth-token": token

        }
      }
      const { data } = await axios.post('http://localhost:3001/api/buyerData', buyerData, config)



      const updateListing = {

        TotalSupplies: selectTokens
      }
      console.log(updateListing)

      const newconfig = {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      const { data1 } = await axios.post(`http://localhost:3001/api/property/propertyTokens/${property._id}`, updateListing, newconfig)



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
            <p><b>TOKEN FOR SALE : {property.TotalSupplies} </b> </p>
            <p><b>PRICE OF ONE TOKEN: {property.PricePerToken} $ </b></p>
            <p><b> Enter Tokens: <input type="number"  min={0} onChange={(e)=> setSelectTokens(e.target.value)} className="entertokens" max={property.TotalSupplies} required/>
                </b></p>
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