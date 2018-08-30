import React from 'react';
import '../sasss/listStyle.css';
import {Link} from 'react-router-dom';
import * as firebase from "firebase";



class List extends React.Component{

    state={

        list1:[],
        list2:[]



    };

    componentDidMount() {

        firebase.database().ref('/images').on('value', snap => {
            let value = snap.val();

            for (let key in value) {
                if (value[key].category === 'gallery') {
                    firebase
                        .storage()
                        .ref(value[key].path)
                        .getDownloadURL()
                        .then(url => this.setState({
                            list1: [...this.state.list1, url]
                        }))
                }
                else{
                    firebase
                        .storage()
                        .ref(value[key].path)
                        .getDownloadURL()
                        .then(url => this.setState({
                            list2: [...this.state.list2, url]
                        }))
                }
            }
        });
    }




    render(){
        return(
            <div className="list">

                <div className="listEl" style={{marginTop:'20px',marginRight:'10px',textAlign:'center'}}>
                    <span style={{fontSize:'25px'}}>Lista z elementami galerii</span>
                <ul style={{display: 'flex'}} className="elementsInList">
                    {
                        this.state.list1.map(item => {
                            return (
                                <li>
                                    <img className="images" src={item} alt={item}/>

                                </li>
                            )
                        })
                    }

                </ul>

                </div>
                <div className="listEl" style={{marginTop:'20px',marginLeft:'10px',textAlign:'center'}}>
                    <span style={{fontSize:'25px',}}>Lista z elementami slidera</span>
                    <ul style={{display: 'flex'}} >
                        {
                            this.state.list2.map(item => {
                                return (
                                    <li>
                                        <img className="images" src={item}/>
                                    </li>
                                )
                            })
                        }

                    </ul>

                </div>
                <div style={{marginTop:'10%', display:'flex',justifyContent:'space-around'}}>
                    <div style={{marginTop:'5px'}}>
                        <Link to="/upload"> <button className="listButton"><span>Przejdź do dodawania zdjęć</span></button></Link>

                    </div>
                    <div style={{marginTop:'5px'}}>
                        <Link to="/main"> <button className="listButton2"><span>Strona główna</span></button></Link>

                    </div>
                </div>

                </div>
        )
    }
}

export default List;