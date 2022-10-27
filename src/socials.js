import React from "react";
import {FaTwitter} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"


export default function Socials(){
    return (
        <div className="handles">
            <div className="twitter"><FaTwitter/></div>
            <div className="facebook"><FaFacebookSquare/></div>
            <div className="insta"><FaInstagram/></div>
            <div className="git"><FaGithubSquare/></div>


        </div>
    )
}