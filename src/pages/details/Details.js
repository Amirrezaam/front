import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Advertising from '../../components/Advertising'
import Loader from '../../components/Loader';
import SomthingSell from '../../components/SomthingSell'

export default function Details() {

    const [order, setOrder] = useState(null);
    const [orderImages, setOrderImages] = useState([]);
    const { id } = useParams();

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }

    useEffect(() => {
        const fetchOrder = () => {
            axios.get(`http://127.0.0.1:8000/api/order-datails/${id}`)
                .then(res => { setOrder(res.data.results); setOrderImages([res.data.results.image_one, res.data.results.image_two, res.data.results.image_three]) })
                .catch(err => console.log(err))
        }

        fetchOrder()
    }, [id])

    return (
        <>
            <section id="main" className="clearfix details-page">
                <div className="container">
                    <div className="breadcrumb-section">

                        <ol className="breadcrumb">
                            <li><Link to="/">خانه</Link></li>
                            <li><a href="#">کالاهای دیجیتال و گجت</a></li>
                            <li>تلفن همراه</li>
                        </ol>
                        <h2 className="title">گوشی موبایل</h2>
                    </div>

                    <div className="section banner">

                        <div className="banner-form banner-form-full">
                            <form action="#">

                                <div className="dropdown category-dropdown">
                                    <a data-toggle="dropdown" href="#"><span className="change-text">انتخاب دسته‌بندی</span> <i className="fa fa-angle-down"></i></a>
                                    <ul className="dropdown-menu category-change">
                                        <li><a href="#">مد و زیبایی</a></li>
                                        <li><a href="#">ماشین و وسایل نقلیه</a></li>
                                        <li><a href="#">دستگاه‌های دیجیتال  و گجت‌ها</a></li>
                                        <li><a href="#">املاک</a></li>
                                        <li><a href="#">ورزشی و بازی</a></li>
                                    </ul>
                                </div>


                                <div className="dropdown category-dropdown language-dropdown ">
                                    <a data-toggle="dropdown" href="#"><span className="change-text">ایران</span> <i className="fa fa-angle-down"></i></a>
                                    <ul className="dropdown-menu  language-change">
                                        <li><a href="#">ایران</a></li>
                                        <li><a href="#">عراق</a></li>
                                        <li><a href="#">چین</a></li>
                                        <li><a href="#">روسیه</a></li>
                                    </ul>
                                </div>

                                <input type="text" className="form-control" placeholder="عبارت مورد نظر خود را تایپ کنید" />
                                <button type="submit" className="form-control" value="Search">جستجو</button>
                            </form>
                        </div>
                    </div>

                    <div className="section slider">
                        {
                            order ?
                                <div className="row">

                                    <div className="col-lg-7">
                                        <div id="product-carousel" className="carousel slide" data-ride="carousel">

                                            <ol className="carousel-indicators">
                                                {
                                                    orderImages.filter(item => !item).length === 3 ? null :
                                                        orderImages.map((item, i) => {
                                                            if (item) {
                                                                return <li data-target="#product-carousel" data-slide-to={i} className={`${i === 0 && "active"}`}>
                                                                    <img src={item} alt="Carousel Thumb" className="img-fluid" />
                                                                </li>
                                                            }
                                                        }
                                                        )
                                                }
                                            </ol>

                                            <div className="carousel-inner" role="listbox">

                                                {
                                                    orderImages.filter(item => !item).length === 3 ? null :
                                                        orderImages.map((item, i) => {
                                                            if (item) {
                                                                return <div className={`item carousel-item ${i === 0 && "active"}`}>
                                                                    <div className="carousel-image">
                                                                        <img src={item} alt="Featured Image" className="img-fluid" />
                                                                    </div>
                                                                </div>
                                                            }
                                                        }
                                                        )
                                                }

                                            </div>

                                            {
                                                (order.image_one && order.image_two) ||
                                                    (order.image_one && order.image_three) ||
                                                    (order.image_two && order.image_three) ?
                                                    <>
                                                        <a className="left carousel-control" href="#product-carousel" role="button" data-slide="prev">
                                                            <i className="fa fa-chevron-left"></i>
                                                        </a>
                                                        <a className="right carousel-control" href="#product-carousel" role="button" data-slide="next">
                                                            <i className="fa fa-chevron-right"></i>
                                                        </a>
                                                    </>
                                                    : null
                                            }
                                        </div>
                                    </div>


                                    <div className="col-lg-5">
                                        <div className="slider-text">
                                            {/* <h2>88000تومان </h2> */}
                                            <h3 className="title">{order.title}</h3>
                                            {/* <p><span>آگهی‌دهنده: <a href="#">مینا مانا</a></span> */}
                                            {/* <span>شناسه آگهی:<a href="#" className="time"> 251716763</a></span></p> */}
                                            <span className="icon"><i className="fa fa-clock-o"></i><a href="#">{new Date(order.created_at).toLocaleDateString("fa", options)}</a></span>
                                            <span className="icon"><i className="fa fa-map-marker"></i><a href="#">ایران- تهران</a></span>
                                            <span className="icon"><i className="fa fa-suitcase online"></i><a href="#">فروشنده<strong>(آنلاین)</strong></a></span>


                                            <div className="short-info">
                                                <h4>اطلاعات کوتاه</h4>
                                                <p><strong>وضعیت: </strong><a href="#">جدید</a> </p>
                                                <p><strong>برند: </strong><a href="#">اپل</a> </p>
                                                <p><strong>ویژگی‌ها: </strong><a href="#">دوربین,</a> <a href="#">دو درگاه,</a> <a href="#">GSM,</a> <a href="#">لمسی</a> </p>
                                                <p><strong>مدل: </strong><a href="#">iPhone 6</a></p>
                                            </div>


                                            <div className="contact-with">
                                                <h4>اطلاعات تماس </h4>
                                                <span className="btn btn-red show-number">
                                                    <i className="fa fa-phone-square"></i>
                                                    <span className="hide-text">برای مشاهده شماره تماس کلیک کنید</span>
                                                    <span className="hide-number">012-1234567890 </span>
                                                </span>
                                                <a href="#" className="btn"><i className="fa fa-envelope-square"></i>تماس با ایمیل</a>
                                            </div>


                                            <div className="social-links">
                                                <h4>اشتراک آگهی</h4>
                                                <ul className="list-inline">
                                                    <li><a href="#"><i className="fa fa-facebook-square"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter-square"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-google-plus-square"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-pinterest-square"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-tumblr-square"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : <Loader />
                        }
                    </div>
                    <div className="description-info">
                        <div className="row">

                            <div className="col-md-8">
                                <div className="description">
                                    <h4>توضیحات</h4>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد </p><br />
                                    <p>و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد</p>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="short-info">
                                    <h4>اطلاعات کوتاه</h4>

                                    <ul>
                                        <li><i className="fa fa-shopping-cart"></i><a href="#">تحویل:رودررو</a></li>
                                        <li><i className="fa fa-user-plus"></i><a href="#">آگهی های بیشتر از <span>مینا مانا</span></a></li>
                                        <li><i className="fa fa-print"></i><a href="#">پرینت آگهی</a></li>
                                        <li><i className="fa fa-reply"></i><a href="#">ارسال به دوستان</a></li>
                                        <li><i className="fa fa-heart-o"></i><a href="#">ذخیره به عنوان موردپسند</a></li>
                                        <li><i className="fa fa-exclamation-triangle"></i><a href="#">گزارش آگهی</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="recommended-info">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="section recommended-ads">
                                    <div className="featured-top">
                                        <h4>توصیه شده برای شما</h4>
                                    </div>

                                    <Advertising />
                                </div>
                            </div>

                            <div className="col-md-4 text-center">
                                <div className="recommended-cta">
                                    <div className="cta">

                                        <div className="single-cta">

                                            <div className="cta-icon icon-secure">
                                                <img src="/images/icon/13.png" alt="Icon" className="img-fluid" />
                                            </div>

                                            <h4>خرید و فروش امن</h4>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                        </div>


                                        <div className="single-cta">

                                            <div className="cta-icon icon-support">
                                                <img src="/images/icon/14.png" alt="Icon" className="img-fluid" />
                                            </div>

                                            <h4>پشتیبانی 24/7</h4>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                        </div>



                                        <div className="single-cta">

                                            <div className="cta-icon icon-trading" >
                                                <img src="/images/icon/15.png" alt="Icon" className="img-fluid" />
                                            </div>

                                            <h4>خرید و فروش آسان</h4>
                                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                        </div>


                                        <div className="single-cta">
                                            <h5>کمک نیاز دارید؟</h5>
                                            <p><span>با ما تماس بگیرید</span><a href="#"> 08048100000</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SomthingSell />
        </>
    )
}
