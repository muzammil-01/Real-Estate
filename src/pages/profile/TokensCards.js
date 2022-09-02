import React, { useState } from 'react'
import ResellModal from '../../components/resellModal/ResellModal'
import { Link } from 'react-router-dom'

function TokensCards({ tokens }) {
    console.log(tokens)
    const [resellModal, setResellModal] = useState(false)
    return (
        <>
            <li className="cards_item">
                <div className="card">
                    <div className="card_image">
                        <img src={`http://localhost:3001/public/images/${tokens.propertyId.propertyImages[0]}`} />
                    </div>
                    <div className="card_content">
                        <div className="card_text">
                            <p> <span  className='tokenDetails'> Tokens Minted:</span> {tokens.quantity} </p>
                            <p> <span  className='tokenDetails'> property Price:</span> {tokens.propertyId.propertyPrice}</p>
                            <p> <span  className='tokenDetails'> owner Name:</span> {tokens.propertyId.ownerName}</p>
                            <p> <span  className='tokenDetails'> Address:</span> {tokens.propertyId.propertyAddress}</p>
                        </div>
                        <button className="card_btn"
                            onClick={() => {
                                setResellModal(true);
                            }}>Resell</button>

                        <Link to={`/propertydetails/${tokens.propertyId._id}`} id="link">View</Link>
                    </div>
                    {resellModal && <ResellModal setResell={setResellModal} property={tokens} />}
                </div>
            </li>

        </>
    )
}

export default TokensCards