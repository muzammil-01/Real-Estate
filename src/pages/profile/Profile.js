import axios from 'axios'
import React, { useEffect,useState } from 'react'
import "./Profile.css"
import Spinner from '../../components/spinner/Spinner'
import ListingCard from './ListingCard'
import { useSelector } from 'react-redux'
function Profile() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const [userPropertyData, setUserPropertyData] = useState(null)

    var a = localStorage.getItem('userInfo')
    if(a){
      var token = JSON.parse(a).authToken
    }

    useEffect(() => {
        fetchUserProperties()
    }, [])


    const fetchUserProperties=async ()=>{
    const config = {
        headers: {
          "auth-token":token
        }
      }
    const {data} = await axios.get("http://localhost:3001/api/property/userproperties",config)
    setUserPropertyData(data)
}

    const userSpecificProperties = useSelector(state => state.userSpecificProperties)
    const { loading, error, propertyData } = userSpecificProperties
    return (
        <>
            <h1 style={{ color: "white", textAlign: "center" }}>Your Profile</h1>
            <div className='user-details'>
                <div className="info">
                    <h4>Name: {userInfo.name}</h4>
                    <h4>ID: {userInfo.id}</h4>
                    <h4>Email: {userInfo.email}</h4>
                </div>
                <div className="profile-picture">
                    <img src={`http://localhost:3001/public/images/${userInfo.image[0]}`} alt="..." />
                </div>
            </div>

            {loading && <Spinner />}
            <div className="user-properties">
                {userPropertyData && userPropertyData.map((property) => (
                    <ListingCard key={property._id} property={property} />
                   
                )
                )}
            </div>
        </>
    )
}

export default Profile