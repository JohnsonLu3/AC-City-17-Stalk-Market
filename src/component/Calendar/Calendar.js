import React, { Component } from 'react'
import './Calendar.scss'

export default class Calendar extends Component {
    render() {
        const totalDays = this.getTotalDaysInCurrentMonth();

        return (
            <section>
                <div className="calendar animated fadeInUp ac-bubble">
                    <h2>{this.getDateString()}</h2>
                    <ul>
                        {Array.from(Array(totalDays), (e, i) => {
                            return <li key={i + 1}>{i + 1}</li>
                        })}
                    </ul>
                </div>
            </section>
        )
    }

    getDateString = () => {
        let str = "";
        let day = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        str = day[today.getDay()] + ", " + month[mm - 1] + " " + dd + " " + yyyy
        return str;
    }

    getTotalDaysInCurrentMonth = () => {
        let today = new Date();
        let totalDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
        return totalDays
    }
}
