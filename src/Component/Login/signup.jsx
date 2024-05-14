import React from 'react'
import './signup.css'
export default function signup() {
  return (
          <div><div className='login'>
                  <div className="right">

                          <h1>نوبت من!</h1>
                          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                  از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                                  در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                                  و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                  </div>

                  
                  <div className="left">
                          <h2><span>نوبت من!</span> افتخار میزبانی شمارا دارد</h2>
                          <div className="inputs">
                                <div className="dividedinputs">
                                          <input type="text" placeholder='نام خانوادگی ' />
                                          <input type="text" placeholder='نام ' />
                                  </div>
                                  <div className='dividedinputs'>
                                          <input type="text" placeholder='سن' />
                                          <input type="text" placeholder='کد ملی' />
                                  </div>
                                
                                  <input type="text" placeholder='نام کاربری' />
                                  <input className='pass' type="password" placeholder='رمزعبور' />
                                  <a href='#!' className='forget'>فراموش کرده اید؟</a>
                                  <button>ثبت نام</button>
                          </div>
                          <hr />
                          <div className="google">
                                  
                                  <button>GOOGLE</button>
                          </div>
                  </div>
          </div></div>
  )
}
