import React, {Component} from 'react';
import back from '../images/back.jpg';
import '../style.css';

class Second extends Component{
    render(){
        return(
            <div class="sheader">

                <div>
                    <img className="back" src={back}/>
               </div>
               <h2> Schedules make's your life easy and keep you organized</h2>
               <p>In this era where daytoday life is very fast, In this fast
                    world we 
                   keen to forget some important things. Schedules 
                   help us to make a note of such things and solves out pronlems</p>
               
            </div>
        )
    }
}
export default Second;