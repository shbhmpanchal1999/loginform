import React from 'react';
import './App.css';

import {  Form, FormGroup, Input }
from 'reactstrap';




function App() {
return (  
  
    <Form className="loginpage">
      <h1>LOGIN FORM</h1> 
      <FormGroup>
        <label>
          Email
        </label>
        <Input type="email" placeholder="Email" required/>
        </FormGroup>
        <FormGroup>
        <label>
          Password
        </label>
        <Input type="password" placeholder="Password" required/>
        </FormGroup> 
        <button className="btn-lg btn-dark btn-block">Log In</button>
    </Form>
  );
}

export default App;
