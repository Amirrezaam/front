import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../../components/Accordion'

export default function Support() {
    return (
        <section id="main" className="clearfix page m0">
            <div className="container">
                <div className="faq-page">
                    <div className="breadcrumb-section">

                        <ol className="breadcrumb">
                            <li><a href="index.html">خانه</a></li>
                            <li>پرسش و پاسخ</li>
                        </ol>
                        <h2 className="title">سوالات متدوال</h2>
                    </div>

                    <div className="tr-accordion" id="accordion">
                        <Accordion id={1} />
                        <Accordion id={2} />
                        <Accordion id={3} />
                        <Accordion id={4} />
                        <Accordion id={5} />
                    </div>
                </div>
            </div>
            <section id="something-sell" className="clearfix parallax-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h2 className="title">جواب خود را پیدا نکردید?</h2>
                            <h4>برای ما پیام بگذارید</h4>
                            <Link to="/contact-us" className="btn btn-primary">ارتباط با ما</Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
