import Ads from "../../../components/Ads";
import Categories from "../categories/Categorie";
import NewestAds from "../newest ads/NewestAds";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function Main() {

  const location = useLocation();
  
  // useEffect(() => {

  //   axios.get(`http://127.0.0.1:8000/api/search?keyword=سی`)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))

  // }, [])

  return (
    <section id="main" className="clearfix home-default">
      <div className="container">
        <div className="banner-section text-center">
          <h1 className="title"> بزرگترین خرید و فروش بدون واسطه‌ی آنلاین</h1>
          <h3>
            {" "}
            جستجو در بیش از 150،000 آگهی طبقه بندی شده و ارسال آگهی های نامحدود
            رایگان!
          </h3>
          <div className="banner-form">
            <form action="#">
              <div className="dropdown category-dropdown">
                <a data-toggle="dropdown" href="#">
                  <span className="change-text">انتخاب دسته‌بندی</span>{" "}
                  <i className="fa fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu category-change">
                  <li>
                    <a href="#">مد و زیبایی</a>
                  </li>
                  <li>
                    <a href="#">ماشین و وسایل نقلیه</a>
                  </li>
                  <li>
                    <a href="#">دستگاه‌های دیجیتال و گجت‌ها</a>
                  </li>
                  <li>
                    <a href="#">املاک</a>
                  </li>
                  <li>
                    <a href="#">ورزشی و بازی</a>
                  </li>
                </ul>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="عبارت مورد نظر خود را تایپ کنید"
              />
              <button type="submit" className="form-control" value="Search">
                جستجو
              </button>
            </form>
          </div>
          <ul className="banner-socail list-inline">
            <li>
              <a href="#" title="Facebook">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Google Plus">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Youtube">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <div className="row">
            <Ads />
            <div className="col-md-8">
              <div className="section category-ad text-center">
                <ul className="category-list">
                  <Categories />
                </ul>
              </div>

              <div className="section featureds">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="section-title featured-top">
                      <h4>جدیدترین آگهی‌ها</h4>
                      <span>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>

                      </span>
                    </div>
                  </div>
                </div>
                <div className="featured-slider">
                  <div id="featured-slider">
                    <NewestAds />
                  </div>
                </div>
              </div>
              <div className="ad-section text-center">
                <a href="#">
                  <img
                    src="images/ads/3.jpg"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="section trending-ads">
                <div className="section-title tab-manu">
                  <h4>{location.pathname === "/" ? "محبوبترین آگهی‌ها" : "پربازدیدترین آگهی‌ها"}</h4>
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation">
                      <NavLink to="/" data-toggle="tab">
                        محبوبترین آگهی‌ها
                      </NavLink>
                    </li>
                    <li role="presentation">
                      <NavLink to="/most-visited" data-toggle="tab">
                        پربازدیدترین آگهی‌ها
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="tab-content">
                  <Outlet />
                </div>
                <div className="section cta text-center">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="single-cta">
                        <div className="cta-icon icon-secure">
                          <img
                            src="images/icon/13.png"
                            alt="Icon"
                            className="img-fluid"
                          />
                        </div>

                        <h4>خرید و فروش امن</h4>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ، و با استفاده از طراحان گرافیک است
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="single-cta">
                        <div className="cta-icon icon-support">
                          <img
                            src="images/icon/14.png"
                            alt="Icon"
                            className="img-fluid"
                          />
                        </div>

                        <h4>پشتیبانی 24/7</h4>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ، و با استفاده از طراحان گرافیک است
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="single-cta">
                        <div className="cta-icon icon-trading">
                          <img
                            src="images/icon/15.png"
                            alt="Icon"
                            className="img-fluid"
                          />
                        </div>

                        <h4>خرید و فروش آسان</h4>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ، و با استفاده از طراحان گرافیک است
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Ads />
          </div>
        </div>
      </div>
    </section>
  );
}
