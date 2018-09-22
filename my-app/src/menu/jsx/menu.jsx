import React from 'react';
import '../sass/menuStyle.css';
import {Link} from 'react-router-dom';

class Menu extends React.Component {

    state = {
        text: false,
        photos: false

    };

    handleClick = () => {

        this.setState({
            text: !this.state.text
        })

    };

    handleClickPhotos = () => {
        this.setState({
            photos: !this.state.photos
        })
    };


    render() {

        const style = {
            display: this.state.text === false ? 'none' : 'block',

        };

        const style1 = {
            display: this.state.photos === false ? 'none' : 'block'
        };

        return (<div>
            <link href="dist/hamburgers.css" rel="stylesheet"/>
            <div className='menuClass'>
                <div>
                    <div>
                        <h1 style={{
                            color: 'rgb(133,139,148)'
                        }
                        }>Panel Admina</h1>
                    </div>
                    <div>
                        <div onClick={this.handleClick}>
                            <h2 style={{
                                cursor: 'pointer',
                                paddingTop: '30px',
                                fontSize: '20px'
                            }} className='menuColors'>Obsługa Tekstu
                            </h2>

                        </div>
                        <ul className='needLi' style={style}>
                            <Link to='/uploadtxt'>
                                <li className='menuColors'>Dodawanie tekstu</li>
                            </Link>
                            <Link to='/txtlist'>
                                <li className='menuColors'>Przeglądanie dodanego tekstu</li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <div onClick={this.handleClickPhotos}>
                            <h3 style={{
                                cursor: 'pointer',
                                paddingTop: '30px',
                                fontSize: '20px'
                            }} className='menuColors'>Obsługa Zdjęć
                            </h3>
                        </div>
                        <ul className='needLi' style={style1}>

                            <Link to='/upload'>
                                <li className='menuColors'>Dodawanie zdjęć</li>
                            </Link>
                            <Link to='/list'>
                                <li className='menuColors'>Przeglądanie dodanych zdjęć</li>
                            </Link>
                        </ul>

                    </div>
                </div>
            </div>
            </div>


        )
    }

}

export default Menu;