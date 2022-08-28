import React,{useState} from 'react'

export default function CancleModal({setCancle}) {
  const [count, setCount] = useState(0);

  return (
    <div>
    <div className="mintModalBackground">
      <div className="mintModalContainer">
        <div className="mintModaltitleCloseBtn">
          <button
          
            onClick={() => {
              setCancle(false);
            }}
          >
            Go Back
          </button>
        </div>
        <div className="mintModaltitle">
          <p>Cancel Listed Tokens</p>
        </div>
        <div className="mintModalbody">
          <p>
            <b>TOKEN STOCK </b>: <h3> <u> property[0].TotalSupplies </u> </h3>{" "}
          </p>
          <p>
            <b>Price of One Token </b>: <h3> <u> property[0].PricePerToken ETH </u> </h3>{" "}
          </p>
          <p>
            {count === 0 && (
              <button
                disabled
                style={{ cursor: "not-allowed" }}
                className="decreaseBtn"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
            )}
            {count !== 0 && (
              <button
                className="decreaseBtn"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
            )}
            <span className="tokenValue"> <b> {count} </b></span>
            <button
              className="increaseBtn"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </p>
        </div>
        <div className="mintModalfooter">
          <button id="mintModalcalculateBtn" >
            Do You Want To Cance Listing
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
