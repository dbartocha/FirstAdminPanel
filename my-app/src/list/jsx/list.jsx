import React from 'react';
import '../sasss/listStyle.css';
import {Link} from 'react-router-dom';
import * as firebase from "firebase";
import {Storage as storage} from "firebase";


class List extends React.Component{

    state={

        list:[]



    };
handleDownload=()=> {



        const images = firebase.storage().ref().child('images/');


        images.getDownloadURL().then((url) => {console.log(url);  });


};




    render(){
        return(
            <div className="list">
                <div className="listEl">
                <ul>
                    <li>costamcostam</li>
                    <li>costamcostam</li>
                    <li>costamcostam</li>
                    <li>costamcostam</li>
                    <li>costamcostam</li>
                </ul>
                    <div style={{marginTop:'10%', display:'flex',justifyContent:'center'}}>
<div style={{marginTop:'5px'}}>
                    <Link to="/upload"> <button className="listButton"><span>+</span></button></Link>
</div>
                        <div>
                    <button onClick={this.handleDownload} className="listButton2">Pokaż aktualne zdjęcia</button>
                        </div>
                </div>
                </div>div>
            </div>
        )
    }
}

export default List;