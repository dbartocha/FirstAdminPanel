import React from 'react';
import '../sass/uploadTxtStyle.css';
import {Link} from 'react-router-dom';
import * as firebase from "firebase";



class UploadTxt extends React.Component{

    state={

    };
    handleClick=()=>{
        this.setState({
            percentage:'',
            txt:'',
            url:''

        })
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };




    handleUploadTxt=(folder)=> {
        firebase.database().ref(folder).push(this.state.txt).then()

    };


    render() {



        return (
            <div className="uploadCentre">

                <div className="uploadItem">
                    <span style={{color:'black', textAlign:'center',fontSize:'25px',marginLeft:'150px', marginTop:'10px'}}>Dodawanie Tekstu</span>
                    <div style={{marginTop:'8%'}}>
                        <progress value={this.state.percentage} max="100" className="uploader" id='percentage'>0%</progress>

                        <textarea style={{color:'black'}} type="text" onChange={this.handleChange} id='txt' onClick={this.handleClick}/>
                        <div className="centerButtons">
                            <div className='overUploadButton'>

                                <Link to="/txtlist">

                                    <button className="uploadButton2"><span>Tekst</span></button>
                                </Link>

                                <button onClick={() => this.handleUploadTxt('text')} className='uploadButton'>Dodaj Aktualności</button>
                                <Link to='/main'><button  className='uploadButton'>Strona Główna</button></Link>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )


    }






}


export default UploadTxt;