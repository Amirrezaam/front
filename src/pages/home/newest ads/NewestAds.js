import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'rsuite';
import { getCategory } from '../../../redux/category/categoryActions';

export default function NewestAds() {

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }

    const [orders, setOrders] = useState(null)
    const { orders: state } = useSelector(state => state.ordersState)
    const { categories } = useSelector(state => state.categoryState)
    const dispatch = useDispatch();

    useEffect(() => {
        setOrders(state?.slice(0, 6));
    }, [state])

    useEffect(() => {
        const fetchData = () => {
            if (!categories) {
                dispatch(getCategory());
            }
        }
        // console.log(categories?.find(cat => cat.id === 1))
        fetchData();

    }, [categories]);

    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                }
            }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {
                orders ? orders.map(order => <SwiperSlide>
                    <div className="featured">
                        <div className="featured-image">
                            <Link to={`/details/${order.id}`}><img src={order.image_one} alt="" className="img-fluid" /></Link>
                            <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="تایید شده"><i className="fa fa-check-square-o"></i></a>
                        </div>
                        <div className="ad-info">
                            <h3 className="item-price">  {order.max_price} تومان  </h3>
                            <h4 className="item-title"><a href="#">{order.title}</a></h4>
                            <div className="item-cat">
                                <span><Link to={`/advertisements/${order.category_id}`}>{categories?.find(cat => cat.id === order.category_id).name}</Link></span>
                            </div>
                        </div>
                        <div className="ad-meta">
                            <div className="meta-content">
                                <span className="dated"><a href="#">{new Date(order.created_at).toLocaleDateString("fa", options)}</a></span>
                            </div>
                            {/* <div className="user-option pull-right">
                                <a href="#" data-toggle="tooltip" data-placement="top" title="ایران- تهران"><i className="fa fa-map-marker"></i> </a>
                                <a href="#" data-toggle="tooltip" data-placement="top" title="فروشنده"><i className="fa fa-suitcase"></i> </a>
                            </div> */}
                        </div>
                    </div>
                </SwiperSlide>) : <Loader />
            }

        </Swiper>
    );
}
