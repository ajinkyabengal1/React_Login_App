import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Login from '../Login/Login';


function Registration() {

    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);




    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !birthDate || !password || !phone) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("ajinkyaSubmissionBirthDate", JSON.stringify(birthDate));
            localStorage.setItem("ajinkyaSubmissionPassword", JSON.stringify(password));
            localStorage.setItem("ajinkyaSubmissionName", JSON.stringify(name));
            console.log("Saved in Local Storage");

            setLogin(!login)

        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }

    



    return (
        <>
            <nav className="navbar navbar-light">
              
            </nav>
            {info ? <div> {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Birth date</label>
                    <input type="date" className="form-control" placeholder="Enter email" onChange={(event) => setBirthDate(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Phone No.</label>
                    <input type="Phone" className="form-control" placeholder="Enter contact no" onChange={(event) => setPhone(event.target.value)} />
                </div>

               

                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={handleClick} >log in?</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                         Fill Field  it is important!
                </Alert>
                }

            </form> : <Login />}
            </div> : <div>
                </div>}
        </>
    )
}

export default Registration
