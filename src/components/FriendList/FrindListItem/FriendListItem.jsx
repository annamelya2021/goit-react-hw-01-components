import css from './FriendListItem.module.css'

export const FriendListItem =({ isOnline, avatar, name, id })=> {
  const color = isOnline ? 'green' : 'red';

  return (
    <li className={css.item}>
      <span className={css[color]} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

