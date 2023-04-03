import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from '../home/Home';

function Login() {

    const [namelog, setNamelog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('ajinkyaSubmissionPassword').replace(/"/g, "");
        let mail = localStorage.getItem('ajinkyaSubmissionName').replace(/"/g, "");
      

        if (!namelog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (namelog !== mail)) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }


    return (
        <div>
            {home ? <form onSubmit={handleLogin}>
                <h3>LogIn</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name" onChange={(event) => setNamelog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>

                {flag && <Alert color='primary' variant="warning" >
                    Fill correct Info else keep trying.
                        </Alert>}
            </form>
                : <Home />
            }

        </div>
    )
}

export default Login
