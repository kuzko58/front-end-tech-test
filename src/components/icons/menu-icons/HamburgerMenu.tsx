import React from 'react';
import { twMerge } from 'tailwind-merge';
import menuIconStyles from './menu-icon-styles.module.css';

type HamburgerMenuProps = {
    svgClass?: string;
    barColor?: string;
    barHeight?: number;
    isOpen?: boolean;
};

const HamburgerMenu = ({
    svgClass = '',
    barColor = '#000',
    barHeight = 4,
    isOpen,
}: HamburgerMenuProps) => {
    const barClasses =
        'transform origin-center transition-all ease-in-out duration-300';

    return (
        <svg
            id="hamburger"
            className={twMerge(
                `${menuIconStyles['hamburger__svg']} w-[38px] h-[38px] bg-white rounded-md`,
                svgClass,
            )}
            viewBox="0 0 60 40"
        >
            <g stroke={barColor} strokeWidth={`${barHeight}`}>
                <path
                    id="top-line"
                    d="M10,10 L50,10 Z"
                    className={`${barClasses} ${
                        isOpen ? 'rotate-[-45deg] scale-90 translate-y-2.5' : ''
                    }`}
                />
                <path
                    id="middle-line"
                    d="M10,20 L50,20 Z"
                    className={`${barClasses} ${isOpen ? 'opacity-0 w-0' : ''}`}
                />
                <path
                    id="bottom-line"
                    d="M10,30 L50,30 Z"
                    className={`${barClasses} ${
                        isOpen
                            ? 'rotate-[45deg] scale-90 translate-y-[-10px]'
                            : ''
                    }`}
                />
            </g>
        </svg>
    );
};

export default HamburgerMenu;
