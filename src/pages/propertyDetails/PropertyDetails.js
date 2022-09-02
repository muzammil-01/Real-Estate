import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './PropertyDetails.css'
import CenterNavbar from '../../components/centerNavbar/CenterNavbar'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { listPropertyDetails } from '../../Redux/actions/propertyActions'
import map from '../../assets/map.jpg'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from '../../components/slider/Slider'
import MintModel from '../../components/mintModel/MintModel'


function PropertyDetails() {
    const [openModal, setOpenModal] = useState(false)
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(listPropertyDetails(id))
    }, [dispatch, id])

    const propertyDetails = useSelector(state => state.propertyDetails)
    const { loading, error, property } = propertyDetails
    return (
        <>
            <Navbar />
            {property && <Slider propertyImages={property[0].propertyId.propertyImages}/>}
            {property && openModal && <MintModel setOpenModal={setOpenModal} property={property} />}

            <p className='mintbtn' onClick={() => {
                setOpenModal(true);
            }}>Mint</p>

            <CenterNavbar id={id} />
            <Footer />
        </>
    )
}

export default PropertyDetails