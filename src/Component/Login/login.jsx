import React from 'react'
import './login.css'
export default function login() {
        return (
                <div className='login'>
                        <div className="right">

                                <h1>نوبت من!</h1>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                                        در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                                        و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                        </div>
                        <div className="left">
                                <h2>وارد نوبت من شوید</h2>
                                <div className="inputs">
                                        <input type="text" placeholder='نام کاربری' />
                                        <input className='pass' type="password" placeholder='رمزعبور' />
                                        <a href='#!' className='forget'>فراموش کرده اید؟</a>
                                        <button>ورود</button>
                                </div>
                                <hr />
                                <div className="google">
                                        <a href='#!'> <span>نوبت من!</span>شماراندارد؟ </a>
                                        <button>GOOGLE</button>
                                </div>
                        </div>
                </div>
        )
}
