import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {

    const [t , i18n]= useTranslation();

    return <>

        <section>
            <div className=" aboutus bg-primary d-flex justify-content-center align-items-center py-5">
                <h1 className='text-white fw-bold'>{t("navservice")}</h1>
            </div>
        </section>

        <section className="services-contact">
            <div className="container text-center">
                <div className="text-center p-5">
                    <p className='fw-bold text-primary'>{t("SERVICES")}</p>
                    <h2 className="fw-bold">{t("servicesp1")} <br></br> {t("servicesp2")}</h2>
                </div>

                <div className="row d-flex justify-content-center flex-wrap py-5 gy-3">
                    <div className="col-lg-4 col-md-6 ">
                        <div className='container'>
                            <div className='shadow pb-5 rounded-4'>
                                <div className="container">
                                    <div className="icon py-3 d-flex justify-content-center align-items-center position-relative ">
                                        <img src={require("../../images/Downloads076.png")} className='w-50' alt="" />
                                    </div>

                                    <h4 className='fw-bold'>{t("mothionh4")}</h4>
                                    <p className='text-muted p-2'>{t("mothionp")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 ">
                        <div className='container'>
                            <div className='shadow pb-5 rounded-4'>
                                <div className="container">
                                    <div className="icon py-3 d-flex justify-content-center align-items-center position-relative "> 
                                        <div className="layer">
                                            <img src={require("../../images/Downloads077.png")} className='w-50' alt="pic" />
                                        </div>
                                    </div>

                                    <h4 className='fw-bold'>{t("websiteh4")}</h4>
                                    <p className='text-muted p-2'>{t("websitep")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 ">
                        <div className='container'>
                            <div className='shadow pb-5 rounded-4'>
                                <div className="container">
                                    <div className="icon py-3 d-flex justify-content-center align-items-center position-relative ">
                                        <div className="layer">
                                            <img src={require("../../images/Downloads078.png")} className='w-50' alt="pic" />
                                        </div>
                                    </div>

                                    <h4 className='fw-bold'>{t("E-Commerceh4")}</h4>
                                    <p className='text-muted p-2'>{t("E-Commercep")} </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 ">
                        <div className='container'>
                            <div className='shadow pb-5 rounded-4'>
                                <div className="container">
                                    <div className="icon py-3 d-flex justify-content-center align-items-center position-relative ">
                                        <div className="layer">
                                            <img src={require("../../images/Downloads079.png")} className='w-100' alt="pic" />
                                        </div>
                                    </div>

                                    <h4 className='fw-bold'>{t("Businessh4")}</h4>
                                    <p className='text-muted p-2'>{t("Businessp")}</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 ">
                        <div className='container'>
                            <div className='shadow pb-5 rounded-4'>
                                <div className="container">
                                    <div className="icon py-3 d-flex justify-content-center align-items-center position-relative ">
                                        <div className="layer">
                                            <img src={require("../../images/Downloads080.png")} className='w-50' alt="pic" />
                                        </div>
                                    </div>

                                    <h4 className='fw-bold'>{t("Ui/Uxh4")}</h4>
                                    <p className='text-muted p-2'>{t("Ui/Uxp")}</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 ">
                        <div className='container'>
                            <div className='shadow pb-5 rounded-4'>
                                <div className="container">
                                    <div className="icon py-3 d-flex justify-content-center align-items-center position-relative ">
                                        <div className="layer">
                                            <img src={require("../../images/Downloads082.webp")} className='w-75' alt="pic" />
                                        </div>
                                    </div>
                                    <h4 className='fw-bold'>{t("Mobileh4")}</h4>
                                    <p className='text-muted p-2'>{t("Mobilep")}</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 ">
                        <div className='container'>
                            <div className='shadow pb-5 rounded-4'>
                                <div className="container">
                                    <div className="icon py-3 d-flex justify-content-center align-items-center position-relative ">
                                        <div className="layer">
                                            <img src={require("../../images/Downloads081.png")} className='w-100' alt="pic" />
                                        </div>
                                    </div>

                                    <h4 className='fw-bold'>{t("E-Learningh4")}</h4>
                                    <p className='text-muted p-2'>{t("E-Learningp")}</p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        {/* start product section */}

        <section className=" bg-body-tertiary">
            <div className="container text-center pt-5">
                <p className='fw-bold text-primary'>{t("servicesp1.1")}</p>
                <h2 className="fw-bold">{t("servicesp1.2")}<br></br>{t("servicesp1.3")}</h2>
            </div>

            <div className="container pt-4">
                <div className="">
                    <div className="row d-flex justify-content-center flex-wrap p-5 gy-5 container">
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads096.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads097.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads098.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads099.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads100.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads102.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads101.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads103.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads104.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads105.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads106.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads107.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads108.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads109.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads110.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads111.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads112.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads113.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads114.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads115.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads116.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads117.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads118.png")} style={{ width: "50px" }} alt="" />
                        </div>
                        <div className="col-lg-2 col-md-4 col-4 text-center">
                            <img src={require("../../images/Downloads119.png")} style={{ width: "50px" }} alt="" />
                        </div>

                    </div>
                </div>
            </div>



        </section>


        {/* start product section */}


    </>
}

export default Services;
