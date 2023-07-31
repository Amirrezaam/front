import React from 'react'
import { Link } from 'react-router-dom'

export default function Page500() {
    return (
        <section id="main" className="clearfix text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="found-section section">
                            <h1>500</h1>
                            <h2>اوه نه!</h2>
                            <p>در حال حاضر مشکلی برای انجام درخواست فعلی شما داریم</p>
                            <Link to="/" className="btn btn-primary">برگشت به خانه</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
