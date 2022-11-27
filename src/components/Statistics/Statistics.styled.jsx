import styled from 'styled-components';

export const StatisticSection = styled.section`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  background-color: #e6dede;
  margin-top: 20px;
  text-align: center;

  h2 {
    padding: 15px;
  }
`;

export const StatisticList = styled.ul`
  display: flex;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 5px;
  padding: 10px;

  border: 1px solid #272727;
`;
