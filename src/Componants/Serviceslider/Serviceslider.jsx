import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';


const Serviceslider = () => {
    
    const [t , i18n]= useTranslation();

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };


    return <>

        <div className='p-5 container'>
            <Slider className='text-center' {...settings}>

                <div className='container'>
                    <div className='shadow rounded-4'>
                        <div className="container">
                            <div className="icon p-3 d-flex justify-content-center align-items-center position-relative ">
                                <img src={require("../../images/Downloads076.png")} className='w-25' alt="" />
                            </div>

                            <h4 className='fw-bold'>{t("mothionh4")}</h4>
                            <p className='text-muted p-2' >{t("mothionp").split(' ').slice(0, 40).join(" ")}</p>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='shadow rounded-4'>
                        <div className="container">
                            <div className="icon p-3 d-flex justify-content-center align-items-center position-relative ">
                                <img src={require("../../images/Downloads077.png")} className='w-25' alt="pic" />
                            </div>

                            <h4 className='fw-bold'>{t("websiteh4")}</h4>
                            <p className='text-muted p-2' >{t("websitep").split(' ').slice(0, 40).join(" ")}</p>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='shadow rounded-4'>
                        <div className="container">
                            <div className="icon p-3 d-flex justify-content-center align-items-center position-relative ">
                                <img src={require("../../images/Downloads078.png")} className='w-25' alt="pic" />
                            </div>

                            <h4 className='fw-bold'>{t("E-Commerceh4")}</h4>
                            <p className='text-muted p-2' >{t("E-Commercep").split(' ').slice(0, 40).join(" ")}</p>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='shadow rounded-4'>
                        <div className="container">
                            <div className="icon p-3 d-flex justify-content-center align-items-center position-relative ">
                                <img src={require("../../images/Downloads079.png")} className='w-25' alt="pic" />
                            </div>

                            <h4 className='fw-bold'>{t("Businessh4")}</h4>
                            <p className='text-muted p-2' >{t("Businessp").split(' ').slice(0, 40).join(" ")}</p>

                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='shadow rounded-4'>
                        <div className="container">
                            <div className="icon p-3 d-flex justify-content-center align-items-center position-relative ">
                                <img src={require("../../images/Downloads080.png")} className='w-25' alt="pic" />
                            </div>

                            <h4 className='fw-bold'>{t("Ui/Uxh4")}</h4>
                            <p className='text-muted p-2' >{t("Ui/Uxp").split(' ').slice(0, 40).join(" ")}</p>

                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='shadow rounded-4'>
                        <div className="container">
                            <div className="icon p-3 d-flex justify-content-center align-items-center position-relative ">
                                    <img src={require("../../images/Downloads081.png")} className='w-25' alt="pic" />
                            </div>

                            <h4 className='fw-bold'>{t("E-Learningh4")}</h4>
                            <p className='text-muted p-2' >{t("E-Learningp").split(' ').slice(0, 40).join(" ")}</p>

                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='shadow rounded-4'>
                        <div className="container">
                            <div className="icon p-3 d-flex justify-content-center align-items-center position-relative ">
                                <img src={require("../../images/Downloads082.webp")} className='w-25' alt="pic" />
                            </div>
                            <h4 className='fw-bold' >{t("Mobileh4")}</h4>
                            <p className='text-muted p-2' >{t("Mobilep").split(' ').slice(0, 40).join(" ")}</p>

                        </div>
                    </div>
                </div>
            </Slider>
        </div>

    </>
}

export default Serviceslider;
