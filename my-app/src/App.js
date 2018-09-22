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
import MainPage from './mainPage/jsx/mainPage'
import UploadTxt from './uploadTxt/jsx/uploadTxt'
import TxtList from './textlist/jsx/txtList'
import Menu from './menu/jsx/menu'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={SignIn}/>
                        <Route path='/menu' component={Menu}/>
                        <Route path='/main' component={MainPage}/>
                        <Route path='/upload' component={Upload}/>
                        <Route path='/list' component={List}/>
                        <Route path='/uploadtxt' component={UploadTxt}/>
                        <Route path='/txtlist' component={TxtList}/>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

export default App;
