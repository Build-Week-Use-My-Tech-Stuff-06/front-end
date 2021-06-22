import React, { useState } from 'react'
import UserLogin from './components/UserLogin'
import './App.css';

const initialFormValues = {
  username: '',
  password: ''
}

function App() { 

  const [ formValues, setFormValues ] = useState( initialFormValues )
  const [ user, setUser ] = useState([])

  const inputChange = ( name, value ) => {
      setFormValues({ ...formValues, [ name ] : value })
  }

  const userLogin = ( username, password ) => {

  }

  const formSubmit = () => {
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
        <UserLogin values={formValues} change={inputChange} submit={formSubmit}/>
    </div>
  );
}

export default App;
