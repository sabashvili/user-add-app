import "./ErrorModal.css";

const ErrorModal = (props) => {
  const closeWinHandler = () => {
    props.onCloseError();
  };

  return (
    <div className="backdrop">
      <div className="modal">
        <header className="header">
          <h2>Invalid input</h2>
        </header>
        <div className="content">
          <p>{props.errorMessage}</p>
        </div>
        <footer className="actions">
          <button className="button" type="button" onClick={closeWinHandler}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
// Please enter a valid name and age (non-empty values).
// Please enter a valid age (> 0).
