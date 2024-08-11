import React from "react";

export const Hamburger = ({ size, height, width, ...props }) => {
    return (
        <svg
        width={size || width || 40} 
        height={size || height || 35} 
        viewBox="0 0 40 35" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        >
            <path stroke="#000" strokeWidth={5} d="M0 2.5h40M0 17.5h40M0 32.5h40" />
    </svg>
    )
}