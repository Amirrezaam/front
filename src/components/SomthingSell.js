import React from 'react'
import { Link } from 'react-router-dom'

export default function SomthingSell() {
    return (
        <section id="something-sell" className="clearfix parallax-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2 className="title">چیزی برای فروش دارید؟</h2>
                        <h4>همینجا به صورت رایگان آگهی کنید </h4>
                        <Link to="/add-advertising" className="btn btn-primary">افزودن آگهی شما</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
