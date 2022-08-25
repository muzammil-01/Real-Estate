import React , {useState} from 'react'
import './TokenModal.css'

export default function TokenModal({setOpenModal}) {
    const [calculate, setCalculate] = useState(0)
    const [selectTokens, setSelectTokens] = useState(0)
    const [tokenPrice, setTokenPrice] = useState(0)
  return (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
              <p>Enter No of tokens you want to buy and price of 1 token</p>
            </div>
            <div className="body">
            <p>TOKEN STOCK : 8980 </p>
            <p> Enter Tokens: <input type="number"  min={0} onChange={(e)=> setSelectTokens(e.target.value)}/> X 1 token price = <input type="number" min={0} onChange={(e)=> setTokenPrice(e.target.value)}/> = <span>{calculate}</span>
                </p>
            </div>
            <div className="footer">
              <button
                onClick={() => {
                  setCalculate(selectTokens*tokenPrice)
                }}
               id="calculateBtn"
              >
                Calculate
              </button>
              <button>Buy tokens</button>
            </div>
          </div>
        </div>
    
  )
}
