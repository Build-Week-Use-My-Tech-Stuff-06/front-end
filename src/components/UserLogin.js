import React from 'react'
import NavBar from './NavBar'



export default function UserLogin({ change, values}) {


    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
    }

    

    return (
        <div>
            <NavBar />
            <h3>Login:</h3>
            <form>
                <label> Username:
                    <input name='username' type='text' value={values.username} placeholder='username' onChange={onChange} /> 
                </label>

                <label> Password:
                    <input name='password' type='password' value={values.password} placeholder='password' onChange={onChange}/>
                </label>
            </form> 

            <div>
                <button>Submit</button>
            </div>           
        </div>
    )
}
