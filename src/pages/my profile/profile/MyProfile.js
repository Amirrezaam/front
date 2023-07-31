import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Loader from '../../../components/Loader';
import { useOutletContext } from "react-router-dom";

export default function MyProfile() {

    const [cookies, setCookie, removeCookie] = useCookies(["userID"]);
    const [myProfileData, setMyProfileData] = useOutletContext();
    console.log(myProfileData)
    const [loading, setLoading] = useState(false);

    const onChangeHandler = (e) => {
        setMyProfileData({ ...myProfileData, [e.target.name]: e.target.value });
    }

    function readURL(event) {
        let input = event.target;

        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                // ref.current.src = e.target.result;
                setMyProfileData({ ...myProfileData, [event.target.name]: e.target.result });
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    const updateProfile = () => {
        console.log(myProfileData)
        setLoading(true);
        axios.post(`http://127.0.0.1:8000/api/update-profile/${cookies.userID}`, myProfileData)
            .then(res => { setLoading(false); console.log(res) })
            .catch(err => console.log(err))
    }

    return (
        <div className="col-md-8">
            <div className="user-pro-section">
                {
                    !myProfileData ? <Loader />
                        :
                        <div className="profile-details section">
                            <h2>جزییات پروفایل</h2>

                            <div className="form-group">
                                <label>نام</label>
                                <input
                                    onChange={e => onChangeHandler(e)}
                                    value={myProfileData?.first_name || ""}
                                    name="first_name"
                                    type="text"
                                    className="form-control"
                                    placeholder="نام"
                                />
                            </div>

                            <div className="form-group">
                                <label>نام خانوادگی</label>
                                <input
                                    onChange={e => onChangeHandler(e)}
                                    value={myProfileData?.last_name || ""}
                                    name="last_name"
                                    type="text"
                                    className="form-control"
                                    placeholder="نام خانوادگی"
                                />
                            </div>

                            <div className="form-group">
                                <label>ایمیل</label>
                                <input
                                    onChange={e => onChangeHandler(e)}
                                    value={myProfileData?.email || ""}
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="ایمیل"
                                />
                            </div>

                            <div className="form-group">
                                <label for="name-three">موبایل</label>
                                <input
                                    onChange={e => onChangeHandler(e)}
                                    value={myProfileData?.mobile || ""}
                                    name="mobile"
                                    type="text"
                                    className="form-control"
                                    placeholder="موبایل"
                                />
                            </div>

                            <div className="form-group">
                                <label for="name-three">عکس</label>
                                <input
                                    onChange={e => readURL(e)}
                                    // value={myProfileData?.mobile || ""}
                                    name="profile_photo_path"
                                    type="file"
                                    className="form-control"
                                    placeholder="موبایل"
                                />
                            </div>

                            {/* <div className="form-group">
                        <label>شهر</label>
                        <select className="form-control">
                            <option value="#">ایران- تهران</option>
                            <option value="#">ایران- اراک</option>
                            <option value="#">ایران- قم</option>
                            <option value="#">ایران- مشهد</option>
                            <option value="#">ایران- تبریز</option>
                            <option value="#">ایران- شیراز</option>
                            <option value="#">ایران- کرمان</option>

                        </select>
                    </div>

                    <div className="form-group">
                        <label>شما به عنوان زیر فعالیت میکنید</label>
                        <select className="form-control">
                            <option value="#">فروشنده</option>
                            <option value="#">شخص</option>
                        </select>
                    </div> */}
                        </div>
                }


                {/* <div className="change-password section">
                    <h2>تغییر رمزعبور</h2>

                    <div className="form-group">
                        <label>رمزعبور قبلی</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>رمزعبور جدید</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>تکرار رمزعبور</label>
                        <input type="password" className="form-control" />
                    </div>
                </div> */}


                {/* <div className="preferences-settings section">
                    <h2>تنظیمات پیشرفته</h2>

                    <div className="checkbox">
                        <label><input type="checkbox" name="logged" /> غیرفعال کردن نظرات آگهی </label>
                        <label><input type="checkbox" name="receive" />اشتراک در خبرنامه</label>
                        <label><input type="checkbox" name="want" />دریافت مشاوره برای خرید و فروش</label>
                    </div>
                </div> */}

                {
                    loading ? <Loader /> : <a onClick={updateProfile} className="btn">به روز رسانی پروفایل</a>
                }
                {/* <a href="#" className="btn cancle">انصراف</a> */}
            </div>
        </div>
    )
}
