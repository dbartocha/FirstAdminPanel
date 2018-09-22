import React from 'react';
import '../sass/mainPageStyle.css'
import {Link} from 'react-router-dom';

import * as firebase from "firebase";


class MainPage extends React.Component {


    render() {
        return (<div className="mainAdminPage">
                <div className='headerAdminPage'>
                    <span>Główna Strona Panelu Administracyjnego</span>
                </div>

                <div className='centerMainPage'>
                    <h2> Możesz przejść do :</h2>
                    <ul>
                        <Link to='/upload'><li>Dodawania zdjęć</li></Link>
                        <Link to='/list'><li>Przeglądania dodanych zdjęć</li></Link>
                        <Link to='/uploadtxt'><li>Dodawania i edycji tekstu</li></Link>
                        <Link to='/txtlist'><li>Przeglądania dodanego tekstu</li></Link>

                    </ul>
                </div>

            </div>
        )


    }


}

export default MainPage;