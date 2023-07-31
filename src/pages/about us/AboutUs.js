import { Link } from 'react-router-dom';
import AboutUsCarouselItem from '../../components/AboutUsCarouselItem'
import TeamMember from '../../components/TeamMember'

export default function AboutUs() {
    return (
        <section id="main" className="clearfix about-us page">
            <div className="container">

                <div className="breadcrumb-section">
                    <ol className="breadcrumb">
                        <li><Link to="/">خانه</Link></li>
                        <li>درباره ما</li>
                    </ol>
                    <h2 className="title">درباره ما</h2>
                </div>

                <div className="section about">
                    <div className="about-info">
                        <div className="row">

                            <div className="col-lg-6">
                                <div className="about-us-images">
                                    <img src="images/about-us/1.jpg" alt="About us Image" className="img-fluid" />
                                </div>
                            </div>


                            <div className="col-lg-6">
                                <div className="about-text">
                                    <h3>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h3>

                                    <div className="description-paragraph">
                                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                                    </div>


                                    <div className="description-paragraph"><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="approach">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <div className="our-approach">
                                    <h3>سابقه</h3>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                                </div>
                            </div>


                            <div className="col-md-4 text-center">
                                <div className="our-approach">
                                    <h3>هدف</h3>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                                </div>
                            </div>


                            <div className="col-md-4 text-center">
                                <div className="our-approach">
                                    <h3>روش کار</h3>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-section">
                        <h3>اعضای تیم</h3>
                        <div className="team-members">
                            <TeamMember />
                            <TeamMember />
                            <TeamMember />
                            <TeamMember />
                            <TeamMember />
                        </div>
                    </div>
                </div>

                <div className="section testimonials text-center">
                    <div className="testimonial-carousel">
                        <AboutUsCarouselItem />
                    </div>
                </div>

            </div>
        </section>
    )
}
