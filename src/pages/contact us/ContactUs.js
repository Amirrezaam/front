import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactUs() {
    return (
        <section id="main" className="clearfix contact-us">
            <div className="container">


                <ol className="breadcrumb">
                    <li><Link to="/">خانه</Link></li>
                    <li>ارتباط</li>
                </ol>
                <h2 className="title">ارتباط با ما</h2>


                {/* <div id="gmap"></div> */}

                <div className="corporate-info">
                    <div className="row">

                        <div className="col-md-4">
                            <div className="contact-info">

                                <h2>درباره شرکت ما</h2>
                                <address>
                                    <p><strong>آدرس: </strong>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                                    <p><strong>شماره تماس:</strong> <a href="#">(123) 456-7890</a></p>
                                    <p><strong>ایمیل: </strong><a href="#"><span className="__cf_email__" data-cfemail="10797e767f50737f7d60717e693e737f7d">[ایمیل&#160;محافظت شده]</span></a></p>
                                </address>

                                <ul className="social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-md-8">
                            <div className="feedback">
                                <h2>نظرات خود را با ما درمیان بگذارید</h2>
                                <form id="contact-form" className="contact-form" name="contact-form" method="post" action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" required="required" placeholder="نام"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" required="required" placeholder="ایمیل"/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" required="required" placeholder="موضوع"/>
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <textarea name="message" id="message" required="required" className="form-control" rows="7" placeholder="پیام"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn">ارسال پیام</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
