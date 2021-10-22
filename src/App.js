import { Route, Switch, Redirect } from "react-router-dom";
import React, { useState } from "react";

import Home from "./components/Home";
import AddEvent from "./components/AddEvent";
import EditEvent from "./components/EditEvent";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Team from "./components/Team";
import UpcomingEvents from "./components/UpcomingEvents";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";
import PotluckItems from "./components/PotluckItems";
import Potluck from "./components/Potluck";


function App() {
  let token = localStorage.getItem('token')
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
  <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} token={token} />
    <Switch>
       <PrivateRoute path="/edit/:id" component={EditEvent}/>
       <PrivateRoute path='/upcomingevents/:id' component={Potluck}/>
       <PrivateRoute path="/potluckitems" component={PotluckItems}/>
       <PrivateRoute path="/add"component={AddEvent}/>
       <PrivateRoute path="/upcomingevents" component={UpcomingEvents}/>

        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/login">
          <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/signup">
          {token !== null ? <Redirect to='/upcomingevents'/>
          : <SignUp /> }
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
