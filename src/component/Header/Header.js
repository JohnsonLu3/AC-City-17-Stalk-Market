import React, { Component } from 'react'
import './Header.scss'
import leaf from '../../img/leaf.png'
import '../../animate.css'

export default class Header extends Component {
    render() {
        return (
            <header>
                CITY 17 STALK MARKET
                <div className="brand">
                    <img className="animated jackInTheBox" src={leaf} alt="" />
                </div>
            </header>
        )
    }
}
