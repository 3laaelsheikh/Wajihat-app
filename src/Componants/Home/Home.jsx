import React from 'react';
import Homeslick from '../Homeslick/Homeslick';
import Serviceslider from '../Serviceslider/Serviceslider';
import Productslider from '../Productslider/Productslider';
import { useTranslation } from 'react-i18next';


const Home = () => {

    const [t , i18n]= useTranslation();


    return <>

        {/* start header */}
        <header className=' services-contact'>
            <div className="home container ">
                <div className="row container d-flex justify-content-center align-items-center">
                    <div className="col-lg-5">
                        <div className="">
                            <h1 className="fw-bold mb-4">{t("headerh1")}</h1>
                            <p className="fw-bold mt-4">{t("headerp")}</p>
                            <div className="pb-3">
                                <a href="/"><button className="bn632-hover bn21">{t("headerbutton")}</button></a>
                            </div>
                            <Homeslick />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div >
                            <div className="test">
                                <img src={require("../../images/Downloads065.png")} className="w-100 " alt="pic" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* end header */}

        {/* start feature */}
        <section>
            <div className="container">
                <div className="pt-5 text-center">
                    <h2 className='fw-bold text-black'>{t("featureh")}</h2>
                    <p className='text-muted'>{t("featurep1")} <br></br> {t("featurep2")}</p>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 p-3 text-center">
                        <div className="shadow box rounded-5">
                            <div className="icon p-3 d-flex justify-content-center align-items-center position-relative ">
                                <i className="fa-regular fa-lightbulb fa-3x position-absolute text-warning"></i>
                                <div className="layer">
                                    <img src={require("../../images/Downloads066.png")} className='w-100' alt="pic" />
                                </div>
                            </div>

                            <div className="px-2 tect-center">
                                <h3 className='p-3 fw-bolder'>{t("featurecardh1")}</h3>
                                <p className=''>{t("featurecardp1")}</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-6 p-3 text-center">
                        <div className="shadow box rounded-5 ">
                            <div className="icon p-3 d-flex justify-content-center align-items-center position-relative ">
                                <i className="fa-solid fa-chart-line fa-3x position-absolute text-success"></i>
                                <div className="layer">
                                    <img src={require("../../images/Downloads066.png")} className='w-100' alt="pic" />
                                </div>
                            </div>

                            <div className='px-2 text-center'>
                                <h3 className='p-3 fw-bold'>{t("featurecardh2")}</h3>
                                <p className=''>{t("featurecardp2")}</p>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-3 col-md-6 p-3 text-center">
                        <div className="shadow box rounded-5">
                            <div className="icon p-3 d-flex justify-content-center align-items-center position-relative ">
                                <i className="fa-solid fa-lock position-absolute fa-3x text-info"></i>
                                <div className="layer">
                                    <img src={require("../../images/Downloads066.png")} className='w-100' alt="pic" />
                                </div>
                            </div>

                            <div className="px-2 text-center">
                                <h3 className='p-3 fw-bold'>{t("featurecardh3")}</h3>
                                <p className=''>{t("featurecardp3")}</p>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-3 col-md-6 p-3 text-center">
                        <div className="shadow box rounded-5">
                            <div className="icon p-3 d-flex justify-content-center align-items-center position-relative ">
                                <i className="fa-regular fa-thumbs-up position-absolute fa-3x text-danger"></i>
                                <div className="layer">
                                    <img src={require("../../images/Downloads066.png")} className='w-100' alt="pic" />
                                </div>
                            </div>

                            <div className="px-2 text-center">
                                <h3 className='p-3 fw-bold'>{t("featurecardh4")}</h3>
                                <p className=''>{t("featurecardp4")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* end feature */}

        {/* start category of projects */}

        {/* <section className='container'>
            <div className="container">
                <div className="pt-5 text-center">
                    <h2 className='fw-bold text-black'>Best Solutions, For All<br></br> Organizations</h2>
                    <p className='text-primary fw-bold'>HAVE THE EXPERTISE TO WORK WITH ALL ORGANIZATIONS IN DIFFERENT SECTORS INCLUDING</p>
                </div>
            </div>

            <div className="row  d-flex justify-content-center flex-wrap p-5 gy-3">
                <div className="col-lg-3 col-sm-6">
                    <div className="shadow text-center rounded-3">
                        <img src={require("../../images/Downloads069.png")} className='w-25 pt-5' alt="education" />
                        <h5 className='p-3 fw-bold'>Education</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                    <div className="shadow text-center rounded-3">
                        <img src={require("../../images/Downloads073.png")} className='w-25 pt-5' alt="education" />
                        <h5 className='p-3 fw-bold'>Investment</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                    <div className="shadow text-center rounded-3">
                        <img src={require("../../images/Downloads067.png")} className='w-25 pt-5' alt="education" />
                        <h5 className='p-3 fw-bold'>Government</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                    <div className="shadow text-center rounded-3">
                        <img src={require("../../images/Downloads071.png")} className='w-25 pt-5' alt="education" />
                        <h5 className='p-3 fw-bold'>Real Estate</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="shadow text-center rounded-3">
                        <img src={require("../../images/Downloads068.png")} className='w-25 pt-5' alt="education" />
                        <h5 className='p-3 fw-bold'>Marketing</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="shadow text-center rounded-3">
                        <img src={require("../../images/Downloads072.webp")} className='w-25 pt-5' alt="education" />
                        <h5 className='p-3 fw-bold'>Health Care</h5>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="shadow text-center rounded-3">
                        <img src={require("../../images/Downloads070.png")} className='w-25 pt-5' alt="education" />
                        <h5 className='p-3 fw-bold'>E-Commerce</h5>
                    </div>
                </div>


            </div>


        </section> */}
        {/* start product section */}


        <section className="prod-contact">
            <div className="text-center py-5">
                <p className='fw-bold text-primary'>{t("PRODUCT")}</p>
                <h2 className="fw-bold px-2">{t("PRODUCTP")}</h2>
            </div>

            <Productslider />

        </section>

        {/* end product section */}

        {/* end category of projects */}
        {/* start about section */}

        <section className='py-5 gy-5 bg-body-secondary'>
            <div className="container">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-md-12">
                            <div className="d-flex align-items-baseline">
                                <div className="line"></div>
                                <span className='text-primary px-3 fw-bold'>{t("About")}</span>
                            </div>
                            <h2 className="fw-bold pt-2">{t("abouth4")}</h2>
                            <p className="text-muted py-3 ">{t("aboutp1")}</p>
                            <p className="text-muted pt-3">{t("aboutp2")}</p>
                            <div className='pb-3'>
                                <a href="/"><button className="bn632-hover bn21">{t("headerbutton")}</button></a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <img src={require("../../images/Downloads074.png")} className='w-100' alt="pic" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* end about section */}
        {/* start service section */}

        <section className="services-contact">
            <div className="text-center p-5">
                <p className='fw-bold text-primary'>{t("SERVICES")}</p>
                <h2 className="fw-bold">{t("servicesp1")} <br></br> {t("servicesp2")}</h2>
            </div>
            <Serviceslider />

        </section>


        {/* end service section */}

        {/* start product section */}

        <section className=" bg-body-tertiary">
            <div className="container text-center pt-5">
                <p className='fw-bold text-primary'>{t("servicesp1.1")}</p>
                <h2 className="fw-bold">{t("servicesp1.2")}<br></br> {t("servicesp1.3")}</h2>
            </div>

            <div className="container py-4">
                <div className="">
                    <div className="row gy-5">
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads096.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads097.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads098.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads099.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads100.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads102.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads101.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads103.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads104.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads105.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads106.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads107.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads108.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads109.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads110.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads111.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads112.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads113.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads114.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads115.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads116.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads117.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads118.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-3 col-4 text-center">
                            <img src={require("../../images/Downloads119.png")} style={{ width: "50px" }} alt="" />
                        </div>

                    </div>
                </div>
            </div>



        </section>


        {/* start product section */}










    </>
}

export default Home;
