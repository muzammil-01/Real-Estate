import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './TokensForSale.css'
import Modal from '../../components/buyTokensModal/TokenModal'
import Spinner from '../../components/spinner/Spinner'
import { useSelector } from 'react-redux'
function TokensForSale() {
  const [modalOpen, setModalOpen] = useState(false);

  const propertyDetails = useSelector(state => state.propertyDetails)
  const { loading, error, property } = propertyDetails

  return (
    <div>
      {loading && <Spinner />}
      <h2 className='financial-heading'>tokens for sale</h2>
      {property && property.slice(1).map((property) => (
        <p key={property._id} className='tokensforsale'>
          <FontAwesomeIcon icon={faCircleUser} className="userIcon" />

          <span>
            ID: {property._id}
          </span>

          <span>
           No of Tokens: {property.TotalSupplies}
          </span>

          <button className='buytokensbtn' onClick={() => {
            setModalOpen(true);
          }}>Buy Tokens</button>
          {modalOpen && <Modal setOpenModal={setModalOpen} property={property} />}
        </p>
      ))
      }


    </div>
  )
}

export default TokensForSale