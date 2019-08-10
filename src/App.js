import React from 'react';
import CreateToken from './Components/CreateToken'
import GetTotalSupply from './Components/GetTotalSupply'
import Transfer from './Components/Transfer'
import Approve from './Components/Approve'
import Delegatebalance from './Components/Delegatebalance'
import DelegateTransfer from './Components/DelegateTransfer'
import './App.css';

require('dotenv').config();

let appName = process.env.APP_NAME || 'ERC-20 DEPLOYER APP!';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1>Welcome to {appName}</h1>
        <h4>Create your ERC20 token here</h4>
        
        <CreateToken/>

        <br/>
        <h4>Check your supply here</h4>
        
        <GetTotalSupply/>
        
        <br/>
        <h4>Transfer</h4>
        
        <Transfer/>
        
        <br/>
        <h4>Assign Delegate</h4>
        
        <Approve/>
        
        <br/>
        <h4>Check Delegate balance</h4>
        
        <Delegatebalance/>
        
        <br/>
        <h4>Delegate Transfer</h4>
        
        <DelegateTransfer/>

      </div>
      
    </div>
  );
}

export default App;
