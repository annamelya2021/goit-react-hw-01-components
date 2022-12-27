import Profile from "./Profile"
import Statistics from "./Statistics"
// console.log(Statictics);
import user from './user.json';
import data from './data.json';
// import ReactDOM from 'react-dom';
const App = () => {
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
        stats={data} />
    </div>
  );
};
export default App;