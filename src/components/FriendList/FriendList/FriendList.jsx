// import friends from './friends.json';
// console.log('friends111', friends);
import PropTypes from 'prop-types';
import { FriendListItem } from '../FrindListItem/FriendListItem';
import css from './FriendList.module.css';



export const FriendList =({friends})=> {
 return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            // id={friend.id}
          />
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }))

};

