import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyLogoUrl,
    currencyName,
    usdValue,
    euroValue,
  } = cryptocurrencyDetails

  return (
    <li className="crypto-currency-item">
      <div className="logo-and-title-container">
        <img
          className="currency-logo"
          src={currencyLogoUrl}
          alt={currencyName}
        />
        <p className="currency-name">{currencyName}</p>
        <div className="usd-euro-container">
          <p className="currency-value">{usdValue}</p>
          <p className="currency-value">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
