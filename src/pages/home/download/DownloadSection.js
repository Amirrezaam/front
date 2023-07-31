import React from 'react'

export default function DownloadSection() {
    return (

        <section id="download" className="clearfix parallax-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2>دریافت از اپ استور</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <a href="#" className="download-app">
                            <img src="images/icon/16.png" alt="Image" className="img-fluid" />
                            <span className="pull-left">
                                <span>موجود در</span>
                                <strong>گوگل پلی</strong>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="#" className="download-app">
                            <img src="images/icon/17.png" alt="Image" className="img-fluid" />
                            <span className="pull-left">
                                <span>موجود در</span>
                                <strong>اپ استور</strong>
                            </span>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="#" className="download-app">
                            <img src="images/icon/18.png" alt="Image" className="img-fluid" />
                            <span className="pull-left">
                                <span>موجود در</span>
                                <strong>ویندوز استور</strong>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
