import React, { useEffect, useState} from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Marketplace.css'
import Propertycard from './Propertycard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProperties } from '../../Redux/actions/propertyActions'
import Spinner from '../../components/spinner/Spinner'


const Marketplace = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProperties())
    }, [dispatch])

 
    
    const listAll = useSelector(state => state.listAll)
    const { loading, error, propertyData } = listAll
    return (
        <>

            <Navbar />
            {loading && <Spinner />}
            {propertyData && propertyData.map((property) => (
                <Propertycard key={property._id} property={property} />
            )
            )}
            <Footer />
        </>
    )
}

export default Marketplace