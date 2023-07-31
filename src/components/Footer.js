import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer id="footer" className="clearfix">
            <section className="footer-top clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget">
                                <h3>لینک‌های مرتبط </h3>
                                <ul>
                                    <li>
                                        <Link to="/about-us">
                                            درباره ما
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us">
                                            ارتباط با ما
                                        </Link>
                                    </li>
                                    <li>

                                        <Link to="/support"
                                        >
                                            پشتیبانی
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget">
                                <h3>چگونه محصولاتمان رو خوب بفروشیم</h3>
                                <ul>
                                    <li><a>چگونه محصولاتمان رو خوب بفروشیم</a></li>
                                    <li><a>خرید عضویت ویژه</a></li>
                                    <li><a>بنر تبلیغاتی</a></li>
                                    <li><a href="#">پروموت تبلیغات شما</a></li>
                                    <li><a href="#">تحویل رایگان</a></li>
                                    <li><a href="#">پرسش و پاسخ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget social-widget">
                                <h3>ما را دنبال کنید</h3>
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook-official"></i>فیسبوک</a></li>
                                    <li><a href="#"><i className="fa fa-twitter-square"></i>توییتر</a></li>
                                    <li><a href="#"><i className="fa fa-telegram"></i>تلگرام</a></li>
                                    <li><a href="#"><i className="fa fa-whatsapp"></i>واتس‌اپ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget news-letter">
                                <h3>اشتراک خبرنامه</h3>
                                <p>کالا | بزرگترین خرید و فروش بدون واسطه‌ی آنلاین</p>
                                <form action="#">
                                    <input type="email" className="form-control" placeholder="ایمیل شما" />
                                    <button type="submit" className="btn btn-primary">ثبت‌نام</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-bottom clearfix text-center">
                <div className="container">
                    <p>&copy; 1399.  تمامی حقوق محفوظ است  ارایه از <a href="https://www.rtl-theme.com/user-profile/afaridteam/">AfaridTeam</a></p>
                </div>
            </div>
        </footer>
    )
}
