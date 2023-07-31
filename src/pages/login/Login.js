import axios from 'axios';
import { useState } from 'react'
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import { emailValidation } from '../../helper/validation';

export default function Login() {

    const [cookies, setCookie, removeCookie] = useCookies([]);
    console.log(cookies)

    const navigate = useNavigate();
    const { state } = useLocation();

    const [loading, setLoading] = useState(false);
    const [email, setDataValue] = useState({
        email: state || "",
    });
    const [invalidValue, setInvalidValue] = useState(false);

    const changeUserFieldHandler = (e) => {

        let value = e.target.value

        setDataValue({
            ...email,
            [e.target.name]: value,
        });

        if (value.match(emailValidation())) {
            setInvalidValue(false);
        } else {
            setInvalidValue(true);
        }
    };

    const signInHandler = (e) => {
        e.preventDefault();

        if (invalidValue || !email.email.trim().length) {
            setInvalidValue(true);
            return;
        }

        setLoading(true);
        axios.post("http://127.0.0.1:8000/api/login-register", email)
            .then(res => {
                setLoading(false);
                console.log(res);
                navigate('/verification', { state: { code: res.data.results, email: email.email, userId: res.data.user_id } });
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
                alert("Please try again !!!");
            })
    };

    return (
        <section id="main" className="clearfix user-page">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div className="user-account">
                            <h2>ورود | ثبت‌نام</h2>
                            <h4>سلام !</h4>
                            <div className="form-group">
                                <input
                                    value={email.email}
                                    onChange={(e) => changeUserFieldHandler(e)}
                                    name="email"
                                    type="text"
                                    className="form-control"
                                    placeholder="لطفا شماره موبایل یا ایمیل خود را وارد کنید"
                                />
                                {invalidValue && <span className="text-error">لطفا به درستی وارد کنید</span>}
                            </div>
                            {
                                loading ? <Loader /> :
                                    <button className="btn" disabled={loading} onClick={signInHandler}>
                                        ورود
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}