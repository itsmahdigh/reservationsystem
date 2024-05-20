import React from 'react'
import './HeroDetail.css'
import Img2 from '../../../assets/barbaeimg.jpg'
export default function HeroDetail(props) {
        return (
                <div className='detailpage' dir='rtl'>
                        <div className="shoppicture">
                                <div className="mainimg">
                                        <img src={Img2} alt="" />
                                </div>
                                <div className="subimgs">
                                        <img src={Img2} alt="" />
                                        <img src={Img2} alt="" />
                                        <img src={Img2} alt="" />
                                        <img src={Img2} alt="" />

                                </div>
                        </div>
                        <div className="info">
                                <div className="nameinfo">

                                        <h1>آرایشکاه احسان</h1>
                                        <h3>مقدار بیعانه:50000تومان</h3>
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                                                و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                                                می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
                                                شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
                                </div>
                                <div className="freetimes">
                                        <div className='title'>
                                                <p>زمان های موجود امروز:</p>
                                                <p>1403/03/06</p>
                                        </div>
                                        <div className='timeselection'>
                                                <div className='select'>
                                                        <input type="radio" name="" id="" />
                                                        <p>8:00</p>
                                                </div>
                                                <div className='select'>
                                                        <input type="radio" name="" id="" />
                                                        <p>8:00</p>
                                                </div>
                                                <div className='select'>
                                                        <input type="radio" name="" id="" />
                                                        <p>8:00</p>
                                                </div>
                                                <div className='select'>
                                                        <input type="radio" name="" id="" />
                                                        <p>8:00</p>
                                                </div>
                                        </div>
                                </div>
                                <div className="social">
                                        <button>نشان کردن</button>
                                        <div>
                                                <p>instagram</p>
                                                <p>telegram</p>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
