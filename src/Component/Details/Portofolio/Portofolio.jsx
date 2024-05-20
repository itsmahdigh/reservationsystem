import React from 'react'
import './Portofolio.css'
import IMG3 from '../../../assets/barbaeimg.jpg'
export default function Portofolio(props) {
        return (
                <div className='portofolio' dir='rtl'>
                        <img src={IMG3} alt="" />
                        <div className="portoinfo">
                                <p>کراتینه مو</p>
                                <p>50000تومان</p>
                        </div>
                </div>
        )
}
