import React  from 'react';
import './hero.css'
import { Link } from 'react-router-dom';
function Hero() {
        return (
                <div className='hero'>
                        <div className="title">
                                <h1>نوبت من!نوبت من کو؟</h1>
                                <p>وقت شما برای ما مهمه</p>
                        </div>
                        <div className="dropdownmenu">
                                <div >
                                        <input list="numberofperson" placeholder='2نفر' />
                                        <datalist id="numberofperson">
                                                <option value="1" />
                                                <option value='2' />
                                                <option value="3" disabled />
                                                <option value="Audi" />
                                                <option value="Volkswagen" />
                                        </datalist>
                                </div>
                                <div className="date">
                                        <input type="date" />
                                </div>
                                <div >
                                        <input list="service" placeholder='خدمات مورد نظر را انتخاب نمایید' />
                                        <datalist id='service'>
                                                <option value="آرایشکاه مردانه" />
                                                <option value="آرایشگاه مردانه" />
                                                <option value="Mercedes" disabled />
                                                <option value="Audi" />
                                                <option value="Volkswagen" />
                                        </datalist>
                                </div>
                                <div >
                                        <input list="city" placeholder='شهر مورد نظر را انتخاب نمایید' />
                                        <datalist id='city'>
                                                <option value="BMW" />
                                                <option value="Bentley" />
                                                <option value="Mercedes" />
                                                <option value="Audi" />
                                                <option value="Volkswagen" />
                                        </datalist>
                                </div>




                        </div>
                        <div className="herosearch">
                              <Link to={"/search"}>  بزن بریم </Link>
                        </div>
                </div>
        );
}


export default Hero;