import { useState } from "react";
import UserAddForm from "./UserAddForm/UserAddForm";
import UsersList from "./UsersList/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const userAddHandler = (inputUsername, inputAge) => {
    setUsers((prev) => [
      { username: inputUsername, age: inputAge, id: Math.random().toString() },
      ...prev,
    ]);
  };

  return (
    <div>
      <UserAddForm onAddUser={userAddHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
