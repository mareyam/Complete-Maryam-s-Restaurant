import React from 'react';
import ReactDOM from 'react-dom';
import index from './index.css';
import {BrowserRouter} from "react-router-dom";
import Home from "./Home";



ReactDOM.render(
        <BrowserRouter>
        <Home/>
        </BrowserRouter>

,document.getElementById('root'));
