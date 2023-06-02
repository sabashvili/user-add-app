import "./AddUserButton.css";

const AddUserButton = (props) => {
  return <button className="button">{props.children}</button>;
};

export default AddUserButton;
