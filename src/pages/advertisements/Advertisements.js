import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Advertising from '../../components/Advertising'
import Loader from '../../components/Loader';
import SomthingSell from '../../components/SomthingSell'
import { getCategory } from '../../redux/category/categoryActions';

export default function Advertisements() {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();

    const { categories, loading } = useSelector(state => state.categoryState);
    const { orders: state } = useSelector(state => state.ordersState);
    const [orders, setOrder] = useState(null);

    useEffect(() => {
        fetchOrderCategory();
    }, [id]);

    useEffect(() => {
        if (!id) {
            setOrder(state);
        }
    }, [state])

    const fetchOrderCategory = async () => {
        if (id) {
            axios.get("http://127.0.0.1:8000/api/ordercategory/" + id)
                .then(res => setOrder(res.data.results.reverse()))
                .catch(err => setOrder([]))
        }
        else {
            setOrder(state);
        }
    };

    useEffect(() => {
        const fetchData = () => {
            if (!categories) {
                dispatch(getCategory());
            }
        }

        fetchData();

        if (categories && id) {
            const category = categories?.find(category => category.id == id);
            if (category) {
                setSelectedCategory(category)
            } else navigate("/error")
        } else setSelectedCategory(null)


    }, [categories, id]);

    return (
        <>
            <section id="main" className="clearfix category-page main-categories">
                <div className="container">
                    <div className="breadcrumb-section">

                        <ol className="breadcrumb">
                            <li><Link to="/">خانه</Link></li>
                            <li>کالاهای دیجیتال و گجت</li>
                        </ol>
                        <h2 className="title">گوشی موبایل</h2>
                    </div>
                    <div className="banner">


                        <div className="banner-form banner-form-full">
                            <form action="#">

                                <div className="dropdown category-dropdown">
                                    <a data-toggle="dropdown" href="#"><span className="change-text">انتخاب دسته‌بندی</span> <i
                                        className="fa fa-angle-down"></i></a>
                                    <ul className="dropdown-menu category-change">
                                        <li><a href="#">مد و زیبایی</a></li>
                                        <li><a href="#">ماشین و وسایل نقلیه</a></li>
                                        <li><a href="#">دستگاه‌های دیجیتال و گجت‌ها</a></li>
                                        <li><a href="#">املاک</a></li>
                                        <li><a href="#">ورزشی و بازی</a></li>
                                    </ul>
                                </div>


                                <div className="dropdown category-dropdown language-dropdown ">
                                    <a data-toggle="dropdown" href="#"><span className="change-text">ایران</span> <i
                                        className="fa fa-angle-down"></i></a>
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

                    <div className="category-info">
                        <div className="row">

                            <div className="col-lg-3 col-md-4">
                                <div className="category-accordion tr-accordion" id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="heading-1">
                                            <button data-toggle="collapse" data-target="#collapse-1" aria-expanded="true"
                                                aria-controls="collapse-1">همه دسته‌بندی‌ها</button>
                                        </div>

                                        <div id="collapse-1" className="collapse show" aria-labelledby="heading-1" data-parent="#accordion">
                                            <div className="card-body">
                                                <ul>

                                                    {
                                                        categories ?
                                                            <>
                                                                <li>
                                                                    <Link to="/advertisements">
                                                                        <i className="icofont icofont-laptop-alt"></i>
                                                                        <span className={`${id ? "" : "active"}`} onClick={() => setSelectedCategory(null)}>All</span>
                                                                        <span>({state?.length})</span>
                                                                    </Link>
                                                                </li>
                                                                {categories?.map(category =>
                                                                    <li
                                                                        key={category.id}
                                                                    // onClick={() => setSelectedCategory(category)}
                                                                    >
                                                                        <Link to={`/advertisements/${category.id}`}>
                                                                            <i className="icofont icofont-laptop-alt"></i>
                                                                            <span className={`${id == category.id ? "active" : ""}`}>{category.name}</span>
                                                                            <span>({state?.filter(order => order.category_id == category.id).length})</span>
                                                                        </Link>
                                                                    </li>
                                                                )}
                                                            </>
                                                            : <Loader />
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header" id="heading-2">
                                            <button className="collapsed" data-toggle="collapse" data-target="#collapse-2" aria-expanded="false"
                                                aria-controls="collapse-2">وضعیت</button>
                                        </div>
                                        <div id="collapse-2" className="collapse" aria-labelledby="heading-2" data-parent="#accordion">
                                            <div className="card-body">
                                                <label for="new"><input type="checkbox" name="new" id="new" />جدید</label>
                                                <label for="used"><input type="checkbox" name="used" id="used" />دسته دوم</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header" id="heading-3">
                                            <button className="collapsed" data-toggle="collapse" data-target="#collapse-3" aria-expanded="false"
                                                aria-controls="collapse-3">قیمت</button>
                                        </div>
                                        <div id="collapse-3" className="collapse" aria-labelledby="heading-3" data-parent="#accordion">
                                            <div className="card-body">
                                                <div className="price-range">

                                                    <div className="price">
                                                        <span>100  تومان - <strong>700
                                                            تومان</strong></span>
                                                        <div className="dropdown category-dropdown pull-right">
                                                            <a data-toggle="dropdown" href="#"><span className="change-text">تومان</span><i
                                                                className="fa fa-caret-square-o-down"></i></a>
                                                            <ul className="dropdown-menu category-change">
                                                                <li><a href="#"> 10تومان </a></li>
                                                                <li><a href="#"> 15تومان </a></li>
                                                                <li><a href="#"> 20تومان </a></li>
                                                                <li><a href="#"> 25تومان </a></li>
                                                                <li><a href="#"> 35تومان </a></li>
                                                            </ul>
                                                        </div>
                                                        <input type="text" value="" data-slider-min="0" data-slider-max="700" data-slider-step="5"
                                                            data-slider-value="[250,450]" id="price" /><br />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header" id="heading-4">
                                            <button className="collapsed" data-toggle="collapse" data-target="#collapse-4" aria-expanded="false"
                                                aria-controls="collapse-4">پست شده توسط</button>
                                        </div>
                                        <div id="collapse-4" className="collapse" aria-labelledby="heading-4" data-parent="#accordion">
                                            <div className="card-body">
                                                <label for="شخصی"><input type="checkbox" name="شخصی" id="شخصی" /> شخصی</label>
                                                <label for="dealer"><input type="checkbox" name="dealer" id="dealer" />فروشنده</label>
                                                <label for="reseller"><input type="checkbox" name="reseller" id="reseller" />تامین‌کننده</label>
                                                <label for="manufacturer"><input type="checkbox" name="manufacturer"
                                                    id="manufacturer" />کارخانه</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header" id="heading-5">
                                            <button className="collapsed" data-toggle="collapse" data-target="#collapse-5" aria-expanded="false"
                                                aria-controls="collapse-5">برند</button>
                                        </div>
                                        <div id="collapse-5" className="collapse" aria-labelledby="heading-5" data-parent="#accordion">
                                            <div className="card-body">
                                                <input type="text" placeholder="جستجو برند " className="form-control" />
                                                <label for="apple"><input type="checkbox" name="apple" id="apple" /> اپل</label>
                                                <label for="htc"><input type="checkbox" name="htc" id="htc" /> اچ تی سی</label>
                                                <label for="micromax"><input type="checkbox" name="micromax" id="micromax" /> سامسونگ</label>
                                                <label for="nokia"><input type="checkbox" name="nokia" id="nokia" />نوکیا</label>
                                                <label for="others"><input type="checkbox" name="others" id="others" /> دیگر</label>
                                                <label for="samsung"><input type="checkbox" name="samsung" id="samsung" /> شیائومی</label>
                                                <span className="border"></span>
                                                <label for="acer"><input type="checkbox" name="acer" id="acer" /> سونی</label>
                                                <label for="bird"><input type="checkbox" name="bird" id="bird" /> برند</label>
                                                <label for="blackberry"><input type="checkbox" name="blackberry" id="blackberry" /> برند</label>
                                                <label for="celkon"><input type="checkbox" name="celkon" id="celkon" /> برند</label>
                                                <label for="ericsson"><input type="checkbox" name="ericsson" id="ericsson" /> برند</label>
                                                <label for="fly"><input type="checkbox" name="fly" id="fly" /> برند</label>
                                                <label for="g-fone"><input type="checkbox" name="g-fone" id="g-fone" /> برند</label>
                                                <label for="gionee"><input type="checkbox" name="gionee" id="gionee" /> برند</label>
                                                <label for="haier"><input type="checkbox" name="haier" id="haier" /> برند</label>
                                                <label for="hp"><input type="checkbox" name="hp" id="hp" /> برند</label>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-8 col-lg-7">
                                <div className="section recommended-ads">

                                    <div className="featured-top">
                                        <h4>
                                            {selectedCategory ?
                                                "آگهی های مرتبط با " + selectedCategory.name
                                                : "همه آگهی ها"
                                            }
                                        </h4>
                                        <div className="dropdown pull-right">


                                            <div className="dropdown category-dropdown">
                                                <h5>چینش:</h5>
                                                <a data-toggle="dropdown" href="#"><span className="change-text">محبوبیت</span><i
                                                    className="fa fa-caret-square-o-down"></i></a>
                                                <ul className="dropdown-menu category-change">
                                                    <li><a href="#">جدیدترین</a></li>
                                                    <li><a href="#">قدیمیترین</a></li>
                                                    <li><a href="#">همه</a></li>
                                                    <li><a href="#">پرفروش‌ترین</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        orders ?
                                            orders?.map(order => <Advertising order={order} />)
                                            : <Loader />
                                    }

                                    <div className="ad-section text-center">
                                        <a href="#"><img src="/images/ads/3.jpg" alt="Image" className="img-fluid" /></a>
                                    </div>

                                    <div className="text-center">
                                        <ul className="pagination ">
                                            <li><a href="#"><i className="fa fa-chevron-right"></i></a></li>
                                            <li><a href="#">1</a></li>
                                            <li className="active"><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#">4</a></li>
                                            <li><a href="#">5</a></li>
                                            <li><a>...</a></li>
                                            <li><a href="#">10</a></li>
                                            <li><a href="#">20</a></li>
                                            <li><a href="#">30</a></li>
                                            <li><a href="#"><i className="fa fa-chevron-left"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-2 d-none d-lg-block">
                                <div className="advertisement text-center">
                                    <a href="#"><img src="/images/ads/2.jpg" alt="" className="img-fluid" /></a>
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
