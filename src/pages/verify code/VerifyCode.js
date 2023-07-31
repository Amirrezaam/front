import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function VerifyCode() {

  const [cookies, setCookie, removeCookie] = useCookies([]);

  const [value, setValue] = useState("");
  const [invalidValue, setInvalidValue] = useState(false);

  const {
    state: { code, email, userId },
  } = useLocation();

  const navigate = useNavigate();

  const clickHandler = () => {
    if (code === +value) {
      navigate("/");
      console.log(userId)
      setCookie("userID", userId)
      setInvalidValue(false);
    } else {
      setInvalidValue(true);
    }
  };

  // useEffect(() => {
  //   const checkverifycode = () => {
  //     axios.post(`http://127.0.0.1:8000/api/login-confirm/${value}`)
  //       .then((res) => {
  //         console.log(res);
  //         navigate("/");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         navigate("/verification");
  //       });
  //   };

  //   checkverifycode()
  // }, [])

  // const checkverifycode = async () => {
  //   try {
  //     const result = await axios
  //       .get("http://127.0.0.1:8000/api/login-confirm/+value", value)
  //       .then((res) => {
  //         console.log(res);
  //         navigate("/");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         navigate("/verification");
  //       });

  //     // console.log(result.data.users);
  //     // setValue(result.data.users);
  //   } catch (err) {
  //     console.log("Something Wrong");
  //   }
  // };

  return (
    <section id="main" className="clearfix user-page">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <div className="user-account">
              <h2>اعتبار سنجی</h2>
              <h4 className="text-sm">کد برای {email} ارسال شد</h4>
              <div className="form-group">
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="لطفا کد ارسال شده را وارد نمایید"
                />
                {invalidValue && (
                  <span className="text-error">لطفا به درستی وارد کنید</span>
                )}
              </div>
              <p className="flex-center">
                <NavLink to="/login" className="text-gray ml-3" state={email}>
                  اصلاح ایمیل
                </NavLink>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </p>
              <button className="btn" onClick={clickHandler}>
                ورود
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
