import React from 'react';
import './HeaderApp.css';
import Logo from '../images/logo.svg';
import {ReactComponent as MenuBar} from '../images/menu.svg';
import {useEffect,useRef} from "react";


const HeaderApp = () => {

    //const menuOptions = document.getElementById('menu-mobile-navigation');

    document.addEventListener("click", function(e){
        //console.log('clic');
        //obtiendo informacion del DOM para  
        var clic = e.target;
        //console.log(clic);

        if(document.getElementById('menu-mobile-navigation').style.display == "flex" && clic != document.getElementById('menu-mobile-navigation')){
            document.getElementById('menu-mobile-navigation').style.display = "none";
        }
        }, false);

    function displayMenu(e){

        e.preventDefault();
        e.stopPropagation();
        if(document.getElementById('menu-mobile-navigation').style.display == "none"){
            document.getElementById('menu-mobile-navigation').style.display='flex';
        }else{
            document.getElementById('menu-mobile-navigation').style.display='none';
        }
    }

  return (
    <div className='Header-App'>
        <div className='headerLeft'>
            <img src={Logo} alt='logo.svg'/>

            <div className='headerLinks'>
                <a>Features</a>
                <a>Pricing</a>
                <a>Resources</a>
            </div>
            
        </div>


        <div className='headerRight'>

            <div className='headerLinks'>
                <a>Login</a>
                <button>Sign Up</button>
            </div>
        
        </div>

        <MenuBar className='menu-bar' onClick={displayMenu}/>

        <div id='menu-mobile-navigation' className='mobile-navigation'>
            <div className='headerLinks'>
                <a>Features</a>
                <a>Pricing</a>
                <a>Resources</a>
            </div>

            <div className='horizontal-bar'>

            </div>

            <div className='headerLinks'>
                <a>Login</a>
                <button>Sign Up</button>
            </div>

        </div>

    </div>
  )
}

export default HeaderApp