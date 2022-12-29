import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

 export const TransactionHistory = ({items}) => {
    // const {id, type, amount, currency}= items
return (
    <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th className=
        {css.title} >Type</th>
        <th className={css.title}>Amount</th>
        <th className={css.title}>Currency</th>
      </tr>
    </thead>

    <tbody>
        {items.map(({id, type, amount, currency}) =>{
return(
    <tr key={id}>
    <td className = {css.items}>{type}</td>
    <td className = {css.items}>{amount}</td>
    <td className = {css.items}>{currency}</td>
  </tr>
)}
)}
    </tbody>
  </table>
)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    )
  }