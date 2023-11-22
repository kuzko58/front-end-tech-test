import React, { useId } from 'react';
import { twMerge } from 'tailwind-merge';

type TwitterIconProps = {
    className?: string;
    circleClass?: string;
};

const TwitterIcon = ({
    className = '',
    circleClass = '',
}: TwitterIconProps) => {
    const clipId = useId();
    const transitionClasses =
        'transform origin-center transition-all ease-in-out duration-300';

    return (
        <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            xmlns="http://www.w3.org/2000/svg"
            className={twMerge(`${transitionClasses} fill-none`, className)}
        >
            <g clipPath={`url(#${clipId})`}>
                <circle
                    cx="17"
                    cy="17"
                    r="16"
                    className={twMerge('stroke-white', circleClass)}
                    strokeWidth="2"
                />
                <path
                    d="M24.3337 12.4234C23.7943 12.664 23.2149 12.8265 22.6058 12.8999C23.2343 12.5215 23.7045 11.9257 23.9287 11.224C23.3382 11.577 22.6919 11.8254 22.018 11.9586C21.5648 11.4716 20.9645 11.1488 20.3103 11.0403C19.6562 10.9318 18.9847 11.0438 18.4002 11.3587C17.8157 11.6737 17.3509 12.174 17.0779 12.7821C16.8049 13.3902 16.7391 14.0719 16.8905 14.7215C15.694 14.6611 14.5236 14.3481 13.455 13.8029C12.3865 13.2577 11.4439 12.4924 10.6882 11.5568C10.4298 12.0054 10.2813 12.5255 10.2813 13.0794C10.281 13.578 10.403 14.069 10.6365 14.5088C10.8699 14.9486 11.2077 15.3236 11.6197 15.6005C11.1418 15.5852 10.6746 15.4552 10.2567 15.2215V15.2605C10.2567 15.9598 10.497 16.6377 10.937 17.1789C11.377 17.7202 11.9895 18.0916 12.6706 18.2302C12.2273 18.3509 11.7626 18.3687 11.3116 18.2822C11.5037 18.8839 11.878 19.4101 12.3821 19.7871C12.8862 20.1641 13.4948 20.373 14.1227 20.3846C13.0568 21.2268 11.7404 21.6836 10.3853 21.6816C10.1452 21.6816 9.90539 21.6675 9.66699 21.6393C11.0425 22.5294 12.6437 23.0018 14.279 23C19.8147 23 22.8409 18.3855 22.8409 14.3835C22.8409 14.2535 22.8377 14.1221 22.8319 13.9921C23.4205 13.5637 23.9286 13.0332 24.3324 12.4254L24.3337 12.4234Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id={clipId}>
                    <rect width="34" height="34" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default TwitterIcon;
