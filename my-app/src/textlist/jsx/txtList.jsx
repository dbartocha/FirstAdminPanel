import React from 'react';
import '../sass/txtListStyle.css'
import {Link} from 'react-router-dom';

import * as firebase from "firebase";




class TxtList extends React.Component{

    state={
        text:[],
        id:''
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
    handleRemoveTxt=()=>{
        firebase.database().ref('text').on("value", snap => {

            console.log(snap);

            console.log(snap.val());

            this.state.text.forEach((el)=>{

                if(el===snap.val()){
                    this.setState({
                        id:snap.key,

                    });
                    console.log(this.state.id);
                }
            })
        });



    };

    render(){
        let count=0;
        return(
            <div className='txtList'>

                <div className="insideList">
                <div style={{marginTop:'10px'}}>
                    <span style={{marginLeft:'150px',fontSize:'30px',fontWeight:'bold'}}>Dodany tekst:</span>
                </div>
                    <ul>
                        {this.state.text.map((el)=>{
                            count++;
                            return(<li key={count}>{el}
                            <button onClick={this.handleRemoveTxt}>usuń</button></li>)

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