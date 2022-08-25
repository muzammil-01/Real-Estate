import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { ethers } from "ethers";
import { BigNumber } from 'ethers';
import { ERC721ABI } from "../../Redux/constants/erc721ABI"

    
    
function Mint({id}) {

//     const [CloneAddress, setCloneAddress] = useState(null)
//     const [CloneOwner, setCloneOwner] = useState()
//     const [TokenPrice, setTokenPrice] = useState()
//     useEffect(() => {
//         getDetail()
//     }, [CloneAddress,CloneOwner,TokenPrice])
    
//     const getDetail = async ()=>{
//         // const { data } = await axios.get(`http://localhost:3001/api/property/${id}`)
//         // console.log(data)
//       data.cloneAddress &&  setCloneAddress(data.cloneAddress)
//       data.cloneOwner && setCloneOwner(data.cloneOwner)
//       data.PricePerToken && setTokenPrice(data.PricePerToken)  
//     }
//     CloneAddress && console.log(CloneAddress)
//     CloneOwner && console.log(CloneOwner)
//     TokenPrice && console.log(TokenPrice)

//     // console.log(value)
    
    
//     // const Clone = async (_propertyAddress, _ownerName, _totalSupply, _tokensPerWallet) => {
//         //     try {
//             //         setUploading(true)
//     //         let pricePerToken = (propertyPrice / ETHpriceToUSD).toString()
//     //         setPricepertoken(pricePerToken)
//     //         pricePerToken = ethers.utils.parseEther(pricePerToken, 18)
//     //         console.log(pricePerToken)
//     //         const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
//     //         const address = accounts[0]
//     //         let provider = new ethers.providers.Web3Provider(window.ethereum)
//     //         let signer = provider.getSigner()
//     //         const erc721Factory = new ethers.Contract(ERC72FACTORYContractAddress, ERC72FACTORYABI, signer, { gas: 2100000, gasPrice: 8000000000 })
    
//     //         const txResponse = await erc721Factory.cloneContract(_propertyAddress, _ownerName, _totalSupply, pricePerToken, _tokensPerWallet)
//     //         erc721Factory.on("CloneCreatedAt", (from, cloneAdd) => {
//         //             setCloneAddress(prevAdd => (prevAdd = from))
//         //             setCloneOwner(prevAdd => (prevAdd = cloneAdd))
    
//     //         })
//     //     }
//     //     catch (error) {
//         //         setMessage(error)
//         //         console.log(error.message)
//         //     }
//         // }
        
        
//         const Mint=async (_quantity)=>{
//             try{
//             console.log("TokenPrice",TokenPrice)
//             console.log("_quantity",_quantity)
//             console.log("CloneOwner",CloneAddress)
//             let price=(TokenPrice*_quantity)
//             console.log("price",price)
//             let value=ethers.utils.parseEther(`${price}`, 18)
//             console.log(value)
//             const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
//             const address = accounts[0]
//             let provider = new ethers.providers.Web3Provider(window.ethereum)
//             let signer = provider.getSigner()
//         const erc721= new ethers.Contract(CloneOwner, ERC721ABI, signer)
//         const mint= await erc721.mint(CloneAddress,`${_quantity}`,{value: value })
//         erc721.on("Mint", (owner, quantity) => {
//             // setCloneAddress(prevAdd => (prevAdd = from))
//             // setCloneOwner(prevAdd => (prevAdd = cloneAdd))
// console.log(owner)
// console.log(quantity)
// })
// console.log(mint)
 
// }
// catch (error) {
//     console.log(error)
// }
//     }

    return (
        <></>
    // <div>Mint <button className='logbtn' onClick={()=>Mint(2)}>Mint</button></div>
  )
}

export default Mint