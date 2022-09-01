import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

function ListingCard({ property }) {
	return (
		<>
			<li className="cards_item">
				<div className="card">
					<div className="card_image">
						<img src={`http://localhost:3001/public/images/${property.propertyImages[0]}`} />
					</div>
					<div className="card_content">
						<div className="card_text">
							<p> <span className='tokenDetails'>  owner Name:</span> {property.ownerName}</p>
							<p> <span className='tokenDetails'> property Price:</span> {property.propertyPrice}</p>
							<p> <span className='tokenDetails'> Address:</span> {property.propertyAddress}</p>
						</div>
						<Link to={`/propertydetails/${property._id}`} className="viewBtn">View</Link>
					</div>
				</div>
			</li>

		</>
	)
}

export default ListingCard