import React from 'react';
import '../styles/style.css'
import group5 from '../assets/Group 5.png'
import logo from '../assets/Group 4 (1).svg'
import cap1 from '../assets/Image  4pt  Top cap .png'
import cap2 from '../assets/Image  4pt  Top cap2 .png'
import cap3 from '../assets/Image  4pt  Top cap3 .png'
import footer_logo from '../assets/Group 3.svg'
import insta from '../assets/Instagram-color.svg'
import fb from '../assets/Facebook.png'
import tw from '../assets/Facebook Copy 2.png'

const Home = () => {
    return (
        <div className="container-fluid">
            {/**/}
            <nav className="navbar navbar-expand-lg navbar-light pb-4"
                 style={{paddingLeft: "50px", paddingRight: "50px"}}>

                <img src={logo} className="navbar-brand"/>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <form className="mx-auto form-inline md-form form-sm mt-0">

                    <input className=" fontAwesome form-control form-control-sm ml-3 w-75" type="text"
                           placeholder="&#xF002; &nbsp; &nbsp; Search Something"
                           aria-label="Search"/>
                </form>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item m-2">
                        <button className="signin btn  btn-outline-success" href="#">Sign In</button>
                    </li>
                    <li className="nav-item m-2">
                        <button className="signup btn btn-primary " href="#">Sign Up</button>
                    </li>
                </ul>

            </nav>
            <hr style={{marginTop: "-3px", marginLeft: "-12px", marginRight: "-15px"}}/>
            {/**/}
            <div className="container-fluid firstSection mx-4 px-4 ">
                <div className="row">
                    <div className="col">
                        <div className="get-your-inventory-s mr-4">
                            Get your inventory straight from the <br/>source.
                        </div>
                        <div className="the-most-loved-liqui my-4">
                            The most loved liquidation marketplace.
                        </div>
                        <div className="row   mt-4">
                            <div className="col ">
                                <input type="text" style={{backgroundColor: "#f7f8f9"}} className="form-control email "
                                       placeholder="Your Email Address"
                                       aria-label="Email" aria-describedby="button-addon2"/>
                            </div>
                            <div className="col">

                                <div className="input-group-append">
                                    <button className=" notified btn btn-primary " href="#">Get Notified</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <img className="ml-4 img" src={group5} alt="group5"/>
                    </div>
                </div>

            </div>
            <hr className="line" style={{marginLeft: "-12px", marginRight: "-15px", marginBottom: "5rem"}}/>
            <div className="container-fluid m-4 pt-4 pb-4 pl-4 ">
                <div className="row">
                    <div className="col-2">
                        <div className="row">
                            <div className=" col filter">Filter</div>
                            <div className="clear col"> CLEAR</div>

                        </div>
                        <hr style={{marginTop: "-2px"}}/>
                        <div style={{textAlign: "left"}} className="price mt-4 pt-4 mb-2">
                            Price
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="container min   ">
                                    <button className="btn  max dropdown-toggle" type="button"
                                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                        $Min &nbsp; &nbsp;&nbsp;&nbsp;
                                        <span className=""/>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="container min ">
                                    <button className="btn  max dropdown-toggle" type="button"
                                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false" style={{outlineStyle: "none"}}>
                                        $Max  &nbsp; &nbsp;&nbsp;&nbsp;
                                        <span className=""></span>
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="price mt-4 pt-4 mb-2">
                            LOCATION (USA)
                        </div>
                        <hr style={{marginTop: "-1.5px"}}/>
                        <div className="container-fluid">
                            <div className="row ">
                                <div className="">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked"/>
                                        <label className="custom-control-label check" htmlFor="defaultUnchecked">
                                            West</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked1"/>
                                        <label className="custom-control-label check" htmlFor="defaultUnchecked1">
                                            Mid West</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked2"/>
                                        <label className="custom-control-label check" htmlFor="defaultUnchecked2">
                                            South East</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked3"/>
                                        <label className="custom-control-label check" htmlFor="defaultUnchecked3">
                                            North East</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked4"/>
                                        <label className="custom-control-label check" htmlFor="defaultUnchecked4">
                                            South West</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign: "left"}} className="price mt-4 pt-4 mb-2">
                            MSRP Percent Off
                        </div>
                        <hr style={{marginTop: "-1.5px"}}/>
                        <div className="container-fluid">
                            <div className="row ">
                                <div className="">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked5"/>
                                        <label className="custom-control-label check" htmlFor="defaultUnchecked5">
                                            0-20 %</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked6"/>
                                        <label className="custom-control-label check" htmlFor="defaultUnchecked6">
                                            20-50 %</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked7"/>
                                        <label className="custom-control-label check" htmlFor="defaultUnchecked7">
                                            50-80 %</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{textAlign: "left"}} className="price mt-4 pt-4 mb-2">
                            CONDITION
                        </div>
                        <hr style={{marginTop: "-1.5px"}}/>
                        <div className="container-fluid">
                            <div className="row ">
                                <div className="">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked8"/>
                                        <label className="custom-control-label check" htmlFor="defaultUnchecked8">
                                            New</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="defaultUnchecked9"/>
                                        <label className="custom-control-label check" htmlFor="defaultUnchecked9">
                                            Like New</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input"
                                               id="defaultUnchecked10"/>
                                        <label className="custom-control-label check" htmlFor="defaultUnchecked10">
                                            Uninspected returns</label>
                                    </div>

                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input"
                                               id="defaultUnchecked12"/>
                                        <label className="custom-control-label check" htmlFor="defaultUnchecked12">
                                            Used</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input"
                                               id="defaultUnchecked13"/>
                                        <label className="custom-control-label check" htmlFor="defaultUnchecked13">
                                            Salvage</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input"
                                               id="defaultUnchecked14"/>
                                        <label className="custom-control-label check" htmlFor="defaultUnchecked14">
                                            Mixed</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="  col-10 text-value">
                        <div className="ml-4">
                            <ul className="nav nav-pills  mb-4 pb-4 pr-4 " style={{marginRight: "75px"}} id="pills-tab"
                                role="tablist">
                                <li className="nav-item px-4">
                                    <a className="nav-link active ever" id="pills-home-tab" data-toggle="pill"
                                       href="#pills-home" role="tab"
                                       aria-controls="pills-home" aria-selected="true">Everything</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link ever" id="pills-profile-tab" data-toggle="pill"
                                       href="#pills-profile" role="tab"
                                       aria-controls="pills-profile" aria-selected="false">Live Auction</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link ever" id="pills-contact-tab" data-toggle="pill"
                                       href="#pills-contact" role="tab"
                                       aria-controls="pills-contact" aria-selected="false">Eligible for auction</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link ever" id="pills-contact-tab" data-toggle="pill"
                                       href="#pills-sale"
                                       role="tab"
                                       aria-controls="pills-contact" aria-selected="false">Buy for sale</a>
                                </li>
                                <li className="nav-item  ml-auto">
                                    <label className="sort-by ">Sort by: </label>
                                </li>
                                <li>
                                    <div className="container dropdown ">
                                        <button className="btn  lowest dropdown-toggle" type="button"
                                                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                            Lowest Price  &nbsp; &nbsp;
                                            <span className=""></span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                     aria-labelledby="pills-home-tab">
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                                     aria-labelledby="pills-profile-tab">
                                </div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel"
                                     aria-labelledby="pills-contact-tab">
                                </div>
                            </div>

                            {/**/}

                            <div className="card-deck">
                                <div className="card mb-4">
                                    <div className="view overlay">
                                        <div className="container " style={{position: "absolute", zIndex: "10"}}>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="new">
                                                        <div className="badge newspan badge-primary "
                                                        >NEW
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">

                                                    <div className="used">
                                                        {/*<i className="fas fa-eye"*/}
                                                        {/*      aria-hidden="true" style={{position: "absolute", zIndex: "10"}}/>*/}
                                                        <div className="badge use badge-primary "
                                                        >&#128065; 435
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="card-img-top"
                                             src={cap1}
                                             alt="Card image cap"/>

                                    </div>


                                    <div className="container-fluid pt-2">
                                        <div className="row">
                                            <div className="col-md-4 ml-3 bg badge-primary">
                                                <span className="badge live  "
                                                >&nbsp; &nbsp; &nbsp;Live Auction</span>
                                            </div>
                                            <div className="col-md-4 offset-md-4">
                                                <span className="" style={{color: "#0081B5"}}>3 days left</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="original-i-phone-boxe">
                                            Original iPhone Boxes By Apple Liquidation Lot
                                        </div>
                                        <hr/>
                                        <div className="container-fluid  mt-3"
                                             style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="two "> $200</div>
                                                    <p className="current-bid">Current bid</p>
                                                </div>
                                                <div className="col">
                                                    <div className="two "
                                                         style={{textDecoration: "line-through"}}> $500
                                                    </div>
                                                    <p className="current-bid">MSRP</p>
                                                </div>
                                                <div className="col">
                                                    <div className="two"> 20</div>
                                                    <p className="current-bid">Units</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container-fluid"
                                             style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                            <div className="row">
                                                <div className="col" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                                    <button type="button" className="btn view2 btn-md "><span
                                                        className="text-value">View Auction</span>

                                                    </button>
                                                </div>
                                                <div className="col">
                                                    <button type="button" className="btn watch btn-md ">Watch
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="view overlay">
                                        <div className="container " style={{position: "absolute", zIndex: "10"}}>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="new">
                                                        <div className="badge newspan badge-primary "
                                                        >USED
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">

                                                    <div className="used">
                                                        {/*<i className="fas fa-eye"*/}
                                                        {/*      aria-hidden="true" style={{position: "absolute", zIndex: "10"}}/>*/}
                                                        <div className="badge use badge-primary "
                                                        >&#128065; 565
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <img className="card-img-top"
                                             src={cap2}
                                             alt="Card image cap"/>
                                        <a href="#!">
                                            <div className="mask rgba-white-slight"></div>
                                        </a>
                                    </div>

                                    <div className="container-fluid pt-2">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <span className="badge bgg badge-primary "
                                                      style={{textAlign: 'center'}}>ELIGIBLE FOR AUCTION</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="original-i-phone-boxe">
                                            2 Players RC Battle Boxing Robots by Shift3
                                        </div>
                                        <hr/>
                                        <div className="container-fluid  mt-3"
                                             style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="two"> $1200</div>
                                                    <p className="current-bid">Current bid</p>
                                                </div>
                                                <div className="col">
                                                    <div className="two"
                                                         style={{textDecoration: "line-through"}}> $4000
                                                    </div>
                                                    <p className="current-bid">MSRP</p>
                                                </div>
                                                <div className="col">
                                                    <div className="two"> 346</div>
                                                    <p className="current-bid">Units</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container-fluid"
                                             style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                            <div className="row">
                                                <div className="col" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                                    <button type="button" className="btn view2 btn-md "><span
                                                        className="text-value">View Auction</span>
                                                    </button>
                                                </div>
                                                <div className="col">
                                                    <button type="button" className="btn watch btn-md ">Watch
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="view overlay">
                                        <img className="card-img-top"
                                             src={cap3}
                                             alt="Card image cap"/>
                                        <a href="#!">
                                            <div className="mask rgba-white-slight"></div>
                                        </a>
                                    </div>


                                    <div className="container-fluid pt-2">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <span className="badge bg badge-primary "
                                                      style={{textAlign: 'center'}}>NEWLY LISTED</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-body">
                                        <div className="original-i-phone-boxe">
                                            Speakers, LED Lights, DVD Players, Printers, and More Electronics…
                                        </div>
                                        <hr/>
                                        <div className="container-fluid  mt-3"
                                             style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="two "> $9200</div>
                                                    <p className="current-bid">Current bid</p>
                                                </div>
                                                <div className="col">
                                                    <div className="two"
                                                         style={{textDecoration: "line-through"}}> $12000
                                                    </div>
                                                    <p className="current-bid">MSRP</p>
                                                </div>
                                                <div className="col">
                                                    <div className="two"> 60</div>
                                                    <p className="current-bid">Units</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" style={{
                                            borderRadius: "4px",
                                            width: "308px",
                                            height: "40px"
                                        }} className="btn sold btn-primary ">Sold
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/**/}

                        </div>
                        <div className="container  p-4 ">
                            <button type="button" className="btn btn-outline-primary bb  btn-lg btn-block">Load More
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            {/*Footer*/}

            <footer className="page-footer  font-small pt-4 "
                    style={{backgroundColor: '#fafbfb', marginLeft: '-15px', marginRight: '-15px'}}>
                <div className="container-fluid f">
                    <div className="row">
                        <div className="col">
                            <img src={footer_logo} style={{marginLeft: "42px"}} alt="footer_logo"/>
                        </div>
                        <div className="col ">
                            <p className="footerHeading">Company</p>
                            <p className="fsh">About</p>
                            <p className="fsh">FAQs</p>
                            <p className="fsh">Sign Up</p>
                        </div>
                        <div className="col">
                            <p className="footerHeading">Legal</p>
                            <p className="fsh">Terms of Use</p>
                            <p className="fsh">Privacy Policy</p>

                        </div>
                        <div className="col">

                            <p className="footerHeading">Company</p>
                            <p className="fsh">Contact: contact@anteelo.com</p>
                            <p className="fsh">Email: support@anteelo.com</p>
                            <p className="fsh">Join Our Facebook Group: Anteelodesign</p>
                        </div>
                        <div className="col">
                            <p className="footerHeading">Follow US</p>
                            <img src={fb} style={{padding: "5px", width: "1.8rem", height: "1.8rem"}} alt="fb_logo"/>
                            <img src={insta} style={{padding: "5px"}} alt="insta_logo"/>
                            <img src={tw} style={{padding: "5px", width: "1.8rem", height: "1.8rem"}}
                                 alt="twitter_logo"/>

                        </div>
                    </div>
                </div>
                <div className="invento-lots footer-copyright text-center  py-3" style={{backgroundColor: "white"}}>
                    © 2018 Invento Lots
                </div>
            </footer>
            {/**/}
        </div>
    )
}
export default Home;