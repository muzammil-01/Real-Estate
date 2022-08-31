import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'
import CancleModal from '../../components/cancleModal/CancleModal'
import ResellModal from '../../components/resellModal/ResellModal'




function ListingCard({ property }) {
	const [cancleModal, setCancleModal] = useState(false)
	const [resellModal, setResellModal] = useState(false)
	return (
		<>
		  <div>
            </div>
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
					{cancleModal && <CancleModal setCancle={setCancleModal} property={property} />}
					{resellModal && <ResellModal setResell={setResellModal} property={property} />}
				</div>
			</li>

		</>
	)
}

export default ListingCard