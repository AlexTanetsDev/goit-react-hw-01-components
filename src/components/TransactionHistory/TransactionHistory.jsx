import PropTypes, { shape } from 'prop-types';
import {
  TbodyRow,
  TheadRow,
  TransactionsTable,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <thead>
        <TheadRow>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TheadRow>
      </thead>

      <tbody>
        {items.map((item, index) => {
          const typeToNormalize = item.type.split('');
          typeToNormalize[0] = typeToNormalize[0].toUpperCase();
          const normalizedType = typeToNormalize.join('');
          return (
            <TbodyRow key={item.id} index={index}>
              <td type={'type'}>{normalizedType}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </TbodyRow>
          );
        })}
      </tbody>
    </TransactionsTable>
  );
};

TransactionHistory.protoTypes = {
  items: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
