import React from 'react';
import './App.css';
import {Modal} from "reactstrap";
import Registration from './components/Registration/Registration';


function App() {
  return (<>

<Modal></Modal>
    <div className="App">

      <button className='btn mt-3' style={{backgroundColor:"grey"}}>
          Open Model
      </button>
      <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    </div>
    </>

  );
}

export default App;
