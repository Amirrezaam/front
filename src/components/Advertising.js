import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function Advertising({ order }) {

  const [cookies, setCookie, removeCookie] = useCookies(["userID"]);

  if (!order) {
    return <>NULL</>
  }

  return (
    <div className="ad-item row">

      <div key={order.id} className="item-image-box col-lg-4">
        <div className="item-image">
          <Link to={`/details/${order.id}`}>
            <img
              src={order?.image_one}
              alt="Image"
              className="img-fluid"
            />
          </Link>
        </div>
      </div>

      <div className="item-info col-lg-8">
        <div className="ad-info">
          <h3 className="item-price"> {order.price} تومان </h3>
          <h4 className="item-title">
            <Link to={`/details/${order.id}`}>{order.title}</Link>
          </h4>
          <div className="item-cat">
            <span>
              {order.category_id}
            </span>{" "}
            /
          </div>
        </div>
        <div className="ad-meta">
          <div className="meta-content">
            <span className="dated">
              <a>7 مهر 1399 - 10:10 بعدازظهر </a>
            </span>
            <a className="tag">
              <i className="fa fa-tags"></i>دسته دوم
            </a>
          </div>
          {
            cookies.userID == order.user_id && <div className="user-option pull-right">
              <a
                className="delete-btn"
              >
                حذف
              </a>
              <Link
                to="/edit-advertising"
                state={order}
                className="edit-btn"
              >
                ویرایش
              </Link>
              <Link
                to="/add-advertising"
                state={order}
                className="edit-btn"
              >
                ارتقا
              </Link>
            </div>
          }
        </div>
      </div>
    </div>

  );
}
