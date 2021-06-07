import React from 'react'
import P1 from '../Assets/p1.jpg'
import P2 from '../Assets/p2.jpg'
import P3 from '../Assets/p3.jpg'
import P4 from '../Assets/p4.jpg'
import GI from '../Assets/git.png'
import FB from '../Assets/fb.png'
import IN from "../Assets/insta.png"
import P5 from '../Assets/p5.jpg'
import P6 from '../Assets/p6.jpg'
import IM5 from '../Assets/database.jpg'
import IM2 from '../Assets/nbag.jpg'
import IM3 from '../Assets/front.jpg'
import IM4 from '../Assets/raspberry.jpg'
import IM6 from '../Assets/DB.jpg'
import {Typography,Grid,
    makeStyles,
    Button,
    Avatar} from '@material-ui/core'
import ClearIcon from "@material-ui/icons/Clear";
import IM1 from '../Assets/k1.jpg'
import './Styles/Card.scss'

function Developer1() {
    return (
        <div>
             <div>
        <div className='card-container'>
            <section className='img-card-section'>
                <div className="img-card-square"> 
                </div>
                <img alt='background' className='img-card-style' src={IM5}></img>   
            </section>
            <section className='name-card-section1'>
                Yahia Boussaid
            </section>
            <section className='title-card-section'>
                Student Life Member
            </section>
            <section className='desc-card-section'>
            Sophomore Student at the Mediterranean Institute of Technology. Student Life Member.
            </section>
            <section className='social-card-section'>
              <a target='_blank' rel='noopener noreferrer'>
                  <img alt="picture" className="social-card-style" src={FB}></img>
                  </a>  
                  <a target='_blank' rel='noopener noreferrer'>
                  <img alt="picture" className="social-card-style" src={IN}></img>
                  </a>  
                  <a target='_blank' rel='noopener noreferrer'>
                  <img alt="picture" className="social-card-style" src={GI}></img>
                  </a>    
            </section>
            <img alt='profile' className="profile-img-card" src={P3}></img>
        </div>
        
        </div>  
        </div>
    )
}

export default Developer1
