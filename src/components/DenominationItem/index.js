// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button
        className="denomination-button"
        onClick={onClickDenomination}
        type="button"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
