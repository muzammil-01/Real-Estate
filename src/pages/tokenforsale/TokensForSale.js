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
      {property && property.length === 1 && <h4 style={{color:"white", textAlign:"center"}}>NO TOKENS AVAILABLE </h4>}
      {property && property.slice(1).map((property) => (
        <TokenList key={property._id} property={property}/>
      ))
      }
    </div>
  )
}

export default TokensForSale