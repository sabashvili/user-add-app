import "./UsersList.css";

const UsersList = (props) => {
  return (
    <div className="users">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>{`${user.username} (${user.age} years old)`}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
