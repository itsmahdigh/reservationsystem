import React from 'react'
import HeroDetail from '../Component/Details/Hero/HeroDetail'
import NavBar from '../Component/NavBar/NavBar'
import './DetailPage.css'
import Description from '../Component/Details/Description/Description'
import Footer from '../Component/Footer/footer'
import Portofolio from '../Component/Details/Portofolio/Portofolio'
export default function DetailPage() {
        return (
                <div className='DetailPage'>
                        <NavBar />
                        <HeroDetail />
                        <Description />
                        <div className="prototitle">
                                <p>نمونه کارها</p>
                        </div>
                        <div className="porto">

                                <Portofolio />
                                <Portofolio />
                                <Portofolio />
                                <Portofolio />
                                <Portofolio />
                                <Portofolio />
                        </div>
                        <Footer />
                </div>
        )
}
