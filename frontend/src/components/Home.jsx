import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="container-xxl bg-white p-0">
                {/* Navbar & Hero Start */}
                <div className="container-xxl position-relative p-0">
                    <nav className="navbar navbar-expand-lg sticky-top spacer navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0" id='holearea'>
                        <Link to="/" className="navbar-brand p-0">
                            <img src="/logo.png" alt="Logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0 pe-4">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="/about" className="nav-item nav-link">About</Link>
                                <Link to="/service" className="nav-item nav-link">Service</Link>
                                <Link to="/menu" className="nav-item nav-link">Menu</Link>
                                <Link to="/contact" className="nav-item nav-link">Contact</Link>
                                {/* <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <a href="booking.html" className="dropdown-item">Booking</a>
                                        <a href="team.html" className="dropdown-item">Our Team</a>
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    </div>
                                </div> */}
                                
                            </div>
                            <Link to="/signup" className="btn btn-primary py-2 px-4">Sign Up</Link>
                        </div>
                    </nav>

                    <div className="container-xxl py-5 bg-dark hero-header mb-5">
                        <div className="container my-5 py-5">
                            <div className="row align-items-center g-5">
                                <div className="col-lg-6 text-center text-lg-start">
                                    <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                                    <p className="text-white animated slideInLeft mb-4 pb-2">Welcome to Local restaurent, where we serve delicious meals in a cozy setting. Enjoy our chef's special dishes made with fresh ingredients. Come and have a wonderful dining experience with us.</p>
                                    <a href="/" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a>
                                </div>
                                <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                    <img className="img-fluid" src="/hero.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Navbar & Hero End */}

                {/* Service Start */}
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="row g-4">
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="service-item rounded pt-3">
                                    <div class="p-4">
                                        <i class="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                        <h5>Master Chefs</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div class="service-item rounded pt-3">
                                    <div class="p-4">
                                        <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                                        <h5>Quality Food</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="service-item rounded pt-3">
                                    <div class="p-4">
                                        <i class="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                        <h5>Online Order</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div class="service-item rounded pt-3">
                                    <div class="p-4">
                                        <i class="fa fa-3x fa-headset text-primary mb-4"></i>
                                        <h5>24/7 Service</h5>
                                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service End */}

                {/* About Start */}

                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="row g-3">
                                    <div className="col-6 text-start">
                                        <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="/about-1.jpg" alt="" />
                                    </div>
                                    <div className="col-6 text-start">
                                        <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="/about-2.jpg" style={{ marginTop: '25%' }} alt="" />
                                    </div>
                                    <div className="col-6 text-end">
                                        <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="/about-3.jpg" alt="" />
                                    </div>
                                    <div className="col-6 text-end">
                                        <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="/about-4.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                                <h1 className="mb-4 m">Welcome to <i className="fa fa-utensils text-primary me-2"></i>Restoran</h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <div className="row g-4 mb-4">
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                            <div className="ps-4">
                                                <p className="mb-0">Years of</p>
                                                <h6 className="text-uppercase mb-0">Experience</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                            <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                                            <div className="ps-4">
                                                <p className="mb-0">Popular</p>
                                                <h6 className="text-uppercase mb-0">Master Chefs</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-primary py-3 px-5 mt-2" href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}

                {/* Menu Start  */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                            <h1 className="mb-5">Most Popular Items</h1>
                        </div>
                        <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                                <li className="nav-item">
                                    <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                        <i className="fa fa-coffee fa-2x text-primary"></i>
                                        <div className="ps-3">
                                            <small className="text-body">Popular</small>
                                            <h6 className="mt-n1 mb-0">Breakfast</h6>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                                        <i className="fa fa-hamburger fa-2x text-primary"></i>
                                        <div className="ps-3">
                                            <small className="text-body">Special</small>
                                            <h6 className="mt-n1 mb-0">Launch</h6>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                                        <i className="fa fa-utensils fa-2x text-primary"></i>
                                        <div className="ps-3">
                                            <small className="text-body">Lovely</small>
                                            <h6 className="mt-n1 mb-0">Dinner</h6>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-1.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className='price'>$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-2.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className='price'>$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-3.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className='price'>$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-4.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className='price'>$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-5.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className='price'>$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-6.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className='price'>$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-7.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className='price'>$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-8.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className='price'>$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-2" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-1.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className='price'>$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-2.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-3.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-4.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-5.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-6.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-7.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-8.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-3" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-1.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-2.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-3.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-4.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-5.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-6.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-7.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-8.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-4" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-1.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-2.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-3.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-4.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-5.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-6.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-7.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-8.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-5" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-1.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-2.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-3.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-4.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-5.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-6.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-7.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-8.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab-6" className="tab-pane fade show p-0">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-1.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-2.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-3.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-4.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-5.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-6.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-7.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="d-flex align-items-center">
                                                <img className="flex-shrink-0 img-fluid rounded" src="/menu-8.jpg" alt="" style={{ width: '80px' }}></img>
                                                <div className="w-100 d-flex flex-column text-start ps-4">
                                                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                        <span>Chicken Burger</span>
                                                        <span className="text-primary">$115</span>
                                                    </h5>
                                                    <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu End */}

                {/* Reservation Start */}
                <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="video">
                                <img src="/about-2.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-md-6 bg-dark d-flex align-items-center">
                            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                                <h1 className="text-white mb-4">Book A Table Online</h1>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                                <label htmlFor="datetime">Date & Time</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select" id="select1">
                                                    <option value="1">People 1</option>
                                                    <option value="2">People 2</option>
                                                    <option value="3">People 3</option>
                                                </select>
                                                <label htmlFor="select1">No Of People</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Special Request" id="message" style={{ height: '100px' }}></textarea>
                                                <label htmlFor="message">Special Request</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                
                {/* <Reservation End */}

                {/* Team Start */}
                <div className="container-xxl pt-5 pb-3">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
                            <h1 className="mb-5">Our Master Chefs</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item text-center rounded overflow-hidden">
                                    <div className="rounded-circle overflow-hidden m-4">
                                        <img className="img-fluid" src="/team-1.jpg" alt="" />
                                    </div>
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div className="d-flex justify-content-center mt-3">
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item text-center rounded overflow-hidden">
                                    <div className="rounded-circle overflow-hidden m-4">
                                        <img className="img-fluid" src="/team-2.jpg" alt="" />
                                    </div>
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div className="d-flex justify-content-center mt-3">
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item text-center rounded overflow-hidden">
                                    <div className="rounded-circle overflow-hidden m-4">
                                        <img className="img-fluid" src="/team-3.jpg" alt="" />
                                    </div>
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div className="d-flex justify-content-center mt-3">
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="team-item text-center rounded overflow-hidden">
                                    <div className="rounded-circle overflow-hidden m-4">
                                        <img className="img-fluid" src="/team-4.jpg" alt="" />
                                    </div>
                                    <h5 className="mb-0">Full Name</h5>
                                    <small>Designation</small>
                                    <div className="d-flex justify-content-center mt-3">
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}

                {/* Footer Start  */}
                <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                                <Link to="/about" className="btn btn-link">About Us</Link>
                                <Link to="/contact" className="btn btn-link">Contact Us</Link>
                                <Link to="" className="btn btn-link">Reservation</Link>
                                <Link to="" className="btn btn-link">Privacy Policy</Link>
                                <Link to="" className="btn btn-link">Terms & Condition</Link>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                                <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@restoindia.com</p>
                                <div className="d-flex pt-2">
                                    <Link to="" className="btn btn-outline-light btn-social"><i className="fab fa-twitter"></i></Link>
                                    <Link to="" className="btn btn-outline-light btn-social"><i className="fab fa-facebook-f"></i></Link>
                                    <Link to="" className="btn btn-outline-light btn-social"><i className="fab fa-youtube"></i></Link>
                                    <Link to="" className="btn btn-outline-light btn-social"><i className="fab fa-linkedin-in"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                                <h5 className="text-light fw-normal">Monday - Saturday</h5>
                                <p>09AM - 09PM</p>
                                <h5 className="text-light fw-normal">Sunday</h5>
                                <p>10AM - 08PM</p>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                                    <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    &copy; <a className="border-bottom" href="#">restoindia</a>, All Right Reserved.
                                    Designed By <Link to="restoindia.com" className="border-bottom">RestoIndia</Link>
                                </div>
                                <div className="col-md-6 text-center text-md-end">
                                    <div className="footer-menu">
                                        <Link to="/home">Home</Link>
                                        <Link to="/cookies">Cookies</Link>
                                        <Link to="/help">Help</Link>
                                        <Link to="/faq">FQAs</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End */}

            </div>
        </div>
    )
}

export default Home
