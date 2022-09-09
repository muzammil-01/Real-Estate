import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../../components/spinner/Spinner'
import SearchCard from './SearchCard'
import "./Search.css"


function SearchPage() {
    const search = useSelector(state => state.search)
    const { loading, error, property } = search
    console.log(property)

    return (
        <div>

            {loading && <Spinner />}
            {property === "No Match Found" ?
            <div className='noMatch'>
                <h1 >No Match Found</h1> 
            </div>:
                property && property.map((property) => (
                    <SearchCard key={property._id} property={property} />
                )
                )
            }



        </div>
    )
}

export default SearchPage