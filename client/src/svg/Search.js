import React from "react";

export const Search = ({ size, height, width, ...props }) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || width || 62}
        height={size || width || 62}
        fill="none"
        viewBox="0 0 62 62"
        {...props}
    >
        <circle cx={31} cy={31} r={30} fill="none" stroke="#000" strokeWidth={3} />
        <path
        fill="#000"
        d="M37.55 35.1a11.377 11.377 0 0 0-9.613-18.092 11.374 11.374 0 0 0-10.929 10.938A11.378 11.378 0 0 0 27.08 39.678a11.374 11.374 0 0 0 8.025-2.13h-.002c.052.07.108.136.171.2l6.738 6.739a1.75 1.75 0 1 0 2.476-2.475l-6.737-6.738a1.753 1.753 0 0 0-.202-.175v.002Zm.45-6.727a9.628 9.628 0 0 1-9.624 9.626 9.624 9.624 0 0 1-9.625-9.626 9.627 9.627 0 0 1 9.625-9.626 9.624 9.624 0 0 1 9.625 9.626Z"
    />
  </svg>
    )
}
