import React, {Component} from 'react';
import './App.css';
import SignIn from './signIn/jsx/signIn'
import {
    Route,
    HashRouter,
    Switch
} from 'react-router-dom';
import Upload from './upload/jsx/upload'
import List from './list/jsx/list';



class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={SignIn}/>
                        <Route exact path='/upload' component={Upload}/>
                        <Route exact path='/list' component={List}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
