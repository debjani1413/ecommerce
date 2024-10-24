import React from "react";
import banner from "../images/banner.png";
import Button from "./button";
import { ArrowRightOutlined } from "@ant-design/icons";

const Banner = () =>{
    return (
        <div className="banner">
            <div className="banner-desc">
                <div className="banner-content">
                <span>See</span> everything with <span>Clarity</span> 
                </div>
                <div className="banner-subcontent">
                Buying eyewear should leave you happy and good-looking, with money in your pocket. 
                Glasses, sunglasses, and contacts—we’ve got your eyes covered.
                </div>
                <Button text={"Shop Now"} icon={<ArrowRightOutlined />} />
            </div>
            <div className="banner-img">
                <img src={banner} alt="banner" />
            </div>
        </div>
    )
}

export default Banner;
