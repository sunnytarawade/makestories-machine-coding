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
import Loading from './components/Loading';
//Import Components

function App() {
  



  return (
    <div className="App">

      

{/* <Navbar/> */}

         
      <BrowserRouter>
        
      {/* <Loading/> */}
        <Switch>
        
          <Route exact path="/" component={SignIn} ></Route>
          <Route  path="/signin" component={SignIn} ></Route>
          
          <Route  path="/signup" component={SignUp}></Route>
          
          <Route  path="/dashboard" component={Dashboard}></Route>
          <Route component={NotFound}></Route>
          
        </Switch>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
