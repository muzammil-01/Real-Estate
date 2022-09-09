import React , {useState} from 'react'
import './TokenModal.css'
import { ethers } from "ethers";
import { ERC1155ABI, ERC1155Address } from "../../Redux/constants/erc1155abi";
import axios from 'axios'
import SuccessPurchase from '../success purchase/SuccessPurchase';


export default function TokenModal({setOpenModal, property}) {

 const [show, setShow] = useState(false)
 const [count, setCount] = useState(0)

  var a = localStorage.getItem('userInfo')
if(a){
  var token = JSON.parse(a).authToken
}


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
      const transfer = await ERC1155.transfer(`${property.SellerWalletAddress}`, `${address}`, `${property.propertyId.TokenId}`, `${count}`, { gasLimit: 5000000 })
      console.log(transfer)
      ERC1155.on("Resell", (from, to, amount) => {
        console.log(from)
        console.log(to)
        console.log(amount)
      })

      const buyerData = {

        quantity: count, ListingTokensId: property._id, BuyerWalletAddress: address, propertyId:property.propertyId._id
      }
      console.log(buyerData)

      const config = {
        headers: {
          'Content-Type': 'application/json',
          "auth-token": token

        }
      }
      const { data } = await axios.post('http://localhost:3001/api/buyerData', buyerData, config)
      if(data){
        setShow(true)
      }



      const updateListing = {

        TotalSupplies: count
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
    <>
    {show ? <SuccessPurchase count={count}/>:
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
            <p>
            
            <button className={count !==0 ? 'decBtnActive': 'decBtnNotActive'} onClick={() => setCount(count - 1)} >
              -
            </button>
            <span className="tokenValue"> <b> {count} </b></span>

            <button
              className={count !== parseInt(property.quantity) ? 'incBtnActive':'incBtnNotActive' }
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </p>
            </div>
            <div className="footer">
              <button onClick={ListTokens}
               className={count === 0 ? "noevent":"calculateBtn"}
              >
                Buy Tokens
              </button>
            </div>
          </div>
        </div>
      }
                </>
    
  )
}