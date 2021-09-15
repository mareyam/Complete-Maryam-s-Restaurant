import React from 'react';
import Landingpage from "./Landingpage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
  import Receipe from "./Receipe";
import Receipe1ForReceipe from './Receipe1ForReceipe';
import Faq from "./Faq";


const Home = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Landingpage/>
                    </Route>
                    <Route exact path="/faq">
                        <Faq/>
                    </Route>
                    <Route exact path="/receipedetails">
                        <Receipe1ForReceipe/>
                    </Route>
                    <Route exact path="/receipedetails">
                        <Receipe1ForReceipe/>
                    </Route>
                    <Route exact path="/faq">
                        <Faq/>
                    </Route>
                </Switch>
            </Router>
            
        </div>
    )
}

export default Home
