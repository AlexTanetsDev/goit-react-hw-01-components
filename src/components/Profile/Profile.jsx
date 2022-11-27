import PropTypes from 'prop-types';
import {
  ProfileCard,
  StatsNumber,
  UserInfo,
  UserStatsList,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <UserInfo>
        <img src={avatar} alt="User avatar" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </UserInfo>

      <UserStatsList>
        <li>
          <span>Followers</span>
          <StatsNumber> {stats.followers}</StatsNumber>
        </li>
        <li>
          <span>Views</span>
          <StatsNumber> {stats.views}</StatsNumber>
        </li>
        <li>
          <span>Likes</span>
          <StatsNumber> {stats.likes}</StatsNumber>
        </li>
      </UserStatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
