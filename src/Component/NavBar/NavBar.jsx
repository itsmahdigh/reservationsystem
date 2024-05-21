import React, { Component } from 'react';
import './navbar.css'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom';
class NavBar extends Component {
        render() {
                return (
                        <div className='navbar'>
                                <div className="upeerMenu">
                                        <ul className='menu'>
                                                <li><Link to={'/rules'}>قوانین مقررات </Link> </li>
                                                <li>دانلود اپلیکیشن</li>
                                                 <li>درخواست همکاری</li>
                                        </ul>
                                </div>
                                <div className="downMenu">
                                        <ul className='Logobutton'>
                                                <li><Link to={'/login'}><button className='button'>ورود/ثبت نام</button></Link></li>

                                                <li><Link to={'/'}><img className='logo' src={Logo} alt="" /></Link></li>
                                        </ul>
                                </div>
                        </div>
                );
        }
}

export default NavBar;