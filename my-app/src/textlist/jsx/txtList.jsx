import React from 'react';
import '../sass/txtListStyle.css'
import {Link} from 'react-router-dom';

import * as firebase from "firebase";




class TxtList extends React.Component{

    state={
        text:[]
    };

    componentDidMount(){

        firebase.database().ref('text').on("value", snap=> {

            const val=snap.val();



            for(let key in val){
                this.setState({
                    text:[...this.state.text,val[key]]
                })
            }

        })

    }


    render(){
        return(
            <div className='txtList'>

                <div className="insideList">
                <div style={{marginTop:'10px'}}>
                    <span style={{marginLeft:'150px',fontSize:'30px',fontWeight:'bold'}}>Dodany tekst:</span>
                </div>
                    <ul>
                        {this.state.text.map((el)=>{

                            return(<li>{el}</li>)

                        })}
                    </ul>

                </div>
                <div className='listOfButtons'>
                    <Link to='/main'> <button style={{marginRight:'10px',width:'100px',height:'60px',background:'dodgerblue', borderRadius:'5px'}} className='showTextButton'>Strona główna</button></Link>
                    <Link to='/uploadtxt'><button className='showTextButton' style={{marginLeft:'10px',width:'100px',height:'60px', background:'dodgerblue',borderRadius:'5px'}}>Dodawanie tekstu</button></Link>


                </div>


            </div>
        )
    }
}


export default TxtList;