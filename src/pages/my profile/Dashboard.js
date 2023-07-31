import axios from 'axios';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader';

export default function Dashboard() {

    const [cookies, setCookie, removeCookie] = useCookies(["userID"]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [myProfileData, setMyProfileData] = useState(null)

    useEffect(() => {

        const fetchData = () => {
            setLoading(true);
            axios.get(`http://127.0.0.1:8000/api/my-profile/${cookies.userID}`)
                .then(res => { setMyProfileData({ ...res.data }); setLoading(false); console.log(res.data) })
                .catch(err => console.log(err))
        }

        if (!cookies.userID) {
            navigate("/login")
        } else {
            fetchData();
        }

    }, [])

    return (
        <section id="main" className="clearfix myads-page">
            <div className="container">

                <div className="breadcrumb-section">

                    <ol className="breadcrumb">
                        <li><Link to="/">خانه</Link></li>
                        <li>افزودن آگهی</li>
                    </ol>
                    <h2 className="title">پروفایل من</h2>
                </div>

                <div className="ad-profile section">
                    {
                        loading ? <Loader />
                            :
                            <div className="user-profile">
                                <div className="user-images">
                                    <img
                                        src={myProfileData?.profile_photo_path ? myProfileData?.profile_photo_path : "/images/user.jpg"}
                                        alt="User Images"
                                        className="img-fluid user-image"
                                    />
                                </div>
                                <div className="user">
                                    <h2>سلام, <a href="#">{myProfileData?.first_name || ""}</a></h2>
                                    {/* <h5>آخرین ورود شما سه‌شنبه ، 21 اردیبهشت 1399</h5> */}
                                </div>

                                <div className="favorites-user">
                                    <div className="my-ads">
                                        <Link to="/dashboard/my-ads">{myProfileData?.count_my_orders || 0}<small>آگهی‌های من</small></Link>
                                    </div>
                                    <div className="favorites">
                                        <a href="#">{myProfileData?.count_my_popular_orders || 0}<small>علاقه‌مندیها</small></a>
                                    </div>
                                </div>
                            </div>
                    }

                    <ul className="user-menu">

                        <li>
                            <NavLink
                                end
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                پروفایل
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/my-ads"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                آگهی‌های من
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/favorite-ads"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                آگهی‌های محبوب
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/archived-ads"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                آگهی‌های آرشیو شده
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/pending-ads"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                در انتظار تایید
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/delete-account"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                بستن اکانت
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="profile">
                    <div className="row">
                        <Outlet context={[myProfileData, setMyProfileData]} />

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

                                        <div className="cta-icon icon-trading">
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
    )
}
