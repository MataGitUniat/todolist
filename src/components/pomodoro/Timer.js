import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
    constructor(){
        super();
        this.state = {
            alert:{
                type:'',
                message:'',
            },
            time: 0
        };
        this.times = {
            defaultTime: 1500, //25 min
            shortBreak: 300, //5 min
            longBreak: 900, //15 min
        }
    }

    componentDidMount(){
        //inicio por defecto de la pagina Web
        this.setDefaultTime()
    }

    setDefaultTime(){
        this.setState({
            time: this.times.defaultTime
        })
    }
    //botones
    setTimeForWork = () =>{
        this.setState({
            alert:{
                type:'work',
                message:'WORKING!!!'
            }
        })
        this.setTime(this.times.defaultTime);
    }
    setTimeForShortBreak = () =>{
        this.setState({
            alert:{
                type:'ShortBreak',
                message:'Taking a Break!!!'
            }
        })
        this.setTime(this.times.shortBreak);
    }
    setTimeForLongBreak = () =>{
        this.setState({
            alert:{
                type:'LongBreak',
                message:'Taking the day off!!!'
            }
        })
        this.setTime(this.times.longBreak);
    }
    setTime = (newTime) =>{
        this.restartInterval();
        this.setState({
            time: newTime,

        })
    }
    restartInterval = () =>{
        clearInterval(this.interval);

        this.interval = setInterval(this.countDown,1000)


    }
    countDown = () =>{
        if(this.state.time === 0){
            this.setState({
                alert:{
                    type: 'Beep',
                    message: 'Beeeeeeeeep',
                }
            })
        }else{
            this.setState({
                time: this.state.time - 1,
                
            });
        }
    }

    displayTimer(Time) {
        let minute = Math.floor((Time / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        let second = Time % 60;
        second = (second < 10)? '0' + second : second;
        return `${minute}:${second}`
    }
    

    render(){
        const {alert: {message,type}, time} =this.state;
        return(
            <div className="pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>

                <div className = "timer">
                    {this.displayTimer(time)}
                </div>

                <div className ="types">
                    <button
                        className = "start"
                        onClick = {this.setTimeForWork}
                    >
                        Go to Work
                    </button>
                    <button
                        className = "short"
                        onClick = {this.setTimeForShortBreak}
                    >
                        Short Break
                    </button>
                    <button
                        className = "long"
                        onClick = {this.setTimeForLongBreak}
                    >
                        Long Break
                    </button>

                </div>


            </div>
        )
    }

    

}

export default Timer;