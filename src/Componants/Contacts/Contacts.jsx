import React from 'react';
import image1 from '../../images/Downloads3.webp'
import { useTranslation } from 'react-i18next';



const Contacts = () => {

    const [t , i18n]= useTranslation();

    return <>

        <section className='contact-content'>
        <section>
            <div className=" aboutus bg-primary d-flex justify-content-center align-items-center py-5">
                <h1 className='text-white fw-bold'>{t("navcontact")}</h1>
            </div>
        </section>
            <div className="container gy-5 p-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <img className='w-100' src={image1} alt="image1" />
                    </div>

                    <div className="col-md-6 col-sm-12 ">
                        <div className="mb-3">
                            <label for="name" className="form-label">{t("Name")}</label>
                            <input type="text" className="form-control" id="name" placeholder={t("Nameplaceholder")}></input>
                        </div>

                        <div className="mb-3">
                            <label for="email" className="form-label">{t("email")}</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com"></input>
                        </div>
                        <div className="mb-3">
                            <label for="age" className="form-label">{t("Age")}</label>
                            <input type="number" className="form-control" id="age" placeholder={t("Ageplaceholder")}></input>
                        </div>
                        <div className="mb-3">
                            <label for="phone" className="form-label">{t("phone")}</label>
                            <input type="tel" className="form-control" id="phone" placeholder={t("phoneplaceholder")}></input>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">{t("message")}</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary w-100">{t("button3")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default Contacts;
