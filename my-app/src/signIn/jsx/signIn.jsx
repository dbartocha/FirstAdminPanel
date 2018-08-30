import React from 'react';
import '../sass/signInStyle.css'


import * as firebase from 'firebase';

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
        error: [],
        check: false,
        errors:[]

    };


    handleClick = (event) => {

        event.preventDefault();

        if (this.state.email.length < 6 && this.state.password.length < 6) {
            this.setState({
                error: ['Hasło i Login są za krótkie']
            })
        }

        else if (this.state.email.length < 6) {
            this.setState({
                error: ['Twój login jest za krótki']

            })
        }

        else if (this.state.password.length < 6) {
            this.setState({
                error: ['Twoje hasło jest za krótkie']
            })
        }
        else {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => this.props.history.push('/main'))
                .catch( (error)=> {

                    this.setState({
                        errors:'Błędne dane logowania'
                    })





                });

        }


    };


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    render() {


        const style1 = {color: 'black', paddingRight: '20px', fontSize: '19px'};
        const style2 = {color: 'black', paddingRight: '22px', fontSize: '19px'};
        const style3 = {

            marginLeft:'80px',
            width: '400px',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        };
        const style4 = {color: 'black', fontSize: '30px', textAlign: 'center'};

        return (
            <div className="signIn">

                <div className="singInElement">
                    <div className="signInWindow">
                        <h2 style={style4}>Logowanie</h2>
                        <div style={style3}>
                            <div>
                                <span style={style2}>E-mail</span>

                                <input className="inputStyleLogin" type="email" id="email" onChange={this.handleChange}/>

                                </div>
                            <div style={{paddingTop: '30px'}}>
                                <span style={style1}>Hasło</span>
                                <input className="inputStyleLogin" type="password" id="password" onChange={this.handleChange}/>
                            </div>
                            <div className="overButton">
                                <button onClick={this.handleClick} className="button"
                                        style={{verticalAlign: 'middle',marginLeft:'20px'}}> Zaloguj
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {this.state.error.length > 0 && <h2 style={{color:'white'}}>{this.state.error}</h2>}
                    {this.state.errors.length>0 && <h2 style={{color:'white'}}>{this.state.errors}</h2>}
                </div>

            </div>
        )
    }


}

export default SignIn;