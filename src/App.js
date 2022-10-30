import React, { useState } from "react";
import { users, errors } from "./components/users.js";
import "./App.css";

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted,] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();


    var { uname, pass } = document.forms[0];

    var userData = users.find((user) => user.userName === uname.value);


    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass })
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (

    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  

  return (
    <div>
      <div className="title">{isSubmitted? (<button className='signOut' onClick={() =>{setIsSubmitted(false)}}>Sign out</button>): `Sign in`} </div>
      <div className="app">
        <div className="login-form">
          {isSubmitted ? (<div>User is successfully logged in</div>) : (renderForm)}
        </div>
      </div>
    </div>
  );
}

export default App;
