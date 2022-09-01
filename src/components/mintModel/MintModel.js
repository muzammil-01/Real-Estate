import "./MintModel.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { ERC1155ABI ,ERC1155Address} from "../../Redux/constants/erc1155abi";
import BN from "bn.js";
import { useSelector, useDispatch } from "react-redux";


function MintModel({ setOpenModal, property }) {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      alert("please Login first");
      navigate("/login");
    }
  }, [navigate]);
  var a = localStorage.getItem('userInfo')
  if(a){
    var token = JSON.parse(a).authToken
  }
  const [count, setCount] = useState(0);


 const Mint = async () => { 
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
        const mint=await ERC1155.mint(`${address}`,`100`,`20`,{gasLimit: 5000000})
        console.log(mint)
        ERC1155.on("Mint",(me,amount)=>{
console.log(me)
console.log(amount)
        })
        
//         const mint = await ERC721.mint(
//           `${property[0].SellerWalletAddress}`,
//           `${count}`,
//           { value:`${value}` , gasLimit: 5000000 }
//         );
//         // const mint = await ERC721.mint(
//         //   "0x56973Cc2c56b2E7cadE05235Cdbe3074De19Fe77",
//         //   `10`,
//         //   { value:`${value}` , gasLimit: 5000000 }
//         // );
//         ERC721.on("Mint" , (to, quantity) => {
// console.log(`to:${to},quantity:${quantity}`)
//         });

        const buyerData = {
          quantity:count ,ListingTokensId:property[0]._id,BuyerWalletAddress:address
        }
        console.log(buyerData)

        const config = {
          headers: {
            'Content-Type': 'application/json',
            "auth-token":token
    
          }
        }
        const {data} = await axios.post('http://localhost:3001/api/buyerData',buyerData,config)
        console.log(data)




         const newconfig = {
          headers: {
            'Content-Type': 'application/json',
            "auth-token":token
    
          }
        }
        const newData = {
          "TotalSupplies":property[0].TotalSupplies-count
        }
         
        const data1 = await axios.patch(`http://localhost:3001/api/property/update/${property[0]._id}`, newData, newconfig)
        console.log(data1.data)
    
    } catch (error) {
      console.log(error);
    }
  };

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
            <p>
              <b>TOKEN STOCK </b>: <h3> <u> {property[0].TotalSupplies} </u> </h3>{" "}
            </p>
            <p>
              <b>Price of One Token </b>: <h3> <u> {property[0].PricePerToken} ETH </u> </h3>{" "}
            </p>
            <h5>
              {property[0].propertyId.numberOfSupplies - property[0].TotalSupplies} / {property[0].propertyId.numberOfSupplies} minted
            </h5>
            <p>
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
          <div className="mintModalfooter">
            <button id="mintModalcalculateBtn" onClick={Mint}>
              Mint
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintModel;