import React from 'react';
import '../sass/upload.css'
import {Link} from 'react-router-dom';

import * as firebase from "firebase";


class Upload extends React.Component {
    state = {
        url:'',
        percentage:''
    };

    handleClick=()=>{
        this.setState({
            percentage:''
        })
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.files[0]
        })
    };



    handleUpload=(folder)=>{
        if(!this.state.url){
            return null
        }

        let file = this.state.url;
        const reader = new FileReader();

        reader.onloadend =  (evt) => {
            const blob = new Blob([file], { type: "image/png" });
            const storageRef = firebase.storage().ref(`/${folder}/${file.name}`);

            storageRef.put(blob)
                .then(r => {
                    firebase.database().ref('/images').push({
                        path: r.metadata.fullPath,
                        category: folder
                    });
                    let percentage=(r.bytesTransferred/r.totalBytes)*100;
                    this.setState({
                        percentage:percentage,
                    })
                })
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
                    <span style={{color:'black', textAlign:'center',fontSize:'25px',marginLeft:'150px', marginTop:'10px'}}>Dodawanie Plików</span>
                    <Link to="/main"> <button style={{color:'white', fontSize:'25px', background:'dodgerblue',borderRadius:'10px',cursor:'pointer'}}><span>Strona główna</span></button></Link>
                    <div style={{marginTop:'8%'}}>
                        <progress value={this.state.percentage} max="100" className="uploader" id='percentage'>0%</progress>

                    <input style={{color:'black'}} type="file" onChange={this.handleChange} id='url' onClick={this.handleClick}/>
                    <div className="centerButtons">
                    <div className='overUploadButton'>

                        <Link to="/list">

                        <button className="uploadButton2"><span>Lista</span></button>
                    </Link>

                    <button onClick={() => this.handleUpload('gallery')} className='uploadButton'>Dodaj do Galerii</button>

                    <button onClick={() => this.handleUpload('slider')} className='uploadButton'>Dodaj do Slider'a</button>

                    </div>
                    </div>
                    </div>
                    </div>

            </div>
        )


    }
}

export default Upload;