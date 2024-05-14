import React from 'react'
import SearchCard from '../Component/Card/SearchCard'
import './searchpage.css'
import NavBar from '../Component/NavBar/NavBar'
import PriceFilter from '../Component/Filter/PriceFilter'
import Footer from '../Component/Footer/footer'
import SerchCardRender from '../Component/SearchCardRender/SerchCardRender'
import TimeFilter from '../Component/Filter/TimeFilter'
import SearchHero from '../Component/SearchHero/SearchHero'
export default function SearchPage() {
        return (
                <div className='searchpage'>
                        <NavBar />
                        <SearchHero />
                        <div className='filterandtime'>

                                <SerchCardRender />

                                <div>
                                        <PriceFilter />
                                        <TimeFilter />
                                </div>
                        </div>
                        <Footer />
                </div>
        )
}
