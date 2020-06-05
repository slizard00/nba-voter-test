import React from 'react';
import './App.css';
import Logintbygoogle from './components/authentication/google/Logintbygoogle';
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

function App() {
  return (
    <>
   <div className="App">  
     <Router>    
      <div className="container">   
        <Switch>    
          <Route exact path='/' component={Logintbygoogle} ></Route>    
          <Route path='/Dashboard' component={Dashboard} ></Route>     
        </Switch>    
      </div>    
    </Router>    
    </div>  
   </>
  );
}

export default App;