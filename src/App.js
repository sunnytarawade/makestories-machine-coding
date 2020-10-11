import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard'
//importing Router stuff
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound'
//Import Components

function App() {
  



  return (
    <div className="App">

      

{/* <Navbar/> */}
          
      <BrowserRouter>
        
        
        <Switch>
          <Route exact path="/" component={SignIn} ></Route>
          <Route exact path="/signin" component={SignIn} ></Route>
          
          <Route exact path="/signup" component={SignUp}></Route>
          
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
