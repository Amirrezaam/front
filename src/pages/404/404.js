import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
    return (
        <section id="main" className="clearfix text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="found-section section">
                            <h1>404</h1>
                            <h2>صفحه موردنظر پیدا نشد</h2>
                            <p> به نظر می رسد ما نمی توانیم صفحه مورد نظر شما را پیدا کنیم. </p>
                            <Link to="/" className="btn btn-primary">برگشت به خانه</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
