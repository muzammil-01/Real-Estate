import React from 'react'
import "./Financials.css"
import { useSelector } from 'react-redux'


function Financials() {
  const propertyDetails = useSelector(state => state.propertyDetails)
  const { loading, error, property } = propertyDetails
  return (
<>
       <h2 className='financial-heading'>Property Financials</h2>
      {property && 
      <div className='financial'>
        <div className="financial-details">
          <h2>
            <h5>Property price</h5>
            <span className='gapleft'>$ {property.propertyPrice}</span>
          </h2>
          <h2>
            <h5>Total tokens/shares</h5>
            <span className='gapleft'>{property.numberOfSupplies}</span>
          </h2>
          <h2>
            <h5>Rent per Token</h5>
            <span className='gapleft'>$ 5.28/year</span>
          </h2>
          <h2>
            <h5>Token Price</h5>
            <span className='gapleft'>$ {property.PricePerToken}</span>
          </h2>
          <h2>
            <h5>Total Tokens</h5>
            <span className='gapleft'>14,200</span>
          </h2>
          <h2 style={{border:"none"}}>
            <h5>Net Rent/year</h5>
            <span className='gapleft'>$ 75,036.00</span>
          </h2>
          <h2 style={{border:"none"}}>
            <h5>Total Investment</h5>
            <span className='gapleft'>$ 714,402.00</span>
          </h2>
          <h2 style={{border:"none"}}>
            <h5>Expected Income</h5>
            <span className='gapleft'>10.50%</span>
          </h2>
    </div>
    </div>
}
</>
  )
}

export default Financials