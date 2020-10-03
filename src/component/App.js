import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import {connect } from 'react-redux';
import {addReminder, deleteReminder} from '../action';
import moment from 'moment'
import Second from './second';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            text:'',
            dueDate:''
        }
    }

    addReminder(){
        console.log('this.state.dueDate', this.state.dueDate)
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminder(id){
        this.props.deleteReminder(id);
    }

    renderReminders(){
        const {reminders} = this.props;
       return(
           <ol className="list-group col-sm-4">
           {
               reminders.map(reminder => {
                   return(
                       <ol key={reminder.id} className="list-group-item">
                           <div  className="list-item">
                               <div>{reminder.text}</div>
                               <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                               <div 
                           className=" delete-btn"
                           onClick = {() => this.deleteReminder(reminder.id)}
                           >
                                &#x2715;
                            </div> 
                           
                           </div>
                          
                       </ol>
                   )
               })
           }
           </ol>
       )
    }
    
    render(){
       
        return(
            <div className="second">
                <Second/>
            <div className="App">
                <div className="title background">
                    Schedules
                </div>
               
                <div className="form-inline">
                    <div className="form-group">
                        <input
                        className="form-control"
                        placeholder="I have to........."
                        onChange = {event => this.setState({text: event.target.value})}
                        onKeyPress = {event => {
                            if(event.key ==='Enter'){
                                this.addReminder()
                        }
                            
                            }
                            
                        }
                        />
                        <input
                            className="form-control"
                            type="datetime-local"
                            onChange = {event => this.setState({dueDate: event.target.value})}
                        />
                    </div>
                   
                    <Button
                    type="button"
                    className="btn btn-success"
                    onClick = {() => this.addReminder()}
                    >
                        
                        Add Reminder
                    </Button>
                        <div className="list">
                             {this.renderReminders()}
                        </div>
                   
                </div>
            </div>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        reminders: state
    }

}

export default connect(mapStateToProps, {addReminder, deleteReminder})(App);