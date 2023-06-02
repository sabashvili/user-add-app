import "./UserAddForm.css";
import React, { useState } from "react";
import AddUserButton from "../AddUserButton/AddUserButton";
import ErrorModal from "../ErrorModal/ErrorModal";

const UserAddForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [validUser, setValidUser] = useState(true);
  const [errorText, setErrorText] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();

    if (!username || !age) {
      setValidUser(false);
      setErrorText("Please enter a valid name and age (non-empty values).");
      return;
    } else if (age <= 0) {
      setErrorText("Please enter a valid age (> 0).");
      setValidUser(false);
      return;
    }

    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };

  const closeErrorMessage = () => {
    setValidUser(true);
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  return (
    <div className="input">
      <form onSubmit={addUserHandler}>
        <label>Username</label>
        <input
          value={username}
          onChange={usernameChangeHandler}
          type="text"
        ></input>
        <label>Age (Years)</label>
        <input value={age} onChange={ageChangeHandler} type="number"></input>
        <AddUserButton type="submit">Add User</AddUserButton>
      </form>
      {!validUser ? (
        <ErrorModal errorMessage={errorText} onCloseError={closeErrorMessage} />
      ) : (
        ""
      )}
    </div>
  );
};

export default UserAddForm;
