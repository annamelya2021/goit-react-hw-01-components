import Profile from "./Profile/Profile"
import Statistics from "./Statistics/Statistics"
// import FriendList from "./FriendList/FriendList"
import { PageTitle } from "components/PageTitle/PageTitle"
import{EventBoard} from "components/EventBoard/EventBoard"

// console.log(FriendList);
import user from './Profile/user.json';
import data from './Statistics/data.json';
// import friends from './FriendList/friends.json';
import events from './EventBoard/event.json'
// console.log('friendsinaapp :>> ', friends);

// import ReactDOM from 'react-dom';
// import { App } from 'components/App';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
      />

      <Statistics
        title="Upload stats"
        stats={data}
      />

      <div>
        <PageTitle  text='hhh000'/>
        <EventBoard events={events} />
      </div>


      {/* <FriendList friends={friends} /> */}
    </div>
  );
};
// export default App;