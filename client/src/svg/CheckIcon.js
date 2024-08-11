import React from "react";

export const CheckIcon = ({ mainColor }) => {
    const strokeColor = mainColor.colorCode === '#ffffff' ? 'black' : 'white';

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={strokeColor}
        className="w-5 h-5 text-white absolute inset-0 m-auto z-0 pointer-events-none hidden peer-checked:block duration-150"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    )
}