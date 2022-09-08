import React from "react";
import './TokensForSale.css'
import TokenList from "./TokenList";
import Spinner from '../../components/spinner/Spinner'
import { useSelector } from 'react-redux'
function TokensForSale() {

  const propertyDetails = useSelector(state => state.propertyDetails)
  const { loading, error, property } = propertyDetails

  return (
    <div>
      {loading && <Spinner />}
      <h2 className='financial-heading'>tokens for sale</h2>
      {property && property.map((property) => (
        <TokenList key={property._id} property={property}/>
      ))
      }
    </div>
  )
}

export default TokensForSale