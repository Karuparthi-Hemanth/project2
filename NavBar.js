import './NavBar.css';
import React,{ Component } from 'react';

export default class NavBar extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <header className='header'>
                <img className="logo" src="LogoMakr-94v4M9.png" alt="" />
            </header>
        )
    }
}
