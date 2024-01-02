import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img2 from '../../images/product1.svg'
import img3 from "../../images/Downloads085.svg"
import img4 from '../../images/products2.svg'
import img5 from '../../images/products3.svg'
import img6 from '../../images/products4.svg'
import img7 from '../../images/products5.svg'
import img8 from '../../images/products6.svg'
import { useTranslation } from 'react-i18next';



const Productslider = () => {

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

        <div className='p-5'>
            <Slider className='text-center' {...settings}>

                {/* start projects */}

        <div className="container py-5">
            <div className="">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div >
                            <div className="">
                                <img src={require("../../images/products1.png")} className="w-100 " alt="pic" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="hd-decp pt-4">
                            <h3 className="mb-4 text-primary" >{t("broadh")}</h3>
                            <p className="mt-2 text-muted" >{t("broadp")}</p>
                            <div className="pb-3">
                                <a href="/"><button className="bn632-hover bn21">{t("button2")}</button></a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="container py-5">
            <div className=" ">
                <div className="row  d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="hd-decp pt-4">
                            <h3 className="mb-4 text-primary" >{t("schoolah")}</h3>
                            <p className="mt-2 text-muted" >{t("schoolap")}</p>
                            <div className="pb-3">
                                <a href="/"><button className="bn632-hover bn21">{t("button2")}</button></a>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div >
                            <div className="">
                                <img src={img6} className="w-100 " alt="pic" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container py-5">
            <div className=" ">
                <div className="row  d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div >
                            <div className="">
                                <img src={img4} className="w-100 " alt="pic" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="hd-decp pt-4">
                            <h3 className="mb-4 text-primary" >{t("materialh")}</h3>
                            <p className="mt-2 text-muted" >{t("materialp")}</p>
                            <div className="pb-3">
                                <a href="/"><button className="bn632-hover bn21">{t("button2")}</button></a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="container py-5">
            <div className=" ">
                <div className="row  d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="hd-decp pt-4">
                            <h3 className="mb-4 text-primary" >{t("aqarh")}</h3>
                            <p className="mt-2 text-muted" >{t("aqarp")}</p>
                            <div className="pb-3">
                                <a href="/"><button className="bn632-hover bn21">{t("button2")}</button></a>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div >
                            <div className="">
                                <img src={img5} className="w-100 " alt="pic" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="container py-5">
            <div className=" ">
                <div className="row  d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div >
                            <div className="">
                                <img src={img6} className="w-100 " alt="pic" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="hd-decp pt-4">
                            <h3 className="mb-4 text-primary">{t("schoola2h")}</h3>
                            <p className="mt-2 text-muted" >{t("schoola2p")}</p>
                            <div className="pb-3">
                                <a href="/"><button className="bn632-hover bn21">{t("button2")}</button></a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="container py-5">
            <div className="">
                <div className="row  d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="hd-decp pt-4">
                            <h3 className="mb-4 text-primary" >{t("automatorh")}</h3>
                            <p className="mt-2 text-muted" >{t("automatorp")}</p>
                            <div className="pb-3">
                                <a href="/"><button className="bn632-hover bn21">{t("button2")}</button></a>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div >
                            <div className="">
                                <img src={img8} className="w-100 " alt="pic" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* end projects */}

            </Slider>
        </div>

    </>
}

export default Productslider;
