import axios from "axios";
import { ethers } from "ethers";
import {
  ERC721ABI, ERC72FACTORYABI,
  ERC72FACTORYContractAddress,
} from "../../Redux/constants/erc721ABI";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProperty } from "../../Redux/actions/propertyActions";
import "./AddProperty.css";
import SuccessModal from "../../components/success modal/SuccessModal";
import Spinner from "../../components/spinner/Spinner";
import Navbar from "../../components/Navbar/Navbar";

function AddProperty() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const propertyAdd = useSelector((state) => state.propertyAdd);
  const { loading, error } = propertyAdd;

  useEffect(() => {
    if (!userInfo) {
      alert("please Login first");
      navigate("/login");
    }
  }, []);

  const [ownerName, setOwnerName] = useState("");
  const [numberOfSupplies, setNumberOfSupplies] = useState(0);
  const [propertyAddress, setPropertyAddress] = useState("");
  const [propertyPrice, setPropertyPrice] = useState(0);
  const [propertyImages, setPropertyImages] = useState([]);
  const [numberOfTokenPerWallet, setNumberOfTokenPerWallet] = useState(0);
  const [propertyDocuments, setPropertyDocuments] = useState([]);
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [size, setSize] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [ETHpriceToUSD, setETHpriceToUSD] = useState(0);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [CloneAddress, setCloneAddress] = useState(null);
  const [CloneOwner, setCloneOwner] = useState(null);
  const [Pricepertoken, setPricepertoken] = useState(null);
  const [successfull, setSuccessfull] = useState(false);

  const Clone = async (
    _propertyAddress,
    _ownerName,
    _totalSupply,
    _tokensPerWallet
  ) => {
    try {
      setUploading(true);
      let pricePerToken = (propertyPrice / ETHpriceToUSD).toString();
      setPricepertoken(pricePerToken);
      pricePerToken = ethers.utils.parseEther(pricePerToken, 18);
      console.log(pricePerToken);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      let signer = provider.getSigner();
      const erc721Factory = new ethers.Contract(
        ERC72FACTORYContractAddress,
        ERC72FACTORYABI,
        signer
      );
      console.log(_propertyAddress,
        _ownerName,
        _totalSupply,
        pricePerToken,
        _tokensPerWallet)
      const txResponse = await erc721Factory.cloneContract(
        _propertyAddress,
        _ownerName,
        _totalSupply,
        pricePerToken,
        _tokensPerWallet,
        { gasLimit: 5000000 }

      );
      console.log(txResponse)
      erc721Factory.on("CloneCreatedAt", (from, cloneAdd) => {
        setCloneAddress((prevAdd) => (prevAdd = cloneAdd));
        setCloneOwner((prevAdd) => (prevAdd = from));
      });
    } catch (error) {
      setMessage(error);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getEth();
    if (
      CloneOwner !== null &&
      CloneAddress !== null &&
      Pricepertoken !== null
    ) {
      submitHandler();
      console.log(CloneAddress);
      console.log(CloneOwner);
      console.log(Pricepertoken);
    }
  }, [CloneOwner, CloneAddress, Pricepertoken]);

  const getEth = async () => {
    const { data } = await axios.get(
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"
    );
    setETHpriceToUSD(data.RAW.ETH.USD.PRICE);
  };

  const submitHandler = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const formData = new FormData();
    const formData1 = new FormData();
    const arr = [];
    for (let i = 0; i < propertyImages.length; i++) {
      arr.push(propertyImages[i]);
    }
    const arr1 = [];
    for (let i = 0; i < propertyDocuments.length; i++) {
      arr1.push(propertyDocuments[i]);
    }

    for (let i = 0; i < arr.length; i++) {
      formData.append("propertyImages", arr[i]);
    }
    for (let i = 0; i < arr1.length; i++) {
      formData.append("propertyDocuments", arr1[i]);
    }
    formData.append("ownerName", ownerName);
    formData.append("PropertyContractAddress", CloneAddress);
    formData.append("OwnerWalletAddress", CloneOwner);
    formData.append("numberOfSupplies", numberOfSupplies);
    formData.append("propertyAddress", propertyAddress);
    formData.append("propertyPrice", propertyPrice);
    formData.append("beds", beds);
    formData.append("baths", baths);
    formData.append("country", country);
    formData.append("size", size);
    formData.append("city", city);
    formData.append("postalcode", postalcode);

    if (CloneAddress !== null && CloneOwner !== null) {
      if (
        ownerName &&
        numberOfSupplies &&
        propertyAddress &&
        propertyPrice &&
        propertyImages &&
        numberOfTokenPerWallet &&
        propertyDocuments &&
        beds &&
        baths &&
        size &&
        country &&
        city &&
        postalcode &&
        ETHpriceToUSD &&
        CloneAddress &&
        CloneOwner &&
        Pricepertoken
      ) {
        dispatch(
          addProperty(
            formData,
            Pricepertoken,
            CloneOwner,
            numberOfSupplies,
            numberOfTokenPerWallet
          )
        );
        setOwnerName(null);
        setNumberOfSupplies(null);
        setPropertyAddress(null);
        setPropertyPrice(null);
        setPropertyImages(null);
        setNumberOfTokenPerWallet(null);
        setPropertyDocuments(null);
        setBeds(null);
        setBaths(null);
        setSize(null);
        setCountry(null);
        setCity(null);
        setPostalCode(null);
        setETHpriceToUSD(null);
        setCloneAddress(null);
        setCloneOwner(null);
        setPricepertoken(null);
      }

      setUploading(false);
      setSuccessfull(true);
    }
  };
  return (
    <>
      <div>
        {successfull && <SuccessModal />}
        {uploading && <Spinner />}
        {error && <div className="error">{message}</div>}


        <form className="property-form" onSubmit={submitHandler} encType="multipart/form-data">

          <div className="top-heading">
            <h1>Add Property</h1>
          </div>

          <br />
          <label style={{ color: "lightgray", float: "left", marginBottom:"-21px"}}>Enter Owner Name</label>
          <input
            type="text"
            name="ownerName"
            value={ownerName}
            className="inputs"
            required
            onChange={(e) => setOwnerName(e.target.value)}
            placeholder="Enter Owner Name"
          />
          <label  className="labels"> Enter Supplies</label>
          <input
            type="Number"
            name="numberOfSupplies"
            min={0}
            className="inputs"
            required
            onChange={(e) => setNumberOfSupplies(e.target.value)}
            placeholder="Enter Supplies"
          />
          <label  className="labels"> Enter property address</label>
          <input
            type="text"
            name="propertyAddress"
            value={propertyAddress}
            className="inputs"
            required
            onChange={(e) => setPropertyAddress(e.target.value)}
            placeholder="Enter property address"
          />

          <label className="labels"> Enter property Price</label>
          <input
            type="Number"
            name="propertyPrice"
            min={0}
            className="inputs"
            required
            onChange={(e) => setPropertyPrice(e.target.value)}
            placeholder="Enter property Price"
          />

          <label className="labels" > Enter Number of token per wallet</label>
          <input
            type="Number"
            name="NumberOfTokenPerWallet"
            className="inputs"
            min={0}
            required
            onChange={(e) => setNumberOfTokenPerWallet(e.target.value)}
            placeholder="Enter Number of token per wallet"
          />

          <label className="labels"> Select property images</label>
          <input
            type="file"
            id="image-file"
            label="Choose File"
            className="inputs"
            multiple
            onChange={(e) => setPropertyImages(e.target.files)}
          />

           <label className="labels"> Select property documents</label>
          <input
            type="file"
            id="image-file"
            label="Choose File"
            className="inputs"
            multiple
            onChange={(e) => setPropertyDocuments(e.target.files)}
          />

           <label className="labels"> Enter no of beds</label>
          <input
            type="number"
            name="beds"
            min={0}
            className="inputs"
            required
            onChange={(e) => setBeds(e.target.value)}
            placeholder="Enter no of beds"
          />
           <label className="labels"> Enter no of baths</label>
          <input
            type="number"
            name="baths"
            min={0}
            className="inputs"
            required
            onChange={(e) => setBaths(e.target.value)}
            placeholder="Enter no of baths"
          />

           <label className="labels"> Enter area in sqft</label>
          <input
            type="Number"
            name="size"
         placeholder="Enter area in sqft"
            min={0}
            className="inputs"
            required
            onChange={(e) => setSize(e.target.value)}
          />

           <label className="labels"> Enter country</label>
          <input
            type="text"
            name="country"
            value={country}
            placeholder="Enter country"
            className="inputs"
            required
            onChange={(e) => setCountry(e.target.value)}
          />

           <label className="labels"> Enter city</label>
          <input
            type="text"
            name="city"
            value={city}
            placeholder="Enter city"
            className="inputs"
            required
            onChange={(e) => setCity(e.target.value)}
          />
           <label className="labels"> Enter postal code</label>
          <input
            type="text"
            name="postalcode"
            value={postalcode}
            placeholder="Enter postal code"
            className="inputs"
            required
            onChange={(e) => setPostalCode(e.target.value)}
          />

          <br />
          <button
            className="logbtn"
            onClick={() =>
              Clone(
                propertyAddress,
                ownerName,
                numberOfSupplies,
                numberOfTokenPerWallet
              )
            }
          >
            Submit
          </button>
          <br />
        </form>
      </div>

    </>
  );
}

export default AddProperty;