import React from "react";

export const ArrowUp = ({ size, height, width, ...props }) => {
    return (
        <svg
            fill="#461E5C"
            height={size || height || 22}
            viewBox="0 0 22 22"
            width={size || width || 22}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M4.82649 0.5V2.6H18.0624L0.621262 20.0195L2.1036 21.5L19.5448 4.0805V17.3H21.6474V0.5H4.82649Z" />
        </svg>
    )
}