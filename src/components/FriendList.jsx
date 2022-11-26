import PropTypes, { shape } from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(friend => (
                <li key={friend.id}>
                    <span></span>
                    <img src={friend.avatar} alt="User avatar" width="48" />
                    <p>{friend.name}</p>
                </li>
            ))}

        </ul> 

    )

}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
}