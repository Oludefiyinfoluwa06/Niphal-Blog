import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer">

            <div class="footer-top">

            <div class="container">

                <div class="row  justify-content-center">
                <div class="col-lg-6">
                    <h3>Niphal</h3>
                    <p>Unleash digital creativity with niphal and create innovative solutions with us</p>
                </div>
                </div>

                {/* <div class="row footer-newsletter justify-content-center">
                <div class="col-lg-6">
                    <form>
                    <input type="email" name="email" placeholder="Enter your Email" /><input type="submit" value="Subscribe" />
                    </form>
                </div>
                </div> */}

                <div class="social-links">
                <NavLink to="#" class="facebook"><FaFacebook /></NavLink>
                <NavLink to="https://www.instagram.com/theniphal" class="instagram"><FaInstagram /></NavLink>
                <NavLink to="#" class="linkedin"><FaLinkedin /></NavLink>
                </div>

            </div>
            </div>

            <div class="container footer-bottom clearfix">
            <div class="copyright">
                &copy; Copyright <strong><span>Niphal</span></strong>. All Rights Reserved
            </div>
            </div>
        </footer>
    );
}

export default Footer;