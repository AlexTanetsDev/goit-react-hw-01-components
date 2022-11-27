import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e8e8e8;
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
  border-radius: 5px;

  overflow: hidden;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;

  img {
    max-width: 100px;
  }
`;

export const UserStatsList = styled.ul`
  display: flex;
  width: 100%;

  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;

    padding: 10px 5px;

    border-top: 0.5px solid #aeacac;
    width: calc(100% / 3);
  }

  li:not(:last-child) {
    border-right: 0.5px solid #aeacac;
  }
`;

export const StatsNumber = styled.span`
  font-weight: 900;
`;
