import React from 'react'
import './SearchHero.css'
import { Link } from 'react-router-dom'
export default function SearchHero() {
        return (
                <div>

                        <div className="dropdown" dir='rtl'>
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


                                <div className="search">
                                        <Link to={"/search"}>  بزن بریم </Link>
                                </div>

                        </div>

                </div>
        )
}
