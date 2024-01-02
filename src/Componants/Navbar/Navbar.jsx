import React from 'react';
import { Link } from 'react-router-dom';
import egyFlag from "../../images/flag_10575842.png";
import engFlag from "../../images/united-kingdom.png";
import arImg from "../../images/wajihat.1_page-0003-removebg-preview.png";
import enImg from "../../images/wajihat.1_page-0002-removebg-preview.png";

import { useTranslation } from 'react-i18next';


const Navbar = () => {

    const [t, i18n] = useTranslation();
    let arr = [
        { title: (t("navhome")), to: "home" },
        { title: (t("navabout")), to: "about" },
        { title: (t("navservice")), to: "services" },
        { title: (t("navproject")), to: "projects" },
        { title: (t("navcontact")), to: "contacts" },
    ]
    let obj = {
        ar: arImg,
        en: enImg
    }

    return <>

        <div className="">
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid container">
                    <img src={obj[i18n.language]} style={{ width: "200px" }} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0  m-auto text-warning fw-bold ">
                            {arr.map((e) => <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={e.to}>{e.title}</Link>
                            </li>)}



                        </ul>

                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 px-2">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-globe fs-5"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" onClick={() => { i18n.changeLanguage("en") }} href="#"><img src={engFlag} alt="engFlag" /> English</a></li>
                                    <li><a class="dropdown-item" onClick={() => { i18n.changeLanguage("ar") }} href="#"><img src={egyFlag} alt="egyFlag" /> Arabic</a></li>

                                </ul>
                            </li>

                        </ul>
                    </div>


                </div>
            </nav>
        </div>


    </>
}

export default Navbar;
