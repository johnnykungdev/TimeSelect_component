import React, { Component } from 'react';

import classes from './TimeSelection.module.scss';

class TimeSelection extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log('TimeSelection, componentDidMount');

    }

    onClickHandler = (e, number) => {
        this.props.onSelectClassTimeHandler(e, number);
    }

    onCancelClickHandler = (e) => {
        this.props.cancelClassTimeHandler(e);
    }

    render(){
        const timePeriodArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        console.log('timeSelection', this.props.classTime);
        console.log(this.props.selectedDate_timeList);

        let timePeriodDivs = [];

        if(this.props.selectedDate_timeList !== 'no free time' && this.props.selectedDate_timeList){
            this.props.selectedDate_timeList.map((time) => {
                timePeriodDivs.push(
                    <div className={classes.TimePeriodDiv}>
                        <div className={classes.InfoDiv}>
                            <p>師傅:{time.master_id}</p>
                            <p>時間: {time.time}</p>
                        </div>
                        <button 
                            id={classes.ReserveButton}
                            onClick={() => this.props.makeReservation(null, time.master_id)}>
                            預約
                        </button>
                    </div>
                )
            })
        } else {
            timePeriodDivs = [
                <div>
                    <h3>此天無可預約時段</h3>
                </div>
            ]
        }

        return (
            <div className={classes.TimeDivsContainer}>
                {timePeriodDivs}
            </div>
        )
    }
}

export default TimeSelection;