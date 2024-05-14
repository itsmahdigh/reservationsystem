import React, { Component } from 'react';
import NavBar from '../Component/NavBar/NavBar';
import Hero from '../Component/HeroSection/Hero';
import Footer from '../Component/Footer/footer';
import Card from '../Component/Card/Herocard';
import barberdata from '../assets/barberdata'
import Popular from '../Component/Popular/Popular';
import PopularComment from '../Component/PopularComment/PopularComment';
import PopularCommentRender from '../Component/PopularCommentRender/PopularCommentRender';
import HeroFilter from '../Component/HeroFilter/HeroFilter'
import './LandingPage.css'
function LandingPage() {
	// let data;
	// barberdata.map((index) => {
	// 	return data = index
	// })
	// console.log(data.name)
	return <>
		<NavBar />

		<div>
			<Hero />

			<Popular />
			
		</div>
		<div className='comment'>
			<PopularCommentRender />
		</div>
		<HeroFilter/>
		<Footer />
	</>


}

export default LandingPage;