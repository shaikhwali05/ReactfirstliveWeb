import React from 'react'

import Home from './Home'
import { Route , Switch } from 'react-router';
import About from './pages/About';
import Contactus from './pages/Contactus';
import Services from './pages/Services';
import Error from './pages/Error';



const App = () => {
  return (
    <>
    <Switch>
    <Route exact path= "/" component = {Home}></Route>
    <Route path= "/about" component = {About}></Route>
    <Route path= "/contact" component = {Contactus}></Route>
    <Route path= "/service" component = {Services}></Route>
    <Route  component = {Error}></Route>
    </Switch>
   

      
    </>
  )
}
export default App