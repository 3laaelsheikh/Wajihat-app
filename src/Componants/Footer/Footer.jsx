import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {

const [t,i18n]=useTranslation();
    return <>
        <div className="p foot2 text-center text-white bg-dark p-3 w-100">
            <div className='container '>
                <p>{t("footerp")}</p>
            </div>
        </div>

    </>
}

export default Footer;
