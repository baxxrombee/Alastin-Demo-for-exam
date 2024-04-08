import React from 'react'
import './Footer.css'
import { GoArrowRight } from "react-icons/go";
import { SlSocialInstagram } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { ImPinterest2 } from "react-icons/im";
import { CiYoutube } from "react-icons/ci";


const Footer = () => {
    return (
        <footer>
            <div className="top_footer">
                <div className="footer_1">
                    <div className="custom_care">
                        <h4>CUSTOMER CARE</h4>
                        <ul>
                            <li><a href="">Authenticity</a></li>
                            <li><a href="">Physician Locator</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Help Center</a></li>
                            <li><a href="">Affiliate Program</a></li>
                            <li><a href="">Terms of Service</a></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="about_footer">
                    <h4>ABOUT</h4>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Press Releases</a></li>
                            <li><a href="">CareersNew Health Care Providers</a></li>
                            <li><a href="">Existing Provider Login</a></li>
                            <li><a href="">Manage My Subscription</a></li>
                            <li><a href="">ALASTIN Education</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_1_2_line"></div>
                <div className="footer_2">
                    <div className="footer_2_top">
                        <div className="footer_2_top_top">
                            <h2>JOIN THE A-LIST</h2>
                            <p>Stay in the glow with the latest beauty and skincare trends, products, and procedures.</p>
                        </div>
                        <div className="footer_2_top_bottom">
                            <p>Enter email adress</p>
                            <GoArrowRight style={{color:"white"}} />
                        </div>
                    </div>
                    <div className="footer_2_line"></div>
                    <div className="footer_2_bottom">
                        <SlSocialInstagram style={{width:"25px", height:"25px",color:"white"}} />
                        <CiFacebook style={{width:"25px", height:"25px",color:"white"}} />
                        <CiTwitter style={{width:"25px", height:"25px",color:"white"}} />
                        <ImPinterest2 style={{width:"25px", height:"25px",color:"white"}} />
                        <CiYoutube style={{width:"25px", height:"25px",color:"white"}} />
                    </div>
                </div>
            </div>
            <div className="middle_line"></div>
            <div className="bottom_footer">
                <div className="footer_3">
                    <div className="footer_bottom_3_1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/Galderma_logo.svg" alt="galderma" />
                    </div>
                    <div className="footer_bottom_3_2">
                        <p>2023 Galderma laboratories, L.P. United States. All rights reserved. All trademarks are the property of their respective owners. This site is intended for U.S audiences only. © 2023, ALASTIN Skincare, Inc. All trademarks are the property of their respective owners.</p>
                        <div className="footer_bottom_3_2_bottom">
                            <ul>
                                <li><a href="">Sitemap</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Terms of Use</a></li>
                                <li><a href="">Accessibility</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_bottom_3_3">
                        <p>*Free shipping on all orders when you sign up for the email newsletter, sms, or on orders $75+. To redeem free shipping when applicable, select "Free Shipping" at checkout.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer