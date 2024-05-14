import React from 'react'
import '../Card/Searchcard.css'
import Img1 from '../../assets/barbaeimg.jpg'
export default function SearchCard(props) {
        return (
                <div className='box' dir='rtl'>
                        <div className="picture">
                                <img src={Img1} alt="" />
                        </div>
                        <div className="info">
                                <div className="first">
                                        <h2>آرایشگاه احسان</h2>
                                        <button>نشان کردن</button>
                                </div>
                                <div className="middle">
                                        <div className="comment">
                                                <p>4star</p>
                                                <p>136 comment</p>
                                        </div>
                                        <div className="address">
                                                <p>میانه،خیابان امام</p>
                                                <p>50000تومان</p>
                                        </div>
                                        <div className="time">
                                                <div>
                                                        <button>18:30</button>
                                                        <button>19</button>
                                                        <button>19:30</button>
                                                        <button>20:00</button>
                                                        <button>20:30</button>



                                                </div>
                                        </div>

                                </div>
                        </div>
                </div>
        )
}
