import React from "react";

export const Reducer = ({ size, height, width, ...props }) => {
    return (
        <svg
            width={size || width || 124} 
            height={size || height || 24}
            viewBox="0 0 124 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M112 0H12C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24H112C118.6 24 124 18.6 124 12C124 5.4 118.6 0 112 0Z" fill="black"/>
        </svg>
    )
}