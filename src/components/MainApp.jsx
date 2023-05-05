import React from 'react';
import './MainApp.css';
import IllustrationWorking from '../images/illustration-working.svg';
import { useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import brandRecognition from '../images/icon-brand-recognition.svg';
import detailedRecords from '../images/icon-detailed-records.svg';
import fullyCustomizable from '../images/icon-fully-customizable.svg';

const MainApp = () => {
  //const [linksShorted, setlinksShorted] = useState([['a','b'],['c','d']]);
  
  var copyLinksShorted = [];
     
  //console.log(copyLlinksShorted);
  const [linksShorted, setlinksShorted] = useState([]);

  window.onload=function(){

    if(sessionStorage.getItem("LinksShortedList")!=null){
          let LinksShortedList = (sessionStorage.getItem("LinksShortedList"));
  

          let getCookies = JSON.parse(LinksShortedList);

          //console.log(getCookies);
          //setlinksShorted([...linksShorted,['a','b'],['c','d']]);
          setlinksShorted([...linksShorted,...getCookies]);  
  
      }
  }
  

  const [copied, setCopied] = useState(false);

  const copyPressed = event => {
    let obj = event.currentTarget;
    obj.classList.add('btn-Copied');
    obj.innerHTML = 'Copied!';

    const timer = setTimeout(()=>{
      obj.classList.remove('btn-Copied');
      obj.innerHTML = 'Copy';
    },2000);
    return () => clearTimeout(timer);
  };


  function ShortLink(){
    var link = document.getElementById('LinkToShort').value;
    //console.log(link);

    if(link !==''){
      document.getElementById('LinkToShort').classList.remove('input-error');

      fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then(res => res.json())
      .then(data =>{
        let linkShorted = data.result.full_short_link;
        setlinksShorted([...linksShorted,[link,linkShorted]]);
        //console.log(data);

        copyLinksShorted = [...linksShorted,[link,linkShorted]];
        //console.log(copyLinksShorted);

        let temp = JSON.stringify(copyLinksShorted);
        
        //console.log(temp);
        sessionStorage.setItem("LinksShortedList", (temp));

      })



      document.getElementById('error-message').style.display="none";

      
    }else{
      document.getElementById('error-message').style.display="initial";
      document.getElementById('LinkToShort').classList.add('input-error');
    }

  }

  return (
    <div className='Main-App'>
        <div className='introduction-container container-full-size'>

        
          <div className='introduction margin-app'>
              <div className='intro-text'>
                  <h1>More than just shorter links</h1>
                  <p>Build your brand’s recognition and get detailed insights 
                      on how your links are performing.</p>
                      
                  <button>Get Started</button>
              </div>

              <img src= {IllustrationWorking} alt='illustration-working.svg'/>

          </div>
        </div>

        <div className='main-body container-full-size'>
          <div className='links-container  margin-app'>
            <div className='short-link-container'>
                <input type='url' id='LinkToShort' placeholder='Shorten a link here...'/>
                <p id='error-message'>Please add a link</p>
                <button onClick={ShortLink}>Shorten it!</button>
                
            </div>

            {linksShorted.map( (elemento) => 

              <div className='copyLinks-container'>

                <div className='copyLinks-container-text'>
                  <p>{elemento[0]}</p>
                  <div className='copyLinks-container-text-divisor'></div>
                  <p><span>{elemento[1]}</span></p>

                </div>

                <CopyToClipboard text={elemento[1]}
                  onCopy={() => setCopied(true)}>
                  <button onClick={copyPressed} >Copy</button>
                </CopyToClipboard>
                
              </div>
            )}

          </div>

          <div className='advance-statistics margin-app'>
            <h1>Advance Statistics</h1>
            <p>Track how your links are performing across the web with our 
                advanced statistics dashboard.</p>   

          </div>

          <div className='advance-statistic-container margin-app'>

              <div id='green-bar'>

              </div>

              <div className='advance-statistic-item'  id='Brand-Recognition'>

                <div className='margin-statistic-item-container'>
                  <div className='statistic-icon-container'>
                    <img src={brandRecognition} alt='icon-brand-recognition.svg'/>
                  </div>
                  
                  <h1>Brand Recognition</h1>
                  <p>Boost your brand recognition with each click. Generic links don’t 
                    mean a thing. Branded links help instil confidence in your content.</p>
                </div>

              </div>

              <div className='advance-statistic-item'  id='Detailed-Records'>
                <div className='margin-statistic-item-container'>
                  <div className='statistic-icon-container'>
                    <img src={detailedRecords} alt='icon-detailed-records.svg'/>
                  </div>
                  
                  <h1>Detailed Records</h1>
                  <p>Gain insights into who is clicking your links. Knowing when and where 
                    people engage with your content helps inform better decisions.</p>
                </div>
              </div>

              <div className='advance-statistic-item' id='Fully-Customizable'>
                <div className='margin-statistic-item-container'>
                  <div className='statistic-icon-container'>
                    <img src={fullyCustomizable} alt='icon-fully-customizable.svg'/>
                  </div>
                  
                  <h1>Fully Customizable</h1>
                  <p>Improve brand awareness and content discoverability through customizable 
                    links, supercharging audience engagement.</p>
                </div>
              </div>
          
          </div>   


        </div>

        <div className='boost-your-links-today container-full-size'>
          <div className='boost-your-links-today-container margin-app'>
            <h1>Boost your links today</h1>
            <button>Get Started</button>
          </div>
        </div>

    </div>
  )
}

export default MainApp