import React, { useState } from 'react'
import { ethers } from "ethers";
import axios from 'axios'
import "./ResellModal.css"
import ListSuccess from '../listSuccess/ListSuccess';



export default function ResellModal({ setResell, property }) {
  if(property){
    console.log()
  }

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0)
  const [successfull, setSuccessfull] = useState(false);


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
      Pricepertoken: price, SellerWalletAddress: CurrentWalletAddress, numberOfSupplies: count, propertyId: property.propertyId._id
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        "auth-token": token
      }
    }
    const {data} = await axios.post('http://localhost:3001/api/property/checkToken', testData, config)


    const updateMint = {
      quantity: count
    }
    const newconfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    } 

    const data1 = await axios.patch(`http://localhost:3001/api/update/${property._id}`,updateMint, newconfig )
    if(data1.data) {
      setSuccessfull(true)
    }
  }
  return (
    <>
    {successfull ?  <ListSuccess count={count} propertyId={property.propertyId._id}/>:
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
          <p>Enter No of tokens you want to Sell and price of 1 token</p>
        </div>
        <div className="body">
          <p>Tokens available to resell: {property.quantity}</p>
          <p>
            <input type="text" placeholder='Enter price of 1 token' onChange={(e) => { setPrice(e.target.value) }} className="resellInp"/>
          </p>
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
          <button  className={count === 0 ?"noevent":"calculateBtn"} onClick={ListTokens}>
            List
          </button>
        </div>
      </div>
    </div>
  }
    </>
  )
}
