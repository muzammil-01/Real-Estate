import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../../components/spinner/Spinner'
import SearchCard from './SearchCard'


function SearchPage() {
    const search = useSelector(state => state.search)
    const { loading, error, property } = search
    if(property){
        console.log(property)

        if(property.length === 0 )
        {
            console.log("No Matches")
        }
    }
    
  return (
    <div>
        {/* <p>{}</p> */}

        {loading && <Spinner />}
            {property && property.map((property) => (
                <SearchCard key={property._id} property={property} />
            )
            )}
       


</div>
  )
}

export default SearchPage