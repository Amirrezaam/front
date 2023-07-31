import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getOrders } from "../../redux/orders/ordersActions";

export default function AddAdvertising() {

  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state)

  const [totalPrice, setTotalPrice] = useState(0);
  const [options, setOptions] = useState({
    nardeban: { active: Number(state.nardeban), price: 20000 },
    urgent: { active: Number(state.urgent), price: 40000 }
  })

  const dispatch = useDispatch();

  const optionChangeHandler = e => {
    setOptions({ ...options, [e.target.name]: { ...options[e.target.name], active: !options[e.target.name].active } })
  }

  const onSubmitChange = (e) => {
    e.preventDefault();

    const obj = {
      ...state,
      nardeban: options.nardeban.active,
      urgent: options.urgent.active
    }

    if (totalPrice) {
      console.log("userID => ", obj.user_id, "Total Price => ", totalPrice)
    }

    axios.post("http://127.0.0.1:8000/api/addorder", obj)
      .then(res => dispatch(getOrders()))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (!state) {
      navigate("/add-advertising-details")
    }
  }, []);

  useEffect(() => {
    setTotalPrice(Object.keys(options).filter(key => options[key].active)?.reduce((acc, cur) => acc + options[cur].price, 0))
  }, [options])

  return (
    <section id="main" className="clearfix ad-details-page">
      <div className="container">
        <div className="breadcrumb-section">
          <ol className="breadcrumb">
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li>افزودن آگهی</li>
          </ol>
          <h2 className="title">افزودن سفارش </h2>
        </div>
        <div className="adpost-details">
          <div className="row">
            <div className="col-lg-8">
              <form action="#">
                <fieldset>
                  <div className="section postdetails">
                    <h4>
                      محصول و خدمت خود را بفروشید{" "}
                      {/* <span className="pull-right">* فیلدهای اجباری</span> */}
                    </h4>

                    <div className="row form-group select-option">
                      <div className="col-12">
                        <div className="select-nardeban">
                          <div style={{ pointerEvents: Number(state.nardeban) ? "none" : "all" }}>
                            <label htmlFor="select-option-1" className="label-option">
                              نردبان
                            </label>
                            <input
                              type="checkbox"
                              className="form-control"
                              id="select-option-1"
                              name="nardeban"
                              checked={options.nardeban.active}
                              onChange={(e) => optionChangeHandler(e)}
                            />
                          </div>
                          <span>{options.nardeban.price}</span>
                        </div>
                        <h5>توضیحات :</h5>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                      </div>
                      <div className="col-12">
                        <div className="select-nardeban">
                          <div style={{ pointerEvents: Number(state.urgent) ? "none" : "all" }}>
                            <label htmlFor="select-option-2" className="label-option">
                              فوری
                            </label>
                            <input
                              type="checkbox"
                              className="form-control"
                              id="select-option-2"
                              name="urgent"
                              checked={options.urgent.active}
                              onChange={(e) => optionChangeHandler(e)}
                            />
                          </div>
                          <span>{options.urgent.price}</span>
                        </div>
                        <h5>توضیحات :</h5>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                      </div>
                    </div>
                  </div>
                  <div className="checkbox section agreement">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={(e) => onSubmitChange(e)}
                    >
                      افزودن آگهی شما
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="section quick-rules">
                <p>مبلغ قابل پرداخت</p>
                <span>
                  {
                    totalPrice
                  }
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
