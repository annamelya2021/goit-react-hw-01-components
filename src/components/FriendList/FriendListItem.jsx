import friends from 'friends'
console.log('friendsFL :>> ', friends);

function FriendListItem({ isOnline, avatar, name, id }) {
  const color = isOnline ? 'green' : 'red';

  return (
    <li key={id} className='item'>
      <span className={color} />
      <img className={avatar} src={avatar} alt="User avatar" width="48" />
      <p className={name}>{name}</p>
    </li>
  );
}

export default FriendListItem;