import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import './TokensForSale.css'
import Modal from '../../components/buyTokensModal/TokenModal'
function TokensForSale() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <h2 className='financial-heading'>tokens for sale</h2>
      
      <p className='tokensforsale'>
        <FontAwesomeIcon icon={faCircleUser} className="userIcon"/>
        0x5D0436F003AEF56990194f79A242Bc185843aEa5
        <span> No. of Tokens </span> x
        <span> Price of 1 Token </span> =
        <span> Total Price</span>
        <button className='buytokensbtn'  onClick={() => {
          setModalOpen(true);
        }}>Buy Tokens</button>
      </p>

      
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  )
}

export default TokensForSale