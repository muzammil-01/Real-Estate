import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './TokensForSale.css'
import Modal from '../../components/buyTokensModal/TokenModal'

export default function TokenList({property}) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
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
    </>
  )
}
