import React from "react";
import MyImage from "./myPic.JPG"
import {FaLinkedinIn} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"

export default function Info(){
    return(
        <div className="info">
            <img src={MyImage} className="my-image"/>
            <div className="name">Akinola Kehinde</div>
            <h4 className="skill">Frontend Developer</h4>
            <a href="#" className="website">akinolaadetomiwa21.gmail.com</a>
            <div className="socials">
                <button className="email"> <span id="envelope"><FaEnvelope/></span> Email</button>
                <button className="link"><span id="in"><FaLinkedinIn/></span>  Linkedin</button>
            </div>
            
            
        </div>
    )
}