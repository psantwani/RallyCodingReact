import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import appThunk from '../containers/app_thunk';
import appFirebase from '../containers/app_firebase';

export default class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>                    
                    <Route exact path="/" component={appThunk} />
                    <Route exact path="/firebase" component={appFirebase} />
                </div>
            </BrowserRouter>
        );
    }
}