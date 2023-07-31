import React from 'react'

export default function DeleteAccount() {
    return (
        <div className="col-md-8 text-center">
            <div className="delete-account section">
                <h2>حذف اکانت</h2>
                <h4>آیا برای حذف اکانت خود مطمئن هستید؟</h4>
                <a href="#" className="btn">حذف اکانت</a>
                <a href="#" className="btn cancle">انصراف</a>
            </div>
        </div>
    )
}
