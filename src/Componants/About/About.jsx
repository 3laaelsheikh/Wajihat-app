import React from 'react';
import { useTranslation } from 'react-i18next';


const About = () => {

    const [t , i18n]= useTranslation();


    return <>

        <section>
            <div className=" aboutus bg-primary d-flex justify-content-center align-items-center py-5">
                <h1 className='text-white fw-bold'>{t("navabout")}</h1>
            </div>
        </section>

        <section className='py-5 bg-body-secondary'>
            <div className="container">
                <div className="">

                    <div className="row container d-flex align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="d-flex align-items-center">
                                <div className="line bg-primary rounded-start-circle"></div>
                                <h4 className="text-primary px-3 fw-bold">{t("abouth4")}</h4>
                                <div className="line bg-primary rounded-end-circle"></div>
                            </div>

                            <p className="text-muted py-3 " >{t("aboutp1")}</p>
                            <p className="text-muted pt-3" >{t("aboutp2")}</p>
                            <div className='pb-3'>
                                <a href="/"><button className="bn632-hover bn21">{t("headerbutton")}</button></a>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 test">
                            <img src={require("../../images/Downloads074.png")} className='w-100' alt="pic" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className='about-vision'>
            <div className='container'>
                <div className="row py-5">
                    <div className="col-lg-6">
                        <div className="">
                            <h4 className="text-primary fw-bold">{t("aboutvision")}</h4>
                            <div className="line"></div>
                        </div>
                        <div className='d-flex align-items-baseline py-3'>
                            <i className="fa-regular fa-circle-check text-primary fs-5"></i>
                            <p className='px-3' >{t("aboutvisionp")}</p>

                        </div>
                        <div className="pt-3">
                            <h4 className="text-primary fw-bold">{t("aboutgoal")}</h4>
                            <div className="line"></div>
                        </div>
                        <div className='d-flex align-items-baseline py-3'>
                            <i className="fa-regular fa-circle-check text-primary fs-5"></i>
                            <p className='px-3' >{t("aboutgoalp")}</p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="">
                            <h4 className="text-primary fw-bold">{t("aboutmessage")}</h4>
                            <div className="line"></div>
                        </div>
                        <div className=' py-3'>
                            <div className='d-flex align-baseline'>
                            <i className="fa-regular fa-circle-check text-primary fs-5"></i>
                            <p className='px-3 ' >{t("aboutmessagep1")}</p>
                            </div>
                            <p className="p-3 mx-3">{t("aboutmessagep2")}</p>
                            <p className='px-3 mx-3' > {t("aboutmessagep3")}</p>

                        </div>

                    </div>
                </div>
            </div>
        </section>

    </>
}

export default About;
