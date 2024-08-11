import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function BannerContent () {
    return (
        <div className="banner__content">
            <h1 className="banner__content-h1">Feel Yourself Like an Animal</h1>
            <p className="banner__content-p">Make an animal part of your daily look!</p>
            <Button
                as={Link}
                to={`/products`}
                radius="full"
                className="bg-[#56D1DC] w-full max-w-52 h-14 text-white font-extrabold tracking-wide leading-5 text-lg 
                drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                >
                SHOP NOW
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 0.252441V2.00244H14.7663L0.25 16.5187L1.48375 17.7524L16 3.23619V14.2524H17.75V0.252441H3.75Z" fill="white"/>
</svg>

            </Button>
        </div>
    )
}

export { BannerContent };
