import React from 'react'
import './CenterNavbar.css'
import { Link, Outlet } from 'react-router-dom'

function CenterNavbar({id}) {

    return (
        <div>
            <ul className='centernav'>
                <li><Link to={`/propertydetails/${id}/details`}>DETAILS</Link></li>
                <li><Link to={`/propertydetails/${id}/financials`}>FINANCIALS</Link></li>
                <li><Link to={`/propertydetails/${id}/bid`}>BID</Link></li>
                <li><Link to={`/propertydetails/${id}/tokensforsale`}>TOKENS</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export default CenterNavbar