import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BowserRouter, Link, Route, Switch, BrowserRouter} from 'react-router-dom';
import Main from './Router';

class Index extends Component{
    render(){
        return(
            <BrowserRouter>
                <Route component={Main}/>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Index/>, document,getElementById('index')
);