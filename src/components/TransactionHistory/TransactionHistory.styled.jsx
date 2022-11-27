import styled from 'styled-components';

export const TransactionsTable = styled.table`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const TheadRow = styled.tr`
  background-color: #7db1f0;
  th {
    padding: 5px;
  }
`;

export const TbodyRow = styled.tr`
  text-align: center;

  background-color: ${props => {
    if (props.index % 2 === 0) {
      return '#eee';
    }
  }};

  td {
    padding: 5px;
  }
`;
