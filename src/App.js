import React, {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Search from './Pages/Search';


function App() {
    //const[ setQuery] =useState('')
    //const queryFunction = (q) =>{
        //setQuery(q)
      
    return (
        <>
        <Router>
           <Navbar />
           <Switch>
               <Route exact path='/' component={Home}/>
               <Route path='/login' component={Login}/>
               <Route path='/search' component={Search}/>
            
           </Switch>
        </Router>  
        </>
    )
}
export default App;
