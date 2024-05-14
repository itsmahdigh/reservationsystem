import React from 'react'
import './PopularComment.css'
import Img1 from '../../assets/barbaeimg.jpg'
export default function PopularComment(props) {
        return (
                <div className='comments' dir='rtl'>
                        
                        <div className="firstsection">
                                <div className="avatar">
                                        <img src={Img1} alt="" />
                                </div>
                                <div className="info">
                                        <h3>آرایشگاه احسان</h3>
                                        <div>
                                                1بازدید
                                        </div>

                                        <div className="star">
                                                <div>
                                                        4star
                                                </div>
                                                <div>
                                                        دو روز قبل
                                                </div>
                                        </div>
                                </div>

                        </div>
                        <div className="textsection">
                                <p>لورم ایپسوم متن ساختگی با تولید
                                        سادگی نامفهوم از صنعت چاپ و با
                                        استفاده از طراحان گرافیک است.
                                        چاپگرها و متون بلکه روزنامه و مجله
                                        در ستون و سطرآنچنان که لازم است
                                        و برای شرایط فعلی تکنولوژی مورد نیاز
                                        و کاربردهای متنوع با هدف بهبود
                                        ابزارهای کاربردی می باشد</p>
                        </div>
                </div>
        )
}
