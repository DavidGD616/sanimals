import React from "react";

export const ArrowDown = ({ size, height, width, ...props }) => {
    return (
        <svg
            fill="black"
            height={size || height || 7}
            viewBox="0 0 11 7"
            width={size || width || 11}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
        <path id="Vector 2" 
        d="M0.648255 1.71676C0.455243 1.5413 0.579375 1.22021 0.840224 1.22021H9.82792C10.0888 1.22021 10.2129 1.5413 10.0199 1.71676L5.52604 5.80208C5.41719 5.90103 5.25095 5.90103 5.1421 5.80208L0.648255 1.71676Z" 
        fill="black" 
        stroke="black" 
        strokeWidth="0.951276"/>
        </svg>
    )
}