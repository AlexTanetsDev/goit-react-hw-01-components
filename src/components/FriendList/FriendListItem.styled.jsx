import styled from 'styled-components';

export const FriendsListItem = styled.li`
  display: flex;
  padding: 10px;
  gap: 10px;
  align-items: center;
  background-color: #fff;

  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const IsOnlineMarker = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: ${props => {
    if (props.isOnline) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;
