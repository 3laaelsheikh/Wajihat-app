import React from 'react';
import img2 from '../../images/product1.svg'
import img3 from "../../images/Downloads085.svg"
import img4 from '../../images/products2.svg'
import img5 from '../../images/products3.svg'
import img6 from '../../images/products4.svg'
import img7 from '../../images/products5.svg'
import img8 from '../../images/products6.svg'
import { useTranslation } from 'react-i18next';


const Projects = () => {

    const [t , i18n]= useTranslation();

    return <>
        {/* start header */}
        <header className=' home services-contact'>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className=" pt-4">
                            <h1 className="mb-4" ><span className="text-primary">{t("projectspan1")}</span> {t("projectspan2")} <span className="text-warning">{t("projectspan3")}</span></h1>
                            <p className="mt-2 text-muted" >{t("projectp")}</p>
                            <div className="pb-3">
                                <a href="/"><button className="bn632-hover bn21">{t("navcontact")}</button></a>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div >
                            <div className="">
                                <img src={img2} className="w-100 " alt="pic" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </header>

        <div className="containet pt-4">
            <div className="container">
                <div className="row d-flex justify-content-center flex-wrap py-5 gy-5 container">
                    <div className="col-lg-2 col-md-4 text-center">
                        <img src={require("../../images/Downloads087.png")} className='' style={{ width: "100px" }} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 text-center">
                        <img src={require("../../images/Downloads089.png")} className='' style={{ width: "50px" }} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 text-center">
                        <img src={require("../../images/Downloads091.png")} className='' style={{ width: "50px" }} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 text-center">
                        <img src={require("../../images/Downloads093.png")} className='' style={{ width: "100px" }} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 text-center">
                        <img src={img3} className='' style={{ width: "50px" }} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 text-center">
                        <img src={require("../../images/Downloads095.png")} className='' style={{ width: "50px" }} alt="" />
                    </div>

                </div>
            </div>
        </div>

        {/* end header */}
        {/* start projects */}

        <div className="container py-5">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div >
                            <div className="">
                                <img src={require("../../images/products1.png")} className="w-100 " alt="pic" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className=" pt-4">
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

        <div className="about-vision ">
            <div className="container">
                <div className="row py-5 d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className=" pt-4">
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
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div >
                            <div className="">
                                <img src={img4} className="w-100 " alt="pic" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className=" pt-4">
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

        <div className="about-vision ">
            <div className="container">
                <div className="row py-5 d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className=" pt-4">
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
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div >
                            <div className="">
                                <img src={img6} className="w-100 " alt="pic" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className=" pt-4">
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

        <div className="about-vision ">
            <div className="container">
                <div className="row py-5 d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className=" pt-4">
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

    </>
}

export default Projects;
