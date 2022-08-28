import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'
import CancleModal from '../../components/cancleModal/CancleModal'
import ResellModal from '../../components/resellModal/ResellModal'
import Bed from '../../assets/bed.jpg'

import { ERC721ABI } from "../../Redux/constants/erc721ABI";
import { ethers } from "ethers";


function ListingCard({ property }) {
	const [cancleModal, setCancleModal] = useState(false)
	const [resellModal, setResellModal] = useState(false)
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


	// const CancelListing = async () => {
	// 	try {

	// 		if (window.ethereum) {
	// 			const accounts = await window.ethereum.request({
	// 				method: "eth_requestAccounts",
	// 			  });
	// 			  const address = accounts[0];
	// 			  let provider = new ethers.providers.Web3Provider(window.ethereum);
	// 			let signer = provider.getSigner();
	// 			const ERC721 = new ethers.Contract(
	// 				ERC721ContractAddress,
	// 				ERC721ABI,
	// 				signer,
	// 				{ gas: 2100000, gasPrice: 800000000 }
	// 			);
	// 			let tx= await ERC721.CancelListings(quantity)
	// 			ERC721.on("ListToken", (quantity) => {
	// 				console.log(`quantity: ${quantity}`)
	// 			})
	// 			} 
	// 		else {
	// 			console.alert("Please Install MetaMask Extension")
	// 			}
	// 		}
	// 		catch (error) {
	// 			console.error(error.message)
	// 		}
	// }



	return (
		<>


			<div className="main">
				<ul className="cards">
					<li className="cards_item">
						<div className="card">
							<div className="card_image">
								<img src={`http://localhost:3001/public/images/${property.propertyImages[0]}`} />
							</div>
							<div className="card_content">
								<p className="card_text">
									<p>Mint  120</p>
									<p>Listed 50</p>
									<p>Sold 10</p>
									<p>property Price {property.propertyPrice
}</p>
									<p>owner Name: {property.ownerName}</p>
									<p>Address {property.propertyAddress}</p>
								</p>
								<button className="card_btn"
									onClick={() => {
										setCancleModal(true);
									}}
								>Cancle</button>
								<button className="card_btn"
									onClick={() => {
										setResellModal(true);
									}}>Resell</button>

								<Link to={`/propertydetails/${property._id}`} id="link">View</Link>
							</div>
							{cancleModal && <CancleModal setCancle={setCancleModal} property={property}/>}
							{resellModal && <ResellModal setResell={setResellModal} property={property}/>}
						</div>
					</li>
				</ul>
			</div>
		</>
	)
}

export default ListingCard