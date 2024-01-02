import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

const Homeslick = () => {

  const [t , i18n]= useTranslation();

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return <>

    <div>
      <p className='text-muted fw-bold' style={{fontSize:"16px"}}>{t("homesliderp")}</p>
      <Slider {...settings}>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads001.jpg")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads002.jpg")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads003.jpg")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads004.jpg")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads005.png")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads006.jpg")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads007.jpg")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads008.jpg")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads009.png")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads010.png")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads011.png")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads012.jpg")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads013.png")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads014.png")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads015.png")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads016.png")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads017.png")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads018.jpg")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads019.jpg")} alt="" />
        </div>
        <div>
          <img className="p-2 w-100" style={{ width: "50px", height: "70px" }} src={require("../../images/Downloads020.png")} alt="" />
        </div>

      </Slider>
    </div>

  </>
}

export default Homeslick;
