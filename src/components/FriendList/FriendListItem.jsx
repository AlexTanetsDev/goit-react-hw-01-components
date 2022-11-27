import PropTypes from 'prop-types';
import { FriendsListItem, IsOnlineMarker } from './FriendListItem.styled';

export const FriendListItem = ({ friend }) => {
  return (
    <FriendsListItem key={friend.id}>
      <IsOnlineMarker isOnline={friend.isOnline}></IsOnlineMarker>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
    </FriendsListItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
