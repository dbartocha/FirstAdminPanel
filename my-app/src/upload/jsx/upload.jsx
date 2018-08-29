import React from 'react';
import '../sass/upload.css'
import {Link} from 'react-router-dom';

import * as firebase from "firebase";


class Upload extends React.Component {
    state = {
        url:''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.files[0]
        })
    };


    handleUpload=()=>{

        let file = this.state.url;
        const reader = new FileReader();

        reader.onloadend =  (evt) => {
            const blob = new Blob([file], { type: "image/png" });
            const storageRef = firebase.storage().ref(/images/ + file.name);

            storageRef.put(blob)
                .then(r => console.log(r))
                .catch(e => console.log(e));

        };

        reader.onerror = function (e) {
            console.log("Failed file read: " + e.toString());
        };

        reader.readAsArrayBuffer(file);

    };



    render() {



        return (
            <div className="uploadCentre">

                <div className="uploadItem">
                    <div style={{marginTop:'14%'}}>
                    <span style={{color:'black'}}>Upload Files</span>
                    <input style={{color:'black'}} type="file" onChange={this.handleChange} id='url'/>
                    <div className="centerButtons">
                    <div className='overUploadButton'><Link to="/list">
                        <button className="uploadButton"><span>Lista</span></button>
                    </Link>
                    <button onClick={this.handleUpload} className='uploadButton'>Dodaj</button>
                    </div>
                    </div>
                    </div>
                    </div>

            </div>
        )


    }
}

export default Upload;