import React from 'react';
import { FiMapPin, FiPhoneCall, FiTwitter } from "react-icons/fi";
import { BiEnvelopeOpen } from "react-icons/bi";
import { FaHome, FaWhatsapp } from "react-icons/fa";
import { RiProductHuntLine, RiRegisteredLine } from "react-icons/ri"
import { IoIosPhonePortrait } from "react-icons/io"
import { AiOutlineFacebook } from "react-icons/ai"
import { GrLinkedin, GrAndroid } from "react-icons/gr"
import { BsApple } from "react-icons/bs"
import './footer.css';


export const Footer = () => {
    return (

        <div className='main-footer'>
            
                <div className='container'>
                    <div className='row'>
                        {/* {/ column1 /} */}
                        <div className='col'>
                            <h1>Links</h1>
                            <ul className='list-unstyled'>
                                <li>
                                    <FaHome />
                                    Home
                                </li>
                                <li>
                                    <IoIosPhonePortrait />
                                    Contact Us
                                </li>
                                <li>
                                    <RiProductHuntLine />
                                    Products
                                </li>
                                <li>
                                    <RiRegisteredLine />
                                    Registration
                                </li>
                            </ul>
                        </div>
                        {/* {/ column2 /} */}
                        <div className='col'>
                            <h2>M_D Sport Shop.</h2>
                            <ul className='list-unstyled'>

                                <li>
                                    <p className='title'>
                                        <strong>
                                            <FiMapPin />
                                            Address :
                                        </strong>
                                        M_D House, 2nd Floor,
                                        <br />
                                        Ramjibanpur, Medinipur - 721242, India
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            <BiEnvelopeOpen />
                                            Mail Us :
                                        </strong>
                                        rockmantu178@gmail.com
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>
                                            <FiPhoneCall />
                                            Phone :
                                        </strong>
                                        +91 974 9401 211
                                    </p>
                                </li>
                            </ul>
                        </div>
                        {/* {/ column3 /} */}
                        
                        <div className='col' style={{ marginLeft: '13%' }} >
                        <h1>Certification</h1>
                        <ul className='list-unstyled'>
                            <li>
                                <img src="https://www.farvisionerp.com/images/iso-9001-bureau-veritas-logo.png" alt="certificate" width="30%" />
                            </li>
                            <li>
                                <img src="https://www.farvisionerp.com/images/credai-farvision2.png" alt="details" width="30%" />
                            </li>
                            <li>
                                <div className='icons'>
                                    <FaWhatsapp />
                                    <AiOutlineFacebook />
                                    <FiTwitter />
                                    <GrLinkedin />
                                    <GrAndroid />
                                    <BsApple />
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <hr />
                    <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} uagfdsghjkfge / all rights reserved / Terms of service
                    </p>
                </div>
                </div>
            
        </div>
    )
}
export default Footer;
