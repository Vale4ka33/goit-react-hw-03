import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import usersData from "./data/userData.json";
import friends from "./data/friends.json";
import transactions from "./data/transaction.json";

function App() {
  return (
    <>
      <Profile
        name={usersData.username}
        tag={usersData.tag}
        location={usersData.location}
        image={usersData.avatar}
        stats={usersData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
